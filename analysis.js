if (Standards) {
	if (!(Standards instanceof Object)) {
		var Standards = {};
		console.warn("Standards is not an object");
	}
} else {
	var Standards = {};
}
if (Standards.analysis) {
	if (!(Standards.analysis instanceof Object)) {
		Standards.analysis = {};
		console.warn("Standards.analysis is not an object");
	}
} else {
	Standards.analysis = {};
}
if (Standards.analysis.options) {
	if (!(Standards.analysis.options instanceof Object)) {
		Standards.analysis.options = {};
		console.warn("Standards.analysis.options is not an object");
	}
} else {
	Standards.analysis.options = {};
}

Standards.analysis.getType = function (item) {
	/**
	finds the type of an item since it's unnecessarily complicated to be sure normally
	extra arguments can be added to check against special types first
		each argument must be a string representation of the constructor
		checks are done with instanceof
	non-native functions = none
	*/
	var extraTypes = Array.prototype.slice.call(arguments, 1);
	var reverseIndex = extraTypes.length;
	if (reverseIndex > 0) {
		while (reverseIndex--) {
			let type = extraTypes[reverseIndex];
			if (type && type.constructor === String && type.search(/[^\w.()]/) === -1) {
				try {
					if (item instanceof eval(type)) {
						return type;
					}
				} catch (error) {
					console.warn('There was a problem evaluating the type of "' + type + '".');
				}
			}
		}
	}
	if (item === undefined) {  // if it's undefined
		/// undeclared variables won't make it to this function
		/// typeof item === "undefined" checks whether a variable exists
		return "undefined";
	} else if (item === null) {  // if it's null
		return "null";
	} else if (item.constructor === Number && isNaN(item)) {  // if it's not a number
		return "NaN";
	} else if (item.constructor.toString().search(/function HTML\w*Element\(\) \{ \[native code\] \}/) > -1) {  // if it's an HTML element
		return "HTMLElement";
	} else if (item instanceof Error) {
		return "Error";
	} else if (Object.prototype.toString.call(item) === "[object Object]") {
		// Use Object.getPrototypeOf to further check if it's a plain object
		if (Object.getPrototypeOf(item) === Object.prototype || Object.getPrototypeOf(item) === null) {
			return "Object";  // plain object like a Python dictionary
		} else {
			return "Instance";  // class instance or object with a custom prototype
		}
	} else {
		let match = item.constructor.toString().match(/^function (\w+)\(\)/);
		if (match === null) {
			console.error(TypeError("The item has an unknown type."));
			console.log(item.constructor.toString());
			console.log(item.constructor);
			return undefined;
		} else {
			return match[1];
		}
	}
};

Standards.analysis.forEach = function (list, doStuff, shouldCopy) {
	/**
	does stuff for every item of an iterable list (or object)
	arguments:
		list = the iterable to go through
		doStuff = a function to be run for every item in the list
			arguments put in the function:
				if an iterable list (Array, HTMLCollection, String, ...): item, index, list
				if an object/dictionary: value, key, object, itemIndex
				if a number: number-index, index, number
			can return "break" to stop execution of the function
		shouldCopy = a copy should be worked with
			doesn't alter the original list
	non-native functions = getType
	*/
	if (Standards.analysis.getType(doStuff) != "Function") {
		throw "The second arument provided in Standards.analysis.forEach (" + doStuff + ") isn't a function.";
	}
	let index = 0;
	let returnValue;
	if (Standards.analysis.getType(list) == "Object") {
		let associativeList,
			keys = Object.keys(list);
		shouldCopy = shouldCopy === undefined ? false : shouldCopy;
		if (shouldCopy) {
			associativeList = JSON.parse(JSON.stringify(list));
		} else {
			associativeList = list;
		}
		while (index < keys.length) {
			returnValue = doStuff(associativeList[keys[index]], keys[index], associativeList, index);
			if (returnValue == "break") {
				break;
			} else {
				index++;
			}
		}
		/// Using Object.keys() and a while loop is about 100 times faster than a for...in... loop.
		/// That's not to mention the fact that this.propertyIsEnumerable() would also need to be used which is also slow.
		/// This is still about 10 times slower than looping through things with number indicies, though.
		/// (These time comparisons are based on usage outside of this function;
		/// doing things by referencing a function makes things about 10 times longer.)
	} else if (Standards.analysis.getType(list[Symbol.iterator]) == "Function" || list instanceof HTMLCollection) {
		/// Microsoft Edge doesn't think HTMLCollections have Symbol.iterator
		//// check this in Microsoft Edge again
		let item;
		if (shouldCopy) {
			let items = [];
			for (item of list) {
				items.push(item);
			}
			for (item of items) {
				returnValue = doStuff(item, index, items);
				if (returnValue == "break") {
					break;
				}
				index++;
			}
		} else {
			for (item of list) {
				returnValue = doStuff(item, index, list);
				if (returnValue == "break") {
					break;
				}
				index++;
			}
		}
	} else if (Standards.analysis.getType(list) == "Number") {
		while (index < list) {
			returnValue = doStuff(list - index, index, list);
			if (returnValue == "break") {
				break;
			} else {
				index++;
			}
		}
	} else {
		throw "The item provided (" + list + ") isn't iterable.";
	}
	//// add a function type option
};

