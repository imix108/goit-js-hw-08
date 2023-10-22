import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';


const saveFormState = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
};


const loadFormState = () => {
  const savedState = localStorage.getItem(storageKey);
  if (savedState) {
    const formData = JSON.parse(savedState);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};

form.addEventListener('input', throttle(saveFormState, 500));


loadFormState();


form.addEventListener('submit', event => {
  event.preventDefault();
  
 
  localStorage.removeItem(storageKey);
  
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log('Form Data:', formData);
  
  emailInput.value = '';
  messageTextarea.value = '';
});
