// --- INITIALIZATION ---

// Initialize Animate on Scroll (AOS) library
AOS.init({
    duration: 800, // Animation duration in milliseconds
    once: true,       // Whether animation should happen only once
    offset: 50,       // Offset (in px) from the original trigger point
});


// --- CORE FUNCTIONS ---

/**
 * Updates the live time display for a specific timezone.
 */
function updateTime() {
    const timeElement = document.getElementById('live-time');
    if (!timeElement) return; // Exit if the element doesn't exist

    const options = {
        timeZone: 'Africa/Accra', // GMT
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const currentTime = formatter.format(new Date());
    timeElement.textContent = currentTime.toLowerCase();
}

/**
 * Manages the typewriter animation effect for the hero title.
 */
function runTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return; // Exit if element not found

    const sequence = [
        { action: 'type', text: 'Sena', speed: 100, pause: 2000 },
        { action: 'delete', count: 4, speed: 50, pause: 500 },
        { action: 'type', text: 'data analyst', speed: 100, pause: 2000 },
        { action: 'delete', count: 7, speed: 50, pause: 500 }, // Deletes 'analyst'
        { action: 'type', text: 'engineer', speed: 100, pause: 3000 },
        { action: 'delete', count: 13, speed: 50, pause: 500 } // Deletes 'data engineer'
    ];
    let sequenceIndex = 0;
    let charIndex = 0;

    function processSequence() {
        const step = sequence[sequenceIndex];
        const { action, text, count, speed, pause } = step;

        if (action === 'type') {
            if (charIndex < text.length) {
                typewriterElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(processSequence, speed);
            } else {
                // Move to the next step in the sequence after a pause
                charIndex = 0;
                sequenceIndex = (sequenceIndex + 1) % sequence.length;
                setTimeout(processSequence, pause);
            }
        } else if (action === 'delete') {
            if (charIndex < count && typewriterElement.textContent.length > 0) {
                const current = typewriterElement.textContent;
                typewriterElement.textContent = current.substring(0, current.length - 1);
                charIndex++;
                setTimeout(processSequence, speed);
            } else {
                // Move to the next step in the sequence after a pause
                charIndex = 0;
                sequenceIndex = (sequenceIndex + 1) % sequence.length;
                setTimeout(processSequence, pause);
            }
        }
    }
    processSequence(); // Start the typewriter
}

/**
 * Animates a number from a start value to an end value.
 * @param {HTMLElement} element The element whose text content will be animated.
 * @param {number} start The starting number.
 * @param {number} end The final number.
 * @param {number} duration The animation duration in milliseconds.
 * @param {string} [suffix=''] A string to append after the number.
 * @param {number} [decimals=0] The number of decimal places to show.
 */
function animateValue(element, start, end, duration, suffix = '', decimals = 0) {
    let startTime = null;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = progress * (end - start) + start;
        element.innerHTML = currentValue.toFixed(decimals) + suffix;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}


// --- SETUP AND EVENT LISTENERS ---

/**
 * Sets up an IntersectionObserver to trigger the stats animation when visible.
 */
function setupStatsAnimation() {
    const statsSection = document.querySelector('.impact-stats');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // This condition checks if the element is currently visible on the screen.
            if (entry.isIntersecting) {
                // Animate the stat values when the section is in view
                animateValue(document.getElementById('stat1'), 0, 1.5, 2000, 'TB+', 1);
                animateValue(document.getElementById('stat2'), 0, 40, 2000, '%');
                animateValue(document.getElementById('stat4'), 0, 95, 2000, '%', 1);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(statsSection);
}


/**
 * Sets up the event listeners for the project filtering buttons.
 */
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            // Show or hide project cards based on the selected filter
            projectCards.forEach(card => {
                const tech = card.dataset.tech;
                if (filter === 'all' || tech.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Sets up the contact form submission logic.
 */
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        statusDiv.textContent = 'sending...';
        
        // Simulate a network request for demonstration
        setTimeout(() => {
            status.textContent = 'message sent! i will be in touch soon.';
            form.reset();
            // Clear the status message after a few seconds
            setTimeout(() => statusDiv.textContent = '', 3000);
        }, 1000);
    });
}

// --- SCRIPT EXECUTION ---

// Run all setup functions when the window has finished loading.
window.onload = function() {
    updateTime();
    setInterval(updateTime, 60000); // Update the time every minute
    runTypewriter();
    setupStatsAnimation();
    setupProjectFilters();
    setupContactForm();
};