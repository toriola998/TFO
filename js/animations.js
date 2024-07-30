export default function animations() {
    //GSAP ANIMATIONS
    gsap.to('.shape1', {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: 'linear',
    });
    gsap.to('.shape2', {
        x: 100,
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'bounce-in',
    });
    gsap.to('.shape3', {
        y: 100,
        rotation: 360,
        duration: 7,
        repeat: -1,
        ease: 'bounce-in',
    });
    gsap.to('.shape4', {
        x: 40,
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'bounce-in',
    });
    gsap.to('.shape5', {
        x: 40,
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'bounce-in',
    });

    //remove loader spin after 3s
    setTimeout(removeLoader, 3000);

    function removeLoader() {
        const loader = document.querySelector('.preloader');
        loader.style.display = 'none';
        loader.style.animation = 'example 2s ease';
    }
}
