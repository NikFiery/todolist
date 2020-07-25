'use strict';

// let user = {
//     name: 'Nik',
//     age: 20,
//     admin: true,
// }

// for(let key in user) {
//     alert(key);
//     alert(user[key])
// }


//////////////////////////////////////////////////////////////////////////////////

// let user = (task, yes, no) => {
//     confirm(task) ? yes() : no();
// }

// user (
//     'Вам понравилось блюдо ?',
//     () => alert('Я рад это слышать!'),
//     () => alert('Мы сожалеем об этом'),
// )

//////////////////////////////////////////////////////////////////////////////////

// let admin =  {
//     name: 'Nik',
//     age: 20,
//     MW: 'M',
// }
// let topAdmin = prompt('Какое значение вы хотите узнать ?', 'name');
// alert(admin[topAdmin]);

//////////////////////////////////////////////////////////////////////////////////
// let admin = {
//     name: prompt('Напишите ваше имя..', 'Nikita'),
//     age: prompt('Сколько тебе лет ?', 20),
//     MW: prompt('М или Ж ?', 'М'),
// }

// for(let key in admin) {
//     alert('Твои данные: '+admin[key]);
// }
//////////////////////////////////////////////////////////////////////////////////
//Клонирование объектов//

// let user = {
//     name : 'Nik',
//     age : 20,
//     pol : 'M',
// }

// let cloneUser = {};

// for (let key in user) {
//     cloneUser[key] = user[key];
// }

// alert(`Это клон - ${cloneUser.name}`); //Nik
//////////////////////////////////////////////////////////////////////////////////

// let user = {
//     name : 'Nik',
// }

// let myAge = {
//     age : 20
// }

// let pol = {
//     p : 'M'
// }

// Object.assign(user, myAge, pol);

// for(let key in user) {
//     alert(user[key]);
// }
////////////////////////////////////////////////////////////////////////////////

////topClone///

// let user = {
//     name : 'Nik',
//     age : 20,
//     gender : 'M',
// }

// let cloneUser = Object.assign({} , user);
// alert(user.name) //Nik
////////////////////////////////////////////////////////////////////////////////////

// let user = {
//     width: 200,
//     height: 300,
//     title: 'My menu',
// };

// let test = (user) => {
//      for(let key in user) {
//        user[key] == 'number' ? user[key] *=2 : '';
//     }
// }

// alert(test(user)) //функция сработала правильно, но ничего не выводит, так как return не прописал.
////////////////////////////////////////////////////////////////////////////////////

// let ptita = Symbol.for('ptita');

// let user = {

//     name: 'nik',
//     age: 20,
//     [ptita]: 'good',
// }
// for(let key in user) {
//     alert(user[ptita])
// }

// let test = Symbol.for('hello');
// let test2 = Symbol.for('World');

// alert(Symbol.keyFor(test))
// alert(test2.description)
//////////////////////////////////////////////////////////////////////////////////////////
// let myBro = {
//     welcom() {
//         alert('hello');
//     }
// }

// myBro.welcom()

/////////////////////////Ключевое слово «THIS» в методах/////////////////////
//     let name = Symbol.for(prompt('Введите имя user...'));

//     let master = {
//         [name]: name.description,
//         age: 20,
//         gender: 'M',
//         whatName() {
//             alert(`Твое имя: ${this[name]}`);
//         }
//     }

// master.whatName();

// let user = {
//     name: 'max',
//     age: 20,
//     test() {
//         alert(this.name)
//     }
// };

// user.test()


///=====////=====///====//CALCULATOR//====///===///=======

// let calc = {
//     value(){
//         this.oneValue = +prompt('Enter the first value...', 5);
//         this.twoValue = +prompt('Enter the second value...', 5);
//     },
//     sum(){
//         return this.oneValue + this.twoValue;
//     },
//     mul(){
//         return this.oneValue * this.twoValue;
//     },
//     radical(){
//         return this.oneValue ** this.twoValue;
//     },
// }

// calc.value();

// alert(`Expression result: ${calc.oneValue} + ${calc.twoValue} = ${calc.sum()}`);
// alert(`Expression result: ${calc.oneValue} * ${calc.twoValue} = ${calc.mul()}`);
// alert(`Expression result: ${calc.oneValue} √ ${calc.twoValue} = ${calc.radical()}`);///////доделю условия ввода чисел и проверку на числа.