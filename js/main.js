//Фиксированное меню

const fixMenu = document.querySelector('.fixed-menu');

window.addEventListener('scroll', function(){
    if(this.pageYOffset > 40){
        fixMenu.classList.add('active');
    }
    else{
        fixMenu.classList.remove('active');
    }
})


//Динамичный плейсхолдер

const formInputs = document.querySelectorAll('.form-field');
for (let item of formInputs) {
    const thisPlaceholder = item.nextElementSibling;

    item.addEventListener('focus', function (){
        thisPlaceholder.classList.add('active');
    });

    item.addEventListener('blur', function(){
        if (item.value == '') {
            thisPlaceholder.classList.remove('active');
        }
    })
}


//Фильтрация проектов

let containerEl = document.querySelector('#cards');
let mixer = mixitup(containerEl, {
    classNames: {
        block: ""
    }
})


