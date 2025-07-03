const button = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');
const loader = document.querySelector('.loader');

// Open modal on button click
button.addEventListener('click', () => {
    modal.style.display = 'flex';
    loader.style.display = 'block'; // Show loader
    setTimeout(() => {
        loader.style.display = 'none'; // Hide loader after 2 seconds
    }, 2000);
});

// Close modal when clicking on close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Prevent modal from showing on page reload
window.onload = () => {
    modal.style.display = 'none';
};
