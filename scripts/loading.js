document.addEventListener("DOMContentLoaded", () => {
    const apiEndpoint = "./cards.json";
    const shoppingContainer = document.getElementById("shoppingContainer");

    function createCard(flower) {
        const card = document.createElement("div");
        card.classList.add("shopping-card");

        card.innerHTML = `
            <a href="${flower.link}">
                <div class="flow-image">
                    <img src="${flower.image}" alt="${flower.name}">
                </div>
            </a>
            <h2>${flower.name}</h2>
            <p>${flower.description}</p>
            <p>${flower.details}</p>
        `;
        return card;
    }

    function loadAllFlowers() {
        fetch(apiEndpoint)
            .then(response => response.ok ? response.json() : null)
            .then(flowers => {
                if (flowers) {
                    flowers.forEach(flower => {
                        const card = createCard(flower);
                        shoppingContainer.appendChild(card);
                    });
                }
            });
    }

    loadAllFlowers();
});
