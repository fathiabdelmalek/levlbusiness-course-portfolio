let headers = document.querySelectorAll('.section-text ul li h2');
for (let i = 0; i < headers.length; i++) {
  let header = headers[i];
  header.addEventListener("click", function() {
    header.classList.toggle("active");
    let paragraph = header.nextElementSibling;
    paragraph.classList.toggle("hidden");
  });
}

const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const formObject = Object.fromEntries(formData.entries());
  alert(`Form Submitted:\n${JSON.stringify(formObject, null, 2)}`);
});


document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
