const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener("input", (event) => {
  const input = event.target.value;
  const length = input.length;
  const blur = 20 - length * 2;
  background.style.filter = `blur(${blur}px)`;
});