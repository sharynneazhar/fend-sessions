const bgColorForm = document.getElementById('qt-bg-color');
bgColorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const res = bgColorForm.querySelector('.result-icon');
  res.innerHTML = "";

  const inputValue = document.getElementById('qt-bg-color-input').value;
  if (inputValue === '#4a86e8') {
    res.innerHTML = "<i class='bi bi-check-circle-fill text-success'></i>";
    bgColorForm.appendChild(res)
  } else { 
    res.innerHTML = "<i class='bi bi-x-circle-fill text-danger'></i>";
    bgColorForm.appendChild(res)
  }
});
