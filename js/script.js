document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links âncora
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // ajuste se houver header fixo
            behavior: "smooth"
          });
        }
      });
    });
  });
  