function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)