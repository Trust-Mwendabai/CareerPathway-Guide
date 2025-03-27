// Main JavaScript file for Career Pathway Guide

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Get Started button functionality
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        // Will implement profile creation modal in next phase
        alert('Profile creation coming soon!');
    });

    // Create Profile button functionality
    const createProfileBtn = document.querySelector('.primary-button');
    createProfileBtn.addEventListener('click', () => {
        // Will implement profile creation modal in next phase
        alert('Profile creation coming soon!');
    });

    // Career Quiz button functionality
    const careerQuizBtn = document.querySelector('.secondary-button');
    careerQuizBtn.addEventListener('click', () => {
        // Will implement career quiz in next phase
        alert('Career quiz coming soon!');
    });
});
