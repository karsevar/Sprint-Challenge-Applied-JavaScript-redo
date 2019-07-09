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
function CardsMarkup(props) {

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
  const imageContainer = document.createElement()
}







