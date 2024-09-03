const name = prompt('Enter your name', "name");
const today = new Date();
const hrs = today.getHours();

let greeting = '';
let backgroundColor = '';

if (hrs <= 12) {
    greeting = 'Good Morning, ' + name + "!";
    backgroundColor = '#FFFAE3'; // Light yellow for morning
} else if (hrs <= 18) {
    greeting = 'Good Afternoon, ' + name + "!";
    backgroundColor = '#FFD700'; // Gold for afternoon
} else {
    greeting = 'Good Evening, ' + name + "!";
    backgroundColor = '#2F4F4F'; // Dark Slate Gray for evening
}

document.getElementById('greeting').innerText = greeting;
document.body.style.backgroundColor = backgroundColor;
