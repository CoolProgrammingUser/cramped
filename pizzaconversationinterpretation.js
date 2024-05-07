function parsePizzaConvo(dataList) {
	/**
	turns a list of data on an interaction into an object

	convo = {
		people: [
			{
				name: "",
				gender: "m|f|u",
				age: 1-5
			}
		],
		initiator: "",
		purpose: "",
		circumstances: [""],
		length: 0-3,
		density: 1-3,
		participation: 0-4,
		mood: 1-7,
		topic: 1-7,
		theirSmile: 1-3,
		mySmile: 1-3
	}
	*/
	let convo = {};
	if (8 < dataList.length && dataList.length < 12) {
		convo.people = [];
		S.forEach(dataList[0].split("&"), function (person) {
			person = person.trim();
			let p = {};
			if (Object.keys(pizzaPeople).includes(person)) {
				p.name = person;
				p.gender = pizzaPeople[person].gender;
				p.age = pizzaPeople[person].age;
			} else if (person.includes(":")) {
				p.name = person.slice(0, person.indexOf(":"));
				p.gender = person.slice(person.indexOf(":") + 1)[0];
				p.age = Number(person.slice(person.search(/\d/))[0]);
			} else if (person.search(/^(?:a|p|c)\d?(?:m|f|u)\d$/) > -1) {
				p.name = person.slice(0, -2);
				p.gender = person.slice(-2, -1);
				p.age = Number(person.slice(-1));
			} else {
				console.error("A person wasn't formatted properly: " + person);
			}
			convo.people.push(p);
		});
		convo.initiator = dataList[1];
		convo.purpose = dataList[2];
		if (dataList[3].length == 1) {
			if (dataList[3] == "-") {
				convo.circumstances = [];
			} else {
				convo.circumstances = [dataList[3]];
			}
		} else {
			convo.circumstances = dataList[3].match(/r(?:m|t|b|h)|n|b|j|c|p|u|s/g);
		}
		convo.length = Number(dataList[4]);
		convo.density = Number(dataList[5]);
		convo.participation = Number(dataList[6]);
		if (dataList.length == 9) {
			convo.mood = Number(dataList[7]);  //// this may not be proper
			if (true) {  //// if should guess at the other values
				convo.topic = 2 + Number(dataList[8]);
				convo.theirSmile = 0;
				convo.mySmile = 0;
			}
		} else {
			convo.mood = Number(dataList[7]);
			convo.topic = Number(dataList[8]);
			convo.theirSmile = Number(dataList[9]);
			if (dataList.length == 10) {
				if (true) {  //// if should guess at the other values
					convo.mySmile = 0;
				}
			} else {
				convo.mySmile = Number(dataList[10]);
			}
		}
	} else {
		console.info("Found a person with unreadable data: " + JSON.stringify(dataList));
	}
	return convo;
}



function filterPizzaDay(day) {
	return true;
}

function filterPizzaPlace(place) {
	let shouldCountPlace = true;
	if (!S.getId("workPizzaConvos").checked && place.category == "work") {
		shouldCountPlace = false;
	}
	if (!S.getId("homePizzaConvos").checked && place.category == "home") {
		shouldCountPlace = false;
	}
	if (!S.getId("otherPizzaConvos").checked && place.category == "other") {
		shouldCountPlace = false;
	}
	return shouldCountPlace;
}

