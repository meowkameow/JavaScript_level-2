
    let dialog = document.querySelector('.text').innerHTML.replace(/<br>/g,'');
   // dialog = dialog.replace(/:\s'/g,': "').replace(/'[\n]/g, '"\n');
    dialog = dialog.replace(/'(.*)'/g,'"$1"');
    console.log(dialog);


    let form = document.querySelector('#contactform');
    console.log(form);
    let formBtn = document.querySelector('#submitbtn');
    console.log(formBtn);
    let name = form.querySelector('#name');
    console.log(name);
    let email = form.querySelector('#email');
    console.log(email);
    let number = form.querySelector('#number');
    console.log(number);
    let message = form.querySelector('#message');
    console.log(message);
    let warning = form.querySelector('#warning');
    console.log(warning);

    form.addEventListener('submit', function (event) {
        console.log('clicked on validate');
        let error = false;
        let matchName = name.value.match(/^[а-яa-z]+$/i);
        if(matchName === null){
            event.preventDefault();
            name.classList.add('red');
            error = true;
        }else {
            name.classList.remove('red');
        }
        let matchEmail = email.value.match(/^[a-z0-9_.-]+@mail+\.ru/i);
        if(matchEmail === null){
            event.preventDefault();
            email.classList.add('red');
            error = true;
        }
        else {
            email.classList.remove('red');
        }
        let matchNumber = number.value.match(/^\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/);
        if(matchNumber === null){
            event.preventDefault();
            number.classList.add('red');
            error = true;
        } else {
            number.classList.remove('red');
        }
        let matchMessage = message.value.match(/^.+$/);
        if(matchMessage === null){
            event.preventDefault();
            message.classList.add('red');
            error = true;
        } else {
            message.classList.remove('red');
        }
        if(error){
            warning.classList.remove('visualy-hidden');
        } else {
            warning.classList.add('visualy-hidden');
        }
    })