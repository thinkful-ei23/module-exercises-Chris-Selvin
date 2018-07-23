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
            if (element.id === id){
                return element.id;
            }
        }
    };
    function addItem(name) {
        try {
            Item.validateName(name);
            store.items.push(Item.create(itemName));
        } catch(error) {
            console.log(`Cannot add item: ${error.message}`);
        }
        render();
        }
    };
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
        render();
        }        
    };
    function findAndDelete(id) {
        const indexToDelete = this.items.findIndex(findById(id));
        console.log(`this.items.findIndex(findById(id)): ${this.items.findIndex(findById(id))}`);
        this.items.splice(indexToDelete);
    }       
       
    return {
        items,
        hideCheckedItems, 
        searchTerm,
        findById,
        addItem,

    };         
 }() );


