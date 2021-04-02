const subBtn = document.querySelector('.btn-sub');
const canBtn = document.querySelector('.btn-can');
let image = document.createElement('div');
image.className = 'agr'

 function colorChange () {
     canBtn.insertAdjacentElement('afterend', image);
     
 }

 function clearAll () {
     image.remove()
 }
 
 
 subBtn.addEventListener('click', colorChange);
 canBtn.addEventListener('click', clearAll)