Standards.analysis.compare = function (iterable1, iterable2) {
	/**
	determines how alike two iterable items are
	returns the number of changes needed to make the items the same (the Levenshtein distance)
	higher number = less alike
	non-native functions = getType
	*/
	if (Standards.analysis.getType(iterable1[Symbol.iterator]) == "Function" && Standards.analysis.getType(iterable2[Symbol.iterator]) == "Function") {
		// establishes a 2 dimensional matrix
		let matrix = [[0]];
		for (let index = 1; index <= iterable1.length; index++) {
			matrix.push([index]);
		}
		for (let index = 1; index <= iterable2.length; index++) {
			matrix[0][index] = index;
		}
		// goes through (and fills) every item in the matrix
		let sc;  // substitution cost
		for (let y = 1; y <= iterable2.length; y++) {
			for (let x = 1; x <= iterable1.length; x++) {
				if (iterable1[x - 1] == iterable2[y - 1]) {  // if the iterables are the same at the current indices
					sc = 0;
				} else {
					sc = 1;
				}
				// fills the current item with the number of changes needed in the most efficient method of modification
				matrix[x][y] = Math.min(
					matrix[x - 1][y] + 1,      // if a deletion is used
					matrix[x][y - 1] + 1,      // if an insertion is used
					matrix[x - 1][y - 1] + sc  // if a substitution is used
				);
			}
		}
		// returns the last item of the matrix
		return matrix[iterable1.length][iterable2.length];
	} else {
		console.error("At least one of the items to be compared isn't iterable.");
	}
};

Standards.analysis.findMean = function (list) {
	return list.reduce((acc, val) => acc + val, 0) / list.length;
};
Standards.analysis.findAverage = Standards.analysis.findMean;
Standards.analysis.findAvg = Standards.analysis.findMean;

Standards.analysis.findStandardDeviation = function (list) {
	let mean = list.reduce((acc, val) => acc + val, 0) / list.length;
	return Math.sqrt(list.map(x => (x - mean) ** 2).reduce((a, b) => a + b) / (list.length - 1));
};
Standards.analysis.findStdDev = Standards.analysis.findStandardDeviation;

Standards.analysis.makeBellCurveFn = function (m, sd) {
	/**
	Creates a bell curve function based on a list or a mean and a standard deviation
	arguments:
		m = required; a list of values or a mean
		sd = conditionally required; a standard deviation
			required when the first argument is a mean
	*/
	if (Standards.general.getType(m) == "Array") {
		if (m.length <= 1) {
			throw new Error("The provided array must have at least two items.");
		}
		if (Standards.general.getType(m[0]) != "Number") {
			throw new TypeError("The provided array doesn't contain numbers.");
		}
		let mean = m.reduce((acc, val) => acc + val, 0) / m.length;
		let standardDeviation = Math.sqrt(m.map(x => (x - mean) ** 2).reduce((a, b) => a + b) / (m.length - 1));
		return function (x) {
			return 1 / (standardDeviation * (2 * Math.PI) ** .5) * Math.E ** (-.5 * ((x - mean) / standardDeviation) ** 2)
		};
	} else if (Standards.general.getType(m) == "Number") {
		if (Standardards.general.getType(sd) == "Number") {
			return function (x) {
				return 1 / (sd * (2 * Math.PI) ** .5) * Math.E ** (-.5 * ((x - m) / sd) ** 2)
			};
		} else {
			throw new TypeError("A proper standard deviation wasn't provided.");
		}
	} else {
		throw new TypeError("The first argument wasn't an array or a number.");
	}
};

