"use strict";

// Task 1
document.getElementById('task1-btn').onclick = function () {
    alert('Welcome to my site!');
    const userName = prompt('Please enter your name.');
    if (userName != null) document.getElementById('task1-p').innerHTML = `Welcome ${userName}!`;    
}

// Task 2
function sumTwoNums(x, y) {
    return x + y;
}

document.getElementById('task2-btn').onclick = function () {
    const num1 = parseFloat(prompt('Please enter first number.'));
    const num2 = parseFloat(prompt('Please enter second number.'));

    const sum = sumTwoNums(num1, num2);
    alert(`Sum = ${sum}`);
}

// Task 3
document.getElementById('task3-btn').onclick = function () {
    const exp = prompt('Please enter a math expression.');

    if (exp != null && exp.length > 0) {
        const result = eval(exp);
        alert(`You entered: ${exp}, and the result is: ${result}`);
    }
}

// Task 4
document.getElementById('task4-btn').onclick = () => {
    let name, birthYear;

    while (true) {
        name = prompt('Please enter your name.');
        if (name == null) break; // User click cancel

        if (typeof (name) === 'string' && name.length > 0) {
            break;
        }

        alert('Please enter a correct name!');
    }

    while (true) {
        birthYear = prompt('Please enter your birth year.');
        if (birthYear == null) break; // User click cancel

        birthYear = parseInt(birthYear);
        if (!isNaN(birthYear) && birthYear < 2010) {
            break;
        }

        alert('Please enter a correct birthYear and It is less than 2010!');
    }


    // Calc user age
    const age = calcAge(birthYear);

    // Create table for user
    const user = {
        'Name': name,
        'Birth year': birthYear,
        'Age': age
    }

    let table = document.createElement('table');
    table.setAttribute('border', 1);

    for (const prop in user) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = prop;
        tr.appendChild(td1)

        let td2 = document.createElement('td');
        td2.innerHTML = user[prop];
        tr.appendChild(td2)

        table.appendChild(tr)
    }

    let body = document.getElementsByTagName('body')[0];
    body.appendChild(table);
}

function calcAge(year) {
    const currentYear = new Date().getFullYear();

    return currentYear - year
}

// Bonus
document.getElementById('bonus1-btn').onclick = () => {
    for (let i = 1; i <= 6; i++) {
        document.write(`<h${i}>welcome to my page!</h${i}>`);
    }
}
