var pizzaPresence = [
	{
		date: "12/9/23",
		people: ["vuhlEeseeuh", "rOzmeree", "rAelee", "nikOl", "beth", "maek", "kAyluhb p"],
		note: ""
	},
	{
		date: "12/12/23",
		people: ["bAylee", "rOzmeree", "vuhlEeseeuh", "kEnee"],
		note: "beginning of shift"
	},
	{
		date: "12/12/23",
		people: ["rOzmeree", "kEnee", "rAelee", "jOrdin", "maek"],
		note: "end of shift"
	},
	{
		date: "2/6/24",
		people: ["kAshmeer", "vuhlEeseeuh", "kEnee"],
		note: "beginning of shift from schedule"
	},
	{
		date: "2/6/24",
		people: ["kAshmeer", "hAylee", "kEnee", "mAysin", "kAhnrr"],
		note: "end of shift from schedule"
	},
	{
		date: "2/7/24",
		people: ["beth", "hAylee", "kAydin", "jeen", "kAyluhb p"],
		note: "from schedule"
	},
	{
		date: "2/8/24",
		people: ["kAshmeer", "vuhlEeseeuh", "jeen"],
		note: "beginning of shift from schedule"
	},
	{
		date: "2/8/24",
		people: ["beth", "vuhlEeseeuh", "kAylin", "kAydin", "jeen", "jOrdin"],
		note: "end of shift from schedule"
	},
	{
		date: "2/9/24",
		people: ["beth", "kAhnrr", "rOzmeree", "kAylin", "kEnee", "kAshmeer", "blayk", "jeen", "jOrdin", "kAyluhb p"],
		note: "from schedule"
	},
	{
		date: "2/10/24",
		people: ["maek", "kAhnrr", "rOzmeree", "kAylin", "kOdee", "blayk", "mAysin", "kAshmeer", "jeen", "kAyluhb p", "dUhstin"],
		note: "from schedule"
	}
];

// ages determined for January 2024
var pizzaPeople = {
	dad: {
		gender: "m",
		age: 4,
		yearsOld: 64
	},
	mahm: {
		gender: "f",
		age: 4,
		yearsOld: 65
	},
	kAshmeer: {
		gender: "f",
		age: 3,
		yearsOld: 27.9
	},
	"kAyluhb p": {
		gender: "m",
		age: 2,
		yearsOld: 18
	},
	kAyluh: {
		gender: "f",
		age: 3,
		yearsOld: 28
	},
	kAylin: {
		gender: "f",
		age: 2,
		yearsOld: 15
	},
	kAhnrr: {
		gender: "m",
		age: 2,
		yearsOld: 16
	},
	nikOl: {
		gender: "f",
		age: 4,
		yearsOld: "?"
	},
	jOrdin: {
		gender: "f",
		age: 3,
		yearsOld: 22
	},
	hAylee: {
		gender: "f",
		age: 3,
		yearsOld: 25
	},
	shEruhdin: {
		gender: "f",
		age: 4,
		yearsOld: "?"
	},
	rOzmeree: {
		gender: "f",
		age: 3,
		yearsOld: 22
	},
	vuhlEeseeuh: {
		gender: "f",
		age: 3,
		yearsOld: 19
	},
	dUhstin: {
		gender: "m",
		age: 3,
		yearsOld: "?"
	},
	beth: {
		gender: "f",
		age: 4,
		yearsOld: "?"
	},
	"kAyluhb s": {
		gender: "m",
		age: 2,
		yearsOld: 18.5
	},
	Emuhlee: {
		gender: "f",
		age: 3,
		yearsOld: "?"
	},
	dAhnol: {
		gender: "m",
		age: 4,
		yearsOld: "?"
	},
	rAelee: {
		gender: "m",
		age: 3,
		yearsOld: "?"
	},
	bAylee: {
		gender: "m",
		age: 3,
		yearsOld: 25
	},
	kEnee: {
		gender: "m",
		age: 3,
		yearsOld: "?"
	},
	tEeuh: {
		gender: "f",
		age: 3,
		yearsOld: 23
	},
	gayj: {
		gender: "m",
		age: 3,
		yearsOld: 22
	},
	mAysin: {
		gender: "m",
		age: 2,
		yearsOld: 17
	},
	jeen: {
		gender: "m",
		age: 3,
		yearsOld: "?"
	},
	maek: {
		gender: "m",
		age: 3,
		yearsOld: 21
	},
	rich: {
		gender: "m",
		age: 4,
		yearsOld: "?"
	}
};

