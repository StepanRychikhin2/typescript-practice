"use strict";
// // типізація простих типів даних
// // const price = 1232;
// // const massage = "hallo";
// // const isPpenModal = false;
// // const basket = null;
// // const data = undefined;
// //якщо ми не типізуємо дані у зміних то у typeScript відбувається НЕявна типізація
// // явна типізація:
// const price: number = 1232
// const massage: string = 'hallo'
// const isPpenModal: boolean = false
// const basket: null = null
// const data: undefined = undefined
// // якщо ми плануємо змінювати змінні то краще її типізувати
// let myAge = 14
// // myAge = "15"; буде помилка оскільки змінна myAge неявно типізована і чекає число
// //  типізація складних типів
// const numbers: number[] = [123, 323, 1, 3]
// // numbers.push("w") буде помилка оскільки ми типізували масив чисел і намагаємось додати в нього рядок
// // типізація обєктів
// // const user = {
// //     login: "awd",
// //     password: 234234
// // } типізуєми цей обєкт
// // const user: {login: string, password: number} = {
// //     login: "awd",
// //     password: 234234
// // }
// // є інший спосіб типізації
// type User = {
// 	login: string
// 	password: number | string
// }
// const user: User = {
// 	login: 'awd',
// 	password: '234234',
// }
// // типізація також слідкує чи всі властивості додані які вказані в типізації
// // user.name = "Stepan" буде помилка томущо типізацчя неочікує тикий ключ
// type LessonType = 'typeScript' // так тожна зпрезервувати значення
// // const lesson: LessonType = "javaScropt" буде помилка оскільки в змінну ми поставили інше значеня не з LessonType
// //  це може використоуватись у бібліотеках, наприклад у "UI material" де припустимо в кнопці може біти 3 значення:
// type size = 'small' | 'medium' | 'large'
// // ПРАВИЛО ХОРОШОГО ТОНУ - ВСЮ ТИПІЗАЦІЮ ВИНОСИМО НА ВЕРХ ВАЙЛУ , АБО ОКРЕМИЙ ФАЙЛ ТА ІМПОРТУЄМО
// // ТИП ДАННИХ any дозвоє всі типи данних НЕ РЕКОМЕНДОВАНИЙ
// let someData: any = 123
// someData = 'awd'
// someData = false
// // тип unknown - неводомий тип схожий на any ігнорує перевірку типів але прт зміні значення дає помилку
// // let someInfo: unknown = '123'
// // someInfo = 123123123.123
// // someInfo.toFixed(2)
// // тип "enum" може бфльше конкретизувати значеня і дозволяє не хардкодити їх (робити динамічними)
// // enum Sizes {
// // 	small = 'small',
// // 	medium = 'medium',
// // 	large = ' large',
// // }
// // const button: Sizes = Sizes.large
// // типізація функцції
// // function makeMassage(num1: number , num2: number): string {
// //     return `Num 1 - ${num1} Num 2 -${num2}`
// // }
// // console.log(makeMassage(12345,234))
// // якщо фунція нічого не венртає
// // function makeMassage(num1: number , num2: number): void {
// //    cinsile.log(`Num 1 - ${num1} Num 2 -${num2}`)
// // }
// // console.log(makeMassage(12345,234))
// type NewUser = {
// 	name: string
// 	age: number
// }
// function makeUser(name: string, age: number): NewUser {
// 	return {
// 		name: name,
// 		age: age,
// 	}
// }
// type Hero = {
//     name: string,
//     ep: number,
//     classHero: string,
//     health: number,
//     run: (a: string, b: number) => string;
// }
// const hero: Hero = {
//     name: "Hero",
//     ep: 15,
//     classHero: "wizard",
//     health: 150,
//     run(a, b) {
//         const ab = a + b;
//         return `Герой ${this.name} здійснив побіг`;
//     }
// }
// console.log(hero.run("Hero", 54));
// //
// type CourseUser = {
//     course: string,
//     duration: number,
//     mark?: number // вказуємо що це поле не обов'язкове та може бути відсутнє
// }
// const student: CourseUser = {
//     course: "typeScript",
//     duration: 12,
//     mark: 10,
// }
// const teacher: CourseUser = {
//     course: "typeScript",
//     duration: 12,
// }
// console.log(student);
// console.log(teacher);
// // індексовані влатсивості (index properties) використовємо коли є різні об'єкти, з різними наченнями, але з однаковою типізацією
// // type Product = {
// //     id: number,
// //     qty: number,
// //     price: number,
// // }
// // можемо зробити універсальний тип з динамічними ключами та значеннями
// type Product = {
//     [key: string]: number;
// }
// const product1:Product = {
//     id: 44,
//     qty: 53,
//     price: 10
// }
// =========================== ДИНАМІЧНА ТИПІЗАЦІЯ ===========================
// ДИНАМІЧНИЙ ТИП ЗАСТОСОВУЄМО КОЛИ НЕЗНАЄМО СКІЛЬКИ БУДЕ КЛЮЧІВ ТА З ЯКИМИ НАЗВАМИ І ЗНАЧЕННЯМИ АЛЕ ТИПИ ДАННИХ У НИХ БУДУТЬ ОДНАКОВІ
// type FrontEnd = {
// 	murkUp: string
// 	programming: string
// 	frameWorks: string
// } дубляж однакової схеми
// const frontEnd: FrontEnd = {
// 	murkUp: 'html css',
// 	programming: 'javaScript',
// 	frameWorks: 'React Ecspress Node.js',
// }
// type Pyton = {
// 	frontEnd: string
// 	beckEnd: string
// } дубляж однакової схеми
// const pyton: Pyton = {
// 	frontEnd: 'web-programing, flask and jango',
// 	beckEnd: 'data-siense, mashine-learnig',
// }
// type Design = {
// 	webDesign: string
// 	grafickDesign: string
// 	motionDesign: string
// } дубляж однакової схеми
// const design: Design = {
// 	webDesign: 'figma, UX /UI',
// 	grafickDesign: 'photoShop, illustrator, lightRoom ',
// 	motionDesign: 'afterEffects, premier',
// }
// ми створили під кожен курс свою типізацію і бачимо, що типи повторюються, тому ми можемо обєднати всі типи в один шаблон як динамічну типізацію
// type Course = {
//     [key: string]: string
// }
// const frontEnd: Course = {
// 	murkUp: 'html css',
// 	programming: 'javaScript',
// 	frameWorks: 'React Ecspress Node.js',
// }
// const pyton: Course = {
// 	frontEnd: 'web-programing, flask and jango',
// 	beckEnd: 'data-siense, mashine-learnig',
// }
// const design: Course = {
// 	webDesign: 'figma, UX /UI',
// 	grafickDesign: 'photoShop, illustrator, lightRoom ',
// 	motionDesign: 'afterEffects, premier',
// }
// ? зробити динамічну типізація розкоаду уроків
// ! тут вказано скільки ключів має бути, якщо при типізація після ключа написаний знак питання,
// ! то ключ може бути необовʼязковий
// type Lesson = {
//     lessonName: string,
//     lessonTeacher: string,
//     lessonDuration?: number
// }
// const math: Lesson = {
//     lessonName: 'math',
//     lessonTeacher: "Lalala Lalaal",
//     lessonDuration: 45,
// }
// const english: Lesson = {
//     lessonName: 'english',
//     lessonTeacher: "Lalala Lalaal",
//     // lessonDuration: 50,
// }
// ! тут динамічна типізація і кількість ключів може бути різна
// type Schedule = {
//     [key: string]: string
// }
// const mondaySchedule: Schedule = {
//     english: "Світлана Григорієвна",
//     math: "Віра Григорівна",
// }
// const tuesdaySchedule: Schedule = {
//     biology: "Дарина Вікторіна",
//     physics: "Данил Михайлович",
//     chemistry: "Світлана Даниловна"
// }
// const wednesdaySchedule: Schedule = {
//     english: "Світлана Григорієвна",
//     math: "Віра Григорівна",
//     biology: "Дарина Вікторіна",
//     physics: "Данил Михайлович",
//     chemistry: "Світлана Даниловна"
// }
// створити тип для об'єкта де ключ є рядок а значення або рядок, або число створити декілька об'єктів такого типу
// type Picture = {
//     [key: string]: string | number,
// }
// const pixelArtArtist: Picture = {
//     style: "pixel art",
//     paintingTime: 45,
//     nameArtist: "Josh",
//     price: 105,
//     paintingName: "ah-one"
// }
// const paintingBuyer: Picture = {
//     wallet: 2500,
//     nameBuyer: "Oleg",
//     paintingName: "ah-one"
// }
// const platformBay: Picture = {
//     buyer: "Oleg",
//     seller: "Josh",
//     buyingPainting: "ah-one",
//     pricePainting: 105
// }
// -----------GENERIC-----------
// Дженеріки забезпучують типізацію функції чи класу, але не прив'язуються до аргументів які прийдуть у функцію/клас
// Дженерік це змінна, тобто динамічний тип даних. Для дженерік використовуємо <>
// function showInfo(msg: string): string{
//     return `Передане повідомлення: ${msg}`
// }
// const output: string = showInfo('Hi');
// console.log(output); // в даній функції ми маємо преедавати завжди рядок
// нижче ми хочем зробити типізацію динамічною
// function showInfo<M,N>(msg1: M, msg2: N): string{ // динамічно підставляємо тип у дженерік <M>
//     return `Передане повідомлення: ${msg1}, ${msg2}`
// }
// const output1: string = showInfo<string,string>('Hi','g');
// const output2: string = showInfo<number,string>(4892,'k');
// console.log(output1, output2);
// // створимо функцію яка буде приймати масив будь якого типу
// // додає до кожного елемента масива step та вертає оновлений масив
// function arrPlusStep<N extends number[],S extends number>(arr: N,step: S): number[]{
//     return arr.map(item => {
//         return item + step
//     })
// }
// const res1 = arrPlusStep<number[],number>([1, 2, 3], 5);
// // const res2 = arrPlusStep<string[], string>(['a', 'b', 'c'], ' d');
// console.log(res1);
// // extends - це свого роду як первірка замість if, таким чином ми робимо додаткову валідацію аргументів
// // якщо переданий аргумент буде відповідати умові extends то тоді цей аргумент буде вважатися валідним
// const savedPasswords = '12345';
// function checkUser<U extends {
//     login: string,
//     password: number | string,
// }>(user: U, ): string {
//     if (savedPasswords === user.password){
//         return `Ви автирозовані!\nLOGIN: ${user.login}\nPASSWORD: ${user.password}`;
//     }
//     return `Ви не автирозовані!`
// }
// console.log(checkUser({
//     login: "Name",
//     password: "12345"
// }));
// console.log(checkUser({
//     login: "Name",
//     password: 12345
// }));
// Написати функццію яка приймає два числа і додає їх(калькулятор)
// const inputNumberOne = document.querySelector(".numberOne")! as HTMLInputElement;
// const inputNumberTwo = document.querySelector(".numberTwo")! as HTMLInputElement;
// const buttonElementSum = document.querySelector(".buttonSum")! as HTMLButtonElement;
// const buttonElementDifference = document.querySelector(".buttonDifference")! as HTMLButtonElement;
// const buttonElementMultiplier = document.querySelector(".buttonMultiplier")! as HTMLButtonElement;
// const buttonElementDivision = document.querySelector(".buttonDivision")! as HTMLButtonElement;
// function calculatorFunctionSum<N extends number, M extends number>(num1: N, num2: M): void {
//     const sum: number = num1 + num2;
//     console.log(sum);
// };
// function calculatorFunctionDifference<N extends number, M extends number>(num1: N, num2: M): void {
//     const sum: number = num1 - num2;
//     console.log(sum);
// };
// function calculatorFunctionMultiplier<N extends number, M extends number>(num1: N, num2: M): void {
//     const sum: number = num1 * num2;
//     console.log(sum);
// };
// function calculatorFunctionDivision<N extends number, M extends number>(num1: N, num2: M): void {
//     const sum: number = num1 / num2;
//     console.log(sum);
// };
// buttonElementSum.addEventListener("click", () => {
//     calculatorFunctionSum(Number(inputNumberOne.value), Number(inputNumberTwo.value));
// });
// buttonElementDifference.addEventListener("click", () => {
//     calculatorFunctionDifference(Number(inputNumberOne.value), Number(inputNumberTwo.value));
// });
// buttonElementMultiplier.addEventListener("click", () => {
//     calculatorFunctionMultiplier(Number(inputNumberOne.value), Number(inputNumberTwo.value));
// });
// buttonElementDivision.addEventListener("click", () => {
//     calculatorFunctionDivision(Number(inputNumberOne.value), Number(inputNumberTwo.value));
// });
// const inputForm = document.querySelector('.inputLogin')! as HTMLInputElement
// const btnSubmit = document.querySelector(
// 	'.buttonSubmitForm'
// )! as HTMLButtonElement
// const formSent = document.querySelector('.formLogin')! as HTMLFormElement
// const logins: string[] = ['Stepan', '123123', 'qqwwpro']
// formSent.addEventListener('submit', (e) => {
// 	e.preventDefault()
// 	// console.log(typeof inputForm.value)
// 	// console.log(logins.find((elem) => elem === inputForm.value))
// 	// logins.filter((elem) => elem === inputForm.value)
// 	if (logins.find((elem) => elem === inputForm.value)) {
// 		alert('логін знайдено')
// 	} else {
// 		alert('логін не знайдено')
// 	}
// 	// logins.map((data) => {
// 	// //     if (inputForm.value === data) {
// 	// //         alert("w")
// 	// //     } else {
// 	// //         alert("wawda")
// 	// //     }
// 	// //     console.log(data)
// 	// })
// })
// // ? Напишіть функцію, яка отримує масив об'єктів і повертає масив імен з тих об'єктів,
// // ? які мають вік більше 18 років.
// const users: { firstName: string, lastName: string, age: number }[] = [
//     {
//         firstName: 'Semen',
//         lastName: 'Antipyuk',
//         age: 15
//     }, {
//         firstName: 'Michael',
//         lastName: 'Ivanov',
//         age: 15
//     }, {
//         firstName: 'Mykita',
//         lastName: 'Pupkin',
//         age: 20,
//     }, {
//         firstName: 'Ivan',
//         lastName: 'Llalala',
//         age: 22,
//     }
// ];
// const ageFilter = (users: { firstName: string, lastName: string, age: number }[]) => {
//     const filtredNamesUsers = users.filter(user => user.age >= 18).map(user => user.firstName);
//     return filtredNamesUsers
// }
// console.log(ageFilter(users))
// ? Напишіть функцію, яка отримує масив об'єктів і повертає масив імен з тих об'єктів,
// ? які мають вік більше 18 років.
// const users: { firstName: string, lastName: string, age: number }[] = [
//     {
//         firstName: 'Semen',
//         lastName: 'Antipyuk',
//         age: 15
//     }, {
//         firstName: 'Michael',
//         lastName: 'Ivanov',
//         age: 15
//     }, {
//         firstName: 'Mykita',
//         lastName: 'Pupkin',
//         age: 20,
//     }, {
//         firstName: 'Ivan',
//         lastName: 'Llalala',
//         age: 22,
//     }
// ];
// const ageFilter = (users: { firstName: string, lastName: string, age: number }[]) => {
//     const filtredNamesUsers = users.filter(user => user.age >= 18).map(user => user.firstName);
//     return filtredNamesUsers
// }
// console.log(ageFilter(users))
// type Human = {
//     name: string,
//     age: number
// }
// const mankind: Human[] = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 22 },
//     { name: "Maria", age: 28 },
//     { name: "David", age: 35 },
//     { name: "Sophia", age: 16 },
//     { name: "Michael", age: 40 },
//     { name: "Emma", age: 15 },
//     { name: "James", age: 14 },
//     { name: "Olivia", age: 26 }
// ];
// const findAdults = (mankind: Human[]): string[] => mankind.filter((human: Human) => human.age >= 18).map((human: Human) => human.name);
// console.log(findAdults(mankind));
// const statsEl = document.querySelector('.stats') as HTMLDivElement;
// type Tweet = {
//     id: string,
//     likes: number,
//     tags: string[]
// }
// type Obj = {
//     [key: string]: number
// }
// const tweets: Tweet[] = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// let stats: Obj = {};
// tweets.forEach((tweet: Tweet) => {
//     tweet.tags.forEach((tag: string) => {
//         if (tag in stats) {
//             stats[tag] = stats[tag]+1;
//         } else {
//             stats[tag] = 1;
//         }
//     })
// });
// console.log(stats);
// Object.keys(stats).forEach((stat: string) => {
//     statsEl.innerHTML += `${stat} - ${stats[stat]}<br>`
// });
// //скорочений варіант
// tweets.forEach((tweet: Tweet) => tweet.tags.forEach((tag: string) => stats[tag] = tag in stats ? stats[tag]+1 : 1));
// Object.keys(stats).forEach((stat: string) => statsEl.innerHTML += `${stat} - ${stats[stat]}<br>`);
