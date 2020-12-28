
addListenersToDraggables();
addListenersToDropReceivers();

function addListenersToDraggables() {

	let draggables = Array.from(document.getElementsByClassName("draggable"));

	for (let i = draggables.length - 1; i >= 0; --i)
	{
		draggables[i].id = "draggable" + i;
		draggables[i].draggable = true;
		draggables[i].addEventListener("dragstart", (ev) => drag(ev) );
	}
}

function addListenersToDropReceivers() {
	
	let dropReceivers = Array.from(document.getElementsByClassName("dropReceiver"));

	for (let i = dropReceivers.length - 1; i >= 0; --i) {
		dropReceivers[i].addEventListener("drop", (ev) => drop(ev));
		dropReceivers[i].addEventListener("dragover", (ev) => allowDrop(ev));
	}
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("id", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	let id = ev.dataTransfer.getData("id");
	ev.target.appendChild(document.getElementById(id));
}