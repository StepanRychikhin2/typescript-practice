"use strict";
// типізація простих типів даних
// const price = 1232;
// const massage = "hallo";
// const isPpenModal = false;
// const basket = null;
// const data = undefined;
//якщо ми не типізуємо дані у зміних то у typeScript відбувається НЕявна типізація
// явна типізація:
const price = 1232;
const massage = 'hallo';
const isPpenModal = false;
const basket = null;
const data = undefined;
// якщо ми плануємо змінювати змінні то краще її типізувати
let myAge = 14;
// myAge = "15"; буде помилка оскільки змінна myAge неявно типізована і чекає число
//  типізація складних типів
const numbers = [123, 323, 1, 3];
const user = {
    login: 'awd',
    password: '234234',
};
// ПРАВИЛО ХОРОШОГО ТОНУ - ВСЮ ТИПІЗАЦІЮ ВИНОСИМО НА ВЕРХ ВАЙЛУ , АБО ОКРЕМИЙ ФАЙЛ ТА ІМПОРТУЄМО
// ТИП ДАННИХ any дозвоє всі типи данних НЕ РЕКОМЕНДОВАНИЙ
let someData = 123;
someData = 'awd';
someData = false;
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}
const hero = {
    name: "Hero",
    ep: 15,
    classHero: "wizard",
    health: 150,
    run(a, b) {
        const ab = a + b;
        return `Герой ${this.name} здійснив побіг`;
    }
};
console.log(hero.run("Hero", 54));
const student = {
    course: "typeScript",
    duration: 12,
    mark: 10,
};
const teacher = {
    course: "typeScript",
    duration: 12,
};
console.log(student);
console.log(teacher);
const product1 = {
    id: 44,
    qty: 53,
    price: 10
};
