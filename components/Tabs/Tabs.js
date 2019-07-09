// Markup Data and Markup function:
// Data from the Lambda Times website: Planning on converting the data into 
// DOM Components using classes.

const cardObject = [
  {
    header: 'ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects',
    author: "By SIR RUFF'N'STUFF",
    data: 'javascript',
    image: "./assets/sir.jpg"
  },
  {
    header: 'Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences',
    author: "By BONES R. LIFE",
    data: 'javascript',
    image: "./assets/bones.jpg"
  },
  {
    header: 'Bootstrap 5: Get a Sneak Peak at all the New Features',
    author: 'By FIDO WALKSALOT',
    data: 'bootstrap',
    image: "./assets/fido.jpg"
  },
  {
    header: 'AI: What Are the Ethical Ramifications of the Future?',
    author: 'By MAX GOODBOYE',
    data: "technology",
    image: "./assets/max.jpg"

  },
  {
    header: 'History of Javascript Libraries: from jQuery to React',
    author: 'By PUPPER S. DOGGO',
    data: "jquery",
    image: "./assets/puppers.jpg"
  },
  {
    header: 'UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)',
    author: 'By MAX GOODBOYE',
    data: "bootstrap",
    image: "./assets/max.jpg"
  },
  {
    header: 'Node.js in 2018: Which Framework? Express, Sails, Hapi?',
    author: "By SIR RUFF'N'STUFF",
    data: "node",
    image: './assets/sir.jpg'
  },
  {
    header: 'MongoDB: NoSQL vs. SQL, the Debate Continues...',
    author: 'By BONES R. LIFE',
    data: "node",
    image: "./assets/bones.jpg"
  },
  {
    header: 'jQuery Animations: When and Where to Use Them, and Not CSS',
    author: 'By FIDO WALKSALOT',
    data: "jquery",
    image: "./assets/fido.jpg"
  },
  {
    header: 'AR or VR: How We Will See the World Through a Digital Lense',
    author: 'By MAX GOODBOYE',
    data: "technology",
    image: "./assets/max.jpg",
  },
  {
    header: "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
    author: 'By PUPPER S. DOGGO',
    data: "javascript",
    image: "./assets/puppers.jpg"
  },
  {
    header: 'Typescript: Ten Things you Should Know Before Building Your Next Angular Application',
    author: "By SIR RUFF'N'STUFF",
    data: "javascript",
    image: "./assets/sir.jpg"
  },
  {
    header: 'Quantum Computing: Where we Are Now, and Where We Will Be Very Soon',
    author: 'By MAX GOODBOYE',
    data: "technology",
    image: "./assets/max.jpg"
  },
  {
    header: 'Why I Use jQuery in Every Application I Create and Why You Should Too',
    author: 'By FIDO WALKSALOT',
    data: "jquery",
    image: "./assets/fido.jpg"
  },
  {
    header: 'The Hottest New Bootstrap 4 Components Every Developer Needs to Know About',
    author: 'By MAX GOODBOYE',
    data: "bootstrap",
    image: "./assets/max.jpg"
  },
  {
    header: 'The Newest Tensorflow package. Create Neural Networks in Half the Time',
    author: 'By MAX GOODBOYE',
    data: "machine learning",
    image: "./assets/max.jpg"
  },
  {
    header: 'Checkout this New H20 Extension for R!',
    author: 'By FIDO WALKSALOT',
    data: "machine learning",
    image: "./assets/fido.jpg"
  }, 
  {
    header: 'Learn How to Code Generative Adversarial Models in Four Easy Steps!',
    author: 'By MAX GOODBOYE',
    data: "machine learning",
    image: "./assets/max.jpg"
  }
];


// Card components function:
function cardsMarkup(props) {

  // Markup configuration:
  /* 
  <div class='card' data-tab=${props.data}>
    <div class='headline'></div>
    <div class='author'>
      <div class='img-container'>
        <img src=${props.image}>
      </div>
      <span></span>
    </div>
  </div>
  */

  // <div class='card' data-tab='..'>
  const parentContainer = document.createElement('div');
  parentContainer.className = 'card';
  parentContainer.dataset.tab = props.data;

  // <div class='headline'>
  const header = document.createElement('div');
  header.className = 'headline';
  header.textContent = props.header;

  // <div class='author'>
  const authorImage = document.createElement('div');
  authorImage.className = 'author';

  // <div class='img-container'>
  const imageContainer = document.createElement('div');
  imageContainer.className = 'img-container';

  // <img src='...'>
  const imageTag = document.createElement('img');
  imageTag.src = props.image;

  // <span>
  const authorText = document.createElement('span');
  authorText.textContent = props.author;

  /* 
  <div class='card'>
    <div class='headline'></div>
  </div>
  */

  parentContainer.appendChild(header);


  /*
  <div class='card'>
    <div class='headline'></div>
    <div class='author'>
      <div class='image-container'>
        <img >
      </div>
      <span></span>
    </div>
  </div>
  */
  imageContainer.appendChild(imageTag);
  authorImage.appendChild(imageContainer);
  authorImage.appendChild(authorText);

  parentContainer.appendChild(authorImage);

  // console.log(parentContainer);
  // The div layers seem to be in the right configuration.

  // Appending the parentContainer node tree to the webpage.
  const cardsContainer = document.querySelector('.cards-container');

  cardsContainer.appendChild(parentContainer);

}

// Testing the function:
cardObject.forEach(card => cardsMarkup(card));


//Event handler classes and methods:

class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
    // console.log(this.cardElement);
  }

  selectCard(){
    const cards = document.querySelectorAll('.card')
    this.cardElement.style.display = 'flex';

  }

}

class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.data = this.tabElement.dataset.tab;
    
    if (this.data === 'all') {
      this.itemElements = document.querySelectorAll(`div.card`);
    } else {
      this.itemElements = document.querySelectorAll(`div.card[data-tab="${this.data}"]`);
    }

    // console.log(`For ${this.data}`, this.itemElements);

    this.tabItems = Array.from(this.itemElements).map(itemElement => new TabCard(itemElement));
    // console.log(this.tabItems);

    this.tabElement.addEventListener('click', this.selectTab.bind(this));
  }


  selectTab(){
    const links = document.querySelectorAll('.tab');

    links.forEach(link => link.classList.remove('active-tab'));

    this.tabElement.classList.add('active-tab');

    cards.forEach(card => card.style.display = 'none');

    this.tabItems.forEach(tabItem => tabItem.selectCard());
  }
}


/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('div.tab');
// console.log(tabs);

// div.card selector works.
let cards = document.querySelectorAll('div.card');
// console.log(cards)

tabs.forEach(tab => new TabLink(tab));

