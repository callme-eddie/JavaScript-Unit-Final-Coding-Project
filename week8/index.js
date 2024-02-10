// Define a class for each menu item
class MenuItem {
    constructor(name, price) {
        this.name = name; // Name of the menu item
        this.price = price; // Price of the menu item
    }

    // Method to describe the menu item
    describe() {
        return `${this.name} - $${this.price}`;
    }
}

// Define a class to manage the menu
class Menu {
    constructor() {
        this.menuItems = []; // Array to store menu items
        this.selectedMenuItem = null; // Keep track of the currently selected menu item
    }

    // Method to start the menu application
    start() {
        let selection = this.showMainMenuOptions(); // Display main menu options
        while (selection !== '0') {
            switch (selection) {
                case '1':
                    this.createMenuItem(); // Add a new menu item
                    break;
                case '2':
                    this.viewMenuItem(); // View a menu item
                    break;
                case '3':
                    this.deleteMenuItem(); // Delete a menu item
                    break;
                case '4':
                    this.displayMenu(); // Display all menu items
                    break;
                default:
                    selection = '0'; // Exit the application
            }
            selection = this.showMainMenuOptions(); // Show main menu options again
        }
        alert('Thank you for using our food ordering system!');
    }

    // Method to display main menu options and get user input
    showMainMenuOptions() {
        return prompt(`
0) Exit
1) Add a new menu item
2) View a menu item
3) Delete a menu item
4) Display all menu items
`);
    }

    // Method to add a new menu item
    createMenuItem() {
        let name = prompt('Enter the name of the menu item:');
        let price = parseFloat(prompt('Enter the price of the menu item:'));
        this.menuItems.push(new MenuItem(name, price)); // Create and add a new menu item to the array
        alert('Menu item added successfully.');
    }

    // Method to view a menu item
    viewMenuItem() {
        let index = prompt('Enter the index of the menu item to view:');
        if (index >= 0 && index < this.menuItems.length) {
            this.selectedMenuItem = this.menuItems[index]; // Select the menu item at the given index
            alert(this.selectedMenuItem.describe()); // Display information about the selected menu item
        } else {
            alert('Invalid index.'); // Show error message for invalid index
        }
    }

    // Method to delete a menu item
    deleteMenuItem() {
        let index = prompt('Enter the index of the menu item to delete:');
        if (index >= 0 && index < this.menuItems.length) {
            this.menuItems.splice(index, 1); // Remove the menu item at the given index from the array
            alert('Menu item deleted successfully.');
        } else {
            alert('Invalid index.'); // Show error message for invalid index
        }
    }

    // Method to display all menu items
    displayMenu() {
        let menuString = 'Menu:\n';
        this.menuItems.forEach((item, index) => {
            menuString += `${index}: ${item.describe()}\n`; // Generate a string with information about each menu item
        });
        alert(menuString); // Display the menu string
    }
}

// Create a new instance of the Menu class and start the application
let menu = new Menu();
menu.start();
