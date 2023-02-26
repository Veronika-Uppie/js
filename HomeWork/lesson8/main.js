// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

    function User (id, name, surname , email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    };

let user = [
    new User(1486, 'Vasya', 'Shevchenko', 'VasyaShevchenko.gmail.com', '+380173645298' ),
    new User(9855, 'Petya', 'Melnyk', 'PetyaMelnyk.gmail.com', '+380173645298' ),
    new User(3254, 'Vera', 'Boyko', 'VeraBoyko.gmail.com', '+380173645298' ),
    new User(4358, 'Ira', 'Kovalenko', 'IraKovalenko.gmail.com', '+380173645298' ),
    new User(3887, 'Igor', 'Melnyk', 'IgorMelnyk.gmail.com', '+380173645298' ),
    new User(8310, 'Vasya', 'Shevchenko', 'Vasya515.gmail.com', '+380173645298' ),
    new User(2545, 'Viktor', 'Melnyk', 'Melnyk1322.gmail.com', '+380173645298' ),
    new User(7831, 'Vera', 'Boyko', 'Boyko863.gmail.com', '+380173645298' ),
    new User(8675, 'Vasya', 'Shevchenko', 'Shevchenko488.gmail.com', '+380173645298' ),
    new User(1020, 'Petya', 'Koval', 'PetyaKoval.gmail.com', '+380173645298' ),
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log("Oб'єкти з парними id");

let filterUser = user.filter(user => user.id % 2 === 0);
console.log(filterUser);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log("id. по зростанню");

let sortUser = user.sort((a, b) => {
    return a.id - b.id;
})
console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

    function Client (id, name, surname , email, phone, order) {
        User.apply(this, arguments);
       this.order = order;
    }


let client = [
    new Client(106, 'Vasya', 'Shevchenko', 'VasyaShevchenko.gmail.com', '+380173645298', ['pie', 'salt', 'sauce', 'juice', 'tea']),
    new Client(905, 'Petya', 'Melnyk', 'PetyaMelnyk.gmail.com', '+380173645298', ['tea', 'salt', 'juice']),
    new Client(304, 'Vera', 'Boyko', 'VeraBoyko.gmail.com', '+380173645298', ['tea', 'pie', 'beef', 'bean']),
    new Client(408, 'Ira', 'Kovalenko', 'IraKovalenko.gmail.com', '+380173645298', ['tea', 'salt', 'sauce']),
    new Client(307, 'Igor', 'Melnyk', 'IgorMelnyk.gmail.com', '+380173645298', ['pasta', 'juice']),
    new Client(800, 'Vasya', 'Shevchenko', 'Vasya515.gmail.com', '+380173645298', ['tea', 'sauce', 'pasta']),
    new Client(205, 'Viktor', 'Melnyk', 'Melnyk1322.gmail.com', '+380173645298', ['bean', 'salt', 'bean', 'pie']),
    new Client(701, 'Vera', 'Boyko', 'Boyko863.gmail.com', '+380173645298', ['tea', 'salt']),
    new Client(805, 'Vasya', 'Shevchenko', 'Shevchenko488.gmail.com', '+380173645298', ['tea', 'sauce', 'juice']),
    new Client(100, 'Petya', 'Koval', 'PetyaKoval.gmail.com', '+380173645298', ['tea', 'pasta', 'juice'])
]
console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log('Sort по кількості товарів в полі order');

let sortClient = client.sort((a, b) => {
    return a.order.length - b.order.length;
})
console.log(sortClient);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, value, maxSpeed, engCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.value = value;
    this.maxSpeed = maxSpeed;
    this.engCapacity = engCapacity;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    this.info = function() {
        console.log('Info about car:')
        for (let item in this) {
            if (typeof this[item] !== 'function') {
                console.log(`${item} - ${this[item]}, `);
            }
        }
    }
    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function(newValue){
        this.value = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


let car1 = new Car('Audi Q7','Audi AG', 2008, 216, '3.0' )

car1.drive();
car1.info();
car1.increaseMaxSpeed(220)
console.log(`New Max Speed = ${car1.maxSpeed}`)
car1.changeYear(2020);
console.log(`New Year = ${car1.value}`)
car1.addDriver({name: 'Vaysa', age: 33});
console.log(car1.driver);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


let Cars = class {
    constructor(model, manufacturer, value, maxSpeed, engCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.value = value;
        this.maxSpeed = maxSpeed;
        this.engCapacity = engCapacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    info() {
        console.log('Info about car:')
        for (let item in this) {
            if (typeof item !== 'function') {
                console.log(`${item} - ${this[item]}, `);
            }
        }
    }

    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;
    }
    changeYear(newValue){
        this.value = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }

}

let car2 = new Cars('Toyota Camry','Toyota Motor Corporation', 2019, 210, '2.5' )

car2.drive();
car2.info();
car2.increaseMaxSpeed(225)
console.log(`New Max Speed = ${car2.maxSpeed}`)
car2.changeYear(2022);
console.log(`New Year = ${car2.value}`)
car2.addDriver({name: 'Petya', age: 26});
console.log(car2.driver);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

let Cinderella = function (name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}
let cinderellas = [
    new Cinderella('Ella', 19, 36),
    new Cinderella('Drizella', 23, 41),
    new Cinderella('Anastasiya', 32, 40),
    new Cinderella('Milana', 30, 38),
    new Cinderella('Zlata', 15, 39),
    new Cinderella('Daryna', 31, 38),
    new Cinderella('Solomiya', 25, 41),
    new Cinderella('Viktoriya', 19, 39),
    new Cinderella('Dariya', 16, 37),
    new Cinderella('Mariya', 25, 38)
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

let Prince =  class {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
 let princeCharming = new Prince('Charming', 21, 36);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let cinderella of cinderellas) {
    if (cinderella.size === princeCharming.size) {
        console.log(` ${cinderella.name} повинна бути з принцом`)
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findeCinderella = cinderellas.find(value => value.size === princeCharming.size);
console.log( `${findeCinderella.name} повинна бути з принцом`);

