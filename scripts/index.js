/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars


$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

//console.log(store);
//console.log(foo);
//console.log(Item);
//console.log(foo);
// const itemNames = [ '', 'apples', 'pears' ];
//   itemNames.forEach(name => {
//     try {
//       Item.validateName(name);
//       store.items.push(Item.create(name));
//     } catch(error) {
//       console.log(error);
//       console.log('Cannot add item: ' + error.message);
//     }
//   });
// shoppingList.render();