Standards.analysis.pointsToLineFn = function (point1, point2) {
	/**
	creates a linear function from two points
	point1 and point2 are two-item arrays
	*/
	let slope = 0;
	let yIntercept = point1[1];
	if (point1[1] != point2[1]) {
		slope = (point2[1] - point1[1]) / (point2[0] - point1[0]);
		yIntercept = point1[1] - slope * point1[0];
		return function (x) { return slope * x + yIntercept };
	} else {
		console.error("A line can't be drawn between two of the same points.");
		return new Error("A line can't be drawn between two of the same points.");
	}
};

Standards.analysis.factorial = function (number) {
	let n = Number(number);
	if (n != Math.round(n)) {
		throw "The factorial can only be found for integers.";
	}
	let i = 0;
	let precalculations = [
		1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000,
		355687428096000, 6402373705728000, 121645100408832000, 2432902008176640000, 51090942171709440000, 1124000727777607680000,
		25852016738884976640000, 620448401733239439360000, 15511210043330985984000000, 403291461126605635584000000, 10888869450418352160768000000,
		304888344611713860501504000000, 8841761993739701954543616000000, 265252859812191058636308480000000, 8222838654177922817725562880000000,
		263130836933693530167218012160000000, 8683317618811886495518194401280000000, 295232799039604140847618609643520000000, 10333147966386144929666651337523200000000,
		371993326789901217467999448150835200000000, 13763753091226345046315979581580902400000000, 523022617466601111760007224100074291200000000,
		20397882081197443358640281739902897356800000000, 815915283247897734345611269596115894272000000000, 33452526613163807108170062053440751665152000000000,
		1405006117752879898543142606244511569936384000000000, 60415263063373835637355132068513997507264512000000000, 2658271574788448768043625811014615890319638528000000000,
		119622220865480194561963161495657715064383733760000000000, 5502622159812088949850305428800254892961651752960000000000, 258623241511168180642964355153611979969197632389120000000000,
		12413915592536072670862289047373375038521486354677760000000000, 608281864034267560872252163321295376887552831379210240000000000,
		30414093201713378043612608166064768844377641568960512000000000000, 1551118753287382280224243016469303211063259720016986112000000000000,
		80658175170943878571660636856403766975289505440883277824000000000000, 4274883284060025564298013753389399649690343788366813724672000000000000,
		230843697339241380472092742683027581083278564571807941132288000000000000, 12696403353658275925965100847566516959580321051449436762275840000000000000,
		710998587804863451854045647463724949736497978881168458687447040000000000000, 40526919504877216755680601905432322134980384796226602145184481280000000000000,
		2350561331282878571829474910515074683828862318181142924420699914240000000000000, 138683118545689835737939019720389406345902876772687432540821294940160000000000000,
		8320987112741390144276341183223364380754172606361245952449277696409600000000000000, 507580213877224798800856812176625227226004528988036003099405939480985600000000000000,
		31469973260387937525653122354950764088012280797258232192163168247821107200000000000000, 1982608315404440064116146708361898137544773690227268628106279599612729753600000000000000,
		126886932185884164103433389335161480802865516174545192198801894375214704230400000000000000, 8247650592082470666723170306785496252186258551345437492922123134388955774976000000000000000,
		544344939077443064003729240247842752644293064388798874532860126869671081148416000000000000000, 36471110918188685288249859096605464427167635314049524593701628500267962436943872000000000000000,
		2480035542436830599600990418569171581047399201355367672371710738018221445712183296000000000000000, 171122452428141311372468338881272839092270544893520369393648040923257279754140647424000000000000000,
		11978571669969891796072783721689098736458938142546425857555362864628009582789845319680000000000000000, 850478588567862317521167644239926010288584608120796235886430763388588680378079017697280000000000000000,
		61234458376886086861524070385274672740778091784697328983823014963978384987221689274204160000000000000000, 4470115461512684340891257138125051110076800700282905015819080092370422104067183317016903680000000000000000,
		330788544151938641225953028221253782145683251820934971170611926835411235700971565459250872320000000000000000, 24809140811395398091946477116594033660926243886570122837795894512655842677572867409443815424000000000000000000,
		1885494701666050254987932260861146558230394535379329335672487982961844043495537923117729972224000000000000000000, 145183092028285869634070784086308284983740379224208358846781574688061991349156420080065207861248000000000000000000,
		11324281178206297831457521158732046228731749579488251990048962825668835325234200766245086213177344000000000000000000, 894618213078297528685144171539831652069808216779571907213868063227837990693501860533361810841010176000000000000000000,
		71569457046263802294811533723186532165584657342365752577109445058227039255480148842668944867280814080000000000000000000, 5797126020747367985879734231578109105412357244731625958745865049716390179693892056256184534249745940480000000000000000000,
		475364333701284174842138206989404946643813294067993328617160934076743994734899148613007131808479167119360000000000000000000, 39455239697206586511897471180120610571436503407643446275224357528369751562996629334879591940103770870906880000000000000000000,
		3314240134565353266999387579130131288000666286242049487118846032383059131291716864129885722968716753156177920000000000000000000, 281710411438055027694947944226061159480056634330574206405101912752560026159795933451040286452340924018275123200000000000000000000,
		24227095383672732381765523203441259715284870552429381750838764496720162249742450276789464634901319465571660595200000000000000000000, 2107757298379527717213600518699389595229783738061356212322972511214654115727593174080683423236414793504734471782400000000000000000000,
		185482642257398439114796845645546284380220968949399346684421580986889562184028199319100141244804501828416633516851200000000000000000000,
		16507955160908461081216919262453619309839666236496541854913520707833171034378509739399912570787600662729080382999756800000000000000000000,
		1485715964481761497309522733620825737885569961284688766942216863704985393094065876545992131370884059645617234469978112000000000000000000000,
		135200152767840296255166568759495142147586866476906677791741734597153670771559994765685283954750449427751168336768008192000000000000000000000,
		12438414054641307255475324325873553077577991715875414356840239582938137710983519518443046123837041347353107486982656753664000000000000000000000
	];
	if (n == 0 || n == 1) {
		return 1;
	} else if (n > 0 && precalculations.length >= n) {
		return precalculations[n - 1];
	} else {
		let result = 1;
		while (i++ < n) {
			result *= i;
		}
		return result;
	}
};

