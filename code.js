const nameInput = document.getElementById('name-input');
const textColorInput = document.getElementById('text-color');
const backgroundColorInput = document.getElementById('background-color');
const avatarText = document.querySelector('.avatar-text');
const avatar = document.querySelector('.avatar');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const textColor = textColorInput.value;
  const backgroundColor = backgroundColorInput.value;
  const [firstName, lastName] = name.split(' ');
  avatarText.textContent = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  avatarText.style.color = textColor;
  avatar.style.backgroundColor = backgroundColor;
});