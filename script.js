// Toggle expanded class on click
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        // Close all boxes before opening the one clicked
        document.querySelectorAll('.box').forEach(b => {
            if (b !== box) b.classList.remove('expanded');
        });

        box.classList.toggle('expanded');
    });
});
