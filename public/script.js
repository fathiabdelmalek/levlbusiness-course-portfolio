let headers = document.querySelectorAll('.section-text ul li h2');
for (let i = 0; i < headers.length; i++) {
  let header = headers[i];
  header.addEventListener("click", function() {
    header.classList.toggle("active");
    let paragraph = header.nextElementSibling;
    paragraph.classList.toggle("hidden");
  });
}
