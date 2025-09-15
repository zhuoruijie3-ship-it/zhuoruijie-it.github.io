// Initialize counter for all elements with class 'reader-count'
function initializeCounter() {
    // Get current count from localStorage, set to 99 if it doesn't exist
    let count = localStorage.getItem('readerCounter');
    if (count === null) {
        count = 99;
    } else {
        count = parseInt(count);
        count++; // Increment the count
        
        // Reset to 99 if count exceeds 959
        if (count > 959) {
            count = 99;
        }
    }
    
    // Save the new count and update all counter displays
    localStorage.setItem('readerCounter', count);
    
    // Update all counter elements
    const counterElements = document.querySelectorAll('.reader-count');
    counterElements.forEach(element => {
        element.textContent = count;
    });
}

// Initialize counter when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCounter);
} else {
    initializeCounter();
}

// Add animation to metric cards when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    metricCards.forEach(card => {
        observer.observe(card);
    });
});