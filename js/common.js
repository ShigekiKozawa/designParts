// toggle
function toggle() {
	const elements = document.getElementsByClassName('toggle_list');
	const parent = event.target.parentNode;
	Array.prototype.forEach.call(elements, function(element) {
	  element.classList.remove('active');
	});
	parent.classList.toggle("active");
}