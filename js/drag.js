
let arr = Array.from(document.getElementsByClassName("draggable"));

for (let i = arr.length - 1; i >= 0; --i)
{
	arr[i].id = "draggable" + i;
	arr[i].draggable = true;
	arr[i].addEventListener("dragstart", (ev) => drag(ev) );
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