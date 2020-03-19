$( document ).ready(function() {
	
	const navList = document.getElementById('navigation-list');
	const navItemOne = document.getElementById('navigation-list-item-one');
	const navItemTwo = document.getElementById('navigation-list-item-two');
	const navItemThree = document.getElementById('navigation-list-item-three');
	const navItemFour = document.getElementById('navigation-list-item-four');

	let toggleStatus = false;

	function toggleMenu () {
		
		if (window.innerWidth <= 768) {
			toggleStatus = !toggleStatus;
		
			if (toggleStatus) {
				navList.classList.add("hamburger-menu-list");
				navItemOne.classList.add("hamburger-menu-list-item");
				navItemTwo.classList.add("hamburger-menu-list-item");
				navItemThree.classList.add("hamburger-menu-list-item");
				navItemFour.classList.add("hamburger-menu-list-item");
			} else {
				navList.classList.remove("hamburger-menu-list");
				navItemOne.classList.remove("hamburger-menu-list-item");
				navItemTwo.classList.remove("hamburger-menu-list-item");
				navItemThree.classList.remove("hamburger-menu-list-item");
				navItemFour.classList.remove("hamburger-menu-list-item");
			}
		}
		
	}
	
	function mainMenu () {
		if (window.innerWidth > 768) {
			
			toggleStatus = false;
			navList.classList.remove("hamburger-menu-list");
			navItemOne.classList.remove("hamburger-menu-list-item");
			navItemTwo.classList.remove("hamburger-menu-list-item");
			navItemThree.classList.remove("hamburger-menu-list-item");
			navItemFour.classList.remove("hamburger-menu-list-item");
		}
	}

	var menuButton = document.getElementById('toggle-navigation-menu');

	menuButton.addEventListener("click", toggleMenu);
	
	window.onresize = mainMenu;
});

