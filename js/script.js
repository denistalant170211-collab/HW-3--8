let fruits = ['Груша', 'Банан', 'Апельсин'];
let result = '';

for (let i = 0; i < fruits.length; i++) {
    result += fruits[i];

    if (i < fruits.length - 1) {
        result += ', ';
    }
}

console.log(result);

console.log(fruits.join(', '));

let cards = ['Картка 1', 'Картка 2', 'Картка 3'];

console.log(cards);

cards.splice(1, 1);
console.log(cards);

cards.splice(1, 0, 'Нова картка');
console.log(cards);

cards.splice(0, 1, 'Оновлена картка 1');
console.log(cards);