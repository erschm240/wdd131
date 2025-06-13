const character = {
    name: "The Goodest Boi",
    class: "Hungry Doggy Bard",
    level: 5,
    health: 100,
    image: 'goodest_boi.jpg',
    attacked() {
        if (this.health >= 20) {
        this.level -= 1;
        this.health -= 20;
        } else {
            alert('Character Died');
        }
    },
    levelUp() {
        this.level += 1;
        this.health += 20;
    }
};

// Target the card image and buttons
const cardImg = document.querySelector('.image');
const attackedBtn = document.querySelector('#attacked');
const levelupBtn = document.querySelector('#levelup');

// Add the image to the card
cardImg.src = character.image;

// Add the character's name
document.querySelector('.name').textContent = character.name;

// Add class
document.querySelector('#class').textContent = character.class;

// Add level and health with a function
function populateLevelAndHealth(){
    document.querySelector('#level').textContent = character.level;
    document.querySelector('#health').textContent = character.health;
};

// Add level and health when page loads
populateLevelAndHealth();

// Subtract from level and health and update in HTML when button clicked
attackedBtn.addEventListener('click', function() {
    character.attacked();
    populateLevelAndHealth();
});

// Add to level and health and update in HTML when button clicked
levelupBtn.addEventListener('click', function() {
    character.levelUp();
    populateLevelAndHealth();
});