(() => {
    
    var _letter = document.getElementById('letter');
    
    _letter.addEventListener("mouseenter", () => {
	_letter.style.transform = "scale(1.1) translate(-45%, -45%)";
	console.log("mouseenter");
    });
    _letter.addEventListener("mouseleave", () => {
	_letter.style.transform = "scale(1) translate(-50%, -50%)";
    });
    
})();
