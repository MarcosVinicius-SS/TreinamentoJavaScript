const coverRight = document.querySelector('.cover.cover-right')
const coverLeft = document.querySelector('.cover.cover-left')

// abre o livro automaticamente
const wrapper = document.querySelector('.wrapper')

setTimeout(() => {
    coverRight.classList.add('turn')
    wrapper.classList.add('aberto')
}, 2000)

setTimeout(() => {
    coverRight.style.display = 'none'
    coverLeft.style.display = 'none'
}, 3200)
// botoes de virar a pagina
const pageTurnBtns = document.querySelectorAll('.nextprev-btn')

pageTurnBtns.forEach(function(btn) {
    btn.onclick = function() {
        const pageId = btn.getAttribute('data-page')
        const page = document.getElementById(pageId)

        if (page.classList.contains('turn')) {
            page.classList.remove('turn')
        } else {
            page.classList.add('turn')
        }
    }
})