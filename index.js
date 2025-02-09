(() => {
    
    var _letter = document.getElementById('letter');
    
    function _letter_mouse_exited() {
	_letter.style.transform = "scale(1) translate(-50%, -50%)";
    }
    function _letter_mouse_over() {
	_letter.style.transform = "scale(1.1) translate(-45%, -45%)";
    }
    
    _letter.addEventListener("mouseleave", _letter_mouse_exited);
    _letter.addEventListener("mouseenter", _letter_mouse_over);
    _letter.addEventListener("click", () => {
	_letter.classList.add("shake");
	_letter.addEventListener("animationend", () => {
	    _letter.style.max_height = "400px";
	    _letter.style.max_width  = "300px";
	    _letter.style.width      = "300px";
	    _letter.style.height     = "380px";
	    _letter.style.top        = "45%";
	    _letter.src = "./src/2.webp";
	})
    });
    
})();
