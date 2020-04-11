var S = Standards.general;

//holds the cursor position
var cursor = { moving: false, x: "-20", y: "-20" };

window.addEventListener("finished", function() {
	// interprets <note> tags
	let noteNumber = 1;
	S.forEach(S.getTag("note"), function (note, index, notes) {
		if (note.innerHTML[0] == "[" && note.innerHTML[note.innerHTML.length - 1] == "]") {
			let reference = S.getId(note.innerHTML.slice(1, -1));
			note.title = reference.title;
			note.innerHTML = reference.innerHTML;
		} else {
			note.title = note.innerHTML;
			note.innerHTML = "<sup>[" + noteNumber + "]</sup>";
			noteNumber++;
		}
	});
	// makes a bunch of my faces follow the cursor
	var faceArray = [
		document.createElement("div"),
		document.createElement("div"),
		document.createElement("div"),
		document.createElement("div"),
		document.createElement("div"),
		document.createElement("div")
		];
	faceArray.forEach(function(face) {
		face.className = "following-face";
		document.body.appendChild(face);
	});
	var pastPosition = [];
	faceArray.forEach(function (face) {
		pastPosition.push([cursor.x + 15, cursor.y + 15]);
	});
	document.addEventListener("mousemove", function(event) {
		var coords = [event.clientX, event.clientY];  // [event.pageX, event.pageY];
		cursor.moving = true;
		cursor.x = coords[0];
		cursor.y = coords[1];
		pastPosition.push([cursor.x + 15, cursor.y + 15]);
		setTimeout(function() {
			if (coords[0]==cursor.x && coords[1]==cursor.y) {  // if the cursor is in the same place as it was 100 milliseconds ago
				cursor.moving = false;
			}
		}, 100);
	});
	faceArray.forEach(function (face, index) {
		let place = 0;
		if (index == faceArray.length - 1) {
			setInterval(function () {
				if (place < pastPosition.length) {
					faceArray[index].style.left = pastPosition[place][0] + "px";
					faceArray[index].style.top = pastPosition[place][1] + "px";
					/*  // This would help decrease the length of pastPosition if it didn't mess everything up.
					if (pastPosition.length > 1) {
						pastPosition.shift();
					}
					*/
					place++;
				}
			}, (index + 2) * 5);
		} else {
			setInterval(function () {
				if (place < pastPosition.length) {
					faceArray[index].style.left = pastPosition[place][0] + "px";
					faceArray[index].style.top = pastPosition[place][1] + "px";
					place++;
				}
			}, (index + 2) * 5);
		}
	});
	/*
	setInterval(function() {
		faceArray.forEach(function(face, index, faces) {
			if (index == 0) {
				face.style.left = cursor.x + 15 + "px";  // (Number(cursor.x)-10-Number(face.style.left))/(index*10) + "px";
				face.style.top = cursor.y + 15 + "px";  // (Number(cursor.y)-10-Number(face.style.top))/(index*10) + "px";
			} else {
				var speed = 4  // pixels per 20 milliseconds (only pixels part is used)
				if (cursor.moving) {
					if (Math.abs(Number(face.style.left.slice(0,-2))-Number(faces[index-1].style.left.slice(0,-2))) > 30) {
						if (Number(face.style.left.slice(0,-2))-Number(faces[index-1].style.left.slice(0,-2)) > 0) {
							face.style.left = Number(faces[index-1].style.left.slice(0,-2)) + 30 + "px";
						} else {
							face.style.left = Number(faces[index-1].style.left.slice(0,-2)) - 30 + "px";
						}
					} else {
						if (Math.abs(Number(face.style.left.slice(0,-2))-Number(faces[index-1].style.left.slice(0,-2))) > 2*speed) {
							if (Number(face.style.left.slice(0,-2))-Number(faces[index-1].style.left.slice(0,-2)) < 0) {
								face.style.left = Number(face.style.left.slice(0,-2))+speed + "px";
							} else if (Math.round(Number(face.style.left.slice(0,-2))-Number(faces[index-1].style.left.slice(0,-2))) != 0) {
								face.style.left = Number(face.style.left.slice(0,-2))-speed + "px";
							}
						} else {
							if (Number(face.style.left.slice(0,-2))-Number(faces[index-1].style.left.slice(0,-2)) < 0) {
								face.style.left = Number(face.style.left.slice(0,-2))+1 + "px";
							} else if (Math.round(Number(face.style.left.slice(0,-2))-Number(faces[index-1].style.left.slice(0,-2))) != 0) {
								face.style.left = Number(face.style.left.slice(0,-2))-1 + "px";
							}
						}
					}
					if (Math.abs(Number(face.style.top.slice(0,-2))-Number(faces[index-1].style.top.slice(0,-2))) > 30) {
						if (Number(face.style.top.slice(0,-2))-Number(faces[index-1].style.top.slice(0,-2)) > 0) {
							face.style.top = Number(faces[index-1].style.top.slice(0,-2)) + 30 + "px";
						} else {
							face.style.top = Number(faces[index-1].style.top.slice(0,-2)) - 30 + "px";
						}
					} else {
						if (Math.abs(Number(face.style.top.slice(0,-2))-Number(faces[index-1].style.top.slice(0,-2))) > 2*speed) {
							if (Number(face.style.top.slice(0,-2))-Number(faces[index-1].style.top.slice(0,-2)) < 0) {
								face.style.top = Number(face.style.top.slice(0,-2))+speed + "px";
							} else if (Math.round(Number(face.style.top.slice(0,-2))-Number(faces[index-1].style.top.slice(0,-2))) != 0) {
								face.style.top = Number(face.style.top.slice(0,-2))-speed + "px";
							}
						} else {
							if (Number(face.style.top.slice(0,-2))-Number(faces[index-1].style.top.slice(0,-2)) < 0) {
								face.style.top = Number(face.style.top.slice(0,-2))+1 + "px";
							} else if (Math.round(Number(face.style.top.slice(0,-2))-Number(faces[index-1].style.top.slice(0,-2))) != 0) {
								face.style.top = Number(face.style.top.slice(0,-2))-1 + "px";
							}
						}
					}
				} else {
					if (Math.abs(Number(face.style.left.slice(0,-2))-(cursor.x+15)) > 2*speed) {
						if (Number(face.style.left.slice(0,-2))-(cursor.x+15) < 0) {
							face.style.left = Number(face.style.left.slice(0,-2))+speed + "px";
						} else {
							face.style.left = Number(face.style.left.slice(0,-2))-speed + "px";
						}
					} else {
						if (Number(face.style.left.slice(0,-2))-(cursor.x+15) < 0) {
							face.style.left = Number(face.style.left.slice(0,-2))+1 + "px";
						} else if (Math.round(Number(face.style.left.slice(0,-2))-(cursor.x+15)) != 0) {
							face.style.left = Number(face.style.left.slice(0,-2))-1 + "px";
						}
					}
					if (Math.abs(Number(face.style.top.slice(0,-2))-(cursor.y+15)) > 2*speed) {
						if (Number(face.style.top.slice(0,-2))-(cursor.y+15) < 0) {
							face.style.top = Number(face.style.top.slice(0,-2))+speed + "px";
						} else {
							face.style.top = Number(face.style.top.slice(0,-2))-speed + "px";
						}
					} else {
						if (Number(face.style.top.slice(0,-2))-(cursor.y+15) < 0) {
							face.style.top = Number(face.style.top.slice(0,-2))+1 + "px";
						} else if (Math.round(Number(face.style.top.slice(0,-2))-(cursor.y+15)) != 0) {
							face.style.top = Number(face.style.top.slice(0,-2))-1 + "px";
						}
					}
				}
			}
		});
	}, 20);
	*/

	// enables making use of elaborations
	S.forEach(document.getElementsByTagName("aside"), function (section) {
		if (!section.dataset.hasOwnProperty("heading")) {
			section.dataset.heading = "Elaboration";
		}
		if (section.textContent.trim() == "") {  // if I forgot to fill the aside
			section.textContent = "Oops, I forgot to fill this.";
		}
		let button = document.createElement("button");
		button.className = "hide-aside";
		button.textContent = "[Hide]";
		button.addEventListener("click", function () {
			section.style.left = "100%";
		});
		section.appendChild(button);
	});
	S.forEach(document.getElementsByClassName("elaborate"), function (trigger) {
		trigger.addEventListener("click", function () {
			let aside = trigger;
			while (aside.nextSibling && aside.tagName != "ASIDE") {
				aside = aside.nextSibling;
			}
			if (aside.tagName != "ASIDE" && aside.parentNode) {
				aside = aside.parentNode;
				while (aside.nextSibling && aside.tagName != "ASIDE") {
					aside = aside.nextSibling;
				}
			}
			if (aside.tagName == "ASIDE") {
				aside.style.left = "60%";
			}
		});
	});
});
