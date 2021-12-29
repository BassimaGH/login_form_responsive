var moon_icon = document.getElementById("moon_svg");

moon_icon.onclick = function() {
    document.body.classList.toggle("dark_mode");
}

// animation 

const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

logInButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});