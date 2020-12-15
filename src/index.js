import './style.css';
import MainFunc, { testA, hello as helloTest } from './components/test.js';
import Products from './components/products.js';

const productsContainer = document.querySelector('#products');

const products = new Products(['Яблоки', 'Груши', 'Бананы']);
console.log(productsContainer);
productsContainer.append(products.render());


function hello() {
	console.log('Hello from index.js');
}

console.log('testA =', testA); //не сработает

hello();
helloTest();


////////////////////////////////
const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {
	console.log('Clicked')
});