// name | (gender) | (age) | initiator | purpose | circumstances | length | density | participation | enjoyability | comfort
// name | (gender) | (age) | initiator | purpose | circumstances | length | density | participation | mood | topic | their smile
// name | (gender) | (age) | initiator | purpose | circumstances | length | density | participation | mood | topic | their smile | my smile
var pizzaConvos = [
	{
		date: "11/27/2023 (Monday) 90%",
		places: [
			{
				coverage: "95%",
				category: "home",
				convos: [
					["dad", "m", "h", "n", 0, 3, 1, 4, 2],
					["dad", "t", "h", "n", 2, 3, 1, 3, 2],
					["dad", "t", "i", "n", 0, 3, 2, 4, 2],
					["dad", "-"],
					["dad", "m", "p", "n", 0, 3, 2, 4, 2]
				]
			},
			{
				coverage: "85%",
				category: "work",
				convos: [
					["shEruhdin", "t", "n", "n", 0, 3, 1, 5, 2],
					["beth", "t", "p", "n", 2, 3, 1, 4, 2],
					["beth&kAshmeer", "m", "p", "n", 1, 3, 2, 4, 2],
					["shEruhdin&nikOl", "m", "p", "n", 1, 3, 2, 4, 2],
					["beth", "m", "p", "n", 1, 3, 2, 4, 2],
					["rOzmeree", "c2", "p&i", "n", 3, 2, 2, 4, 1],
					["jOrdin", "-", "h&n", "n", 2, 3, 2, 5, 3],
					["kAshmeer", "t", "p", "n", 2, 3, 2, 4, 2],
					["rOzmeree", "t", "p", "n", 0, 3, 2, 4, 1],
					["Emuhlee", "t", "i", "n", 0, 3, 0, 4, 2],
					["am4", "t", "p", "n", 2, 3, 2, 4, 1],
					["af4", "t", "p", "n", 2, 3, 2, 4, 1],
					["am4&af4", "-"]
				]
			},
			{
				coverage: "95%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 2, 4, 2],
					["mahm&dad", "-"],
					["mahm", "t", "i", "n", 1, 3, 1, 4, 2],
					["mahm", "t", "n", "n", 0, 3, 2, 4, 2],
					["mahm&dad", "t", "n", "b", 1, 3, 1, 4, 2],
					["mahm", "t", "n", "n", 0, 3, 2, 4, 2],
					["mahm", "t", "n", "n", 0, 3, 2, 4, 2],
					["mahm", "t", "i", "n", 0, 3, 1, 4, 2],
					["mahm", "t", "n", "n", 0, 3, 1, 4, 2],
					["dad", "t", "p", "n", 0, 3, 0, 4, 2],
					["mahm", "-"],
					["mahm", "c2", "n", "n", 2, 2, 2, 4, 3],
					["mahm", "t", "n", "n", 3, 1, 1, 4, 2],
					["dad", "t", "n", "n", 0, 3, 1, 4, 2],
					["dad", "t", "n", "n", 0, 3, 2, 3, 2],
					["dad", "t", "i", "n", 1, 3, 2, 3, 2],
					["dad", "m", "p", "n", 0, 3, 2, 4, 2]
				]
			}
		]
	},
	{
		date: "11/28/2023 20% (90% at home; 1% at work)",
		places: [
			{
				coverage: "95%",
				category: "home",
				convos: [
					["dad", "t", "c", "n", 1, 3, 0, 3, 2],
					["dad", "t", "c", "c", 1, 3, 0, 3, 2],
					["dad", "t", "n", "n", 1, 3, 1, 4, 2],
					["dad", "t", "p", "n", 1, 3, 0, 4, 2],
					["dad", "t", "n", "n", 2, 2, 1, 4, 2],
					["dad", "m", "h", "n", 0, 3, 4, 4, 2],
					["dad", "m", "h", "n", 0, 3, 4, 4, 2],
					["dad", "t", "n", "n", 0, 3, 0, 4, 2]
				]
			},
			{
				coverage: "1%",
				category: "work",
				convos: [
					["vuhlEeseeuh", "t", "g", "n", 0, 3, "-", 4, 2]
				]
			},
			{
				coverage: "75%",
				category: "other",
				convos: [
					["p1:m4", "m", "p", "n", 0, 3, 2, 4, 2]
				]
			},
			{
				coverage: "85%",
				category: "home",
				convos: [
					["mahm", "t", "n", "n", 1, 3, 1, 4, 2],
					["dad", "t", "n", "n", 1, 3, 2, 3, 2],
					["dad", "t", "c", "n", 3, 3, 2, 2, 2],
					["mahm", "t", "c", "j", 2, 3, 1, 3, 2],
					["mahm", "t", "n", "n", 1, 3, 2, 4, 2],
					["dad", "t", "c", "n", 3, 3, 1, 2, 2],
					["mahm", "t", "h", "n", 2, 2, 2, 3, 2]
				]
			}
		]
	},
	{
		date: "11/29/2023 92%",
		places: [
			{
				coverage: "92%",
				category: "home",
				convos: [
					["dad", "t", "g", "n", 0, 3, 1, 4, 2],
					["dad", "t", "c", "n", 0, 2, 1, 4, 2],
					["dad", "t", "n", "n", 0, 3, 0, 4, 2],
					["dad", "t", "i", "n", 0, 3, 2, 4, 2],
					["dad", "t", "i", "n", 0, 3, 1, 4, 2],
					["dad", "t", "n", "b", 0, 3, 2, 4, 2],
					["mahm&dad", "m", "h", "j&n&p", 0, 3, 2, 4, 2],
					["dad", "m", "h", "n", 1, 3, 2, 4, 2],
					["dad", "t", "i", "n", 0, 3, 1, 4, 2],
					["dad", "t", "i", "c", 0, 3, 0, 4, 2],
					["dad", "t", "i", "n", 0, 3, 2, 4, 2],
					["dad", "t", "n", "n", 0, 3, 1, 4, 2],
					["dad", "t", "c", "n", 0, 3, 0, 4, 2],
					["dad", "t", "i", "c", 1, 3, 2, 4, 2],
					["dad", "t", "c", "n", 0, 3, 0, 4, 2],
					["mahm", "t", "n", "n", 2, 3, 2, 4, 2],
					["mahm", "t", "i", "n", 0, 3, 0, 4, 2],
					["mahm", "t", "n", "n", 2, 3, 2, 4, 2],
					["dad", "t", "n", "n", 1, 3, 0, 4, 2],
					["mahm", "t", "n", "n", 2, 2, 0, 4, 2],
					["mahm", "t", "i", "n", 0, 3, 0, 4, 2],
					["dad", "t", "n", "b", 2, 3, 1, 4, 2],
					["mahm", "t", "i", "n", 0, 3, 2, 4, 2],
					["mahm", "t", "n", "n", 1, 3, 2, 5, 2],
					["dad", "t", "n", "n", 0, 3, 2, 4, 2],
					["dad", "t", "n", "n", 0, 3, 2, 4, 2],
					["dad", "t", "c", "n", 1, 3, 1, 4, 2],
					["dad", "t", "n", "n", 3, 3, 1, 4, 2],
					["dad", "m", "p", "n", 0, 3, 2, 4, 2]
				]
			}
		]
	},
	{
		date: "11/30/2023 50% (5% at home; 65% at work)",
		places: [
			{
				coverage: "50%",
				category: "home",
				convos: [
					["dad", "t", "i", "n", 1, 3, 2, 3, 2, 2],
					["dad", "t", "g", "n", 0, 3, 2, 4, 2]
				]
			},
			{
				coverage: "65%",
				category: "home",
				convos: [
					["am3", "a", "n", "n", 0, 3, 4, 4, 2],
					["af4", "t", "n", "n", 0, 3, 0, 4, 2],
					["am5", "a", "p", "n", 1, 3, 2, 5, 2],
					["af4", "a", "p", "n", 0, 3, 2, 4, 2],
					["af4", "a", "p", "n", 0, 3, 2, 4, 2],
					["beth", "t", "i", "n", 0, 3, 2, 4, 2],
					["am4", "a", "p", "n", 1, 3, 2, 4, 2],
					["rOzmeree", "t", "g", "n", 0, 3, 0, 4, 2],
					["rOzmeree", "t", "n", "n", 0, 3, 0, 4, 2],
					["kAyluh", "t", "i", "n", 1, 3, 1, 4, 2],
					["am0", "t", "p", "p", 2, 3, 2, 4, 2],
					["beth ", "m", "p", "n", 0, 2, 2, 4, 2],
					["kAshmeer", "m", "t", "n", 0, 3, 2, 4, 2],
					["nikOl", "t", "a", "n", 1, 3, 1, 4, 2],
					["jOrdin", "m", "n", "n", 1, 3, 4, 5, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/1/2023 40%",
		places: [
			{
				coverage: "40%",
				category: "home",
				convos: [
					["dad", "t", "i", "n", 1, 3, 2, 4, 2],
					["dad", "t", "n", "n", 0, 3, 0, 4, 2],
					["dad", "t", "i", "n", 0, 3, 0, 4, 2],
					["dad", "t", "i", "n", 1, 3, 1, 3, 2],
					["dad", "t", "i", "n", 0, 3, 2, 4, 2],
					["dad", "t", "c", "n", 1, 3, 0, 3, 2],
					["mahm", "-", "-", "-", 1, 3, 2, 4, 2],
					["mahm", "t", "i", "n", 0, 3, 2, 4, 2],
					["mahm&dad", "b", "n", "n", 3, 1, 2, 4, 2],
					["dad", "t", "n", "n", 2, 3, 2, 2, 2],
					["dad", "m", "p", "n", 0, 3, 2, 4, 2]
				]
			}
		]
	},
	{
		date: "12/2/2023 45% (0% at home; 75% at work)",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "75%",
				category: "work",
				convos: [
					["beth", "m", "p", "n", 1, 2, 2, 4, 2],
					["kAylin", "t", "a", "n", 0, 3, 0, 4, 2],
					["Emuhlee", "t", "a", "n", 0, 3, 0, 4, 2],
					["am3", "a", "p", "n", 0, 3, 2, 4, 2],
					["vuhlEeseeuh", "m", "n", "n", 0, 3, 2, 5, 2],
					["am4", "a", "p", "n", 0, 3, 2, 4, 2],
					["am3", "a", "p", "n", 0, 3, 2, 4, 2],
					["vuhlEeseeuh", "c2", "n", "n", 3, 1, 2, 5, 2],
					["kAylin", "c2", "n", "n", 3, 1, 2, 5, 2],
					["vuhlEeseeuh&kAylin", "t", "n", "n", 1, 3, 2, 5, 2],
					["am4", "a", "p", "n", 0, 3, 2, 4, 2],
					["beth", "t", "p", "n", 1, 3, 2, 4, 1],
					["am4", "a", "p", "crb", 0, 3, 2, 4, 1],
					["kAylin", "t", "n", "n", 1, 3, 1, 5, 2],
					["kAyluhb p", "c2", "i&p", "n", 3, 2, 2, 4, 2],
					["kAshmeer", "t", "p", "n", 0, 3, 0, 4, 2],
					["kAshmeer", "m", "n", "n", 0, 3, 2, 4, 2],
					["kAshmeer", "t", "n", "n", 0, 3, 2, 5, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/3/2023 30% (2% at home; 70% at work)",
		places: [
			{
				coverage: "30%",
				category: "home",
				convos: [
					["dad", "m", "p", "n", 0, 3, 4, 4, 2],
					["dad", "t", "i", "n", 0, 3, 2, 4, 2]
				]
			},
			{
				coverage: "70%",
				category: "work",
				convos: [
					["maek", "m", "p", "n", 1, 2, 2, 4, 2],
					["a1f4", "m", "p", "p", 1, 3, 2, 4, 2],
					["a1f4", "a", "p", "rb", 1, 3, 2, 4, 2],
					["kAhnrr", "m", "p", "n", 1, 3, 2, 4, 2],
					["af5", "a", "p", "n", 1, 3, 2, 4, 2],
					["am4", "a", "p", "n", 1, 2, 2, 4, 2],
					["maek", "c2", "p", "n", 3, 1, 1, 4, 1]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/4/2023 (Monday) 95%",
		places: [
			{
				coverage: "95%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 1, 3, 2],
					["dad", "t", "i", "n", 0, 3, 0, 4, 2],
					["mahm", "t", "i", "n", 1, 3, 2, 4, 2],
					["mahm", "m", "i", "j", 1, 3, 2, 4, 2],
					["mahm", "m", "n", "b", 1, 2, 5, 5, 2],
					["mahm", "t", "n", "n", 1, 3, 1, 4, 2],
					["mahm", "t", "i", "n", 1, 3, 1, 4, 2],
					["dad", "t", "i", "n", 1, 3, 1, 3, 2],
					["dad", "t", "i&n", "n", 3, 2, 1, 3, 2],
					["mahm", "t", "i", "n", 1, 2, 2, 4, 2],
					["dad", "t", "i", "n", 0, 3, 2, 4, 2],
					["mahm", "t", "n", "n", 2, 3, 0, 4, 2],
					["mahm", "t", "n", "b", 2, 2, 1, 4, 2],
					["dad", "t", "c", "n", 2, 1, 1, 3, 2],
					["dad", "t", "n", "n", 3, 1, 1, 4, 2],
					["dad", "t", "c", "n", 3, 2, 2, 3, 2],
					["dad", "m", "i", "n", 0, 3, 2, 4, 2]
				]
			}
		]
	},
	{
		date: "12/5/2023 75% (15% at home; 85% at work)",
		places: [
			{
				coverage: "50%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 0, 4, 2],
					["dad", "t", "n", "n", 0, 3, 2, 4, 2],
					["dad", "-"]
				]
			},
			{
				coverage: "85%",
				category: "work",
				convos: [
					["Emuhlee", "t", "g", "n", 0, 3, 0, 5, 2],
					["dAhnol", "t", "i", "n", 0, 3, 2, 4, 2],
					["Emuhlee", "t", "n", "n", 1, 3, 2, 5, 2],
					["rAelee", "t", "a", "n", 0, 3, 0, 4, 2],
					["Emuhlee", "t", "a", "n", 0, 3, 0, 4, 2],
					["kAshmeer", "t", "g", "n", 0, 3, 0, 4, 2],
					["kAshmeer", "t", "h", "n", 1, 3, 2, 4, 2],
					["maek", "t", "n", "j", 0, 3, 0, 4, 2],
					["maek", "m", "n", "n", 0, 4, 2, 4, 2],
					["maek", "t", "h", "n", 1, 3, 2, 4, 2],
					["am4", "a", "p", "n", 0, 3, 2, 4, 2],
					["af5", "a", "p", "n", 1, 2, 2, 4, 2],
					["rOzmeree", "t", "g", "n", 0, 3, 0, 4, 2],
					["maek", "t", "i", "n", 1, 3, 2, 4, 2],
					["rOzmeree", "m", "p", "n", 0, 3, 2, 4, 2],
					["maek", "m", "p", "n", 1, 3, 2, 4, 2],
					["af4", "a", "p", "n", 1, 3, 2, 4, 2],
					["am4", "a", "p", "n", 0, 3, 2, 4, 2],
					["rOzmeree", "t", "n", "n", 1, 3, 2, 5, 1],
					["kAyluhb s", "m", "n", "n", 0, 3, 4, 4, 2],
					["maek", "t", "p", "n", 2, 3, 3, 4, 2]
				],
			},
			{
				coverage: "50%",
				category: "other",
				convos: [
					["p1:m4", "m", "p", "n", 1, 2, 2, 4, 2]
				]
			},
			{
				coverage: "2%",
				category: "home",
				convos: [
					["mahm", "t", "i", "-"]
				]
			}
		]
	},
	{
		date: "12/6/2023 30%",
		places: [
			{
				coverage: "30%",
				category: "home",
				convos: [
					["dad", "t", "i", "n", 1, 3, 2, 4, 2],
					["dad", "t", "c", "n", 0, 3, 0, 3, 2],
					["dad", "t", "n&c", "n", 3, 2, 0, 4, 2],
					["dad", "t", "n", "n", 3, 3, 1, 3, 2],
					["dad", "t", "i", "n", 0, 3, 2, 4, 2],
					["mahm", "i", "n", "n", 2, 3, 1, 4, 2],
					["dad", "t", "n", "n", 2, 3, 1, 4, 2],
					["dad", "t", "p", "n", 0, 3, 2, 4, 2]
				]
			}
		]
	},
	{
		date: "12/7/2023 40% (15% at home; 50% at work)",
		places: [
			{
				coverage: "50%",
				category: "home",
				convos: [
					["dad", "t", "c", "n", 0, 3, 0, 4, 2],
					["dad", "t", "c", "n", 0, 3, 0, 4, 2],
					["dad", "t", "c", "c", 0, 3, 0, 3, 2]
				]
			},
			{
				coverage: "50%",
				category: "work",
				convos: [
					["kAshmeer", "c2", "i&n", "n", 2, 2, 2, 5, 2],
					["jOrdin", "c2", "i&n", "n", 3, 2, 2, 6, 2],
					["jOrdin", "c2", "n", "n", 2, 2, 2, 5, 2],
					["kAylin", "c2", "n&i", "n", 3, 1, 2, 5, 2],
					["kAylin", "b", "n", "n", 1, 3, 2, 5, 1],
					["nikOl", "t", "g", "n", 1, 3, 2, 4, 2],
					["maek", "t", "p", "n", 0, 3, 2, 4, 2],
					["maek", "t", "p", "n", 1, 3, 2, 4, 2],
					["kAyluhb s", "t", "a", "n", 1, 2, 0, 4, 2],
					["kAhnrr", "t", "a", "n", 0, 3, 0, 4, 2]
				]
			},
			{
				coverage: "8%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 1, 4, 2],
					["dad", "t", "i", "n", 1, 3, 1, 3, 2],
					["dad", "t", "n", "n", 1, 3, 1, 4, 2]
				]
			}
		]
	},
	{
		date: "12/8/2023 0% (0% at home; 0% at work)",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/9/2023 35% (15% at home; 75% at work)",
		places: [
			{
				coverage: "30%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 0, 3, 0, 3, 2],
					["dad", "t", "c", "n", 1, 3, 1, 4, 2],
					["mahm", "t", "i", "n", 0, 3, 2, 4, 2],
					["mahm&dad", "m", "i", "j", 1, 3, 1, 4, 2]
				]
			},
			{
				coverage: "75%",
				category: "work",
				convos: [
					["rOzmeree&vuhlEeseeuh", "t", "g", "n", 1, 3, 1, 5, 2],
					["rOzmeree", "m", "i", "n", 0, 3, 2, 4, 2],
					["beth", "t", "g", "n", 0, 3, 1, 4, 2],
					["af4", "a", "p", "n", 1, 2, 2, 4, 2],
					["maek", "t", "p", "n", 2, 2, 2, 4, 2],
					["vuhlEeseeuh", "t", "n", "n", 1, 3, 1, 5, 2],
					["beth", "m", "p", "b", 1, 1, 2, 4, 2],
					["beth", "t", "p", "n", 1, 3, 2, 4, 2],
					["am4", "a", "p", "n", 1, 2, 2, 4, 2],
					["am4", "a", "p", "n", 0, 3, 2, 4, 2],
					["kAyluhb p", "t", "a", "n", 0, 3, 0, 4, 2],
					["am4", "t", "a", "n", 0, 3, 7, 5, 0, 4, 2],
					["af3", "t", "a", "n", 0, 3, 0, 4, 2],
					["vuhlEeseeuh", "t", "n", "n", 2, 1, 2, 5, 2],
					["vuhlEeseeuh&rAelee", "m", "n", "j", 0, 3, 2, 5, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/10/2023 10%? (0% at home; 15% at work?)",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "15%",
				category: "work",
				convos: [
					["a1f4", "m", "p", "p", 1, 3, 2, 4, 2],
					["a1f4", "a", "p", "n", 1, 3, 2, 4, 2],
					["vuhlEeseeuh", "t", "n", "n", 0, 3, 2, 5, 2],
					["rOzmeree", "t", "n", "n", 0, 3, 1, 4, 2],
					["rOzmeree&vuhlEeseeuh", "m", "n", "j", 0, 3, 2, 5, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/11/2023 (Mon) 2% (8% at home; 0% at work)",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "10%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 3, 3, 1, 2, 2]
				]
			}
		]
	},
	{
		date: "12/12/2023",
		places: [
			{
				coverage: "100%",
				category: "home",
				convos: [
					["dad", "t", "g", "n", 0, 3, 0, 4, 2],
					["dad", "t", "n", "n", 1, 2, 1, 4, 2],
					["dad", "m", "i", "n", 1, 3, 2, 4, 2]
				]
			},
			{
				coverage: "92%",
				category: "work",
				convos: [
					["rOzmeree&vuhlEeseeuh", "t", "g", "n", 0, 3, 0, 5, 2],
					["bAylee", "t", "i", "n", 1, 3, 2, 4, 2],
					["rOzmeree", "m", "p", "n", 1, 3, 2, 4, 1],
					["vuhlEeseeuh", "t", "n", "j", 0, 3, 0, 4, 1],
					["a1f0", "a", "p", "p", 1, 3, 2, 4, 2],
					["a2f4", "a", "p", "n", 0, 3, 2, 5, 2],
					["vuhlEeseeuh", "t", "n", "n", 0, 3, 2, 4, 2],
					["vuhlEeseeuh", "t", "n", "n", 1, 3, 2, 4, 2],
					["rOzmeree", "m", "p", "n", 0, 3, 2, 4, 2],
					["vuhlEeseeuh", "t", "p", "n", 0, 3, 2, 4, 2],
					["bAylee", "m", "i", "n", 1, 3, 2, 4, 2],
					["maek", "m", "n", "j", 0, 3, 2, 4, 2],
					["maek", "m", "i", "b", 1, 2, 2, 4, 2],
					["vuhlEeseeuh", "m", "p", "n", 0, 3, 2, 4, 2],
					["a3f5", "a", "p", "n", 1, 3, 2, 4, 2],
					["jOrdin", "m", "n", "n", 2, 3, 2, 4, 2],
					["rOzmeree", "t", "i", "n", 0, 3, 0, 4, 2],
					["kAshmeer", "t", "g", "n", 1, 3, 2, 4, 2],
					["rOzmeree", "t", "n", "n", 0, 3, 2, 4, 2],
					["rAelee", "t", "n", "j", 1, 3, 2, 4, 2],
					["a4m5", "-"],
					["jOrdin", "m", "n", "n", 3, 2, 2, 5, 2],
					["maek", "t", "p", "n", 0, 3, 1, 4, 2],
					["maek", "m", "p", "n", 2, 3, 2, 4, 2]
				]
			},
			{
				coverage: "70%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 0, 3, 1, 4, 2],
					["mahm", "t", "i", "n", 0, 3, 1, 4, 2],
					["dad", "t", "c", "n", 1, 3, 0, 3, 2],
					["mahm", "t", "i", "n", 0, 3, 1, 4, 2],
					["dad", "t", "n", "n", 1, 3, 2, 4, 2]
				]
			}
		]
	},
	{
		date: "12/13/2023 (changed enjoyability and comfort)",
		places: [
			{
				coverage: "92%",
				category: "home",
				convos: [
					["dad", "t", "g", "n", 0, 3, 1, 3, 5],
					["dad", "t", "n", "n", 1, 3, 2, 4, 5],
					["dad", "t", "i", "n", 1, 3, 1, 2, 4],
					["dad", "t", "n", "n", 3, 3, 1, 3, 4],
					["dad", "t", "i", "n", 1, 3, 2, 3, 4],
					["dad", "t", "n", "n", 3, 2, 1, 3, 4],
					["mahm", "t", "g&c", "n", 1, 2, 1, 4, 4],
					["mahm", "t", "n", "n", 0, 3, 2, 4, 4],
					["dad", "m", "h", "j", 0, 3, 2, 4, 4],
					["mahm", "t", "n", "n", 3, 1, 1, 4, 4],
					["dad", "t", "n", "n", 0, 3, 1, 3, 4],
					["dad", "m", "p", "n", 0, 3, 2, 4, 4]
				]
			}
		]
	},
	{
		date: "12/14/2023",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "66%",
				category: "work",
				convos: [
					["beth", "t", "g", "n", 0, 3, 2, 5, 4],
					["maek", "t", "g", "n", 0, 3, 0, 4, 4],
					["bAylee", "t", "g", "n", 0, 3, 0, 5, 4],
					["beth", "t", "n", "n", 0, 3, 2, 5, 5],
					["maek", "t", "p", "n", 0, 3, 2, 4, 4],
					["beth&nikOl&maek", "m", "n", "j", 0, 3, 2, 4, 4],
					["nikOl", "t", "n", "n", 0, 3, 2, 4, 4],
					["maek", "t", "p", "n", 1, 1, 1, 4, 4],
					["a1f4", "a", "p", "n", 1, 3, 2, 4, 4],
					["kAshmeer", "t", "g", "n", 0, 3, 1, 4, 4],
					["maek", "t", "g", "n", 0, 3, 1, 4, 4],
					["kAshmeer", "t", "i", "n", 0, 3, 2, 4, 4],
					["kAshmeer", "m", "n", "j", 1, 3, 2, 5, 5],
					["hAylee", "t", "n", "n", 2, 3, 1, 5, 4],
					["kAyluh", "t", "n", "n", 2, 3, 2, 5, 4],
					["a2m4", "a", "p", "n", 1, 3, 2, 4, 4],
					["a3m4", "a", "p", "n", 1, 2, 2, 4, 4],
					["rAelee", "t", "n", "n", 1, 2, 2, 5, 5],
					["hAylee", "m", "h", "n", 0, 3, 2, 4, 4],
					["hAylee", "t", "n", "n", 2, 3, 0, 4, 4],
					["kAyluh", "t", "i", "n", 1, 3, 2, 4, 4],
					["hAylee", "t", "n", "n", 0, 3, 1, 5, 5],
					["hAylee", "m", "n", "n", 0, 3, 2, 5, 5],
					["kAshmeer", "c2", "p", "n", 2, 1, 2, 4, 4],
					["kAshmeer", "m", "i", "n", 0, 3, 2, 4, 4],
					["kAshmeer", "m", "n", "n", 1, 3, 2, 6, 5]
				]
			},
			{
				coverage: "55%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 1, 4, 4],
					["dad", "t", "c", "n", 0, 3, 0, 4, 4],
					["dad", "t", "c", "c", 0, 3, 0, 4, 4],
					["dad", "t", "c", "c", 0, 3, 0, 3, 3],
					["dad", "t", "n", "n", 1, 3, 0, 3, 4],
					["mahm", "t", "i", "b", 1, 2, 1, 3, 4],
					["mahm", "t", "i", "n", 2, 1, 1, 4, 4],
					["mahm", "t", "n", "n", 0, 3, 2, 4, 5]
				]
			}
		]
	},
	{
		date: "12/15/2023 66%",
		places: [
			{
				coverage: "72%",
				category: "work",
				convos: [
					["bAylee", "t", "g", "n", 1, 3, 2, 5, 4],
					["bAylee", "c2", "n", "n", 3, 2, 2, 5, 5],
					["rOzmeree", "t", "a", "n", 0, 3, 0, 5, 4],
					["rOzmeree", "t", "a", "n", 0, 3, 2, 5, 5],
					["a1f4", "a", "p", "n", 1, 3, 2, 4, 4],
					["rOzmeree", "m", "i", "n", 1, 3, 2, 4, 4],
					["kEnee", "t", "g", "n", 1, 3, 2, 5, 4],
					["beth", "t", "i", "u", 1, 3, 2, 3, 4],
					["kAyluh", "t", "h", "n", 2, 2, 1, 4, 4],
					["bAylee", "t", "h", "j", 1, 3, 1, 4, 4],
					["a2f4", "a", "p", "n", 1, 3, 2, 4, 4],
					["a3f3", "t", "t", "n", 0, 3, 0, 4, 4],
					["a4m4", "m", "t", "n", 0, 3, 2, 4, 4],
					["a4m4", "t", "a", "n", 0, 3, 0, 4, 4],
					["rOzmeree", "t", "p", "n", 1, 3, 2, 4, 4],
					["kAyluh", "t", "g", "b", 0, 3, 2, 0, 4, 5],
					["rOzmeree", "t", "n", "u", 1, 3, 2, 5, 5],
					["rOzmeree", "t", "n", "n", 1, 3, 2, 5, 4],
					["rOzmeree", "t", "n", "n", 3, 2, 2, 5, 5],
					["kEnee", "t", "n", "n", 3, 1, 1, 5, 5],
					["beth", "m", "n", "n", 1, 3, 2, 5, 4],
					["beth", "t", "n", "n", 3, 1, 1, 5, 5],
					["shEruhdin", "c1", "n", "n", 2, 2, 1, 5, 5],
					["maek", "m", "t", "bj", 0, 3, 2, 4, 4],
					["kAyluh", "c2", "n", "n", 1, 2, 2, 5, 4],
					["maek", "i", "p", "n", 1, 3, 2, 4, 4]
				]
			},
			{
				coverage: "15%",
				category: "home",
				convos: [
					["mahm", "t", "g&n", "n", 1, 3, 1, 4, 4],
					["dad", "t", "n", "n", 1, 2, 1, 3, 4]
				]
			}
		]
	},
	{
		date: "12/16/2023 (10%)",
		places: [
			{
				coverage: "10%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 1, 3, 5],
					["dad", "t", "n", "n", 0, 3, 2, 3, 4],
					["mahm", "t", "n", "n", 2, 3, 1, 4, 5],
					["mahm", "t", "n", "n", 2, 2, 1, 4, 5],
					["mahm", "m", "n", "n", 1, 3, 2, 5, 5],
					["dad", "t", "n", "n", 1, 3, 2, 4, 3],
					["mahm", "m", "n", "j", 0, 3, 2, 4, 4],
					["mahm", "t", "c", "n", 0, 3, 1, 4, 3]
				]
			}
		]
	},
	{
		date: "12/17/2023",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "33%",
				category: "work",
				convos: [
					["kAhnrr", "t", "g&i", "n", 0, 3, 1, 4, 5],
					["maek", "t", "i", "n", 0, 3, 1, 4, 4],
					["kAyluhb p", "t", "i", "n", 1, 3, 2, 5, 5],
					["maek", "m", "p", "n", 1, 2, 2, 4, 4],
					["a1f5", "a", "p", "n", 1, 2, 2, 5, 4],
					["maek", "m", "i", "b", 0, 3, 2, 4, 4],
					["kAhnrr", "m", "n", "jb", 0, 3, 2, 4, 4],
					["a2m4", "a", "p", "n", 1, 3, 2, 4, 4],
					["maek", "t", "n", "n", 0, 3, 2, 4, 4],
					["cm2", "t", "i", "n", 1, 3, 2, 4, 4]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/18/2023",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "15%",
				category: "work",
				convos: [
					["bAylee", "t", "h", "n", 0, 3, 0, 4, 5, 3],
					["bAylee", "t", "p", "n", 0, 3, 1, 4, 4, 2],
					["nikOl", "t", "p", "n", 1, 2, 0, 4, 4, 2],
					["kAyluh w:f3", "a", "p", "n", 1, 2, 2, 4, 4, 2],
					["mIstrr Ayjee:m4", "b", "n", "n", 1, 3, 1, 5, 5, 3]
				]
			},
			{
				coverage: "10%",
				category: "home",
				convos: [
					["mahm&dad", "m", "p", "n", 1, 3, 2, 4, 4, 2],
					["dad", "m", "p", "n", 1, 3, 2, 4, 4, 2]
				]
			}
		]
	},
	{
		date: "12/19/2023",
		places: [
			{
				coverage: "33%",
				category: "home",
				convos: [
					["dad", "t", "g", "n", 0, 3, 0, 4, 4, 0],
					["dad", "t", "g", "n", 0, 3, 2, 4, 4, 0],
					["dad", "t", "n", "n", 0, 3, 2, 3, 3, 2],
					["dad", "m", "i", "n", 1, 3, 2, 3, 2, 1]
				]
			},
			{
				coverage: "60%",
				category: "work",
				convos: [
					["tEeuh", "t", "n", "n", 0, 3, 2, 5, 5, 2],
					["nikOl", "m", "p", "n", 1, 3, 2, 4, 4, 2],
					["a1f4", "a", "p", "n", 1, 2, 2, 5, 5, 3],
					["a2m1", "t", "n", "n", 1, 3, 2, 5, 4, 3],
					["a3f5", "a", "p", "n", 1, 2, 2, 5, 4, 3],
					["vuhlEeseeuh", "m", "n", "n", 1, 3, 2, 6, 5, 3],
					["maek", "t", "i", "n", 1, 3, 2, 5, 4, 2],
					["a4m3", "a", "p", "rb", 1, 2, 2, 5, 4, 3],
					["kAhnrr", "m", "n", "n", 1, 3, 2, 5, 4, 2],
					["vuhlEeseeuh", "m", "n", "n", 0, 3, 2, 5, 4, 2],
					["vuhlEeseeuh", "m", "n", "n", 1, 3, 2, 6, 5, 3],
					["rAelee", "t", "n", "j", 1, 3, 2, 6, 5, 3],
					["af4", "a", "p", "n", 1, 3, 2, 5, 4, 2],
					["maek", "t", "p", "n", 0, 3, 1, 4, 4, 2],
					["rAelee", "t", "n", "n", 1, 3, 2, 5, 5, 2],
					["maek", "i", "p", "n", 2, 2, 2, 4, 4, 2]
				]
			},
			{
				coverage: "15%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 1, 4, 4, 2],
					["mahm", "t", "n", "n", 1, 3, 2, 4, 4, 1],
					["dad", "t", "n", "n", 2, 3, 2, 2, 2, 1]
				]
			}
		]
	},
	{
		date: "12/20/2023 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/21/2023",
		places: [
			{
				coverage: "40%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 2, 3, 3, 1],
					["kAyluh", "t", "i&n", "p", 1, 3, 2, 4, 4, 0],
					["dad", "t", "n", "n", 2, 3, 1, 3, 2, 0]
				]
			},
			{
				coverage: "30%",
				category: "work",
				convos: [
					["a1f3", "a", "p", "n", 0, 3, 2, 5, 4, 3],
					["a2m1", "t", "n", "n", 0, 3, 2, 5, 5, 2],
					["a3m1", "t", "h", "n", 0, 3, 2, 5, 4, 2],
					["a4f5", "a", "p", "n", 0, 3, 2, 5, 4, 3],
					["rAelee", "m", "n", "n", 0, 3, 4, 4, 4, 2],
					["kAylin", "t", "n", "n", 0, 3, 2, 5, 4, 2],
					["kAhnrr", "c2", "g&n", "n", 2, 2, 2, 5, 5, 3],
					["a5f4", "a", "p", "n", 0, 3, 2, 5, 4, 3],
					["vuhlEeseeuh", "t", "g", "n", 0, 3, 0, 5, 5, 3],
					["kAshmeer", "t", "a", "n", 0, 3, 0, 4, 4, 2],
					["kAshmeer", "t", "n", "n", 0, 3, 0, 6, 6, 2],
					["kAshmeer", "m", "n", "n", 0, 3, 4, 6, 6, 3],
					["vuhlEeseeuh&maek", "m", "n", "b", 0, 3, 4, 6, 6, 3],
					["a6f3", "a", "p", "n", 0, 3, 2, 4, 4, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/22/2023",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "45%",
				category: "work",
				convos: [
					["a1m4", "a", "p", "n", 1, 2, 2, 4, 4, 3],
					["jOrdin", "t", "g&n", "n", 1, 3, 2, 6, 6, 3],
					["rOzmeree", "t", "n", "j", 1, 3, 1, 6, 6, 3],
					["vuhlEeseeuh", "t", "n", "n", 0, 3, 2, 5, 5, 3],
					["kAshmeer", "t", "p", "n", 0, 3, 2, 4, 4, 2],
					["kAyluhb p", "t", "n", "b", 2, 2, 1],
					["vuhlEeseeuh", "m", "n", "n", 0, 3, 2, 5, 5, 2],
					["vuhlEeseeuh", "t", "p", "n", 1, 3, 2, 4, 4, 3],
					["kEnee", "m", "c", "n", 1, 3, 2, 4, 4, 2],
					["kAshmeer", "c4", "n", "n", 3, 3, 2, 6, 5, 3],
					["kAyluh", "t", "n", "n", 1, 3, 2, 5, 5, 2],
					["kAyluh", "t", "i", "n", 0, 3, 2, 5, 5, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/23/2023",
		places: [
			{
				coverage: "10%",
				category: "home",
				convos: [
					["mahm&dad", "m", "n", "n", 1, 3, 2, 6, 6, 3]
				]
			},
			{
				coverage: "30%",
				category: "work",
				convos: [
					["maek", "b", "g&i", "n", 1, 3, 2, 4, 4, 2],
					["kAyluh", "t", "i", "n", 1, 3, 2, 5, 4, 3],
					["a1f4", "a", "p", "n", 0, 3, 2, 4, 4, 2],
					["nikOl", "t", "g", "n", 1, 3, 2, 5, 5, 2],
					["a2m4", "a", "p", "n", 1, 2, 2, 5, 4, 3],
					["nikOl", "t", "i", "n", 0, 3, 0, 4, 4, 2],
					["a3m4", "a", "p", "n", 0, 2, 2, 5, 4, 2],
					["vuhlEeseeuh", "t", "n", "n", 0, 3, 0, 5, 5, 2],
					["kAshmeer", "t", "g", "n", 0, 3, 2, 5, 4, 2],
					["kAshmeer", "m", "n", "j", 0, 3, 4, 5, 5, 2],
					["vuhlEeseeuh", "t", "n", "n", 1, 3, 2, 6, 6, 3],
					["kAylin", "t", "n", "n", 1, 3, 1, 6, 6, 2],
					["kAshmeer", "t", "n", "j", 0, 3, 0, 5, 5, 3],
					["a4f5", "a", "p", "n", 1, 3, 2, 5, 4, 3],
					["vuhlEeseeuh", "m", "n", "n", 1, 3, 2, 6, 5, 2],
					["kAylin", "m", "n", "b", 0, 3, 2, 5, 5, 2],
					["a5m4", "a", "p", "n", 1, 1, 2, 4, 4, 3],
					["a6m5", "a", "p", "n", 0, 2, 0, 4, 4, 2],
					["kAylin", "m", "n", "n", 0, 3, 4, 5, 5, 2],
					["a7f3", "m", "p", "p", 1, 3, 2, 4, 4, 0],
					["a7f3", "a", "p", "n", 0, 3, 2, 4, 4, 2],
					["a8m3", "a", "p", "n", 0, 3, 2, 5, 4, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/24/2023",
		places: [
			{
				coverage: "2%",
				category: "home",
				convos: [
					["mahm&dad", "t", "n", "n", 2, 2, 1, 4, 5, 2],
					["mahm", "m", "i", "n", 2, 2, 0, 4, 4, 2],
					["mahm&dad", "m", "n", "j", 1, 3, 2, 4, 4, 2]
				]
			}
		]
	},
	{
		date: "12/25/2023",
		places: [
			{
				coverage: "1%",
				category: "other",
				convos: [
					["shAwnee:f3", "i", "n", "p", 3, 3, 2, 5, 5, 0],
					["dad", "t", "n", "j", 2, 3, 1, 4, 4, 2]
				]
			}
		]
	},
	{
		date: "12/26/2023",
		places: [
			{
				coverage: "10%",
				category: "home",
				convos: [
					["dad", "t", "g", "n", 0, 3, 0, 4, 5, 3],
					["mahm", "m", "h", "n", 2, 3, 2, 4, 4, 3],
					["dad", "t", "n", "j", 0, 3, 2, 4, 4, 2]
				]
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/27/2023",
		places: [
			{
				coverage: "1%",
				category: "home",
				convos: [
					["mahm", "t", "c", "n", 0, 3, 2, 4, 4, 0],
					["mahm", "t", "i", "n", 0, 3, 2, 3, 3, 0],
					["dad", "t", "n", "n", 0, 3, 1, 3, 5, 2],
					["mahm", "t", "i", "n", 1, 3, 1, 4, 3, 2],
					["dad", "m", "n", "j", 0, 3, 2, 4, 4, 2]
				]
			}
		]
	},
	{
		date: "12/28/2023",
		places: [
			{
				coverage: "4%",
				category: "home",
				convos: [
					["mahm", "t", "i", "n", 0, 3, 2, 4, 4, 0]
				]
			},
			{
				coverage: "20%",
				category: "work",
				convos: [
					["a1f5", "t", "g", "n", 0, 3, 1, 5, 5, 3],
					["nikOl", "t", "g", "n", 0, 3, 0, 5, 5, 3],
					["nikOl", "t", "n", "n", 0, 3, 0, 5, 5, 2],
					["maek", "t", "g", "n", 0, 3, 2, 5, 5, 2],
					["nikOl&tEeuh", "m", "p", "n", 1, 3, 2, 5, 6, 3],
					["a2f4", "t", "a", "n", 0, 3, 0, 5, 4, 3],
					["a3m2", "a", "p", "n", 0, 3, 2, 5, 4, 2],
					["nikOl", "t", "n", "n", 0, 3, 2, 5, 5, 2],
					["kAhnrr", "t", "g", "n", 1, 3, 2, 4, 4, 3],
					["rOzmeree", "t", "g", "u", 1, 3, 2, 5, 5, 3],
					["a4f2", "a", "p", "n", 0, 3, 2, 5, 4, 3],
					["mAysin", "t", "n", "n", 1, 3, 2, 5, 5, 3],
					["gayj", "c4", "n", "n", 3, 2, 2, 5, 5, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/29/2023",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "100%",
				category: "other",
				convos: [
					["kristEenuh:f3", "a", "n", "p", 3, 3, 2, 6, 6, 0, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/30/2023",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "12/31/2023",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/1/2024 (Monday) 4%",
		places: [
			{
				coverage: "4%",
				category: "home",
				convos: [
					["mahm", "t", "c", "n", 0, 3, 2, 3, 4, 0, 2],
					["mahm", "t", "c", "n", 1, 3, 0, 3, 4, 2, 2],
					["dad", "t", "g", "n", 0, 3, 1, 3, 5, 2, 2],
					["mahm", "t", "n", "n", 1, 3, 0, 4, 4, 2, 2],
					["mahm", "m", "i", "n", 0, 3, 2, 4, 4, 2, 2],
					["dad", "t", "c", "n", 1, 3, 2, 2, 3, 0, 1],
					["mahm", "t", "c", "j", 1, 3, 2, 3, 3, 0, 1],
					["mahm", "c1", "n", "n", 2, 1, 1, 4, 5, 3, 2]
				]
			}
		]
	},
	{
		date: "1/2/2024 15%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "20%",
				category: "work",
				convos: [
					["rOzmeree", "t", "g", "n", 0, 3, 0, 5, 5, 3, 3],
					["nikOl", "t", "g", "n", 0, 3, 0, 5, 5, 2, 3],
					["dAhnol", "t", "g", "n", 0, 3, 0, 5, 5, 3, 3],
					["kAshmeer", "t", "g&i", "n", 1, 2, 2, 5, 4, 2, 3],
					["a1f4", "i", "p", "n", 1, 1, 2, 4, 4, 2, 3],
					["a2f3", 1, 1, 2, 5, 4, 3, 3],
					["kAshmeer", "t", "n", "n", 3, 3, 1, 6, 6, 3, 3],
					["kAshmeer", "b", "g", "n", 0, 3, 2, 5, 5, 3, 3],
					["nikOl", "t", "p", "n", 2, 2, 2, 4, 4, 2, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/3/2024 1%",
		places: [
			{
				coverage: "1%",
				category: "home",
				convos: [
					["dad", "t", "i&n", "n", 2, 3, 2, 2, 2, 1, 2]
				]
			}
		]
	},
	{
		date: "1/4/2024 25%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "30%",
				category: "work",
				convos: [
					["kAyluh", "t", "g", "n", 0, 3, 0, 5, 4, 2, 3],
					["kAyluh", "t", "p", "n", 1, 3, 1, 5, 4, 2, 3],
					["tEeuh", "t", "g", "n", 0, 3, 2, 5, 5, 3, 3],
					["tEeuh", "t", "n", "n", 0, 3, 0, 5, 5, 2, 3],
					["gErit:m3", "t", "p", "n", 0, 3, 0, 5, 4, 2, 3],
					["gErit:m3", "m", "p", "c", 0, 3, 2, 4, 4, 2, 3],
					["kAshmeer", "c2", "g&n", "n", 2, 3, 1, 5, 5, 2, 3],
					["kAshmeer", "m", "n", "n", 0, 3, 2, 5, 5, 2, 3],
					["gErit:m3", "m", "p", "n", 1, 3, 2, 5, 4, 2, 3],
					["gErit:m3", "i", "t", "c", 0, 3, 0, 5, 4, 2, 3],
					["kAshmeer", "m", "n", "n", 1, 3, 1, 5, 5, 3, 3],
					["a1f5", "a", "p", "n", 1, 2, 2, 5, 4, 3, 3],
					["vuhlEeseeuh", "c2", "n", "n", 3, 2, 2, 6, 6, 3, 3],
					["kAylin", "c2", "n", "n", 3, 1, 2, 6, 6, 3, 3],
					["gayj", "m", "n", "n", 2, 1, 2, 5, 5, 3, 3],
					["a2m4", "a", "p", "n", 1, 1, 2, 4, 4, 3, 3],
					["kAylin", "t", "g", "n", 0, 3, 2, 5, 4, 2, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/5/2024 25%",
		places: [
			{
				coverage: "15%",
				category: "home",
				convos: [
					["dad", "t", "i", "n", 0, 3, 2, 4, 4, 2, 2],
					["dad", "t", "n&c", "n", 1, 3, 1, 3, 3, 2, 2],
					["dad", "t", "n&c", "n", 1, 3, 1, 3, 3, 2, 2]
				]
			},
			{
				coverage: "35%",
				category: "work",
				convos: [
					["maek", "c2", "g&n", "n", 0, 3, 2, 5, 5, 2, 3],
					["kAyluh", "t", "n", "n", 3, 2, 1, 5, 5, 2, 3],
					["vuhlEeseeuh", "t", "g", "n", 1, 3, 1, 5, 4, 3, 2],
					["nikOl", "t", "g", "n", 0, 3, 0, 4, 5, 0, 2],
					["kAylin", "t", "n", "n", 1, 3, 2, 5, 5, 2, 3],
					["kAylin", "m", "n", "c", 0, 3, 2, 5, 5, 2, 3],
					["rOzmeree", "m", "n", "n", 0, 3, 2, 5, 5, 3, 3],
					["kAylin", "t", "n", "n", 1, 3, 1, 5, 5, 2, 3],
					["jOrdin", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["mAysin", "t", "n", "n", 1, 3, 1, 5, 4, 3, 3],
					["jOrdin", "t", "i", "n", 1, 3, 2, 5, 5, 3, 3],
					["jOrdin", "c2", "n", "s", 2, 3, 1, 4, 4, 3, 2],
					["jOrdin", "c2", "n", "n", 3, 2, 2, 5, 5, 3, 3],
					["beth", "m", "p", "n", 2, 2, 1, 4, 4, 2, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/6/2024 4%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "5%",
				category: "work",
				convos: [
					["beth", "t", "g", "n", 0, 3, 1, 4, 5, 2, 3],
					["kAylin", "t", "n", "n", 1, 3, 2, 5, 5, 2, 3],
					["vuhlEeseeuh", "t", "n", "j", 1, 3, 2, 5, 5, 3, 3],
					["mAysin", "t", "g", "n", 0, 3, 2, 5, 5, 3, 3],
					["mAysin", "t", "a", "n", 0, 3, 0, 4, 4, 2, 2],
					["beth", "c2", "n&i", "n", 3, 2, 2, 3, 4, 2, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/7/2024 35%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "50%",
				category: "work",
				convos: [
					["kAyluh", "b", "n", "n", 1, 3, 2, 5, 4, 2, 3],
					["a1m5", "a", "p", "n", 1, 2, 2, 5, 4, 3, 3],
					["vuhlEeseeuh", "m", "n", "n", 0, 3, 2, 5, 4, 2, 3],
					["kAyluh", "t", "n", "n", 0, 3, 0, 5, 5, 2, 3],
					["vuhlEeseeuh", "m", "g", "n", 0, 3, 5, 4, 4, 2, 3],
					["maek", "t", "g", "n", 0, 3, 0, 5, 5, 2, 3],
					["kAyluh", "t", "n", "n", 0, 3, 2, 6, 5, 2, 3],
					["kAshmeer", "m", "i", "n", 2, 3, 2, 5, 4, 2, 3],
					["kAyluh", "c2", "n", "n", 3, 1, 2, 6, 6, 3, 3],
					["kAshmeer", "c2", "n", "n", 3, 2, 2, 6, 6, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/8/2024 12%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "25%",
				category: "work",
				convos: [
					["kAshmeer", "t", "g", "n", 0, 3, 0, 5, 5, 3, 3],
					["kAyluh", "t", "n", "n", 2, 2, 2, 5, 5, 2, 3],
					["mAysin", "t", "a", "n", 0, 3, 0, 4, 4, 2, 2],
					["kAshmeer", "c2", "i&h", "n", 2, 2, 2, 6, 5, 3, 3],
					["a1f5", "a", "p", "n", 2, 2, 1, 5, 4, 3, 3],
					["a2m5", "a", "p", "j", 1, 3, 2, 5, 4, 3, 3],
					["a3f1", "a", "p", "n", 1, 2, 2, 5, 4, 2, 3],
					["gayj", "c2", "g&n", "n", 2, 2, 2, 5, 5, 3, 3],
					["kAshmeer", "t", "n&p", "n", 1, 3, 2, 6, 5, 3, 3],
					["gayj", "c2", "n", "n", 1, 3, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "5%",
				category: "home",
				convos: [
					["dad", "t", "c", "n", 2, 3, 1, 2, 2, 1, 1]
				]
			}
		]
	},
	{
		date: "1/9/2024 50%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "66%",
				category: "work",
				convos: [
					["kAyluh", "t", "n", "n", 1, 2, 2, 5, 5, 2, 3],
					["kAshmeer", "t", "n", "j", 0, 3, 0, 5, 5, 2, 3],
					["kAshmeer", "m", "i", "n", 0, 3, 5, 4, 4, 2, 2],
					["nikOl", "t", "g", "n", 0, 3, 2, 5, 5, 3, 3],
					["kAyluh", "t", "n", "n", 2, 2, 2, 5, 5, 3, 3],
					["kAshmeer", "c2", "n", "n", 2, 2, 2, 5, 5, 3, 3],
					["hAylee", "t", "g", "n", 0, 3, 0, 5, 5, 3, 3],
					["mAysin", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["a1f5", "a", "p", "rb", 1, 3, 2, 5, 4, 3, 3],
					["jOrdin", "m", "n", "n", 3, 3, 2, 5, 5, 3, 3],
					["hAylee", "t", "a", "n", 0, 3, 0, 4, 4, 2, 2],
					["mAysin", "t", "i", "n", 0, 3, 2, 5, 4, 3, 3],
					["jOrdin", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["kAshmeer", "t", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["hAylee", "t", "g", "j", 0, 3, 0, 5, 5, 3, 3],
					["kAshmeer", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/10/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/11/2024 33%",
		places: [
			{
				coverage: "100%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 1, 2, 2, 1, 2],
					["dad", "t", "i", "n", 0, 3, 0, 4, 4, 0, 2],
					["dad", "m", "g&i", "n", 1, 3, 2, 3, 4, 2, 2]
				]
			},
			{
				coverage: "33%",
				category: "work",
				convos: [
					["a1f4", "a", "p", "rb", 0, 3, 2, 4, 4, 2, 3],
					["tEeuh", "t", "g", "n", 0, 3, 0, 5, 5, 2, 3],
					["kAylin", "t", "g", "n", 0, 3, 2, 5, 5, 3, 3],
					["vuhlEeseeuh", "t", "g", "n", 1, 2, 2, 5, 4, 3, 3],
					["a2f5", "a", "p", "n", 0, 3, 2, 5, 5, 3, 3],
					["kAylin", "m", "i", "n", 1, 3, 2, 6, 4, 3, 3],
					["jOrdin", "m", "n", "n", 1, 3, 2, 7, 6, 3, 3],
					["jOrdin", "m", "n", "n", 2, 2, 2, 6, 5, 3, 3],
					["jOrdin&vuhlEeseeuh&kAylin", "b", "n", "n", 2, 3, 2, 6, 5, 3, 3],
					["maek", "i", "n", "j", 1, 3, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/12/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/13/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/14/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/15/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/16/2024 20%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "25%",
				category: "work",
				convos: [
					["a1m5", "a", "p", "n", 0, 3, 4, 4, 4, 2, 3],
					["kAshmeer", "t", "g&i&h", "ns", 1, 2, 2, 4, 5, 3, 2],
					["vuhlEeseeuh", "b", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["kAshmeer", "m", "h", "n", 2, 3, 2, 5, 4, 2, 3],
					["kAshmeer", "m", "n", "su", 2, 2, 4, 4, 4, 3, 3],
					["hAylee", "b", "n&a", "u", 1]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/17/2024 18%",
		places: [
			{
				coverage: "100%",
				category: "home",
				convos: [
					["mahm", "t", "g", "n", 0, 3, 1, 4, 5, 0, 2]
				]
			},
			{
				coverage: "20%",
				category: "work",
				convos: [
					["nikOl", "t", "g", "n", 0, 3, 2, 5, 5, 2, 3],
					["a1f3", "a", "p", "n", 0, 3, 2, 5, 4, 3, 3],
					["a2m5", "a", "p", "rb", 1, 3, 2, 5, 4, 2, 3],
					["a3m3", "a", "p", "rb", 1, 3, 2, 5, 4, 2, 3],
					["jOrdin", "m", "n", "n", 2, 3, 2, 5, 5, 3, 3],
					["jOrdin", "m", "n", "s", 2, 3, 2, 5, 4, 3, 3],
					["kAyluh", "t", "n", "j", 2, 3, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/18/2024 32%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "33%",
				category: "work",
				convos: [
					["dAhnol", "t", "g", "n", 0, 3, 0, 5, 4, 2, 3],
					["kAshmeer", "t", "g", "n", 0, 3, 0, 5, 5, 3, 3],
					["tEeuh", "t", "g", "n", 0, 3, 2, 5, 5, 0, 3],
					["kAshmeer", "b", "n", "n", 1, 3, 1, 5, 5, 3, 3],
					["vuhlEeseeuh", "b", "n", "n", 2, 3, 2, 6, 5, 3, 3],
					["beth", "i", "n", "j", 0, 3, 2, 5, 5, 2, 3],
					["vuhlEeseeuh&kAylin", "t", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["kAylin&vuhlEeseeuh", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["beth", "t", "a", "n", 0, 3, 0, 4, 4, 2, 2],
					["vuhlEeseeuh&kAylin", "t", "g", "n", 1, 3, 2, 5, 5, 3, 3],
					["kAhnrr", "t", "i", "n", 1, 3, 2, 5, 4, 2, 3],
					["kAhnrr", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["kAylin", "m", "n", "n", 1, 3, 2, 5, 5, 2, 3],
					["beth", "b", "n", "j", 0, 3, 0, 5, 5, 2, 3],
					["kAhnrr&vuhlEeseeuh", "m", "n", "j", 1, 3, 2, 6, 6, 3, 3]
				]
			},
			{
				coverage: "33%",
				category: "home",
				convos: [
					["mahm", "t", "g&i", "n", 0, 3, 2, 4, 4, 2, 2],
					["mahm", "t", "c", "n", 0, 3, 0, 4, 4, 0, 2],
					["mahm", "t", "p", "n", 2, 1, 2, 4, 4, 2, 2],
					["dad", "t", "n", "n", 2, 3, 1, 3, 3, 1, 2],
					["dad", "t", "n", "b", 2, 1, 0, 3, 3, 2, 2],
					["dad", "t", "n", "n", 1, 3, 2, 3, 2, 2, 2]
				]
			}
		]
	},
	{
		date: "1/19/2024 1%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "4%",
				category: "home",
				convos: [
					["mahm", "t", "g", "n", 0, 3, 1, 4, 4, 3, 2],
					["dad", "t", "n", "n", 0, 3, 0, 4, 5, 3, 2]
				]
			}
		]
	},
	{
		date: "1/20/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/21/2024 1%",
		places: [
			{
				coverage: "5%",
				category: "home",
				convos: [
					["dad", "m", "i", "n", 0, 3, 2, 4, 4, 2, 2],
					["dad", "t", "i", "n", 0, 3, 2, 4, 4, 0, 2]
				]
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "5%",
				category: "home",
				convos: [
					["mahm", "t", "n", "n", 1, 3, 2, 4, 4, 3, 2]
				]
			}
		]
	},
	{
		date: "1/22/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/23/2024 60%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "70%",
				category: "work",
				convos: [
					["kAshmeer", "t", "g", "n", 0, 3, 0, 6, 6, 3, 3],
					["nikOl", "t", "g", "n", 0, 3, 0, 5, 5, 3, 3],
					["vuhlEeseeuh", "t", "g", "n", 0, 3, 0, 5, 5, 3, 3],
					["dAhnol", "t", "g", "n", 0, 3, 0, 4, 5, 3, 3],
					["vuhlEeseeuh", "t", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["vuhlEeseeuh", "t", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["kAshmeer", "m", "n", "n", 0, 3, 2, 4, 4, 2, 3],
					["a1f5", "t", "h", "n", 1, 3, 2, 5, 4, 3, 3],
					["a2m5", "a", "p", "n", 0, 3, 2, 5, 4, 2, 3],
					["dAhnol", "t", "h", "n", 0, 3, 2, 4, 4, 2, 2],
					["vuhlEeseeuh", "c2", "n", "n", 3, 1, 2, 5, 5, 3, 3],
					["kAshmeer", "t", "g", "n", 0, 3, 2, 6, 6, 3, 3],
					["jOrdin", "c2", "n", "n", 3, 3, 2, 6, 6, 3, 3],
					["jOrdin", "c3", "n", "n", 3, 3, 2, 6, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/24/2024 4%",
		places: [
			{
				coverage: "5%",
				category: "work",
				convos: [
					["rOzmeree&uhrOruh:f3&kAshmeer", "t", "n", "n", 3, 3, 2, 6, 6, 3, 3],
					["kAshmeer", "m", "n", "sn", 3, 3, 3, 6, 6, 3, 3],
					["rOzmeree", "t", "n", "j", 2, 2, 2, 6, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/25/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/26/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/27/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/28/2024 75%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "100%",
				category: "other",
				convos: [
					["hAwrprr:f3", "a", "n", "n", 3, 3, 3, 5, 5, 2, 3],
					["a1f3", "m", "p", "n", 1, 3, 2, 5, 4, 2, 3],
					["kris Anich:m4", "t", "g", "n", 0, 3, 1, 5, 5, 2, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/29/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/30/2024 15%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "20%",
				category: "work",
				convos: [
					["vuhlEeseeuh&kEnee", "t", "n", "n", 3, 2, 2, 5, 5, 3, 3],
					["kEnee", "m", "n", "n", 2, 3, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "1/31/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/1/2024 7%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "15%",
				category: "work",
				convos: [
					["kAylin", "m", "i", "n", 0, 3, 4, 4, 4, 2, 2],
					["kAylin", "t", "n", "n", 0, 3, 0, 5, 5, 2, 2],
					["beth", "t", "p", "u", 0, 3, 0, 3, 4, 2, 2],
					["jeen", "m", "n", "n", 2, 2, 3, 4, 5, 2, 3],
					["kAylin", "t", "a", "n", 0, 3, 0, 4, 4, 2, 2]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/2/2024 16%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "30%",
				category: "work",
				convos: [
					["maek", "t", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["jOrdin", "b", "n", "n", 2, 3, 2, 5, 5, 3, 3],
					["jOrdin", "c3", "i&n", "n", 3, 1, 2, 5, 4, 3, 3],
					["kEnee", "c2", "n", "n", 2, 1, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/3/2024 10%",
		places: [
			{
				coverage: "50%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 3, 3, 1, 1, 1, 1, 1],
					["mahm", "t", "i", "n", 0, 3, 1, 4, 4, 0, 2],
					["dad", "t", "n", "c", 2, 3, 0, 1, 2, 2, 1]
				]
			},
			{
				coverage: "12%",
				category: "work",
				convos: [
					["dUhstin", "t", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["vuhlEeseeuh", "t", "n", "n", 1, 3, 1, 5, 4, 3, 3],
					["jOrdin", "t", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["dUhstin", "m", "n", "n", 2, 3, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/4/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/5/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/6/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/7/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/8/2024 10%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "12%",
				category: "work",
				convos: [
					["kAylin", "t", "n", "n", 0, 3, 0, 5, 5, 3, 2],
					["beth&rich:m4", "m", "h", "j", 0, 3, 2, 4, 4, 2, 2],
					["vuhlEeseeuh", "m", "n", "n", 0, 3, 3, 5, 5, 3, 3],
					["jOrdin", "t", "g", "n", 1, 3, 2, 5, 5, 3, 3],
					["jOrdin", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["vuhlEeseeuh", "i", "n", "j", 1, 3, 2, 5, 5, 3, 3],
					["a1m4", "a", "p", "n", 0, 3, 2, 5, 5, 3, 3],
					["jOrdin", "m", "n", "n", 2, 3, 2, 5, 5, 3, 3],
					["jOrdin", "c2", "n&i", "n", 3, 1, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/9/2024 6%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "8%",
				category: "work",
				convos: [
					["kAhnrr", "t", "g", "n", 0, 3, 0, 5, 5, 3, 3],
					["kEnee", "t", "g", "n", 0, 3, 2, 5, 5, 3, 3],
					["kEnee", "t", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["rOzmeree", "t", "g", "n", 0, 3, 0, 5, 5, 2, 3],
					["kAylin", "t", "a", "n", 0, 3, 0, 5, 4, 2, 3],
					["kAylin", "t", "n", "n", 1, 3, 2, 5, 5, 2, 3],
					["jOrdin", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["jOrdin", "m", "n", "n", 1, 3, 2, 5, 5, 3, 3],
					["kEnee", "t", "i", "n", 0, 3, 0, 5, 4, 3, 3],
					["a1m4", "a", "p", "n", 1, 2, 2, 5, 4, 2, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/10/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/11/2024 4%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "8%",
				category: "work",
				convos: [
					["a1f5", "a", "p", "rb", 1, 2, 2, 5, 4, 3, 3],
					["beth", "t", "n", "n", 0, 3, 0, 4, 4, 2, 2],
					["a2m4", "a", "p", "n", 1, 3, 2, 5, 4, 3, 3],
					["hAylee", "c1", "i&n", "n", 1, 2, 2, 5, 4, 2, 2],
					["a3m4", "a", "p", "n", 0, 3, 2, 5, 4, 2, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/12/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/13/2024 78%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "80%",
				category: "work",
				convos: [
					["kAshmeer", "c2", "n", "n", 2, 2, 2, 5, 5, 3, 3],
					["a1f5", "a", "p", "rh", 0, 3, 2, 5, 4, 3, 3],
					["kAyluh", "c2", "n", "n", 2, 3, 1, 5, 5, 3, 3],
					["kAshmeer", "i", "p", "n", 0, 3, 2, 4, 4, 2, 2],
					["shEruhdin", "t", "p", "n", 0, 3, 0, 5, 4, 3, 3],
					["kAshmeer&kAyluh&kEnee", "c2", "n", "n", 3, 3, 2, 6, 6, 3, 3],
					["hAylee", "t", "n", "n", 0, 3, 0, 5, 5, 3, 3],
					["kAshmeer", "m", "i&n", "n", 1, 3, 2, 5, 4, 3, 3],
					["jOrdin", "m", "n", "n", 0, 3, 2, 5, 5, 3, 3],
					["jOrdin", "t", "i", "n", 0, 3, 2, 5, 4, 3, 3],
					["a2f2", "a", "p", "n", 0, 3, 2, 5, 4, 3, 3],
					["a3f5", "a", "p", "n", 0, 3, 2, 5, 5, 3, 3],
					["jOrdin", "m", "n", "u", 3, 3, 2, 5, 5, 3, 3],
					["jOrdin", "m", "n", "u", 2, 3, 2, 5, 5, 3, 3],
					["jOrdin", "m", "n", "n", 3, 3, 2, 6, 6, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/14/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/15/2024 20%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "28%",
				category: "work",
				convos: [
					["tEeuh", "t", "g", "n", 0, 3, 2, 5, 5, 2, 2],
					["dAhnol", "t", "g", "n", 0, 3, 2, 5, 5, 3, 3],
					["beth", "t", "g", "n", 0, 3, 0, 5, 5, 2, 3],
					["beth", "c2", "p", "n", 1, 2, 2, 5, 4, 2, 3],
					["a1m4", "i", "p", "n", 1, 3, 2, 5, 4, 3, 3],
					["tEeuh", "t", "p", "n", 2, 2, 2, 5, 4, 2, 3],
					["kEnee", "t", "n", "n", 1, 3, 3, 5, 5, 3, 3],
					["a2f5", "a", "p&n", "rb", 1, 3, 2, 5, 5, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/16/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/17/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "work",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/18/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/19/2024 60%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "99%",
				category: "other",
				convos: [
					["jahn:m3", "a", "n", "n", 2, 3, 2, 6, 6, 3, 3],
					["jahn:m3", "a", "n", "n", 3, 3, 2, 6, 6, 3, 3],
					["a1f2", "t", "p", "n", 1, 3, 2, 5, 4, 2, 3],
					["Brew Haus lady:f4", "t", "p", "n", 3, 1, 2, 5, 4, 2, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/20/2024 1%",
		places: [
			{
				coverage: "1%",
				category: "home",
				convos: [
					["mahm", "t", "n", "n", 1, 3, 1, 5, 5, 3, 3]
				]
			}
		]
	},
	{
		date: "2/21/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/22/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/23/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/24/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/25/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/26/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/27/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/28/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "2/29/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/1/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/2/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/3/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/4/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/5/2024 12%",
		places: [
			{
				coverage: "12%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 0, 3, 0, 3, 5, 3, 1],
					["dad", "t", "n", "n", 2, 3, 2, 3, 3, 1, 1],
					["dad", "t", "n", "n", 2, 1, 0, 4, 4, 0, 2],
					["dad", "m", "h", "n", 0, 3, 2, 4, 4, 0, 2],
					["dad", "t", "n", "n", 0, 3, 2, 3, 4, 0, 2]
				]
			}
		]
	},
	{
		date: "3/6/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/7/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/8/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/9/2024 6%",
		places: [
			{
				coverage: "6%",
				category: "home",
				convos: [
					["dad", "t", "i", "n", 0, 3, 2, 4, 4, 0, 2],
					["dad", "t", "c", "n", 1, 3, 2, 2, 4, 0, 1],
					["dad", "t", "c", "c", 1, 2, 1, 3, 4, 2, 1],
					["dad", "t", "n&p", "n", 3, 2, 1, 3, 4, 2, 2],
					["mahm", "t", "n", "n", 0, 3, 2, 3, 5, 0, 2]
				]
			}
		]
	},
	{
		date: "3/10/2024 1%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "1%",
				category: "home",
				convos: [
					["mahm", "t", "i", "n", 0, 3, 2, 4, 4, 0, 2],
					["dad", "t", "c", "n", 0, 2, 1, 3, 4, 0, 2]
				]
			}
		]
	},
	{
		date: "3/11/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/12/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/13/2024 40%",
		places: [
			{
				coverage: "40%",
				category: "home",
				convos: [
					["dad", "t", "g&c&i", "n", 1, 3, 1, 2, 5, 3, 2],
					["dad", "t", "c&n", "c", 1, 3, 0, 2, 5, 3, 2],
					["dad", "t", "c", "n", 0, 3, 0, 3, 4, 0, 2],
					["dad", "t", "c", "n", 0, 3, 0, 3, 3, 0, 2],
					["dad", "t", "c", "n", 2, 3, 2, 3, 4, 2, 2],
					["dad", "t", "n", "n", 3, 1, 0, 4, 3, 0, 2],
					["dad", "m", "c&h", "n", 0, 3, 3, 4, 4, 2, 2],
					["mahm", "m", "n", "bj", 0, 3, 2, 5, 5, 0, 2],
					["mahm", "t", "n&i", "n", 1, 2, 1, 5, 5, 3, 2]
				]
			}
		]
	},
	{
		date: "3/14/2024 10%",
		places: [
			{
				coverage: "10%",
				category: "home",
				convos: [
					["dad", "t", "n", "s", 3, 3, 2, 3, 3, 1, 1]
				]
			}
		]
	},
	{
		date: "3/15/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/16/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "0%",
				category: "other",
				convos: []
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/17/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/18/2024 15%",
		places: [
			{
				coverage: "15%",
				category: "home",
				convos: [
					["dad", "t", "g&n", "n", 1, 3, 0, 4, 5, 3, 2],
					["dad", "m", "i&h", "n", 0, 3, 2, 4, 4, 0, 2],
					["dad", "t", "c", "n", 3, 3, 1, 3, 2, 1, 2]
				]
			}
		]
	},
	{
		date: "3/19/2024 70%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			},
			{
				coverage: "100%",
				category: "other",
				convos: [
					["a1f3", "t", "p", "n", 0, 3, 2, 5, 4, 3, 3],
					["a1f3", "m", "p", "n", 1, 3, 2, 5, 4, 3, 3],
					["a2m4", "t", "p", "n", 0, 3, 1, 5, 4, 3, 3],
					["kAshmeer", "a", "n", "n", 3, 3, 1, 6, 6, 3, 3]
				]
			},
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/20/2024 6%",
		places: [
			{
				coverage: "6%",
				category: "home",
				convos: [
					["dad", "t", "n", "n", 1, 3, 0, 4, 5, 3, 2],
					["dad", "t", "c", "n", 2, 2, 0, 3, 3, 2, 2],
					["dad", "m", "i", "n", 0, 2, 3, 4, 4, 0, 2]
				]
			}
		]
	},
	{
		date: "3/21/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/22/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/23/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/24/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/25/2024 0%",
		places: [
			{
				coverage: "0%",
				category: "home",
				convos: []
			}
		]
	},
	{
		date: "3/26/2024 20%",
		places: [
			{
				coverage: "20%",
				category: "home",
				convos: [
					["dad", "t", "c", "n", 0, 3, 0, 4, 5, 0, 2],
					["dad", "t", "g", "n", 1, 3, 0, 4, 5, 3, 2],
					["mahm", "t", "n", "b", 3, 1, 1, 5, 5, 3, 3],
					["dad", "t", "c", "n", 1, 3, 0, 3, 4, 0, 2],
					["dad", "t", "n&p", "n", 3, 1, 1, 3, 4, 2, 2]
				]
			}
		]
	}
];

/*
11/27/23 (Monday)    90%
dad.mhn03142, dad.thn23132, dad.tin03242, dad-, dad.mpn03242
shEruhdin.tnn03152, beth.tpn23142, beth&kAshmeer.mpn13242, shEruhdin&nikOl.mpn13242, beth.mpn13242, rOzmeree.m&tp&in32241, jOrdin.-h&nn23253, kAshmeer.tpn23242, rOzmeree.tpn03241, Emuhlee.tin03042, am4tpn23241, af4tpn23241, am4&af4.min03341
dad.tnn13242, mahm&dad-, mahm.tin13142, mahm.tnn03242, mahm&dad.tnb13142, mahm.tnn03242, mahm.tnn03242, mahm.tin03142, mahm.tnn03142, dad.tpn03042, mahm-, mahm.m&tnn22243, mahm.tnn31142, dad.tnn03142, dad.tnn03232, dad.tin13232, dad.mpn03242

11/28/23    20% (90% at home; 1% at work)
dad.tcn13032, dad.tcc13032, dad.tnn13142, dad.tpn13042, dad.tnn22142, dad.mhn03442, dad.mhn03442, dad.tnn03042
vuhlEeseeuh.tgn03-42
p1.mpn03242, mahm.tnn13142, dad.tnn13232, dad.tcn33222, mahm.tcj23132, mahm.tnn13242, dad.tcn33122, mahm.thn22232

11/29/23    92%
dad.tgn03142, dad.tcn02142, dad.tnn03042, dad.tin03242, dad.tin03142, dad.tnb03242, mahm&dad.mhj&n&p03242, dad.mhn13242, dad.tin03142, dad.tic03042, dad.tin03242, dad.tnn03142, dad.tcn03042, dad.tic13242, dad.tcn03042, mahm.tnn23242, mahm.tin03042, mahm.tnn23242, dad.tnn13042, mahm.tnn22042, mahm.tin03042, dad.tnb23142, mahm.tin03242, mahm.tnn13252, dad.tnn03242, dad.tnn03242, dad.tcn13142, dad.tnn33142, dad.mpn03242

11/30/23    50% (5% at home; 65% at work)
dad.tin132322, dad.tgn03242
am3ann03442, af4tnn03042, am5apn13252, af4apn03242, af4apn03242, beth.tin03242, am4apn13242, rOzmeree.tgn03042, rOzmeree.tnn03042, kAyluh.tin13142, am0tpp23242, beth .mpn02242, kAshmeer.mtn03242, nikOl.tan13142, jOrdin.mnn13452

12/1/23    40%
dad.tin13242, dad.tnn03042, dad.tin03042, dad.tin13132, dad.tin03242, dad.tcn13032, mahm.13242, mahm.tin03242, mahm&dad.bnn31242, dad.tnn23222, dad.mpn03242

12/2/23    45% (0% at home; 75% at work)
beth.mpn12242, kAylin.tan03042, Emuhlee.tan03042, am3apn03242, vuhlEeseeuh.mnn03252, am4apn03242, am3apn03242, vuhlEeseeuh.m&tnn31252, kAylin.m&tnn31252, vuhlEeseeuh&kAylin.tnn13252, am4apn03242, beth.tpn13241, am4apcrb03241, kAylin.tnn13152, kAyluhb p.m&ti&pn32242, kAshmeer.tpn03042, kAshmeer.mnn03242, kAshmeer.tnn03252

12/3/23    30% (2% at home; 70% at work)
dad.mpn03442, dad.tin03242
maek.mpn12242, a1f4mpp13242, a1f4aprb13242, kAhnrr.mpn13242, af5apn13242, am4apn12242, maek.m&tpn31141

12/4/23 (Monday)    95%
dad.tnn13132, dad.tin03042, mahm.tin13242, mahm.mij13242, mahm.mnb12552, mahm.tnn13142, mahm.tin13142, dad.tin13132, dad.ti&nn32132, mahm.tin12242, dad.tin03242, mahm.tnn23042, mahm.tnb22142, dad.tcn21132, dad.tnn31142, dad.tcn32232, dad.min03242

12/5/23    75% (15% at home; 85% at work)
dad.tnn13042, dad.tnn03242, dad-
Emuhlee.tgn03052, dAhnol.tin03242, Emuhlee.tnn13252, rAelee.tan03042, Emuhlee.tan03042, kAshmeer.tgn03042, kAshmeer.thn13242, maek.tnj03042, maek.mnn04242, maek.thn13242, am4apn03242, af5apn12242, rOzmeree.tgn03042, maek.tin13242, rOzmeree.mpn03242, maek.mpn13242, af4apn13242, am4apn03242, rOzmeree.tnn13251, kAyluhb s.mnn03442, maek.tpn23342
p1mpn12242
mahm.tin-

12/6/23    30%
dad.tin13242, dad.tcn03032, dad.tn&cn32042, dad.tnn33132, dad.tin03242, mahm.inn23142, dad.tnn23142, dad.tpn03242

12/7/23    40% (15% at home; 50% at work)
dad.tcn03042, dad.tcn03042, dad.tcc03032
kAshmeer.m&ti&nn22252, jOrdin.m&ti&nn32262, jOrdin.m&tnn22252, kAylin.t&mn&in31252, kAylin.bnn13251, nikOl.tgn13242, maek.tpn03242, maek.tpn13242, kAyluhb s.tan12042, kAhnrr.tan03042
dad.tnn13142, dad.tin13132, dad.tnn13142

12/8/23    0% (0% at home; 0% at work)

12/9/23    35% (15% at home; 75% at work)
30%
dad.tnn03032, dad.tcn13142, mahm.tin03242, mahm&dad.mij13142
75%
rOzmeree&vuhlEeseeuh.tgn13152, rOzmeree.min03242, beth.tgn03142, af4apn12242, maek.tpn22242, vuhlEeseeuh.tnn13152, beth.mpb11242, beth.tpn13242, am4apn12242, am4apn03242, kAyluhb.tan03042, am4tan0375042, af3tan03042, vuhlEeseeuh.tnn21252, vuhlEeseeuh&rAelee.mnj03252
Attendance:
vuhlEeseeuh, rOzmeree, rAelee, nikOl, beth, maek, kAyluhb p
0%

12/10/23    10%? (0% at home; 15% at work?)
a1f4mpp13242, a1f4apn13242, vuhlEeseeuh.tnn03252, rOzmeree.tnn03142, rOzmeree&vuhlEeseeuh.mnj03252

12/11/23 (Mon)    2% (8% at home; 0% at work)
dad.tnn33122

12/12/23
100%
dad.tgn03042, dad.tnn12142, dad.min13242
92%
rOzmeree&vuhlEeseeuh.tgn03052, bAylee.tin13242, rOzmeree.mpn13241, vuhlEeseeuh.tnj03041, a1f0app13242, a2f4apn03252, vuhlEeseeuh.tnn03242, vuhlEeseeuh.tnn13242, rOzmeree.mpn03242, vuhlEeseeuh.tpn03242, bAylee.min13242, maek.mnj03242, maek.mib12242, vuhlEeseeuh.mpn03242, a3f5apn13242, jOrdin.mnn23242, rOzmeree.tin03042, kAshmeer.tgn13242, rOzmeree.tnn03242, rAelee.tnj13242, a4m5.aprb03242, jOrdin.mnn32252, maek.tpn03142, maek.mpn23242
Attendance:
Beginning:
bAylee, rOzmeree, vuhlEeseeuh, kEnee
End:
rOzmeree, kEnee, rAelee, jOrdin, maek
70%
dad.tnn03142, mahm.tin03142, dad.tcn13032, mahm.tin03142, dad.tnn13242

12/13/23 (changed enjoyability and comfort)
92%
dad.tgn03135, dad.tnn13245, dad.tin13124, dad.tnn33134, dad.tin13234, dad.tnn32134, mahm.tg&cn12144, mahm.tnn03244, dad.mhj03244, mahm.tnn31144, dad.tnn03134, dad.mpn03244

12/14/23
0%
66%
beth.tgn03254, maek.tgn03044, bAylee.tgn03054, beth.tnn03255, maek.tpn03244, beth&nikOl&maek.mnj03244, nikOl.tnn03244, maek.tpn11144, a1f4apn13244, kAshmeer.tgn03144, maek.tgn03144, kAshmeer.tin03244, kAshmeer.mnj13255, hAylee.tnn23154, kAyluh.tnn23254, a2m4apn13244, a3m4apn12244, rAelee.tnn12255, hAylee.mhn03244, hAylee.tnn23044, kAyluh.tin13244, hAylee.tnn03155, hAylee.mnn03255, kAshmeer.t&mpn21244, kAshmeer.min03244, kAshmeer.mnn13265
55%
dad.tnn13144, dad.tcn03044, dad.tcc03044, dad.tcc03033, dad.tnn13034, mahm.tib12134, mahm.tin21144, mahm.tnn03245

12/15/23    66%
72%
bAylee.tgn13254, bAylee.t&mnn32255, rOzmeree.tan03054, rOzmeree.tan03255, a1f4apn13244, rOzmeree.min13244, kEnee.tgn13254, beth.tiu13234, kAyluh.thn22144, bAylee.thj13144, a2f4apn13244, a3f3ttn03044, a4m4mtn03244, a4m4tan03044, rOzmeree.tpn13244, kAyluh.tgb032045, rOzmeree.tnu13255, rOzmeree.tnn13254, rOzmeree.tnn32255, kEnee.tnn31155, beth.mnn13254, beth.tnn31155, shEruhdin.m&t&tnn22155, maek.mtbj03244, kAyluh.t&mnn12254, maek.ipn13244
15%
mahm.tg&nn13144, dad.tnn12134

12/16/23
_%
dad.tnn13135, dad.tnn03234, mahm.tnn23145, mahm.tnn22145, mahm.mnn13255, dad.tnn13243, mahm.mnj03244, mahm.tcn03143

12/17/23
0%
33%
kAhnrr.tg&in03145, maek.tin03144, kAyluhb p.tin13255, maek.mpn12244, a1f5apn12254, maek.mib03244, kAhnrr.mnjb03244, a2m4apn13244, maek.tnn03244, cm2tin13244
0%

12/18/23
0%
15%
bAylee.thn030453, bAylee.tpn031442, nikOl.tpn120442, kAyluh w.apn122442, mistrr Ayjee.bnn131553
10%
mahm&dad.mpn132442, dad.mpn132442

12/19/23
33%
dad.tgn030440, dad.tgn032440, dad.tnn032332, dad.min132321
60%
tEeuh.tnn032552, nikOl.mpn132442, a1f4apn122553, a2m1tnn132543, a3f5apn122543, vuhlEeseeuh.mnn132653, maek.tin132542, a4m3aprb122543, kAhnrr.mnn132542, vuhlEeseeuh.mnn032542, vuhlEeseeuh.mnn132653, rAelee.tnj132653, af4apn132542, maek.tpn031442, rAelee.tnn132552, maek.ipn222442
15%
dad.tnn131442, mahm.tnn132441, dad.tnn232221

12/20/23    0%

12/21/23
40%
dad.tnn132331, kAyluh.ti&np132440, dad.tnn231320
30%
a1f3apn032543, a2m1tnn032552, a3m1thn032542, a4f5apn032543, rAelee.mnn034442, kAylin.tnn032542, kAhnrr.t&mg&nn222553, a5f4apn032543, vuhlEeseeuh.tgn030553, kAshmeer.tan030442, kAshmeer.tnn030662, kAshmeer.mnn034663, vuhlEeseeuh&maek.mnb034663, a6f3apn032443
0%

12/22/23
0%
45%
a1m4apn122443, jOrdin.tg&nn132663, rOzmeree.tnj131663, vuhlEeseeuh.tnn032553, kAshmeer.tpn032442, kAyluhb p.tnb221, vuhlEeseeuh.mnn032552, vuhlEeseeuh.tpn132443, kEnee.mcn132442, kAshmeer.m&t&bnn332653, kAyluh.tnn132552, kAyluh.tin032552
0%

12/23/23
10%
mahm&dad.mnn132663
30%
maek.bg&in132442, kAyluh.tin132543, a1f4apn032442, nikOl.tgn132552, a2m4apn122543, nikOl.tin030442, a3m4apn022542, vuhlEeseeuh.tnn030552, kAshmeer.tgn032542, kAshmeer.mnj034552, vuhlEeseeuh.tnn132663, kAylin.tnn131662, kAshmeer.tnj030553, a4f5apn132543, vuhlEeseeuh.mnn132652, kAylin.mnb032552, a5m4apn112443, a6m5apn020442, kAylin.mnn034552, a7f3mpp132440, a7f3apn032442, a8m3apn032542
0%

12/24/23
2% (home)
mahm&dad.tnn221452, mahm.min220442, mahm&dad.mnj132442

12/25/23
1% (other)
shAwnee.inp332550, dad.tnj231442

12/26/23
10% (home)
dad.tgn030453, mahm.mhn232443, dad.tnj032442
0% (work)
0% (home)

12/27/23
1% (home)
mahm.tcn032440, mahm.tin032330, dad.tnn031352, mahm.tin131432, dad.mnj032442

12/28/23
4% (home)
mahm.tin032440
20% (work)
a1f5tgn031553, nikOl.tgn030553, nikOl.tnn030552, maek.tgn032552, nikOl&tEeuh.mpn132563, a2f4tan030543, a3m2apn032542, nikOl.tnn032552, kAhnrr.tgn132443, rOzmeree.tgu132553, a4f2apn032543, mAysin.tnn132553, gayj.m&t&bnn322553
0% (home)

12/29/23
0% (home)
0% (work)
100% (other)
kristEenuh.anp3326603
0% (home)

12/30/23
0% (home)

12/31/23
0% (home)



1/1/24 (Monday)    4%
4% (home)
mahm.tcn0323402, mahm.tcn1303422, dad.tgn0313522, mahm.tnn1304422, mahm.min0324422, dad.tcn1322301, mahm.tcj1323301, mahm.c1nn2114532

1/2/24    15%
0% (home)
20% (work)
rOzmeree.tgn0305533, nikOl.tgn0305523, dAhnol.tgn0305533, kAshmeer.tg&in1225423, a1f4ipn1124423, a2f31125433, kAshmeer.tnn3316633, kAshmeer.bgn0325533, nikOl.tpn2224422
0% (home)

1/3/24    1%
1% (home)
dad.ti&nn2322212

1/4/24    25%
0% (home)
30% (work)
kAyluh.tgn0305423, kAyluh.tpn1315423, tEeuh.tgn0325533, tEeuh.tnn0305523, gErit.tpn0305423, gErit.mpc0324423, kAshmeer.t&mg&nn2315523, kAshmeer.mnn0325523, gErit.mpn1325423, gErit.itc0305423, kAshmeer.mnn1315533, a1f5apn1225433, vuhlEeseeuh.m&tnn3226633, kAylin.m&tnn3126633, gayj.mnn2125533, a2m4apn1124433, kAylin.tgn0325423
0% (home)

1/5/24    25%
15% (home)
dad.tin0324422, dad.tn&cn1313322, dad.tn&cn1313322
35% (work)
maek.t&mg&nn0325523, kAyluh.tnn3215523, vuhlEeseeuh.tgn1315432, nikOl.tgn0304502, kAylin.tnn1325523, kAylin.mnc0325523, rOzmeree.mnn0325533, kAylin.tnn1315523, jOrdin.mnn1325533, mAysin.tnn1315433, jOrdin.tin1325533, jOrdin.m&tns2314432, jOrdin.m&tnn3225533, beth.mpn2214422
0% (home)

1/6/24    4%
0% (home)
5% (work)
beth.tgn0314523, kAylin.tnn1325523, vuhlEeseeuh.tnj1325533, mAysin.tgn0325533, mAysin.tan0304422, beth.m&tn&in3223422
0% (home)

1/7/24    35%
0% (home)
50% (work)
kAyluh.bnn1325423, a1m5apn1225433, vuhlEeseeuh.mnn0325423, kAyluh.tnn0305523, vuhlEeseeuh.mgn0354423, maek.tgn0305523, kAyluh.tnn0326523, kAshmeer.min2325423, kAyluh.t&mnn3126633, kAshmeer.m&tnn3226633
0% (home)

1/8/24    12%
0% (home)
25% (work)
kAshmeer.tgn0305533, kAyluh.tnn2225523, mAysin.tan0304422, kAshmeer.t&mi&hn2226533, a1f5apn2215433, a2m5apj1325433, a3f1apn1225423, gayj.t&mg&nn2225533, kAshmeer.tn&pn1326533, gayj.t&mnn1325533
5% (home)
dad.tcn2312211

1/9/24    50%
0% (home)
66% (work)
kAyluh.tnn1225523, kAshmeer.tnj0305523, kAshmeer.min0354422, nikOl.tgn0325533, kAyluh.tnn2225533, kAshmeer.t&mnn2225533, hAylee.tgn0305533, mAysin.mnn1325533, a1f5aprb1325433, jOrdin.mnn3325533, hAylee.tan0304422, mAysin.tin0325433, jOrdin.mnn1325533, kAshmeer.tnn1325533, hAylee.tgj0305533, kAshmeer.mnn1325533
0% (home)

1/10/24    0%
0% (work)
0% (home)

1/11/24    33%
100% (home)
dad.tnn1312212, dad.tin0304402, dad.mg&in1323422
33% (work)
a1f4aprb0324423, tEeuh.tgn0305523, kAylin.tgn0325533, vuhlEeseeuh.tgn1225433, a2f5apn0325533, kAylin.min1326433, jOrdin.mnn1327633, jOrdin.mnn2226533, jOrdin&vuhlEeseeuh&kAylin.bnn2326533, maek.inj1325533
0% (home)

1/12/24    0%
0% (home)
0% (work)
0% (home)

1/13/24    0%
0% (home)
0% (work)
0% (home)

1/14/24    0%
0% (home)

1/15/24    0%
0% (home)
0% (work)
0% (other)
0% (home)

1/16/24    20%
0% (home)
25% (work)
a1m5apn0344423, kAshmeer.tg&i&hns1224532, vuhlEeseeuh.bnn1325533, kAshmeer.mhn2325423, kAshmeer.mnsu2244433, hAylee.bn&au1324533
0% (home)

1/17/24    18%
100% (home)
mahm.tgn0314502
20% (work)
nikOl.tgn0325523, a1f3apn0325433, a2m5aprb1325423, a3m3aprb1325423, jOrdin.mnn2325533, jOrdin.mns2325433, kAyluh.tnj2325533
0% (home)

1/18/24    32%
0% (home)
33% (work)
dAhnol.tgn0305423, kAshmeer.tgn0305533, tEeuh.tgn0325503, kAshmeer.bnn1315533, vuhlEeseeuh.bnn2326533, beth.inj0325523, vuhlEeseeuh&kAylin.tnn1325533, kAylin&vuhlEeseeuh.mnn1325533, beth.tan0304422, vuhlEeseeuh&kAylin.tgn1325533, kAhnrr.tin1325423, kAhnrr.mnn1325533, kAylin.mnn1325523, beth.bnj0305523, kAhnrr&vuhlEeseeuh.mnj1326633
33% (home)
mahm.tg&in0324422, mahm.tcn0304402, mahm.tpn2124422, dad.tnn2313312, dad.tnb2103322, dad.tnn1323222

1/19/24    1%
0% (home)
0% (work)
0% (other)
4% (home)
mahm.tgn0314432, dad.tnn0304532

1/20/24    0%
0% (home)

1/21/24    1%
5% (home)
dad.min0324422, dad.tin0324402
0% (work)
5% (home)
mahm.tnn1324432

1/22/24    0%
0% (home)

1/23/24    60%
0% (home)
70% (work)
kAshmeer.tgn0306633, nikOl.tgn0305533, vuhlEeseeuh.tgn0305533, dAhnol.tgn0304533, vuhlEeseeuh.tnn1325533, vuhlEeseeuh.tnn1325533, kAshmeer.mnn0324423, a1f5thn1325433, a2m5apn0325423, dAhnol.thn0324422, vuhlEeseeuh.t&mnn3125533, kAshmeer.tgn0326633, jOrdin.c2nn3326633, jOrdin.c3nn3326533
0% (home)

1/24/24    4%
5% (work)
rOzmeree&uhrOruh:f3&kAshmeer.tnn3326633, kAshmeer.mnsn3336633, rOzmeree.tnj2226533
0% (other)
0% (home)

1/25/24    0%
0% (home)
0% (work)
0% (home)

1/26/24    0%
0% (work)
0% (other)
0% (home)

1/27/24    0%
0% (home)
0% (work)
0% (home)

1/28/24    75%
0% (home)
100% (other)
hAwrprr:f3.ann3335523, a1f3mpn1325423, kris Anich:m4.tgn0315523
0% (home)

1/29/24    0%
0% (home)
0% (other)
0% (home)

1/30/24    15%
0% (home)
20% (work)
vuhlEeseeuh&kEnee.tnn3225533, kEnee.mnn2325533
0% (home)

1/31/24    0%
0% (home)

2/1/24    7%
0% (home)
15% (work)
kAylin.min0344422, kAylin.tnn0305522, beth.tpu0303422, jeen.mnn2234523, kAylin.tan0304422
0% (home)

2/2/24    16%
0% (home)
30% (work)
maek.tnn1325533, jOrdin.bnn2325533, jOrdin.c3i&nn3125433, kEnee.c2nn2125533
0% (home)

2/3/24    10%
50% (home)
dad.tnn3311111, mahm.tin0314402, dad.tnc2301221
12% (work)
dUhstin.tnn1325533, vuhlEeseeuh.tnn1315433, jOrdin.tnn1325533, dUhstin.mnn2325533
0% (home)

2/4/24    0%
0% (home)
0% (work)
0% (home)

2/5/24    0%
0% (home)

2/6/24    0%
0% (home)
0% (work)
0% (home)

2/7/24    0%
0% (home)
0% (work)
0% (home)

2/8/24    10%
0% (home)
12% (work)
kAylin.tnn0305532, beth&rich:m4.mhj0324422, vuhlEeseeuh.mnn0335533, jOrdin.tgn1325533, jOrdin.mnn1325533, vuhlEeseeuh.inj1325533, a1m4apn0325533, jOrdin.mnn2325533, jOrdin.c2n&in3125533
0% (home)

2/9/24    6%
0% (home)
8% (work)
kAhnrr.tgn0305533, kEnee.tgn0325533, kEnee.tnn1325533, rOzmeree.tgn0305523, kAylin.tan0305423, kAylin.tnn1325523, jOrdin.mnn1325533, jOrdin.mnn1325533, kEnee.tin0305433, a1m4apn1225423
0% (home)

2/10/24    0%
0% (home)
0% (work)
0% (other)
0% (home)

2/11/24    4%
0% (home)
0% (other)
0% (home)
8% (work)
a1f5aprb1225433, beth.tnn0304422, a2m4apn1325433, hAylee.c1i&nn1225422, a3m4apn0325423
0% (home)

2/12/24    0%
0% (home)

2/13/24    78%
0% (home)
80% (work)
kAshmeer.c2nn2225533, a1f5aprh0325433, kAyluh.c2nn2315533, kAshmeer.ipn0324422, shEruhdin.tpn0305433, kAshmeer&kAyluh&kEnee.c2nn3326633, hAylee.tnn0305533, kAshmeer.mi&nn1325433, jOrdin.mnn0325533, jOrdin.tin0325433, a2f2apn0325433, a3f5apn0325533, jOrdin.mnu3325533, jOrdin.mnu2325533, jOrdin.mnn3326633
0% (home)

2/14/24    0%
0% (home)
0% (work)
0% (home)

2/15/24    20%
0% (home)
28% (work)
tEeuh.tgn0325522, dAhnol.tgn0325533, beth.tgn0305523, beth.c2pn1225423, a1m4ipn1325433, tEeuh.tpn2225423, kEnee.tnn1335533, a2f5ap&nrb1325533
0% (home)

2/16/24    0%
0% (home)
0% (other)
0% (home)

2/17/24    0%
0% (home)
0% (work)
0% (home)

2/18/24    0%
0% (home)

2/19/24    60%
0% (home)
99% (other)
jahn.ann2326633, jahn.ann3326633, a1f2tpn1325423, Brew Haus lady:f4tpn3125423
0% (home)

2/20/24    1%
1% (home)
mahm.tnn1315533

2/21/24    0%
0% (home)

2/22/24    0%
0% (home)

2/23/24    0%
0% (home)

2/24/24    0%
0% (home)

2/25/24    0%
0% (home)

2/26/24    0%
0% (home)
0% (other)
0% (home)

2/27/24    0%
0% (home)

2/28/24    0%
0% (home)

2/29/24    0%
0% (home)

3/1/24    0%
0% (home)

3/2/24    0%
0% (home)

3/3/24    0%
0% (home)

3/4/24    0%
0% (home)

3/5/24    12%
12% (home)
dad.tnn0303531, dad.tnn2323311, dad.tnn2104402, dad.mhn0324402, dad.tnn0323402

3/6/24    0%
0% (home)

3/7/24    0%
0% (home)
0% (other)
0% (home)

3/8/24    0%
0% (home)

3/9/24    6%
6% (home)
dad.tin0324402, dad.tcn1322401, dad.tcc1213421, dad.tn&pn3213422, mahm.tnn0323502

3/10/24    1%
0% (home)
0% (other)
1% (home)
mahm.tin0324402, dad.tcn0213402

3/11/24    0%
0% (home)

3/12/24    0%
0% (home)

3/13/24    40%
40% (home)
dad.tg&c&in1312532, dad.tc&nc1302532, dad.tcn0303402, dad.tcn0303302, dad.tcn2323422, dad.tnn3104302, dad.mc&hn0334422, mahm.mnbj0325502, mahm.tn&in1215532

3/14/24    10%
10% (home)
dad.tns3323311

3/15/24    0%
0% (home)
0% (other)
0% (home)

3/16/24    0%
0% (home)
0% (other)
0% (home)

3/17/24    0%
0% (home)

3/18/24    15%
15% (home)
dad.tg&nn1304532, dad.mi&hn0324402, dad.tcn3313212

3/19/24    70%
0% (home)
100% (other)
a1f3tpn0325433, a1f3mpn1325433, a2m4tpn0315433, kAshmeer.ann3316633
0% (home)

3/20/24    6%
6% (home)
dad.tnn1304532, dad.tcn2203322, dad.min0234402

3/21/24    0%
0% (home)

3/22/24    0%
0% (home)

3/23/24    0%
0% (home)

3/24/24    0%
0% (home)

3/25/24    0%
0% (home)

3/26/24    20%
20% (home)
dad.tcn0304502, dad.tgn1304532, mahm.tnb3115533, dad.tcn1303402, dad.tn&pn3113422

3/27/24    0%
0% (home)
0% (other)
0% (home)

3/28/24    0%
0% (home)

3/29/24    0%
0% (home)

3/30/24    0%
0% (home)

3/31/24    0%
0% (home)
0% (other)
0% (home)

4/1/24    0%
0% (home)
0% (other)
0% (home)

4/2/24    0%
0% (home)

4/3/24    0%
0% (home)

4/4/24    0%
0% (home)
0% (other)
0% (home)

4/5/24    0%
0% (home)

4/6/24    0%
0% (home)
*/
