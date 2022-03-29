const menu = document.querySelector(".js-menuMobile")
const Listmenu = document.querySelector(".js-listNav")

function menuAtivo() {
  Listmenu.classList.toggle('ativo')
}

menu.addEventListener('click', menuAtivo)