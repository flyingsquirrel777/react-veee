# Development

### Link to Deployed Website
https://flyingsquirrel777.github.io/react-veee/

### Goal and Value of the Application
This is an App for online groceries shopping, just like the app, Weee!. 
User can scroll through items, add them to the shopping cart, remove them from the shopping cart, see the total price of the shopping cart,
and increase or decrease the amount of items they would like to buy.

### Usability Principles Considered
User control and freedom: If the user accidentally add the wrong item into the shopping cart, they can remove the item from where they just clicked on or from the shopping cart. They can easily increase or decrease the amount of items they would like to buy as well.

Consistency and standards: This shopping website's layout and functions is similar to many other shopping websites.

Visibility of system status: Once you have clicked on the "add to cart" button, the "-" or the "+" button, you can see the amount of the item in the shopping cart. 

Aesthetic and minimalist design: simple layout. User can identify the side bar, items and the shopping cart very easily.


### Organization of Components
The GroceriesItem component was created and reused for displaying the groceries items.


### How Data is Passed Down Through Components
The groceries-data.json and type-data.json file respectively stores the groceries information and the side bar information (checkboxes).
These two json file is imported to the App.js file, then we use function map(item) to pass the data to the components. 

### How the User Triggers State Changes
There are two states being used, one is for the items in the shopping cart, the other is for keeping track of what items should be shown when filters are applied.
Users click on the "add to cart" / "+"/ "-" button, then the onlick() functions would call the fuctions that update the states.
As for the checkboxes, there is an onChange()function that handles the changes.


