const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardSuits = ['♠', '♥', '♦', '♣'];

const cardValueElement = document.getElementById('card-value');
const cardSuitElement = document.getElementById('card-suit');
const generateCardButton = document.getElementById('generate-card');

function getRandomCard() {
    const randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];
    const randomSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];
    return { value: randomValue, suit: randomSuit };
}

generateCardButton.addEventListener('click', () => {
    const card = getRandomCard();
    cardValueElement.textContent = card.value;
    cardSuitElement.textContent = card.suit;
});
