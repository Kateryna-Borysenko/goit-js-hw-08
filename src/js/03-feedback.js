import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'; 

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input[name ="email"]'),
    textarea: document.querySelector('.feedback-form  textarea[name="message"]')
};
// console.log(refs.form, refs.email, refs.textarea, refs.button);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener("input", throttle(onTargetInput, 500));

fillinTextfields(); 

const formData = {};


function onFormSubmit(e) {
    e.preventDefault();
    console.log('Отправляем форму');

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);  
}

function fillinTextfields() {

    const savedText = localStorage.getItem(STORAGE_KEY); 
    console.log(savedText); 
    if (savedText) {
        const objSavedText = JSON.parse(savedText); 
        // console.log(objSavedText);
        // console.log(objSavedText.email);
        // console.log(objSavedText.message);
        refs.email.value = objSavedText.email;
        refs.textarea.value = objSavedText.message
    }

}

//data for test
//borysenko@gmail.com
// Hello from feedback! ...test


function onTargetInput (e) {
 
    formData[e.target.name] = e.target.value;
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}