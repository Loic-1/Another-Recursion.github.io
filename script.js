var toggleButton = document.getElementById('toggleButton');

var sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
});

//thomasP

var buttonThomas = document.getElementById('buttonThomas');

var textThomas = document.getElementById('textThomas');

var isVisible = true;

buttonThomas.addEventListener('click', function() {
    if (isVisible) {
        textThomas.style.opacity = '0';
        isVisible = false;
    } else {
        textThomas.style.opacity = '1';
        isVisible = true;
    }
});

//thomasH

var buttonThom = document.getElementById('buttonThom');

var textThom = document.getElementById('textThom');

var isVisible2 = true;

buttonThom.addEventListener('click', function() {
    if (isVisible2) {
        textThom.style.opacity = '0';
        isVisible2 = false;
    } else {
        textThom.style.opacity = '1';
        isVisible2 = true;
    }
});

//Edgar

var buttonEdgar = document.getElementById('buttonEdgar');

var textEdgar = document.getElementById('textEdgar');

var isVisible3 = true;

buttonEdgar.addEventListener('click', function() {
    if (isVisible3) {
        textEdgar.style.opacity = '0';
        isVisible3 = false;
    } else {
        textEdgar.style.opacity = '1';
        isVisible3 = true;
    }
});

//loic

var buttonLoic = document.getElementById('buttonLoic');

var textLoic = document.getElementById('textLoic');

var isVisible4 = true;

buttonLoic.addEventListener('click', function() {
    if (isVisible4) {
        textLoic.style.opacity = '0';
        isVisible4 = false;
    } else {
        textLoic.style.opacity = '1';
        isVisible4 = true;
    }
});

//asmae

var buttonAsmae = document.getElementById('buttonAsmae');

var textAsmae = document.getElementById('textAsmae');

var isVisible5 = true;

buttonAsmae.addEventListener('click', function() {
    if (isVisible5) {
        textAsmae.style.opacity = '0';
        isVisible5 = false;
    } else {
        textAsmae.style.opacity = '1';
        isVisible5 = true;
    }
});