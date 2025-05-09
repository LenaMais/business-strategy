// Mobile menu toggle
            document.getElementById('mobile-menu-button').addEventListener('click', function() {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
            });
    
            // Back to top button
            window.addEventListener('scroll', function() {
                const backToTopButton = document.getElementById('back-to-top');
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.remove('hidden');
                } else {
                    backToTopButton.classList.add('hidden');
                }
            });
    
            document.getElementById('back-to-top').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
    
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        const mobileMenu = document.getElementById('mobile-menu');
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                        }
                    }
                });
            });
            // Добавьте это в обработчик кнопок услуг
btn.addEventListener('click', function() {
    const serviceName = this.getAttribute('data-service');
    localStorage.setItem('selectedService', serviceName);
    alert(`Вы выбрали "${serviceName}". Теперь заполните контактные данные.`);
});
if(service) {
    document.getElementById('selectedService').value = service;
    document.getElementById('serviceName').textContent = service;
    document.getElementById('serviceDisplay').classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', function() {
    const service = localStorage.getItem('selectedService');
    if(service) {
        // Заполняем скрытое поле
        document.getElementById('selectedService').value = service;
        
        // Показываем блок с услугой
        document.getElementById('serviceName').textContent = service;
        document.getElementById('serviceDisplay').classList.remove('hidden');
        
        // Меняем плейсхолдер сообщения
        document.getElementById('message').placeholder = `Дополнительная информация по услуге "${service}":`;
        
        // Очищаем хранилище
        localStorage.removeItem('selectedService');
    }
});
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Показываем/скрываем кнопку при скролле с задержкой
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
                setTimeout(() => backToTopButton.classList.add('visible'), 10);
            } else {
                backToTopButton.classList.remove('visible');
                setTimeout(() => {
                    if (!backToTopButton.classList.contains('visible')) {
                        backToTopButton.classList.add('hidden');
                    }
                }, 300);
            }
        }, 100);
    });
    
    // Плавный скролл при клике
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Микроанимация при клике
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});