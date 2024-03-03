// Get a reference to the button element
var button = document.getElementById('hihi');

var text = document.getElementById('text');

var isVisible = true;

// Add a click event listener to the button
button.addEventListener('click', function() {
    if (isVisible) {
        text.style.opacity = '0';
        isVisible = false;
    } else {
        text.style.opacity = '1';
        isVisible = true;
    }
});



var toggleButton = document.getElementById('toggleButton');

var sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
});


/* gsap.to(".box", {
     x: 200,
 });*/