const dragoes = [
    {
        classe: "Fúria da Noite",
        perigo: "Alto",
        descrição: "Esse dragão é a cria diabolica do Raio e da propia morte",
        conselho: "escondassse e reze para que ele não te encontre"
    },
    {
        classe: "Gronckle",
        perigo: "Médio",
        descrição: "Esse dragão é um dos mais comuns, ele é pequeno e tem uma carapaça dura",
        conselho: "Ele é um dragão amigável, mas cuidado com suas caudas"
    },
    {
        classe: "Nadder Mortal",
        perigo: "Alto",
        descrição: "Dragão agil e inteligente, sua cauda tem espinhos que ele lança nos inimigos",
        conselho: "Ele é um dragão agressivo e desconfiado, então mantenha distância e não o provoque"
        
    },

]
    const catalogo = document.getElementById("catalogo");
    dragoes.forEach(function(dragon) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h2>${dragon.classe}</h2>
        <p class="perigo">perigo: ${dragon.perigo}</p>
        <p class="descricao">${dragon.descrição}</p>
        <p class="conmselho">${dragon.conselho}</p>
        `;
        catalogo.appendChild(card);
    });

    const campoBusca = document.getElementById("busca");
    campoBusca.addEventListener("input", function() {
        const termoBusca = campoBusca.valor.toLowerCase();
        const cards = document.querySelectorAll(".card");
        cards.forEach(function(card) {
            const texto = card.innerText