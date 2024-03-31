function switchLanguage(language) {
    const content = {
        'en': {
            form: 'Form',
            about: 'About Me',
            gallery: 'Gallery',
            contact: 'Contacts',
            header_button: 'Experience',

            form_title: 'Registration form',
            form_subtitle: 'Leave your details and we will answer all your questions.',
            label_last_name: 'Last name',
            input_last_name_invalid: 'The field must contain at least two characters!',
            label_first_name: 'First name',
            input_first_name_invalid: 'The field must contain at least two characters!',
            label_phone_number: 'Phone number',
            input_phone_number_invalid: 'Invalid phone number format!',
            input_email_invalid: 'Invalid email format!',
            input_required: 'This field is required.',
            submitBtn: 'Sign up',

            text_block_title: 'About Me',
            about_text: 'Hello, my name is Yaroslav. I am a self-motivated and responsible aspiring web developer who is constantly learning and improving in the field of PHP, HTML and CSS based website development. I have problem-solving skills and can work effectively under pressure to meet deadlines. I am eager to continuously develop my skills and learn new technologies as a web developer in your company.',
            skills: 'My skills:',
            about_button: 'Learn more',
            
            contacts: 'Contacts',
            my_experience: 'My experience',
            position: 'Worked as a <b>Trainee Web developer</b> at Horenko Production web studio for 4 months',
            tasks: 'I performed such tasks as:',
            tasks_li_1: 'I developed simple websites in HTML/CSS/JS.',
            tasks_li_2: 'I developed websites on OpenCart/OCStore, made changes to the layout and functionality of online stores.',
            tasks_li_3: 'I created websites on a template and changed the layout in Wordpress.',
            tasks_li_4: 'Performed layout stretching on Wordpress, using the Carbon Fields plugins.'
        },
        'ua': {
            form: 'Форма',
            about: 'Про мене',
            gallery: 'Галерея',
            contact: 'Контакти',
            header_button: 'Досвід',

            form_title: 'Форма реєстрації',
            form_subtitle: 'Залиште свої дані і ми відповімо на всі ваші питання.',
            label_last_name: 'Прізвище',
            input_last_name_invalid: 'Поле має містити принаймні два символи!',
            label_first_name: 'Ім\'я',
            input_first_name_invalid: 'Поле має містити принаймні два символи!',
            label_phone_number: 'Телефон',
            input_phone_number_invalid: 'Невірний формат номеру телефона!',
            input_email_invalid: 'Невірний формат електронної пошти!',
            input_required: 'Це поле обов\'язкове для заповнення.',
            submitBtn: 'Зареєструватись',

            text_block_title: 'Про мене',
            about_text: 'Привіт, мене звати Ярослав. Я цілеспрямований і відповідальний веб-розробник початківець, який постійно вивчає та вдосконалюється в області розробки веб-сайтів на базі PHP, HTML і CSS. Маю навички у вирішенні проблем та вмію ефективно працювати під тиском для досягнення встановлених термінів. Я прагну постійно розвивати свої вміння та вивчати нові технології як веб-розробник у вашій компанії.',
            skills: 'Мої навички:',
            about_button: 'Дізнатись більше',

            contacts: 'Контакти',
            my_experience: 'Мій досвід',
            position: 'Був на позиції <b>Trainee Web developer</b> в веб студії Horenko Production протягом 4-місяців',
            tasks: 'Виконував такі задачі, як:',
            tasks_li_1: 'Верстав не складні сайти на HTML/CSS/JS.',
            tasks_li_2: 'Робив сайти на OpenCart/OCStore, вносив правки у верстку та функціонал інтернет-магазинів.',
            tasks_li_3: 'Створював сайти на шаблоні та змінював верстку в Wordpress.',
            tasks_li_4: 'Виконував натяжку верстки на Wordpress, за допомогою плагіна Carbon Fields.'
        }
    };

    //Header
    document.getElementById('form-link').innerText = content[language].form;
    document.getElementById('about-link').innerText = content[language].about;
    document.getElementById('gallery-link').innerText = content[language].gallery;
    document.getElementById('contact-link').innerText = content[language].contact;
    document.getElementById('header-button').innerText = content[language].header_button;

    //Form reg
    document.getElementById('form-title').innerText = content[language].form_title;
    document.getElementById('form-subtitle').innerText = content[language].form_subtitle;
    document.getElementById('label-last-name').innerText = content[language].label_last_name;
    document.getElementById('input-last-name-invalid').innerText = content[language].input_last_name_invalid;
    document.getElementById('label-first-name').innerText = content[language].label_first_name;
    document.getElementById('input-first-name-invalid').innerText = content[language].input_first_name_invalid;
    document.getElementById('label-phone-number').innerText = content[language].label_phone_number;
    document.getElementById('input-phone-number-invalid').innerText = content[language].input_phone_number_invalid;
    document.getElementById('input-email-invalid').innerText = content[language].input_email_invalid;
    document.getElementById('submitBtn').innerText = content[language].submitBtn;

    //Text block
    document.getElementById('text-block-title').innerText = content[language].text_block_title;
    document.getElementById('about-text').innerText = content[language].about_text;
    document.getElementById('skills').innerText = content[language].skills;
    document.getElementById('about-button').innerText = content[language].about_button;

    //Footer
    document.getElementById('contacts-title').innerText = content[language].contacts;
    document.getElementById('my-experience-title').innerText = content[language].my_experience;
    document.getElementById('position').innerHTML = content[language].position;
    document.getElementById('tasks').innerText = content[language].tasks;
    document.getElementById('tasks-li-1').innerText = content[language].tasks_li_1;
    document.getElementById('tasks-li-2').innerText = content[language].tasks_li_2;
    document.getElementById('tasks-li-3').innerText = content[language].tasks_li_3;
    document.getElementById('tasks-li-4').innerText = content[language].tasks_li_4;
    


    //Set the current language to localStorage
    localStorage.setItem('currentLanguage', language);

    //Swicher_lang
    const languageLinks = document.querySelectorAll('.list-item-link');
    languageLinks.forEach(link => {
        link.classList.remove('active');
    });

    const selectedLink = document.querySelector(`.list-item-link[data-lang="${language}"]`);
    selectedLink.classList.add('active');
}

//Retrieve language from localStorage
const currentLanguage = localStorage.getItem('currentLanguage') || 'ua';
switchLanguage(currentLanguage);