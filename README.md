# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React E-commerce Cart Example

This is a simple e-commerce cart example built using React. The application fetches product data from the Fake Store API and allows users to add items to a cart, remove items from the cart, and adjust item quantities. The cart page also calculates the total price, applies a 10% discount, and displays the final price.

## Features

- Fetch and display products from the Fake Store API.
- Add and remove items from the cart.
- Adjust item quantities in the cart.
- Calculate and display total price, discount, and final price.
- Responsive layout for a user-friendly experience.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-ecommerce-cart.git
cd react-ecommerce-cart

Install the dependencies:

bash
npm install
Running the Application
To run the application locally, use the following command:

bash
npm start
This will start the development server and open the application in your default web browser.

Project Structure
The project structure is as follows:

react-ecommerce-cart/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
App Component
The App component sets up the main application with routing and state management for products and the cart.

ProductList Component
The ProductList component displays the list of products and allows users to add items to the cart. It also displays a "Remove from Cart" button if the product is already in the cart and navigates to the Cart page after adding or removing an item.

Cart Component
The Cart component displays the items in the cart, including the ability to remove items and adjust quantities. It calculates the total price, applies a 10% discount, and displays the final price after the discount.

Styling
The CSS styles the application and makes the layout responsive. The "Add to Cart" button is positioned below the description, and the product card uses justify-content: space-between to ensure even spacing and alignment for elements.

Additional Notes
The product title is truncated to 10 characters and the description to 30 characters.

Colors and background colors are applied to various elements for a visually appealing design.

Contributing
If you would like to contribute to this project, please open an issue or submit a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