Standards.analysis.definiteIntegral = function (fn, start, end, divisions) {
	/**
	approximates the definite integral using trapezoids
	arguments:
		fn = required; the function to find the integral of
		start = required; the start of the definite integral
		end = required; the end of the definite integral
		divisions = optional; how many trapezoids the function should be divided up into (default 1000)
	*/
	if (Standards.analysis.getType(fn) != "Function") {
		throw new TypeError("A function is required for finding an integral.");
	} else if (Standards.analysis.getType(start) != "Number") {
		throw new TypeError("The start of a definite integral must be a number.");
	} else if (Standards.analysis.getType(end) != "Number") {
		throw new TypeError("The end of a definite integral must be a number.");
	} else if (!divisions) {
		divisions = 1000;  // sets the default number of divisions if it isn't provided or it's 0
	} else if (Standards.analysis.getType(divisions) != "Number") {
		throw new TypeError("The number of integral divisions must be a number.");
	}
	let dx = (end - start) / divisions;
	let baseSum = (fn(start) + fn(end)) / 2;
	for (let i = 1; i < divisions; i++) {
		baseSum += fn(start + i * dx);
	}
	return baseSum * dx;
};

Standards.analysis.approxBellCurveCDF = function (m, sd) {
	/**
	Tries to approximate the function of the CDF of a bell curve
	Generally accurate within .01
	The correction factor changes which part of the graph is most accurate (center or edges)
	Arguments:
		m = required; the average of the bell curve or an array of data
		sd = conditionally required; the standard deviation of the bell curve
			required when the first argument is a mean
	*/
	let correctionFactor = .83;
	if (Standards.general.getType(m) == "Array") {
		if (m.length <= 1) {
			throw new Error("The provided array must have at least two items.");
		}
		if (Standards.general.getType(m[0]) != "Number") {
			throw new TypeError("The provided array doesn't contain numbers.");
		}
		let mean = m.reduce((acc, val) => acc + val, 0) / m.length;
		let stdDev = Math.sqrt(m.map(x => (x - mean) ** 2).reduce((a, b) => a + b) / (m.length - 1));
		return function (x) { return .5 * Math.tanh(correctionFactor / stdDev * (x - mean)) + .5; };
	} else if (Standards.general.getType(m) == "Number") {
		if (Standardards.general.getType(sd) == "Number") {
			return function (x) { return .5 * Math.tanh(correctionFactor / sd * (x - m)) + .5; };
		} else {
			throw new TypeError("A proper standard deviation wasn't provided.");
		}
	} else {
		throw new TypeError("The first argument wasn't an array or a number.");
	}
	
};
Standards.analysis.approximateBellCurveCDF = Standards.analysis.approxBellCurveCDF;

