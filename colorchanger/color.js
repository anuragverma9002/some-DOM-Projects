const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener('click',(e) =>{
        if(e.target.id==='red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='pink'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
        }
    })
})