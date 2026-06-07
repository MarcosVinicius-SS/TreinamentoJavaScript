const coverRight = document.querySelector('.cover.cover-right')
const coverLeft = document.querySelector('.cover.cover-left')
const wrapper = document.querySelector('.wrapper')

// abre o livro automaticamente
setTimeout(() => {
    coverRight.classList.add('turn')
    wrapper.classList.add('aberto')
}, 2000)

setTimeout(() => {
    coverRight.style.display = 'none'
    coverLeft.style.display = 'none'
}, 3200)

// busca os dragões e gera as páginas
fetch('dragoes.json')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(dragoes) {
        gerarPaginas(dragoes)
    })

function gerarPaginas(dragoes) {
    const book = document.querySelector('.book')

    dragoes.forEach(function(dragao, index) {
        const pagina = document.createElement('div')
        pagina.className = 'book-page page-right'
        pagina.id = 'turn-' + (index + 1)
        pagina.style.zIndex = dragoes.length - index

        pagina.innerHTML = `
            <div class="page-front">
                <h2>${dragao.nome}</h2>
                <p class="classe">${dragao.classe}</p>
                <p class="descricao">${dragao.descricao}</p>
                <span class="nextprev-btn" data-page="turn-${index + 1}">›</span>
            </div>
            <div class="page-back">
                <h2>${dragao.nome}</h2>
                <p>Mais informações em breve...</p>
                <span class="nextprev-btn back" data-page="turn-${index + 1}">‹</span>
            </div>
        `

        book.appendChild(pagina)
    })

    ativarBotoes()
}

function ativarBotoes() {
    const pageTurnBtns = document.querySelectorAll('.nextprev-btn')

    pageTurnBtns.forEach(function(btn) {
        btn.onclick = function() {
            const pageId = btn.getAttribute('data-page')
            const page = document.getElementById(pageId)
            const todasPaginas = document.querySelectorAll('.book-page.page-right')
            const totalPaginas = todasPaginas.length

            if (page.classList.contains('turn')) {
                // voltando — pega o número da página e coloca z-index crescente
                const num = parseInt(pageId.replace('turn-', ''))
                page.classList.remove('turn')
                page.style.zIndex = totalPaginas - num + 1
            } else {
                // avançando — página virada vai para frente
                const num = parseInt(pageId.replace('turn-', ''))
                page.classList.add('turn')
                page.style.zIndex = totalPaginas + num
            }
        }
    })
}