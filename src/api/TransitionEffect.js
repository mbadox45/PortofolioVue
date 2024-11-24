import { gsap } from 'gsap'; // Import GSAP

export const homeElements = () => {
    // Animasi untuk bagian judul
    gsap.from(".title-section", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
    });

    // Animasi untuk deskripsi
    gsap.from(".desc-section", {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
    });

    // Animasi untuk ikon
    gsap.from(".icon-section", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1,
        stagger: 0.2,
    });

    // Animasi untuk bagian bawah
    gsap.from(".bottom-section", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 1.5,
    });
};


export const resumeElements = () => {
    // About Me
    gsap.from(".desc-section", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from(".photo-image", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1,
        stagger: 0.2,
    });

    gsap.from(".name-section", {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
    });

};

export const contactElements = () => {
    // Contact
    gsap.from(".box-contact", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "expo.out(1.7)",
        delay: 0.3,
        stagger: 0.2,
    });

    gsap.from(".icon-view", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5,
        stagger: 0.2,
    });

    gsap.from(".name-section", {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power2.out",
        delay: 1.5,
    });

};