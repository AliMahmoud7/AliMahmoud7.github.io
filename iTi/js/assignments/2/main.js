"use strict";

// Task 1
const tips = ['Single thread', 'Interpreted', 'Non-blocking', 'Event loop', 'Dynamic type',
    'Script language', 'Based on ECMAScript', 'Browsers have diffrent implementation',
    'You can use it on server using Node.js', 'Invented by Brendan Eich in 1995']
document.getElementById('task1-p').innerHTML += tips[Math.floor(Math.random() * tips.length)];

// Task 2
document.getElementById('task2-btn').onclick = function () {
    const currentDate = new Date();
    alert(currentDate.toLocaleString());
}

// Task 3
window.onerror = function (msg) {
    alert(msg);
}
document.getElementById('task3-btn').onclick = function () {
    try {
        test('ali');
    }
    catch (error) {
        alert(error);
    }
}

// Task 4 & Bonus 1
document.getElementById('task4-btn').onclick = function () {
    const userDate = prompt('Please enter a date in the following format (DD-MM-YYYY)');
    try {
        checkDate(userDate);
    }
    catch (error) {
        alert(error);
    }

    function checkDate(date) {
        if (date == null) return;  // User click Cancel button

        if (date.length == 10 && date[2] === '-' && date[5] === '-') {
            let newDate = new Date(
                parseInt(date.substring(6)), parseInt(date.substring(3, 5)) - 1,
                parseInt(date.substring(0, 2)));
            alert(newDate.toDateString());
        }
        else {
            throw 'Wong Date Format!';
        }
    }
}

// Task 5
document.getElementById('task5-btn').onclick = function () {
    function checkNumberOfOccurrence(arr, num) {
        let cnt = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                cnt++;
            }
        }

        return cnt;
    }

    const arr = [1, 2, 3, 1, 10, 1, 13];
    console.log(arr);
    console.log('number 1 found times: ' + checkNumberOfOccurrence(arr, 1));
}

// Task 6
document.getElementById('task6-btn').onclick = function () {
    function removeChar(arr, chr) {
        const idx = arr.indexOf(chr);
        if (idx != -1) {
            arr.splice(idx, 1);
        }
        else {
            console.log('character not found in the array!');
        }
    }
    const arr = ['a', 'b', 'c', 'A'];
    console.log(arr);
    removeChar(arr, 'c')
    console.log('removed character c: ', arr);
}

// Bonus 3
document.getElementById('bonus3-btn').onclick = function () {
    let arr = [11, 2, 3, 10, -10, 0, 15, 20];
    console.log(arr);
    // By default, the sort method convert the array elements to strings, then sort according to each character's Unicode code point value (alphabetically).
    // So we need to specifie a function that defines the sort order.
    arr.sort(sortNumbersKey);
    console.log('After sorting: ', arr);

    function sortNumbersKey(a, b) {
        return a - b;
    }
}
