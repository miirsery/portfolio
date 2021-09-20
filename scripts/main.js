function burgerMenu(selector) {
  let menu = $(selector)
  let button = menu.find('.burger-menu__button')
  let links = menu.find('.burger-menu_link')
  let overlay = menu.find('.burger-menu_overlay')

  button.on('click', (e) => {
    e.preventDefault()
    toggleMenu()
  })

  links.on('click', () => toggleMenu())
  overlay.on('click', () => toggleMenu())

  function toggleMenu() {
    menu.toggleClass('burger-menu_active')
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overflow', 'hidden')
    } else {
      $('body').css('overflow', 'visible')
    }
  }
}
burgerMenu('.burger-menu')

const accordion = document.getElementsByClassName('contentBx')

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
