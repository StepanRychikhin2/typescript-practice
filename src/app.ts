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




