"use strict";

// Task 1
document.getElementById('task1-btn').addEventListener('click', function () {
    const clock = document.getElementById('task1-p');

    setInterval(function () {
        const d = new Date();
        clock.innerHTML = d.toLocaleTimeString();
    }, 1000);
});

// Task 2
let myWindow;
document.getElementById('task2-open').addEventListener('click', function () {
    setTimeout(function () {
        myWindow = open('new-window.html');
    }, 3000);

    document.getElementById('task2-close').addEventListener('click', function () {
        myWindow.close();
    });
});


// Task 5
document.getElementById('task5-btn').addEventListener('click', function () {
    while (true) {
        const name = prompt('Please enter your full name');
        let nameValidate = /^[a-z]{3,} [a-z]{3,}/i;

        // console.log(name);
        if (name == null) break;  // click cancel

        if (nameValidate.test(name)) {
            alert('Your name is validated correctly.')
            break;
        }
        else {
            alert('validation error!')
        }
    }

    while (true) {
        const email = prompt('Please enter your email');
        let emailValidate = /^[\w.]+@[a-z]+.(com|net|edu|org).eg$/i;

        // console.log(email);
        if (email == null) break;  // click cancel

        if (emailValidate.test(email)) {
            alert('Your email is validated correctly.')
            break;
        }
        else {
            alert('validation error!')
        }
    }

});

// Bonus 2
document.getElementById('bonus2-btn').addEventListener('click', function () {
    let graduationDate = new Date(2022, 2, 1, 12, 0, 0);  // the month is 0-indexed
    let countdownElem = document.getElementById('bonus2-p');

    setInterval(function () {
        const currentDate = new Date();
        const daysDiff = (graduationDate - currentDate) / (1000 * 60 * 60 * 24);
        // console.log(daysDiff);
        // const months = {
        //     12: 31,
        //     1: 31,
        //     2: 28,
        //     3: 31,
        //     4: 30
        // }
        // Assume all months = 30 days
        const months = Math.floor(daysDiff / 30);
        let days = daysDiff - (30 * months);

        let hours = (daysDiff - Math.floor(daysDiff)) * 24;
        days = Math.floor(days);

        let minutes = (hours - Math.floor(hours)) * 60;
        hours = Math.floor(hours);

        let seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
        minutes = Math.floor(minutes);

        countdownElem.innerHTML = `Will graduate after: ${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds 😄`;

    }, 1000);
});

// Bonus 3
// window.addEventListener("beforeunload", function() {
//     // alert('Thanks for Visiting My Website');
// });
// window.addEventListener("unload", function() {
//     // alert('Thanks for Visiting My Website');
// });
// https://stackoverflow.com/questions/1119289/how-to-show-the-are-you-sure-you-want-to-navigate-away-from-this-page-when-ch
document.getElementById('bonus3-btn').addEventListener('click', function () {
    window.onbeforeunload = function(e) {
        alert('Thanks for Visiting My Website');
        return true;
    };    
});
