const dragoes = [
    {
        classe: "Fúria da Noite",
        perigo: "Alto",
        descricao: "Esse dragão é a cria diabolica do Raio e da propia morte",
        conselho: "escondassse e reze para que ele não te encontre"
    },
    {
        classe: "Gronckle",
        perigo: "Médio",
        descricao: "Esse dragão é um dos mais comuns, ele é pequeno e tem uma carapaça dura",
        conselho: "Ele é um dragão amigável, mas cuidado com suas caudas"
    },
    {
        classe: "Nadder Mortal",
        perigo: "Alto",
        descricao: "Dragão agil e inteligente, sua cauda tem espinhos que ele lança nos inimigos",
        conselho: "Ele é um dragão agressivo e desconfiado, então mantenha distância e não o provoque"
        
    },

]  
  // comentario teste commit 
    const catalogo = document.getElementById("catalogo"); 
    dragoes.forEach(function(dragon) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h2>${dragon.classe}</h2>
        <p class="perigo">perigo: ${dragon.perigo}</p>
        <p class="descricao">${dragon.descricao}</p>
        <p class="conselho">${dragon.conselho}</p>
        `;
        catalogo.appendChild(card);
    });

    function semAcento(texto) {
         return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}           // funçao usada para remover acentos(tive essa idea do tolowercase)

    const campoBusca = document.getElementById("busca"); // fiz uma constante chamada campoBusca 
    // e atribui o elemento do input de busca a ela(recebe elemento do id "busca")
    campoBusca.addEventListener("input", function() { // meio que detecta quando o usuario digita algo no campo de busca, e ai ele executa a função
        const termoBusca = semAcento(campoBusca.value);
        const cards = document.querySelectorAll(".card");// uma constate chamada cards que recebe TODOS OS ELEMENTOS HTML com a classe "card" (todos os cards dos dragões)
        cards.forEach(function(card) { // para cada card da lista ele executa a função
            const texto = semAcento(card.innerText); // aqui ele pega o texto do card e remove os acentos usando a função semAcento
            if (texto.includes(termoBusca)) {
                card.style.display = "block"; // se o texto do card contém o que o usuário digita, ele mostra o card (display block)
            } else {
                card.style.display = "none"; // se o texto do card NÃO contém o que o usuário digita, ele esconde o card (display none)
            }
        });
    });
    