var values = [];
Standards.analysis.bellCurveCDF = function (m, sd) {  ////
	/**
	Runs a Taylor series approximation of a bell curve cumulative distribution function
	Arguments:
		m = required; the average of the bell curve or an array of data
		sd = conditionally required; the standard deviation of the bell curve
			required when the first argument is a mean
	*/
	let precision = 50;
	if (Standards.general.getType(m) == "Array") {
		if (m.length <= 1) {
			throw new Error("The provided array must have at least two items.");
		}
		if (Standards.general.getType(m[0]) != "Number") {
			throw new TypeError("The provided array doesn't contain numbers.");
		}
		let mean = m.reduce((acc, val) => acc + val, 0) / m.length;
		let stdDev = Math.sqrt(m.map(x => (x - mean) ** 2).reduce((a, b) => a + b) / (m.length - 1));
		return function (x) {
			let accumulator = 0;
			for (let k = 0; k < precision; k++) {
				accumulator += (-1) ** k * ((x - mean) / stdDev) ** (2 * k + 1) / (2 ** k * Standards.analysis.factorial(k) * (2 * k + 1));
			}
			return .5 + 1 / (2 * Math.PI) ** .5 * accumulator;
		};
	} else if (Standards.general.getType(m) == "Number") {
		if (Standards.general.getType(sd) == "Number") {
			return function (x) {
				let z = (x - m) / (sd * Math.sqrt(2));
				let accumulator = 0;
				for (let k = 0; k < precision; k++) {
					accumulator += ((-1) ** k * z ** (2 * k + 1)) / (Standards.analysis.factorial(k) * (2 * k + 1));
				}
				let erf = (2 / Math.sqrt(Math.PI)) * accumulator;
				values.push(0.5 * (1 + erf));
				return 0.5 * (1 + erf);
			};
		} else {
			throw new TypeError("A proper standard deviation wasn't provided.");
		}
	} else {
		throw new TypeError("The first argument wasn't an array or a number.");
	}

};

Standards.analysis.derivative = function (fn, x, dx) {
	/**
	Finds the approximate derivative of a point in a function
	Arguments:
		fn = required; the function to find the derivative of
		x = required; the point where the derivative is desired
		dx = optional; the small difference on either side of the point (defaults to .0000001)
	*/
	if (!dx) {
		dx = .0000001;
	}
	return (fn(x + dx) - fn(x - dx)) / (2 * dx);
};

