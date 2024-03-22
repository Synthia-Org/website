const homeMenubar = document.getElementById('homeMenubar');

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		homeMenubar.style.backgroundColor = '#242424D0';
		homeMenubar.style.transition = '0.3s';
	} else {
		homeMenubar.style.backgroundColor = 'transparent';
		homeMenubar.style.transition = '0.3s';
	}
});


// TO TOP BUTTON START ============================================================================= //
const scrollToTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.display = "flex";
	} else {
		scrollToTopBtn.style.display = "none";
	}
}

scrollToTopBtn.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
// =============================================================================== TO TOP BUTTON END //