function filterPizzaConvo(convo) {
	let shouldCountConvo = true;
	if (Object.keys(convo).length < 11) {
		shouldCountConvo = false;
	}
	if (!convo.initiator || convo.initiator == "-") {
		shouldCountConvo = false;
	}
	if (S.getId("pizzaPersonFilterList").value.trim()) {
		let peopleListed = S.getId("pizzaPersonFilterList").value.trim().replace(/,? +and +|, *|,? *& */g, "&").split("&");
		if (S.getId("pizzaPersonFilterCheckbox").checked) {
			if (!convo.people.every(person => peopleListed.includes(person.name))) {  // if not all of the people in the conversation are desired
				shouldCountConvo = false;
			}
		} else {
			if (convo.people.some(person => peopleListed.includes(person.name))) {  // if any of the people are supposed to be filtered out
				shouldCountConvo = false;
			}
		}
	}
	if (!convo.purpose) {
		shouldCountConvo = false;
	} else {
		if (!S.getId("casualPizzaConvos").checked && convo.purpose.includes("n")) {
			shouldCountConvo = false;
		}
		if (!S.getId("greetingPizzaConvos").checked && convo.purpose.includes("g")) {
			shouldCountConvo = false;
		}
		if (!S.getId("practicalPizzaConvos").checked && convo.purpose.includes("p")) {
			shouldCountConvo = false;
		}
	}
	if (convo.circumstances) {
		if (!S.getId("broadcastedPizzaConvos").checked && convo.circumstances.includes("b")) {
			shouldCountConvo = false;
		}
		if (!S.getId("joinedPizzaConvos").checked && convo.circumstances.includes("j")) {
			shouldCountConvo = false;
		}
		if (!S.getId("continuedPizzaConvos").checked && convo.circumstances.includes("c")) {
			shouldCountConvo = false;
		}
	}
	if (isNaN(convo.length)) {
		shouldCountConvo = false;
	} else {
		if (!S.getId("length0PizzaConvos").checked && convo.length == 0) {
			shouldCountConvo = false;
		}
		if (!S.getId("length1PizzaConvos").checked && convo.length == 1) {
			shouldCountConvo = false;
		}
		if (!S.getId("length2PizzaConvos").checked && convo.length == 2) {
			shouldCountConvo = false;
		}
		if (!S.getId("length3PizzaConvos").checked && convo.length == 3) {
			shouldCountConvo = false;
		}
	}
	return shouldCountConvo;
}



function setPizzaSignificance(sigLists) {
	let firstValue = S.getId("pizzaAspectSelector").value;
	let pizzaAggregate = S.getId("pizzaAggregate");
	let row = pizzaAggregate.rows[4];
	if (["grandTotal", "uniqueTotal"].includes(firstValue)) {
		S.forEach(["m", "t", "b", "a", "i", "e"], function (initiator, index) {
			row.cells[index + 1].textContent = findChiSquare(sigLists[firstValue].m[initiator].length, sigLists[firstValue].f[initiator].length);
		});
	} else {
		S.forEach(["m", "t", "b", "a", "i", "e"], function (initiator, index) {
			if (sigLists[firstValue].m[initiator].length > 1 && sigLists[firstValue].f[initiator].length > 1) {
				row.cells[index + 1].innerHTML = "";
				let sigContainer = document.createElement("div");
				sigContainer.style.cursor = "pointer";
				let sigText = document.createElement("div");
				let maleList = sigLists[firstValue].m[initiator];
				let femaleList = sigLists[firstValue].f[initiator];
				if (["mood", "topic", "theirSmile", "mySmile"].includes(firstValue)) {  // if the zeros should be filtered out
					maleList = maleList.filter(x => x);
					femaleList = femaleList.filter(x => x);
				}
				sigText.textContent = findSimilarity(maleList, femaleList) * 100 + "%";
				sigContainer.appendChild(sigText);
				let sigListDisplay = document.createElement("div");
				sigListDisplay.className = "pop-up";
				sigListDisplay.style.display = "none";
				sigListDisplay.style.textAlign = "left";
				sigListDisplay.style.opacity = 1;
				sigListDisplay.innerHTML = "Males: [" + maleList.join(", ") + "]<br><br>Females: [" + femaleList.join(", ") + "]";
				sigContainer.appendChild(sigListDisplay);
				row.cells[index + 1].appendChild(sigContainer);
				sigContainer.addEventListener("click", function () {
					if (sigListDisplay.style.display == "none") {
						sigListDisplay.style.display = "inline-block";
					} else {
						sigListDisplay.style.display = "none";
					}
				});
			} else {
				row.cells[index + 1].innerHTML = "?";
			}
		});
	}
}



