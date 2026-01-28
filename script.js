// قوانین JS: استفاده از const و let و تمرکز بر منطق تعاملی

document.addEventListener('DOMContentLoaded', () => {
    console.log('صفحه با موفقیت بارگذاری شد. (DOM Ready)');

    // ---------------------------------------------
    // 1. منطق منوی موبایل (Toggle)
    // ---------------------------------------------
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.nav__link');

    // تابع اصلی برای باز و بسته کردن منو
    const toggleNav = () => {
        const isOpen = primaryNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen);
    };
    
    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', toggleNav);
    }
    
    // بستن منو پس از کلیک بر روی لینک (فقط در موبایل)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // مطمئن می‌شویم که این لینک در منو موبایل است (با چک کردن کلاس)
            if (primaryNav.classList.contains('is-open')) {
                toggleNav(); 
            }
        });
    });


    // ---------------------------------------------
    // 2. اسکرول نرم (Smooth Scrolling) برای لینک‌های داخلی
    // ---------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // جلوگیری از پرش سریع مرورگر
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
