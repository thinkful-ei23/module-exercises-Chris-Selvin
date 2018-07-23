'use strict';
const store = (function () {
    const foo = 'bar';
    let items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ];
    let hideCheckedItems = false;
    let searchTerm = '';
    function findById(id) {
        store.items.find(function(element){
          if (element.id === store.items.id){
             return store.items.id;
          }
        });
    }

    
    function addItem(name) {
        try {
            Item.validateName(name);
            this.items.push(Item.create(name));
        } catch(error) {
            console.log(`Cannot add item: ${error.message}`);
        }
        shoppingList.render();
    }
    function findAndToggleChecked(id) {       
        const foundItem = this.findById(id);
        foundItem.checked = !foundItem.checked;
    };

    function findAndUpdateName(id, newName) {
        try {
            Item.validateName(newName);
        } catch(error) {
            console.log(`Cannot update name: ${error.message}`);
        }
        const validItem = this.findById(id);
        console.log(`validItem: ${validItem}`);
        validItem.name = newName;
        shoppingList.render();
    }        

    function findAndDelete(id) {
       this.items = this.items.filter(item => item.id !== id);
    }       
       
    return {
        items,
        hideCheckedItems, 
        searchTerm,
        findById,
        addItem,
        findAndToggleChecked,
        findAndUpdateName,        
        findAndDelete,
    };         
 }());


