let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };
});

function myFunction() {
    var a = true;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        a = false;
    }

    if (a){
        alert('registration successful.');
    } else {
        alert('please enter all the feilds.');
    }
}

function myFunction2(){
    var b = true;
    var email2 = document.getElementById('email2').value;

    var password2 = document.getElementById('password2').value;

    if ( email2 === '' || password2 === '') {
        b = false;
    }

    if (b){
        alert('registration successful.');
    } else {
        alert('please enter all the feilds.');
    }

    window.location.href="index.html";
}

function myFunction3(){
    event.preventDefault();
    window.location.href="contact.html"
}

function myFunction4(){
    event.preventDefault();
    alert('Registration completed successfully.');
    alert('We will send you a confirmation email shortly.');
}