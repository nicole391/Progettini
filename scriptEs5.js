function updatePizzaImage() {
    const pizzaSelect = document.getElementById('pizza-select');
    const pizzaImage = document.getElementById('pizza-image');

    const pizzaValue = pizzaSelect.value;

    const pizzaImages = {
        margherita: 'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067',
        marinara: 'https://burnhard-springlane-gmbh.stream.prepr.io/w_2304,format_jpg,q_70/https://burnhard-springlane-gmbh.stream.prepr.io/w_1080/4teessorvsqb-7balj02i50ez-pizza-marinara-titelbild.jpg',
        diavola: 'https://wips.plug.it/cips/buonissimo.org/cms/2023/02/pizza-alla-diavola.jpg',
        romana: 'https://www.caramelline.it/wp-content/uploads/2020/08/pizza-alla-romana.jpg',
        '4stagioni': 'https://redketchup.it/wp-content/uploads/2023/11/pizza-4-stagioni.webp',
        '4formaggi': 'https://thinkmilkbesmart.eu/wp-content/uploads/2024/01/pizza-quattro-formaggi.jpg',
        americana: 'https://www.scattidigusto.it/wp-content/uploads/2015/11/pizza-wurstel-patatine-pomodoro.jpg',
        bufala: 'https://www.cuocicuoci.com/wp-content/uploads/2022/03/pizza-bufalotta.jpg'
    };

    pizzaImage.src = pizzaImages[pizzaValue];
}

function calculateOrder() {
    const pizzaPrices = {
        margherita: 5,
        marinara: 6,
        diavola: 7,
        romana: 6.5,
        '4stagioni': 8,
        '4formaggi': 8.5,
        americana: 7,
        bufala: 9
    };

    const extraPrice = 1;

    const pizzaSelect = document.getElementById('pizza-select');
    const selectedPizza = pizzaSelect.value;

    const quantity = parseInt(document.getElementById('quantity').value);

    const basePrice = pizzaPrices[selectedPizza];

    const extras = document.querySelectorAll('input[name="extra"]:checked');
    const extraCount = extras.length;

    const totalPrice = (basePrice + (extraCount * extraPrice)) * quantity;

    let summaryText = `Hai ordinato ${quantity} pizza(e) ${selectedPizza}.<br>`;
    summaryText += `Ingredienti extra: ${extraCount > 0 ? '' : 'nessuno'}.<br>`;
    
    extras.forEach(extra => {
        const label = document.querySelector(`label[for="${extra.id}"]`).textContent;
        summaryText += `- ${label}<br>`;
    });

    document.getElementById('summary-details').innerHTML = summaryText;
    document.getElementById('total-price').textContent = `Totale: €${totalPrice.toFixed(2)}`;
}

document.getElementById('calculate-button').addEventListener('click', calculateOrder);
