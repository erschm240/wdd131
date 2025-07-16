const storyTree = [
    {
    name: 'intro',
    title: 'The Adventure Begins',
    image: 'images/duplex-street.jpg',
    alt: 'Street with red and white duplex houses',
    context: 'You are walking down a residential street. You live in a small suburban area and are going home about 2:00 pm after work. You rent a duplex with a couple of roommates, but they aren’t with you, so you’re walking alone. As you reach your home, you hear rustling and see a dark blur dive behind your neighbor’s side of the house. They don’t have any pets. Do you INVESTIGATE or continue HOME?',
    choice1: 'INVESTIGATE',
    choice2: 'HOME'
    },
    {
        name: 'investigate',
        image: 'images/behind-house.jpg',
        alt: 'Grassy area behind a house',
        context: 'You run behind your neighbor’s side and don’t see anything, but you hear a sound like a jingling collar. There is a long, narrow, grassy area between the houses on your street and the fences of the single homes on the next street. You realize the blur could have run to your side of the DUPLEX or run down the FIELD. What do you do?',
        choice1: 'DUPLEX',
        choice2: 'FIELD'
    },
    {
        name: 'field',
        image: 'images/grassy-area.jpg',
        alt: 'Grassy area between fences and houses',
        context: 'You continue to the back field behind the houses. After a glance down either side, you don’t see anything. You continue to search down the field in the direction you think the blur went. Once you are 100 feet from the end of the street, you hear once again a jingling noise. It’s coming from a fenced in backyard on the other side of the field. Before you can follow the noise, you also hear the sound of an ice cream truck coming down the road, and it’s a warm summer afternoon. Do you look over the FENCE or run to the road to BUY ice cream?',
        choice1: 'FENCE',
        choice2: 'BUY'
    },
    {
        name: 'fence',
        image: 'images/neighbor-fence.jpg',
        alt: 'Tall wooden fence',
        context: 'You go up to the fenced-in yard and peer over the fence. You see a dog running around with three little kids chasing it. There’s someone cooking food at a grill, and they turn and see you. They ask you what you’re doing, and you turn beet red and say you thought you heard something. The person gives you a weird look, and you awkwardly say, "Sorry. Um, have a good day…?" and walk away.'
    },
    {
        name: 'buy',
        image: 'images/ice-cream-truck.jpg',
        alt: 'Blue and white ice cream truck',
        context: 'Excited about ice cream, you run to the end of the street and get there just in time. You find out the driver is trying to get rid of old ice cream and is having a sale on ice cream pints. You buy a cone and a pint and go home, having forgotten about the blur.'
    },
    {
        name: 'duplex',
        image: 'images/beagle.jpg',
        alt: 'Beagle with blue collar in lush green area',
        context: 'You go to your side of the duplex, and look around. At first you don’t see anything, but as you turn the corner to the front, you finally spot the blur. It’s a little beagle wearing a blue collar, and it seems skittish. You know very little about coaxing animals, so you aren’t sure what to do. Do you walk TOWARDS the dog, calling, "Here, doggy!" or CROUCH down and try to make it come to you?',
        choice1: 'TOWARDS',
        choice2: 'CROUCH'
    },
    {
        name: 'towards',
        image: 'images/driving.jpg',
        alt: 'Car driving in the rain at night',
        context: 'You start walking cautiously towards the beagle. You start calling, "Here, doggy! Come over here." It looks at you warily. Since it doesn’t move, you start walking faster, but you get too close too quickly, and the dog trots away. You wait, and try again, but this time it growls at you. You back off, and the dog trots away. You follow it a few seconds later, but it’s gone. Later that night, at home, you hear someone driving down the street and worriedly calling, "Here, Roxie! Come here, girl!"'
    },
    {
        name: 'towards',
        image: 'images/phone-call.jpg',
        alt: 'Woman on a phone call',
        context: 'You crouch down, about 20 feet away from the beagle. You suddenly remember a video where a person held out their knuckles for an animal to sniff. Using extreme caution, you start softly calling, "Here, puppy puppy." It stares at you for a couple seconds, then walks a few feet closer. You keep encouraging it, and a few minutes later, it walks up to you and sniffs your hand. You reach out slowly and give it a few chin rubs. It doesn’t run away, so you look at its collar and call the number on it.',
        choice1: 'CONTINUE'
    },
    {
        name: 'bonus1',
        image: 'images/beagle-reunited.jpg',
        alt: 'Woman hugging beagle',
        context: 'EPILOGUE: You tell the person on the other end you found their dog, Roxie. They are confused, but come to your house to get Roxie. A few minutes later, a car pulls up in front of your house and a woman steps out. She spots the beagle with a surprised look on her face, then comes over, calling Roxie’s name. She thanks you, grateful you found her dog before it got too far. You say goodbye and part ways, happy you were able to help.'
    },
    {
        name: 'home',
        image: 'images/watch-tv.jpg',
        alt: 'Living room with TV',
        context: 'You get to your door without any more disturbances, unlock it, and go inside. You sit down on the couch in the front room to watch your favorite show. Before you turn on the TV, you hear a thump right outside your back door. Do you watch TV or LOOK outside?',
        choice1: 'TV',
        choice2: 'LOOK'
    },
    {
        name: 'tv',
        image: 'images/watch-favorite-show.jpg',
        alt: 'Hand holding remote in front of a TV',
        context: 'You ignore the sound at your back door and turn on your favorite show. You have been looking forward to this because the second season is out today. You watch the first three episodes, then one of your roommates walks in the door. Do you keep watching your SHOW or stop the show and start working on your COMPUTER?',
        choice1: 'SHOW',
        choice2: 'COMPUTER'
    },
    {
        name: 'show',
        image: 'images/watch-favorite-show.jpg',
        alt: 'Hand holding remote in front of a TV',
        context: 'You glance at your roommate, smile and wave, and go back to your show. Your roommate comes over and asks what you’re watching. You pause the show and briefly explain what it is, and your roommate asks to join in. You tell them you are in the middle of an episode, but you don’t mind watching it together from the beginning once you finish.',
        choice1: 'CONTINUE'
    },
    {
        name: 'bonus2',
        image: 'images/watch-party.jpg',
        alt: 'Three people watching a show together',
        context: 'EPILOGUE: Over the next week you watch together. You invite your other roommate to join as well. Your roommates get caught up and you all watch the new episodes. Between episodes you all enjoy time sharing theories and bonding over a new shared interest.'
    },
    {
        name: 'computer',
        image: 'images/computer.jpg',
        alt: 'Computer, notebook, drink, and plant on a table',
        context: 'You turn off the TV and start working on your computer, updating your monthly budget with new expenses from the week. Your roommate respects your work time and goes into their bedroom. The day progresses as normal.'
    },
    {
        name: 'look',
        image: 'images/cat-purple-eyes.png',
        alt: 'Black cat with purple eyes on fence',
        context: 'You look outside the window in the back door. There is a small black cat staring up at you with curiosity. It does not have a collar, so it is likely not the blur from earlier. After you open the door and go outside, you realize this cat isn’t normal, as its eyes are glowing purple. Do you PET the cat or try to SCARE it away?',
        choice1: 'PET',
        choice2: 'SCARE'
    },
    {
        name: 'pet',
        image: 'images/cat-purple-eyes.png',
        alt: 'Black cat with purple eyes on fence',
        context: 'You open the door, go outside, approach the cat cautiously. It doesn’t budge, so you reach down and rub its head. It purrs, and the tips of its tails start to glow purple. You feel energy flow into you, then you hear a whisper in your head, "What ability do you desire?" Which superpower do you choose?',
        choice1: 'CONTINUE'
    },
    {
        name: 'bonus3',
        image: 'images/superhero-silhouette.jpg',
        alt: 'Silhouette of a person in a cape',
        context: 'EPILOGUE: You chose [Chosen Ability]! Staring at the cat in awe, you thank it and wander back into your house in a daze. Over the next week, you learn how to use your super powers. You begin to notice small problems or injustices in your neighborhood. A few months later, there are rumors going around your community about a friendly neighborhood hero. A certain someone has been going around doing good deeds with their superpower.'
    },
    {
        name: 'scare',
        image: 'images/blue-smoke.jpg',
        alt: 'Cloud of blue smoke',
        context: 'You raise your arms in the air and yell to scare the weird cat away. Unfazed, it gets up and walks away and around the corner of the house. Confused, you drop your arms and, after a few seconds, run after the cat. The cat is nowhere to be seen, leaving behind a strange blue cloud of smoke.'
    },
    {
        name: '',
        image: '',
        alt: '',
        context: ''
    }
]

function choiceTemplate(storyTree) {
    return `<section id="story-container">
            <div id="image-container">
                <img src="${storyTree.image}" alt="${storyTreealt}">
            </div>
            <hr/>
            <div id="context-container">
                <h2 class="story-heading">${storyTree.title}</h2>
                <p>
                    ${storyTree.context}
                </p>
                <div id="choice-container">
                    <button class="choice-btn">${storyTree.choice1}</button>
                <button class="choice-btn">${storyTree.choice2}</button>
                </div>
            </div>
        </section>`
}

function renderChoice(storyTree) {
    let main = document.querySelector('main');
    let html = choiceTemplate(storyTree);
    main.innerHTML += html;
}

renderChoice(storyTree);