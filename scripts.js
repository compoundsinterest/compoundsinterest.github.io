document.addEventListener('DOMContentLoaded', (event) => {
    const content = document.querySelector('.content');

    content.addEventListener('mouseover', () => {
        content.style.transform = 'scale(1.2)';
        content.style.backgroundColor = '#ff6347';
    });

    content.addEventListener('mouseout', () => {
        content.style.transform = 'scale(1)';
        content.style.backgroundColor = '#333';
    });

    content.addEventListener('click', () => {
        content.innerHTML = 'You clicked me!';
        content.style.transform = 'rotate(360deg)';
        content.style.transition = 'transform 1s ease';
    });
});
