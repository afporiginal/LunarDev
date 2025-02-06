document.addEventListener("DOMContentLoaded", () => {
    // Animação do título com GSAP
    gsap.from("h1", { opacity: 0, y: -50, duration: 1 });

    // Efeito de flutuação na imagem da Yor
    gsap.to("#yor-image", { y: -20, repeat: -1, yoyo: true, duration: 3, ease: "easeInOut" });
});
