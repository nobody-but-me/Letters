(() => {
    
    var _letter_container = document.getElementById('letter_container');
    var _letter_button	  = document.getElementById("letter_button");

    var _letter_paper;
    var _letter_state     = 0;
    var _letter           = document.getElementById("letter");
    
    var _clicked = false;
    
    function _letter_mouse_exited() {
	_letter_container.style.transform = "scale(1) translate(-50%, -50%) rotate(0deg)";
	
    }
    function _letter_mouse_over() {
	if (_letter_state != 2) {
	    if (_clicked === false) {
		_letter_container.style.transform = "scale(1.1) translate(-45%, -45%) rotate(-5deg)";
		return;
	    }
	    _letter_container.style.transform = "scale(1) translate(-50%, -50%) rotate(0deg)";
	}
	_letter_container.style.transform = "scale(1) translate(-50%, -50%) rotate(0deg)";
    }
    
    _letter_button.addEventListener("mouseleave", _letter_mouse_exited);
    _letter_button.addEventListener("mouseenter", _letter_mouse_over);
    _letter_button.addEventListener("click",      _letter_click);
    
    _letter_container.style.top = "50%";
    
    function _letter_click() {
	// _letter_container.addEventListener("animation
	if (_clicked === false) {
	    _clicked = true;
	    if (_letter_state === 0) {
		_letter_container.style.transform = "scale(1) translate(-50%, -50%) rotate(0deg)";
		_letter_container.classList.toggle("shake");
		_letter_container.addEventListener("animationend", () => {
		    _letter.style.max_height = "400px";
		    _letter.style.max_width  = "300px";
		    _letter.style.width      = "300px";
		    _letter.style.height     = "380px";
		    // _letter.style.transform  = "scale(1) translate(50%, 50%)";
		    _letter.src = "./src/5.webp";
		    
		    const _new_paper_letter       = document.createElement("img");
		    _new_paper_letter.classList.add("letter_overlay");
		    _new_paper_letter.src              = "./src/4.webp";
		    _new_paper_letter.style.max_height = "250px";
		    _new_paper_letter.style.max_width  = "250px";
		    _new_paper_letter.style.width      = "250px";
		    _new_paper_letter.style.height     = "150px";
		    document.getElementById("letter_container").appendChild(_new_paper_letter);
		    _letter_paper = _new_paper_letter;
		    
		    const _new_img       = document.createElement("img");
		    _new_img.classList.add("letter_overlay");
		    _new_img.src              = "./src/3.5.webp";
		    _new_img.style.max_width  = "300px";
		    _new_img.style.width      = "300px";
		    _new_img.style.height     = "180px";
		    _new_img.style.top        = "70%";
		    document.getElementById("letter_container").appendChild(_new_img);
		    
		    _letter_state = 1;
		    _clicked = false;
		})
	    }
	    else if (_letter_state === 1) {
		_letter_container.style.transform = "scale(1) translate(-50%, -50%) rotate(0deg)";
		_letter_paper.style.top = "-250%";
		setTimeout(() => {
		    document.getElementById("letter_container").removeChild(_letter_paper);
		}, 500);

		const _paper_letter = document.createElement("img");
		_paper_letter.classList.add("letter_overlay");
		_paper_letter.src              = "./src/4.webp";
		_paper_letter.style.max_height = "500px";
		_paper_letter.style.max_width  = "5000px";
		_paper_letter.style.width      = "225px";
		_paper_letter.style.height     = "500px";
		_paper_letter.style.left       = "50%";
		_paper_letter.style.top        = "50%";
		_paper_letter.style.transform  = "scale(1.8) translate(-25%, -250%)";
		
		setTimeout(() => {
		_paper_letter.style.transform = "scale(1.8) translate(-25%, -25%)";
		}, 500);
		
		document.getElementById("letter_container").appendChild(_paper_letter);
		
		_clicked = false;
		_letter_state = 2;
	    }
	}
    }
})();
