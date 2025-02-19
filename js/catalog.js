/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i=0; i<Product.allProducts.length;i++) {
    let optionElement = document.createElement('option');
    selectElement.appendChild(optionElement);
    optionElement.value= Product.allProducts[i].name;
    optionElement.textContent=Product.allProducts[i].name;
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let itemSelected = document.querySelector('select').value;
    // console.log(itemSelected);
  // TODO: get the quantity
  let quantitySelected = document.querySelector('input').value;
  // console.log(quantitySelected);
  // TODO: using those, add one item to the Cart
  cart.addItem(itemSelected,quantitySelected);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let itemCount = 0;
function updateCounter() {
  itemCount++;
  document.getElementById('itemCount').innerHTML= itemCount + 'item/s';
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
let itemsList = document.getElementById('cartContents');
  let divElement = document.createElement('div');
  itemsList.appendChild(divElement);
  let headingElement = document.createElement('h2');
  divElement.appendChild(headingElement);
  headingElement.textContent='Your cart';
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let itemSelected = document.querySelector('select').value;
  let quantitySelected = document.querySelector('input').value;

  // TODO: Add a new element to the cartContents div with that information
  
  let ulElement = document.createElement('ul');
  divElement.appendChild(ulElement);
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement);
    liElement.textContent= quantitySelected + ' of ' +itemSelected;
   
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
