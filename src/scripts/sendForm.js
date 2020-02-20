import Inputmask from 'inputmask';
import formValidate from './validate.js';

export default function sendForm(options) {
    const phoneMask = '+7 999 99-99-99';
    const form = options.form;
    const inputs = form.querySelectorAll('.js-input');
    const action = form.action;
    const method = form.method;
    const activeClass = 'is-active';

    inputs.forEach((input) => {
        input.addEventListener('focus', addFocusToInput);
        input.addEventListener('blur', removeFocusFromInput);

        if (input.name === 'phone') putPhoneMask(input);

    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        let result = true;

        const valResult = formValidate({
            inputs: inputs
        });

        for (const field in valResult) {
            if (valResult[field] === false) result = false;
        }

        if (result === true) submitForm();
    });

    /**
     * @description Displays a mask in the field for entering a phone number.
     * @param input {HTMLElement} - phone number entry form field.
     */
    function putPhoneMask(input) {
        const inputmask = new Inputmask({
            'mask': phoneMask,
            showMaskOnHover: false
        });

        inputmask.mask(input);
    }

    /**
     * @description Add active class for label and input wrapper.
     */
    function addFocusToInput() {
        const parent = this.parentElement;

        parent.classList.add(activeClass);
    }

    /**
     * @description Remove active class for label and input wrapper.
     */
    function removeFocusFromInput() {
        const parent = this.parentElement;

        parent.classList.remove(activeClass);

        this.value.length === 0
            ? parent.classList.remove('is-full')
            : parent.classList.add('is-full');
    }

    /**
     * @description Submit form data to server.
     */
    function submitForm() {
        const formData = new FormData(form);

        formData.append('name', 'fsdf');
        formData.append('phone', '84444444444');
        formData.append('comment', 'resfsdf');
        formData.append('to', 'cat.cornilova16@yandex.ru');

        fetch(action, {
            method: method,
            headers: { 'X-Requested-With':'XMLHttpRequest' },
            body: formData
        })
            // .then(this._checkStatus)
            .then(response => {
                if (response.ok) response.json();
            })
            .then(() => clearForm())
            .catch(error => console.log(error));
    }

    /**
     * @description Clear input elements.
     */
    function clearForm() {
        inputs.forEach((input) => input.value = '');
    }
}
