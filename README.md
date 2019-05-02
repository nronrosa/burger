# burger

### Overview of Project
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page. You are also able to re-order the burger if already devoured and it will move back to left side of page waiting to be eaten again! The app will stores every burger in a database, whether devoured or not.

### Demo 
* Interact with completed app [demo](https://safe-everglades-34062.herokuapp.com/).

### What this project uses
This project uses Nodejs, JavaScript, HTML, CSS, JQuery, Express, JSON, MySQL, Handlebars, NPM packages, homemade ORM and deployed to Heroku.

### How it functions
   * App will display an initial set of three delicious burgers on the left side of the page with a button to devour them.
   * A user clicks on the `Devour it!` button and the burger moves to the right side of the page with a button to be able to order more of that burger.
   * If the user wants to order more of a burger it will move again to the left side of the page and again display the `Devour it!` button.
   * Finally, a user is able to add their own burger of choice and it will be added to the non-eaten left side of page which then follows the functionality of the other burgers.
   * The database stores all burgers and denotes whether devoured or not.

### How to use
To run application in your browser, first set the port environment.
Type in terminal command line: ```node server.js```
