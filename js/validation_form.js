//Mask phone
let index = 0;
const phoneInput = document.querySelectorAll('[type="tel"]');
[].forEach.call(phoneInput, function (input) {
    var keyCode;

    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        var matrix = `+380-__-___-__-__`,
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, ''),
            new_value = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = new_value.indexOf('_');
        var num = 4;
        if (i != -1) {
            i < num && (i = 1);
            new_value = new_value.slice(0, i);
        }
        var reg = matrix
            .substr(0, this.value.length)
            .replace(/_+/g, function (a) {
                return '\\d{1,' + a.length + '}';
            })
            .replace(/[+]/g, '\\$&');
        reg = new RegExp('^' + reg + '$');
        if (!reg.test(this.value) || this.value.length < num || (keyCode > 47 && keyCode < 58))
            this.value = new_value;
        if (event.type == 'blur' && this.value.length < num) this.value = '';
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);

    input.addEventListener('keydown', (e) => {
        input.setSelectionRange(input.value.length, input.value.length);
    });
});

//Validate input
function validateForm() {
    function validateTextField(input, errorElement) {
        if (input.value.trim().length > 1) {
            input.classList.remove('invalid');
            return true;
        } else {
            input.classList.add('invalid');
            return false;
        }
    }

    function validateEmail(input, errorElement) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(input.value.trim())) {
            input.classList.remove('invalid');
            return true;
        } else {
            input.classList.add('invalid');
            return false;
        }
    }

    function validatePhone(input, errorElement) {
        const regex = /^\+380-\d{2}-\d{3}-\d{2}-\d{2}$/;
        if (regex.test(input.value.trim())) {
            input.classList.remove('invalid');
            return true;
        } else {
            input.classList.add('invalid');
            return false;
        }
    }

    function validateIfEmpty(input, errorElement) {
        if (input.value.trim().length > 0) {
            errorElement.textContent = '';
            input.classList.remove('invalid');
            return true;
        } else {
            input.classList.add('invalid');
            return false;
        }
    }

    const forms = document.querySelectorAll('.form-group');
    forms.forEach((form) => {
        const inputs = form.querySelectorAll('[type="text"], [type="email"], [type="tel"]');
        const submitBtn = form.querySelector('[type="submit"]');

        function validateTextInput(input, errorElement) {
            let isValid = false;
        
            if (input.classList.contains('phone')) {
                isValid = validatePhone(input, errorElement);
            } else if (input.type === 'email') {
                isValid = validateEmail(input, errorElement);
            } else {
                isValid = validateTextField(input, errorElement);
            }
        
            if (!isValid) {
                errorElement.classList.add('active');
            } else {
                errorElement.classList.remove('active');
            }
        
            return isValid;
        }
        

        submitBtn.addEventListener('click', (e) => {
            let isValid = true;

            inputs.forEach((input) => {
                const errorElement = form.querySelector(`#${input.id}-invalid`);
                if (!validateTextInput(input, errorElement)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });

        inputs.forEach((input) => {
            const errorElement = form.querySelector(`#${input.id}-invalid`);
            input.addEventListener('input', () => {
                validateTextInput(input, errorElement);
            });
        });
    });
}

validateForm();
