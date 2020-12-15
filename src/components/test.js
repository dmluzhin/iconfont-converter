export let testA = 123;

export function hello() {
	console.log('Hello from test module');
}

console.log('test.js is loaded');

export default function main() {
	console.log('Главная функция');
}