function reheatPizza() {
	/**
	puts information into the pizza conversation tables
	*/
	//// retrieves filtering information
	let checkboxes = {};
	// establishes default information
	let combinedData = {};
	let corrections = {};
	let significance = {};
	S.forEach(["grandTotal", "uniqueTotal", "length", "density", "participation", "mood", "topic", "theirSmile", "mySmile"], function (infoName) {
		combinedData[infoName] = {};
		corrections[infoName] = {};
		significance[infoName] = {};
		S.forEach(["m", "f", "e"], function (gender) {  // male, female, everyone
			combinedData[infoName][gender] = {};
			corrections[infoName][gender] = {};
			significance[infoName][gender] = {};
			S.forEach(["m", "t", "b", "a", "i", "e"], function (initiator) {  // me, them, both, arranged, induced, everyone
				combinedData[infoName][gender][initiator] = 0;
				corrections[infoName][gender][initiator] = 0;
				significance[infoName][gender][initiator] = [];
			});
		});
	});

	// starts looking through the data
	S.forEach(pizzaConvos, function (day) {
		if (filterPizzaDay(day)) {  //// if the day should be counted
			S.forEach(day.places, function (place) {
				if (filterPizzaPlace(place)) {  //// if the place should be counted
					S.forEach(place.convos, function (convo) {
						let c = parsePizzaConvo(convo);
						if (Object.keys(c).length > 0 && filterPizzaConvo(c)) {  //// if the conversation should be counted
							if (false && c.density) {  //// if adjusting the number of conversations
								//// adjusts the conversation count and length
								let adjConvos = [];
								if (c.density == 2) {
									if (c.length < 2) {
										
									} else if (c.length == 2) {

									} else if (c.length == 3) {

									}
								} else if (c.density == 1) {
									if (c.length < 2) {
										
									} else if (c.length == 2) {

									} else if (c.length == 3) {

									}
								}
							} else {
								// sets the grand total information
								S.forEach(c.people, function (p) {
									combinedData.grandTotal.e.e++;
									combinedData.grandTotal[p.gender].e++;
									significance.grandTotal.e.e.push(1);
									significance.grandTotal[p.gender].e.push(1);
									if (c.initiator == "c4") {
										combinedData.grandTotal.e.m++;
										combinedData.grandTotal.e.t++;
										combinedData.grandTotal.e.b++;
										combinedData.grandTotal[p.gender].m++;
										combinedData.grandTotal[p.gender].t++;
										combinedData.grandTotal[p.gender].b++;
										significance.grandTotal.e.m.push(1);
										significance.grandTotal.e.t.push(1);
										significance.grandTotal.e.b.push(1);
										significance.grandTotal[p.gender].m.push(1);
										significance.grandTotal[p.gender].t.push(1);
										significance.grandTotal[p.gender].b.push(1);
									} else if (c.initiator.includes("c")) {  ////
										combinedData.grandTotal.e.m++;
										combinedData.grandTotal.e.t++;
										combinedData.grandTotal[p.gender].m++;
										combinedData.grandTotal[p.gender].t++;
										significance.grandTotal.e.m.push(1);
										significance.grandTotal.e.t.push(1);
										significance.grandTotal[p.gender].m.push(1);
										significance.grandTotal[p.gender].t.push(1);
									} else {
										combinedData.grandTotal.e[c.initiator]++;
										combinedData.grandTotal[p.gender][c.initiator]++;
										significance.grandTotal.e[c.initiator].push(1);
										significance.grandTotal[p.gender][c.initiator].push(1);
									}
									// sets the unique total information
									if (p.name.search(/^a\d*$|^c\d*$/) == -1) {  // if I would recognize the person
										significance.uniqueTotal.e.e.push(p.name);
										significance.uniqueTotal[p.gender].e.push(p.name);
										if (c.initiator == "c4") {
											significance.uniqueTotal.e.m.push(p.name);
											significance.uniqueTotal.e.t.push(p.name);
											significance.uniqueTotal.e.b.push(p.name);
											significance.uniqueTotal[p.gender].m.push(p.name);
											significance.uniqueTotal[p.gender].t.push(p.name);
											significance.uniqueTotal[p.gender].b.push(p.name);
										} else if (c.initiator.includes("c")) {  ////
											significance.uniqueTotal.e.m.push(p.name);
											significance.uniqueTotal.e.t.push(p.name);
											significance.uniqueTotal[p.gender].m.push(p.name);
											significance.uniqueTotal[p.gender].t.push(p.name);
										} else {
											significance.uniqueTotal.e[c.initiator].push(p.name);
											significance.uniqueTotal[p.gender][c.initiator].push(p.name);
										}
									}
									// sets many other aspects
									S.forEach(["length", "density", "participation", "mood", "topic", "theirSmile", "mySmile"], function (aspect) {
										combinedData[aspect].e.e += c[aspect];
										combinedData[aspect][p.gender].e += c[aspect];
										significance[aspect].e.e.push(c[aspect]);
										significance[aspect][p.gender].e.push(c[aspect]);
										if (c.initiator == "c4") {
											combinedData[aspect].e.m += c[aspect];
											combinedData[aspect].e.t += c[aspect];
											combinedData[aspect].e.b += c[aspect];
											combinedData[aspect][p.gender].m += c[aspect];
											combinedData[aspect][p.gender].t += c[aspect];
											combinedData[aspect][p.gender].b += c[aspect];
											significance[aspect].e.m.push(c[aspect]);
											significance[aspect].e.t.push(c[aspect]);
											significance[aspect].e.b.push(c[aspect]);
											significance[aspect][p.gender].m.push(c[aspect]);
											significance[aspect][p.gender].t.push(c[aspect]);
											significance[aspect][p.gender].b.push(c[aspect]);
										} else if (c.initiator.includes("c")) {  ////
											combinedData[aspect].e.m += c[aspect];
											combinedData[aspect].e.t += c[aspect];
											combinedData[aspect][p.gender].m += c[aspect];
											combinedData[aspect][p.gender].t += c[aspect];
											significance[aspect].e.m.push(c[aspect]);
											significance[aspect].e.t.push(c[aspect]);
											significance[aspect][p.gender].m.push(c[aspect]);
											significance[aspect][p.gender].t.push(c[aspect]);
										} else {
											combinedData[aspect].e[c.initiator] += c[aspect];
											combinedData[aspect][p.gender][c.initiator] += c[aspect];
											significance[aspect].e[c.initiator].push(c[aspect]);
											significance[aspect][p.gender][c.initiator].push(c[aspect]);
										}
									});
									// determines corrections for averages containing incomplete/inconsistent data
									S.forEach(["density", "participation", "mood", "topic", "theirSmile", "mySmile"], function (aspect) {
										if (aspect == "-" || ["topic", "theirSmile", "mySmile"].includes(aspect) && c[aspect] == 0) {
											corrections[aspect].e.e++;
											corrections[aspect][p.gender].e++;
											if (c.initiator == "c4") {
												corrections[aspect].e.m++;
												corrections[aspect].e.t++;
												corrections[aspect].e.b++;
												corrections[aspect][p.gender].m++;
												corrections[aspect][p.gender].t++;
												corrections[aspect][p.gender].b++;
											} else if (c.initiator.includes("c")) {  ////
												corrections[aspect].e.m++;
												corrections[aspect].e.t++;
												corrections[aspect][p.gender].m++;
												corrections[aspect][p.gender].t++;
											} else {
												corrections[aspect].e[c.initiator]++;
												corrections[aspect][p.gender][c.initiator]++;
											}
										}
									});
								});
							}
						}
					});
				}
			});
		}
	});

	// finishes formatting the data
	S.forEach(["m", "f", "e"], function (gender) {
		S.forEach(["m", "t", "b", "a", "i", "e"], function (initiator) {
			combinedData.uniqueTotal[gender][initiator] = significance.uniqueTotal[gender][initiator].filter((value, index, self) => { return self.indexOf(value) === index; }).length;
		});
	});
	S.forEach(["density", "participation", "mood", "topic", "theirSmile", "mySmile"], function (aspect) {
		S.forEach(["m", "f", "e"], function (gender) {
			S.forEach(["m", "t", "b", "a", "i", "e"], function (initiator) {
				combinedData[aspect][gender][initiator] /= combinedData.grandTotal[gender][initiator] - corrections[aspect][gender][initiator];
			});
		});
	});

	// chooses the data to display
	let dataTotals = {};
	let firstAspect = S.getId("pizzaAspectSelector").value;
	dataTotals = JSON.parse(JSON.stringify(combinedData[firstAspect]));
	let mathPie = S.getId("mathematicalPie").value.trim();
	if (mathPie != "") {
		oldMathPie = mathPie;
		mathPie = mathPie.replace(/(\+|\-|\*|\/)[^a-zA-Z0-9-]*(\w+|\-?\d|\-?\d*\.\d+)/g, '["$1", "$2"]');
		if (oldMathPie != mathPie) {  // if the math is properly formatted
			mathPie = JSON.parse("[" + mathPie.replace(/\]\[/g, "], [") + "]");
		} else {
			mathPie = "";
		}
	}
	if (S.getType(mathPie) == "Array" && mathPie.length > 0) {
		let mathIndex = 0;
		while (mathIndex < mathPie.length) {  // while more [math, aspect/number] groups exist
			S.forEach(["m", "f", "e"], function (gender) {
				S.forEach(["m", "t", "b", "a", "i", "e"], function (initiator) {
					if (mathPie[mathIndex][1].search(/\d/) > -1) {  // if doing math with a number
						switch (mathPie[mathIndex][0]) {
							case "+":
								dataTotals[gender][initiator] += Number(mathPie[mathIndex][1]);
								break;
							case "-":
								dataTotals[gender][initiator] -= Number(mathPie[mathIndex][1]);
								break;
							case "*":
								dataTotals[gender][initiator] *= Number(mathPie[mathIndex][1]);
								break;
							case "/":
								dataTotals[gender][initiator] /= Number(mathPie[mathIndex][1]);
								break;
						}
					} else {  // if doing math with an aspect
						switch (mathPie[mathIndex][0]) {
							case "+":
								dataTotals[gender][initiator] += combinedData[mathPie[mathIndex][1]][gender][initiator];
								break;
							case "-":
								dataTotals[gender][initiator] -= combinedData[mathPie[mathIndex][1]][gender][initiator];
								break;
							case "*":
								dataTotals[gender][initiator] *= combinedData[mathPie[mathIndex][1]][gender][initiator];
								break;
							case "/":
								dataTotals[gender][initiator] /= combinedData[mathPie[mathIndex][1]][gender][initiator];
								break;
						}
					}
				});
			});
			mathIndex++;
		}
	}
	let pizzaAggregate = S.getId("pizzaAggregate");
	S.forEach(dataTotals, function (set, gender) {
		let row = pizzaAggregate.getElementsByTagName("tr")[["m", "f", "e"].indexOf(gender) + 1];
		S.forEach(set, function (value, initiator) {
			row.getElementsByTagName("td")[["m", "t", "b", "a", "i", "e"].indexOf(initiator)].textContent = value;
		});
	});

	// determines the significance
	if (mathPie) {
		S.forEach(6, function (_, index) {
			pizzaAggregate.rows[4].cells[index + 1].innerHTML = "";
		});
	} else {
		setPizzaSignificance(significance);
	}

	// makes sure no long decimals are displayed
	S.forEach(pizzaAggregate.getElementsByTagName("td"), function (cell) {
		if (cell.textContent.includes(".")) {  // if the number displayed has a decimal
			if (cell.textContent.includes("%")) {
				cell.children[0].children[0].textContent = Math.round(Number(cell.textContent.match(/\d+(?:\.\d+)?/)[0]) * 100) / 100 + "%";
			} else {
				cell.textContent = Math.round(Number(cell.textContent) * 100) / 100;
			}
		}
	});
}

reheatPizza();

S.listen([
	"pizzaPersonFilterCheckbox", "pizzaPersonFilterList",
	"workPizzaConvos", "homePizzaConvos", "otherPizzaConvos",
	"casualPizzaConvos", "greetingPizzaConvos", "practicalPizzaConvos",
	"broadcastedPizzaConvos", "joinedPizzaConvos", "continuedPizzaConvos",
	"length0PizzaConvos", "length1PizzaConvos", "length2PizzaConvos", "length3PizzaConvos",
	"pizzaAspectSelector", "mathematicalPie"
], "change", function () {
	reheatPizza();
});
