import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input[name ="email"]'),
    textarea: document.querySelector('.feedback-form  textarea[name="message"]'),
    button: document.querySelector('.feedback-form button')
};


refs.form.addEventListener('submit', onFormSubmit);

fillinTextfields();

const formData = {};


function onFormSubmit(e) {
    e.preventDefault();
    // console.log('Отправляем форму');

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}


function fillinTextfields() {

    const savedText = localStorage.getItem(STORAGE_KEY);
    console.log(savedText);
    if (savedText) {
        const objSavedText = JSON.parse(savedText);

        refs.email.value = objSavedText.email;
        refs.textarea.value = objSavedText.message;
    }

}

refs.form.addEventListener('input', e => {

    formData[e.target.name] = e.target.value;

    throttle(localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)), 500);

})