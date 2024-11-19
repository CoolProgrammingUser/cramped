S.getId("rawPizzaConversations").textContent = JSON.stringify(pizzaConvos, null, "\t").replace(/\n\t\t\t\t\t\t/g, "").replace(/\n\t\t\t\t\t]/g, "]");

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
	let shouldCountDay = true;
	if (day.date.includes(" ")) {
		day.date = day.date.split(" ")[0];
	}
	if (document.getElementById("pizzaConvoDateRange").value) {
		let dateRange = document.getElementById("pizzaConvoDateRange").value.trim();
		if (dateRange.search(/[^\d\/-]/) > -1) {
			alert("An invalid date (range) was given.");
			throw "An invalid date (range) was given.";
		}
		let studyStart = new Date("11/27/2023").getTime();
		let studyEnd = new Date("3/26/2024").getTime();
		if (dateRange.indexOf("-") > -1) {  // if it's a date range
			if (dateRange.search(/[\d\/]-[\d\/]/) == -1) {
				alert("An invalid date range was given.");
				throw "An invalid date range was given.";
			}
			let date1 = dateRange.split("-")[0];
			let date2 = dateRange.split("-")[1];
			if (date1.search(/\d{1,2}\/\d{1,2}\/\d{4}/) > -1) {
				date1 = new Date(date1).getTime();
			} else if (date1.search(/\d{1,2}\/d{1,2}\/\d{2}/) > -1) {
				date1 = new Date(date1.splice(date1.lastIndexOf("/") + 1, 0, "20" + date1.slice(-2))).getTime();
			} else if (date1.search(/\d{1,2}\/\d{1,2}/) > -1) {
				if (Number(date1.match(/\d+/)[0]) > 10) {
					date1 = new Date(date1 + "/2023").getTime();
				} else {
					date1 = new Date(date1 + "/2024").getTime();
				}
			} else {
				alert("The date wasn't formatted properly.");
				throw "The date wasn't formatted properly.";
			}
			if (date2.search(/\d{1,2}\/\d{1,2}\/\d{4}/) > -1) {
				date2 = new Date(date2).getTime();
			} else if (date2.search(/\d{1,2}\/d{1,2}\/\d{2}/) > -1) {
				date2 = new Date(date2.splice(date2.lastIndexOf("/") + 1, 0, "20" + date2.slice(-2))).getTime();
			} else if (date2.search(/\d{1,2}\/\d{1,2}/) > -1) {
				if (Number(date2.match(/\d+/)[0]) > 10) {
					date2 = new Date(date2 + "/2023").getTime();
				} else {
					date2 = new Date(date2 + "/2024").getTime();
				}
			} else {
				alert("The date wasn't formatted properly.");
				throw "The date wasn't formatted properly.";
			}
			let dateMilliseconds = new Date(day.date).getTime();
			if (dateMilliseconds < date1 || dateMilliseconds > date2) {
				shouldCountDay = false;
			}
		} else {  // if it's a start date
			if (dateRange.search(/\d{1,2}\/\d{1,2}\/\d{4}/) > -1) {
				dateRange = new Date(dateRange).getTime();
			} else if (dateRange.search(/\d{1,2}\/d{1,2}\/\d{2}/) > -1) {
				dateRange = new Date(dateRange.splice(dateRange.lastIndexOf("/") + 1, 0, "20" + dateRange.slice(-2))).getTime();
			} else if (dateRange.search(/\d{1,2}\/\d{1,2}/) > -1) {
				if (Number(dateRange.match(/\d+/)[0]) > 10) {
					dateRange = new Date(dateRange + "/2023").getTime();
				} else {
					dateRange = new Date(dateRange + "/2024").getTime();
				}
			} else {
				alert("The date wasn't formatted properly.");
				throw "The date wasn't formatted properly.";
			}
			if (new Date(day.date).getTime() < dateRange) {
				shouldCountDay = false;
			}
		}
	}
	return shouldCountDay;
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
	// filters types of people in or out
	let coworkerList = Object.keys(pizzaPeople);
	coworkerList.splice(coworkerList.indexOf("mahm"), 1);
	coworkerList.splice(coworkerList.indexOf("dad"), 1);
	let isACoworker = convo.people.some(person => coworkerList.includes(person.name));
	if (!S.getId("coworkerPizzaConvos").checked && isACoworker) {  // if coworkers aren't desired
		shouldCountConvo = false;
	} else if (!S.getId("otherPeoplePizzaConvos").checked && !isACoworker) {  // if everyone else isn't desired
		shouldCountConvo = false;
	}
	// filters specific people in or out
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
	// filters based on the purpose of the conversation (incomplete)
	if (!convo.purpose) {
		shouldCountConvo = false;
	} else {
		if (!S.getId("casualPizzaConvos").checked && convo.purpose.includes("n")) {
			shouldCountConvo = false;
		}
		if (!S.getId("greetingPizzaConvos").checked && convo.purpose.includes("g")) {
			shouldCountConvo = false;
		}
		if (!S.getId("practicalPizzaConvos").checked && (convo.purpose.includes("p") || convo.purpose.includes("i"))) {
			shouldCountConvo = false;
		}
	}
	// filters based on the circumstances of the conversation (incomplete)
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
	// filters based on the length of the conversation
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
	// filters based on how I feel during the conversation
	if (!S.getId("mood1PizzaConvos").checked && convo.mood == 1) {
		shouldCountConvo = false;
	} else if (!S.getId("mood2PizzaConvos").checked && convo.mood == 2) {
		shouldCountConvo = false;
	} else if (!S.getId("mood3PizzaConvos").checked && convo.mood == 3) {
		shouldCountConvo = false;
	} else if (!S.getId("mood4PizzaConvos").checked && convo.mood == 4) {
		shouldCountConvo = false;
	} else if (!S.getId("mood5PizzaConvos").checked && convo.mood == 5) {
		shouldCountConvo = false;
	} else if (!S.getId("mood6PizzaConvos").checked && convo.mood == 6) {
		shouldCountConvo = false;
	} else if (!S.getId("mood7PizzaConvos").checked && convo.mood == 7) {
		shouldCountConvo = false;
	}
	// filters based on how I think I should feel during the conversation
	S.forEach([1, 2, 3, 4, 5, 6, 7], function (number) {
		if (!S.getId("topic" + number + "PizzaConvos").checked && convo.topic == number) {
			shouldCountConvo = false;
		}
	});
	// filters based on the expression of the other person
	if (!S.getId("theirSmile1PizzaConvos").checked && convo.theirSmile == 1) {
		shouldCountConvo = false;
	} else if (!S.getId("theirSmile2PizzaConvos").checked && convo.theirSmile == 2) {
		shouldCountConvo = false;
	} else if (!S.getId("theirSmile3PizzaConvos").checked && convo.theirSmile == 3) {
		shouldCountConvo = false;
	} else if (!S.getId("theirSmile0PizzaConvos").checked && ![1, 2, 3].includes(convo.theirSmile)) {  // if unknown expressions aren't wanted
		shouldCountConvo = false;
	}
	// filters based on my expression
	if (!S.getId("mySmile1PizzaConvos").checked && convo.mySmile == 1) {
		shouldCountConvo = false;
	} else if (!S.getId("mySmile2PizzaConvos").checked && convo.mySmile == 2) {
		shouldCountConvo = false;
	} else if (!S.getId("mySmile3PizzaConvos").checked && convo.mySmile == 3) {
		shouldCountConvo = false;
	} else if (!S.getId("mySmile0PizzaConvos").checked && ![1, 2, 3].includes(convo.mySmile)) {  // if knowing my expression is required
		shouldCountConvo = false;
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

// establishes default information
var combinedData = {};
var corrections = {};
var significance = {};

function addToppings(c) {
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



function reheatPizza() {
	/**
	puts information into the pizza conversation tables
	*/
	//// retrieves filtering information
	let checkboxes = {};

	// resets conversation data
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
							if (!isNaN(c.density) && c.density < 3) {  //// if adjusting the number of conversations
								// adjusts the conversation count and length
								let adjConvos = [];
								let newCount = 0;
								let newLength = 0;
								if (c.density == 2) {
									if (c.length < 2) {
										newCount = 2;
										newLength = 0;
									} else if (c.length == 2) {
										newCount = 3;
										newLength = 1;
									} else if (c.length == 3) {
										newCount = 4;
										newLength = 2;
									}
								} else if (c.density == 1) {
									if (c.length < 2) {
										newCount = 2;
										newLength = 0;
									} else if (c.length == 2) {
										newCount = 2;
										newLength = 1
									} else if (c.length == 3) {
										newCount = 4;
										newLength = 1;
									}
								}
								//// should better help correct c initiator conversations
								if (c.initiator.includes("c")) {  // if there were multiple initiators
									if (c.initiator != "c2" && newCount < 3) {
										newCount = 3;
									}
								}
								S.forEach(newCount, function (_, index) {
									let convoCopy = JSON.parse(JSON.stringify(c));
									convoCopy.length = newLength;
									if (c.initiator.includes("c")) {  // if there were multiple initiators
										//// tries to reduce initiator repetition
										if (c.initiator == "c1") {
											if (newCount == 2) {
												convoCopy.initiator = ["t", "c2"][index];
											} else if (newCount == 3) {
												convoCopy.initiator = ["t", "t", "m"][index];
											} else if (newCount == 4) {
												convoCopy.initiator = ["t", "t", "t", "m"][index];
											} else if (newCount == 5) {
												convoCopy.initiator = ["t", "t", "t", "m", "m"][index];
											}
										} else if (c.initiator == "c2") {
											if (newCount % 2 == 0) {
												convoCopy.initiator = ["m", "t"][index % 2];
											} else if (index < newCount - 1) {
												convoCopy.initiator = ["m", "t"][index % 2];
											}
										} else if (c.initiator == "c3") {
											if (newCount == 2) {
												convoCopy.initiator = ["m", "c2"][index];
											} else if (newCount == 3) {
												convoCopy.initiator = ["m", "m", "t"][index];
											} else if (newCount == 4) {
												convoCopy.initiator = ["m", "m", "m", "t"][index];
											} else if (newCount == 5) {
												convoCopy.initiator = ["m", "m", "m", "t", "t"][index];
											}
										} else if (c.initiator == "c4") {
											if (newCount == 2) {
												convoCopy.initiator = ["c2", "c4"][index];
											} else if (newCount == 3) {
												convoCopy.initiator = ["m", "t", "b"][index];
											} else if (newCount == 4) {
												convoCopy.initiator = ["m", "t", "b", "c4"][index];
											} else if (newCount == 5) {
												convoCopy.initiator = ["m", "m", "t", "t", "b"][index];
											}
										}
									}
									adjConvos.push(convoCopy);
								});
								S.forEach(adjConvos, function (c2) {
									addToppings(c2);
								});
							} else {
								addToppings(c);
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
			let cell = row.getElementsByTagName("td")[["m", "t", "b", "a", "i", "e"].indexOf(initiator)];
			cell.textContent = value;
			let total = combinedData.grandTotal[gender][initiator];
			let yellowThreshold = 12;
			let greenThreshold = 20;
			let red;
			if (total <= yellowThreshold) {
				red = 255;
			} else if (total >= greenThreshold) {
				red = 0;
			} else {
				red = Math.round(255 - (total - yellowThreshold) / (greenThreshold - yellowThreshold) * 255);
			}
			let green;
			if (total >= yellowThreshold) {
				green = 255;
			} else {
				green = Math.round(total / yellowThreshold * 255);
			}
			cell.style.background = "rgb(" + red + ", " + green + ", 0)";
			if (green > 150) {
				cell.style.color = "black";
			} else {
				cell.style.color = "white";
			}
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

S.listen("fullPizzaConvoDateRange", "click", function () {
	S.getId("pizzaConvoDateRange").value = "";
	reheatPizza();
});
S.listen("firstHalfOfPizzaConvoDateRange", "click", function () {
	S.getId("pizzaConvoDateRange").value = "11/27-1/25";
	reheatPizza();
});
S.listen("lastHalfOfPizzaConvoDateRange", "click", function () {
	S.getId("pizzaConvoDateRange").value = "1/26";
	reheatPizza();
});
S.listen("firstHalfOfPizzaConvoData", "click", function () {
	S.getId("pizzaConvoDateRange").value = "11/27-1/5";
	reheatPizza();
});
S.listen("lastHalfOfPizzaConvoData", "click", function () {
	S.getId("pizzaConvoDateRange").value = "1/6";
	reheatPizza();
});

S.listen([
	"pizzaConvoDateRange",
	"coworkerPizzaConvos", "otherPeoplePizzaConvos",
	"pizzaPersonFilterCheckbox", "pizzaPersonFilterList",
	"workPizzaConvos", "homePizzaConvos", "otherPizzaConvos",
	"casualPizzaConvos", "greetingPizzaConvos", "practicalPizzaConvos",
	"broadcastedPizzaConvos", "joinedPizzaConvos", "continuedPizzaConvos",
	"length0PizzaConvos", "length1PizzaConvos", "length2PizzaConvos", "length3PizzaConvos",
	"mood1PizzaConvos", "mood2PizzaConvos", "mood3PizzaConvos", "mood4PizzaConvos", "mood5PizzaConvos", "mood6PizzaConvos", "mood7PizzaConvos",
	"topic1PizzaConvos", "topic2PizzaConvos", "topic3PizzaConvos", "topic4PizzaConvos", "topic5PizzaConvos", "topic6PizzaConvos", "topic7PizzaConvos",
	"theirSmile0PizzaConvos", "theirSmile1PizzaConvos", "theirSmile2PizzaConvos", "theirSmile3PizzaConvos",
	"mySmile0PizzaConvos", "mySmile1PizzaConvos", "mySmile2PizzaConvos", "mySmile3PizzaConvos",
	"pizzaAspectSelector", "mathematicalPie"
], "change", function () {
	reheatPizza();
});
