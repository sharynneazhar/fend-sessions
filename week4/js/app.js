const inputElems = document.querySelectorAll('input');
inputElems.forEach((elem) => {
  elem.addEventListener("input", function(e) {
    document.querySelector('.output .box').style[elem.id] = e.target.value;
  });
});
