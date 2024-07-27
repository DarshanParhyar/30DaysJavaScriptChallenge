//Task 6: Simple module for managing a collection of items

const itemManager = (function() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            }
        },
        listItems: function() {
            console.log('Items:', items);
        }
    };
})();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.listItems();  
itemManager.removeItem('Apple');
itemManager.listItems();  
