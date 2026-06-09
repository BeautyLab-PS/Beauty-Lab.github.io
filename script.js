// Функция за поръчка на услуга
function orderService(serviceName) {
    alert('Благодаря за интереса към ' + serviceName + '! 🎉\n\nОще информация ще получиш по имейл.');
}

// Функция за изпращане на форма
function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    
    alert('Благодаря ' + name + '! 💌\n\nПолучихме твоето съобщение!');
    
    // Изчисти формата
    document.querySelector('form').reset();
}

// Гладко скролиране при кликване на меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