Standards.analysis.findMaxAbsDiff = function (array1, array2) {
	if (array1.length != array2.length) {
		throw "The provided arrays must be the same length.";
	}
	let maxDiff = 0;
	for (let i = 0; i < array1.length; i++) {
		let currentDiff = Math.abs(array1[0] - array2[1]);
		if (currentDiff > maxDiff) maxDiff = currentDiff;
	}
	return maxDiff;
};

Standards.analysis.arraysToPValue = function () {  ////
	if (arguments.length == 2) {
		let sample1 = arguments[0];
		let sample2 = arguments[1];
		let s1mean = Standards.analysis.findMean(sample1);
		let s2mean = Standards.analysis.findMean(sample2);
		let s1sd = Standards.analysis.findStdDev(sample1);
		let s2sd = Standards.analysis.findStdDev(sample2);
		let cdf1 = Standards.analysis.bellCurveCDF(s1mean, s1sd);
		let cdf2 = Standards.analysis.bellCurveCDF(s2mean, s2sd);
		let c1samples = [];
		let c2samples = [];
		for (let i = Math.round(s1mean - s1sd * 4); i <= Math.round(s2mean + s2sd * 4); i++) {
			c1samples.push(cdf1(i));
			c2samples.push(cdf2(i));
		}
		let z = Standards.analysis.findMaxAbsDiff(c1samples, c2samples) * Math.sqrt((c1samples.length * c2samples.length) / (c1samples.length + c2samples.length));
		let iterations = 100;
		let q = 0;
		for (let k = 1; k <= iterations; k++) {
			q += Math.pow(-1, k - 1) * Math.exp(-2 * k ** 2 * z ** 2);
		}
		return 1 - 2 * q;
	} else {
		throw "Only 2 arrays are supported at this time.";
	}
};
console.log(Standards.analysis.arraysToPValue([2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 3],
	[1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 1, 1, 3, 1, 2, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 2, 1, 1, 1, 1, 2, 3, 3, 3, 2, 3]
));
console.log(JSON.stringify(values));

Standards.analysis.findChiSquare = function () {
	/**
	Finds the chi square value for an indefinite number of data sets
	Accepts either one argument of an array of arrays or multiple arguments of one-dimensional arrays
	*/
	if (Standards.analysis.getType(arguments[0]) == "Array") {
		let dataSets = [];
		if (Standards.analysis.getType(arguments[0][0]) == "Array") {
			dataSets = arguments[0];
		} else {
			dataSets = arguments;
		}
		let index = 0;
		let expected = 0;
		for (index; index < dataSets.length; index++) {
			expected += dataSets[index];
		}
		expected /= dataSets.length;
		let result = 0;
		for (index = 0; index < dataSets.length; index++) {
			result += (dataSets[index] - expected) ** 2 / expected;
		}
		return result;
	} else {
		console.error("Arrays of data weren't provided.");
		return 0;
	}
};

Standards.analysis.nCr = function (n, r) {
	if (r > n) return 0; // Not defined for r > n
	if (r === 0 || r === n) return 1; // Base cases
	r = Math.min(r, n - r); // Use symmetry property C(n, r) = C(n, n-r)
	let result = 1;
	for (let i = 1; i <= r; i++) {
		result *= n-- / i;
	}
	return result;
	/// return Standards.analysis.factorial(n) / (Standards.analysis.factorial(r) * Standards.analysis.factorial(n - r));
};
Standards.analysis.combinatorial = Standards.analysis.nCr;

Standards.analysis.nPr = function (n, r) {
	if (r > n) return 0; // Not defined for r > n
	if (r === 0) return 1; // Base case: P(n, 0) = 1
	let result = 1;
	for (let i = 0; i < r; i++) {
		result *= n--;
	}
	return result;
	/// return Standards.analysis.factorial(n) / Standards.analysis.factorial(n - r);
};
Standards.analysis.permutations = Standards.analysis.nPr;

Standards.analysis.maybeFindPValue = function () {  ////
	if (arguments.length == 2) {
		let expected = .5;
		return Standards.analysis.nCr(arguments[0] + arguments[1], arguments[0]) * expected ** arguments[0] * (1 - expected) ** arguments[1];
	}
};

