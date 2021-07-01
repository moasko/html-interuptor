

let my_contente = document.querySelector('.my_contente');
let interuptorButton = document.querySelector('.pucin');

interuptorButton.onclick = function(){
    this.classList.toggle('active')
    my_contente.classList.toggle('dark')
}