class TabLink {
  constructor(tabElement){
    
  }


  selectTab(){

}


class TabCard {
  constructor(cardElement){
    
  }
  selectCard(){
    
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

