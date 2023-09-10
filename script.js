const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#mobile-menu');


btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

})


const linkForm = document.querySelector('#link-form');
const input = document.querySelector("#link-input");
const errorMessage = document.querySelector('#err-msg');

function isValidURL(str) {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + 
        '((\\d{1,3}\\.){3}\\d{1,3}))' + 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
        '(\\?[;&a-z\\d%_.~+=-]*)?' + 
        '(\\#[-a-z\\d_]*)?$',
        'i'
        ); 

    return !!pattern.test(str);
}

function formSubmit(e){
    e.preventDefault()

    if (input.value === ''){
        errorMessage.innerHTML = 'Please enter something';
        input.classList.add('border-red');
    } else if (!isValidURL(input.value)) {
        errorMessage.innerHTML = 'Please enter a valid URL';
        input.classList.add('border-red');
    } else {
        errorMessage.innerHTML = '';
        input.classList.remove('border-red');
        alert('Success');
    }
}

linkForm.addEventListener('submit', formSubmit);

AOS.init();