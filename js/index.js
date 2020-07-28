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

///////====================STAIRS====================///////

// let stairs = {
//     steep: 0,
//     up(){
//         this.steep++;
//         return this;
//     },
//     down(){
//         this.steep--;
//         return this;
//     },
//     result: function(){
//         alert(this.steep);
//         return this;
//     },
// }

// stairs
// .up()  //1
// .up()  //2
// .up()  //3
// .up()  //4
// .down()  //3
// .up()  //4
// .result();  //4
///////////////////////////////===NEW===////////////////

// function User(name) {
//     this.name = name;
//     this.welcom = () => {
//         alert(`Привет! Меня зовут: ${this.name}`);
//     }
// }

// let valera = new User('Valera');
// valera.welcom();
// ///////////////////////////////////////////////////////
// let num = +prompt("Enter a number", '');
// alert(isFinite(num))
/////////////////////////////////////////////////////////
///////////////////////////Сравнение/////////////////////
// let vika = 228;
// let nik = 228

// alert(Object.is(vika, nik));
//////////////////////////////Числа///////////////////////
// alert(parseInt('20.5$fsdfsd'));//result = 20= ////
// alert(parseFloat('20.5$dsfsd'));//result = 20.5//
// let numberDol = 25.500000
// alert(numberDol.toFixed(2))//result = 25.50

// /////
// lert(Math.max(3, 5, -10, 0, 1)); // 5
// alert(Math.min(1, 2)); // 1
// Math.pow(2, 5)//2 ** 5 // result = 35
//////////////////////////////////////////////////////////
/////////////RANDOM/////////////////////////random////////

function random(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let num = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(num);
}

alert(random(1, 99));
alert(random(1, 99));
alert(random(1, 99));