Standards.analysis.calculateTableAverages = function (t, options) {
	/**
	takes a table of data and appends averages to it
	arguments:
		t = required; a table element or a table ID
		options = optional; various options contained in an object
			setLength: how many columns to move over until corresponding data is found
				Example    | category1 | category2 | category3 |
						   | A | B | C | A | B | C | A | B | C |
				default = 1
	*/

	// get table element
	let table;
	if (Standards.analysis.getType(t) == "HTMLElement") {
		table = t;
	} else {
		table = document.getElementById(t);
	}

	// sets the options
	if (!options) {
		options = {};
	}
	options.setLength = options.setLength || 1;  // sets how many columns to move over until corresponding data is found
	let setAverages = [];

	for (let setIndex = 0; setIndex < options.setLength; setIndex++) {
		// initialize arrays to store row and column totals
		const rowTotals = [];
		const colTotals = [];
		let combinedTotal = 0;
		let totalItemCount = 0;

		// loop through rows
		for (let i = 0; i < table.rows.length; i++) {
			let colIndex = 0;
			rowTotals.push({ total: 0, length: 0 });

			// loop through cells in row
			let values = table.rows[i].getElementsByTagName("td");
			let rowLength = values.length;
			for (let j = setIndex; j < rowLength; j += options.setLength) {
				const cellValue = parseFloat(values[j].textContent);
				if (!isNaN(cellValue)) { // check if cell value is a number
					combinedTotal += cellValue;
					totalItemCount++;

					rowTotals[rowTotals.length - 1].total += cellValue;
					rowTotals[rowTotals.length - 1].length++;

					// update column total
					if (colTotals[colIndex]) {
						colTotals[colIndex].total += cellValue;
						colTotals[colIndex].length++;
					} else {
						colTotals[colIndex] = { total: cellValue, length: 1 };
					}
				}
				colIndex++;
			}
		}

		// calculate averages
		colTotals.filter(Boolean);  // filters out the empty elements
		let averages = {};
		averages.rows = rowTotals.map(obj => obj.total / obj.length);
		averages.cols = colTotals.map(obj => obj.total / obj.length);
		//// averages.overall = colTotals.reduce((total, nextItem) => total + nextItem.total, 0) / totalItemCount;
		averages.overall = combinedTotal / totalItemCount;
		setAverages.push(averages);
	}

	let decimalPlaces = 1;
	if (tableId == "customTable") {
		decimalPlaces = 2;
	}

	// insert averages into table
	setAverages.forEach(function (_, setIndex) {  // for each set's data within the row
		for (let rowIndex = 0; rowIndex < setAverages[0].rows.length; rowIndex++) {  // for each row
			// insert row average
			const cell = table.rows[rowIndex].insertCell();
			cell.style.borderLeftWidth = "thick";
			if (!isNaN(setAverages[setIndex].rows[rowIndex])) { // check if average is a number
				cell.textContent = setAverages[setIndex].rows[rowIndex].toFixed(decimalPlaces);
			}
		}
	});
	// insert column average
	let finalRow = table.insertRow(-1);
	if (tableId != "customTable") {
		let colAvg = finalRow.insertCell();
		colAvg.style.borderTopWidth = "thick";
	}
	for (let colIndex = 0; colIndex < setAverages[0].cols.length; colIndex++) {
		setAverages.forEach(function (_, setIndex) {  // for each set's data
			const cell = finalRow.insertCell();
			cell.style.borderTopWidth = "thick";
			if (!isNaN(setAverages[setIndex].cols[colIndex])) { // check if average is a number
				cell.textContent = setAverages[setIndex].cols[colIndex].toFixed(decimalPlaces);
			}
		});
	}

	// insert overall average
	setAverages.forEach(function (_, setIndex) {  // for each set's data
		const overallCell = finalRow.insertCell();
		overallCell.textContent = setAverages[setIndex].overall.toFixed(decimalPlaces);
		overallCell.style.borderTopWidth = "thick";
		overallCell.style.borderLeftWidth = "thick";
	});
};



Standards.analysis.Graph = class {

};



window.addEventListener("load", function () {
	
});