class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
    // console.log(this.cardElement);
  }

  selectCard(){
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

    const cards = document.querySelectorAll('.card');
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

