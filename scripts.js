// Smooth Scrolling to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Back to Top';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Alert on Certificate Link Click
const certificateLinks = document.querySelectorAll('.certificate-link');
certificateLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('You are about to view the certificate: ' + link.innerText);
        window.open(link.href, '_blank');
    });
});
