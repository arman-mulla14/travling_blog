document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Smooth Scrolling for "Explore More" button (Home Page)
    // ----------------------------------------------------
    const exploreButton = document.querySelector('.btn-explore');
    if (exploreButton) {
        exploreButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // ----------------------------------------------------
    // 2. Contact Form Validation and Submit Animation (Contact Page)
    // ----------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors and status
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            formStatus.textContent = '';
            submitBtn.classList.remove('loading', 'success');

            let isValid = true;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Name Validation
            if (name.length < 2) {
                document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
                isValid = false;
            }

            // Email Validation (Simple regex for pattern check)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Message Validation
            if (message.length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
                isValid = false;
            }

            if (isValid) {
                // Start submit animation
                submitBtn.classList.add('loading');

                // Simulate API call delay
                setTimeout(() => {
                    // Assuming successful submission
                    submitBtn.classList.remove('loading');
                    submitBtn.classList.add('success');
                    
                    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                    formStatus.style.color = '#4CAF50'; // Green color for success
                    
                    // Clear the form after a short delay
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.classList.remove('success');
                        submitBtn.blur(); // Remove focus
                    }, 1500);

                }, 2000); // 2 second delay for demonstration
            }
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Smooth Scrolling for "Explore More" button (Home Page)
    // ----------------------------------------------------
    const exploreButton = document.querySelector('.btn-explore');
    if (exploreButton) {
        exploreButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // ----------------------------------------------------
    // 2. Contact Form Validation and Submit Animation (Contact Page)
    // ----------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors and status
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            formStatus.textContent = '';
            submitBtn.classList.remove('loading', 'success');

            let isValid = true;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Name Validation
            if (name.length < 2) {
                document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
                isValid = false;
            }

            // Email Validation (Simple regex for pattern check)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Message Validation
            if (message.length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
                isValid = false;
            }

            if (isValid) {
                // Start submit animation
                submitBtn.classList.add('loading');

                // Simulate API call delay
                setTimeout(() => {
                    // Assuming successful submission
                    submitBtn.classList.remove('loading');
                    submitBtn.classList.add('success');
                    
                    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                    formStatus.style.color = '#4CAF50'; // Green color for success
                    
                    // Clear the form after a short delay
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.classList.remove('success');
                        submitBtn.blur(); // Remove focus
                    }, 1500);

                }, 2000); // 2 second delay for demonstration
            }
        });
    }

    // ----------------------------------------------------
    // 3. Mobile Navigation Toggle (Hamburger Menu)
    // ----------------------------------------------------
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            // Toggle the 'open' class on the navigation links list
            navLinks.classList.toggle('open');
            // Toggle the 'active' class on the button itself (for animation/icon change)
            navToggle.classList.toggle('active');
        });
    }

    // Load bg-video iframe src from data-src to avoid aggressive preloading
    const bgIframe = document.getElementById('bg-video-iframe');
    if (bgIframe && bgIframe.dataset && bgIframe.dataset.src) {
        bgIframe.setAttribute('src', bgIframe.dataset.src);
    }
});