export default function formValidate(options) {
    const inputs = options.inputs;
    const regexp = {
        email  : '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$',
        phone  : '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'
    };
    const isFieldCorrect = {
        name    : false,
        email   : false,
        phone   : false,
        message : false
    };
    const errorClass = 'is-error';
    const errorMessageEmpty = 'Поле не может быть пустым';
    const errorShortMessage = 'Текст в поле не может быть меньше 2 символов';
    const errorLongNameMessage = 'Текст в поле не может быть превышать 40 символов';
    const errorLongTextMessage = 'Текст в поле не может быть превышать 1000 символов';
    const errorIncorrectEmailMessage = 'Адрес электронной почты введен некорректно';
    const errorIncorrectPhoneMessage = 'Номер телефона введен некорректно';

    inputs.forEach((input) => {
        setMode(input);
    });

    /**
     * @description Depending on the input name, the matching function will be called.
     * @param input {HTMLElement} – input element.
     */
    function setMode(input) {
        switch (input.name) {
            case 'name':
                validateName(input);
                break;
            case 'email':
                validateEmail(input);
                break;
            case 'phone':
                validatePhone(input);
                break;
            case 'message':
                validateMessage(input);
                break;
            default:
                break;
        }
    }

    /**
     * @description Validate an input element whose name='name'.
     * @param input {HTMLElement} – input element.
     */
    function validateName(input) {
        if (input.value.length < 2) {
            showErrorMessage(input, errorShortMessage);
        } else if (input.value.length > 40) {
            showErrorMessage(input, errorLongNameMessage);
        } else {
            removeErrorMessage(input);
        }
    }

    /**
     * @description Validate an input element whose name='email'.
     * @param input {HTMLElement} – input element.
     */
    function validateEmail(input) {
        const isValidEmail = input.checkValidity();
        const regEmail = new RegExp(regexp.email, 'u');

        if (!input.value.length) {
            showErrorMessage(input, errorMessageEmpty);
        } else if (!(isValidEmail && regEmail.test(input.value))) {
            showErrorMessage(input, errorIncorrectEmailMessage);
        } else {
            removeErrorMessage(input);
        }
    }

    /**
     * @description Validate an input element whose name='phone'.
     * @param input {HTMLElement} – input element.
     */
    function validatePhone(input) {
        const regPhone = new RegExp(regexp.phone, 'u');

        if (!input.value.length) {
            showErrorMessage(input, errorMessageEmpty);
        } else if (!regPhone.test(input.value)) {
            showErrorMessage(input, errorIncorrectPhoneMessage);
        } else {
            removeErrorMessage(input);
        }
    }

    /**
     * @description Validate an input element whose name='message'.
     * @param input {HTMLElement} – input element.
     */
    function validateMessage(input) {
        if (input.value.length < 2) {
            showErrorMessage(input, errorShortMessage);
        } else if (input.value.length > 1000) {
            showErrorMessage(input, errorLongTextMessage);
        } else {
            removeErrorMessage(input);
        }
    }

    /**
     * @description Print an error message under an input.
     * @param input {HTMLElement} – input element.
     * @param message {string} – error message text.
     */
    function showErrorMessage(input, message) {
        const parent = input.parentElement;
        const errorField = parent.querySelector('.form__error');

        parent.classList.add(errorClass);
        errorField.textContent = message;

        isFieldCorrect[input.name] = false;
    }

    /**
     * @description Remove an error message.
     * @param input {HTMLElement} – input element.
     */
    function removeErrorMessage(input) {
        const parent = input.parentElement;
        const errorField = parent.querySelector('.form__error');

        parent.classList.remove(errorClass);
        errorField.textContent = '';

        isFieldCorrect[input.name] = true;
    }

    return isFieldCorrect;
}
