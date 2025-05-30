// document.addEventListener('mousemove', (e) => {
//     // Custom cursor
//     const cursor = document.querySelector('.custom-cursor');
//     cursor.style.left = `${e.clientX}px`;
//     cursor.style.top = `${e.clientY}px`;

//     // Cursor tracking background
//     const bg = document.querySelector('.cursor-bg');
//     bg.style.setProperty('--x', `${e.clientX}px`);
//     bg.style.setProperty('--y', `${e.clientY}px`);
// });


const toggleBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
});
