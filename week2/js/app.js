const handleInput = (event, inputId) => {
  event.preventDefault();

  const img = event.target.parentNode.querySelector('img');
  if (img) {
    img.remove();
  }

  const inputValue = document.getElementById(inputId).value;
  const image = document.createElement('img');
  image.classList.add('result-img');
  image.src = inputValue;

  event.target.parentNode.append(image);
};

const absolutePathForm = document.getElementById('absolute-path');
absolutePathForm.addEventListener('submit', (e) => handleInput(e, 'absolute-path-input'));

const sameFolderForm = document.getElementById('same-folder');
sameFolderForm.addEventListener('submit', (e) => handleInput(e, 'same-folder-input'));

const insideFolderForm = document.getElementById('inside-folder');
insideFolderForm.addEventListener('submit', (e) => handleInput(e, 'inside-folder-input'));

const oneLevelUpForm = document.getElementById('one-level-up');
oneLevelUpForm.addEventListener('submit', (e) => handleInput(e, 'one-level-up-input'));

const somewhereElseForm = document.getElementById('somewhere-else');
somewhereElseForm.addEventListener('submit', (e) => handleInput(e, 'somewhere-else-input'));

const nestedForm = document.getElementById('nested');
nestedForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const img = event.target.parentNode.querySelector('img');
  if (img) {
    img.remove();
  }

  const inputValue = document.getElementById("nested-input").value;
  const image = document.createElement('img');
  image.classList.add('result-img');

  if (inputValue === '../../nested/nested-again/nested-again-again/costume-pup.jpeg') {
    image.src = inputValue;
  } else {
    image.src = 'wrongpath';
  }

  event.target.parentNode.append(image);
});

const rootRelativeForm = document.getElementById('root-relative-path');
rootRelativeForm.addEventListener('submit', (e) => handleInput(e, 'root-relative-path-input'));
