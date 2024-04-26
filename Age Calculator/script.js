document.getElementById("dob_day").addEventListener("input", clearErrorMessage);
document.getElementById("dob_month").addEventListener("input", clearErrorMessage);
document.getElementById("dob_year").addEventListener("input", clearErrorMessage);

document.getElementById("dob_day").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculateAge();
    }
});

document.getElementById("dob_month").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculateAge();
    }
});

document.getElementById("dob_year").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculateAge();
    }
});

function clearErrorMessage() {
    var errorElement = document.getElementById("error-message");
    errorElement.textContent = "";
}

function calculateAge() {
    var dob_day = parseInt(document.getElementById("dob_day").value);
    var dob_month = parseInt(document.getElementById("dob_month").value);
    var dob_year = parseInt(document.getElementById("dob_year").value);

    var errorElement = document.getElementById("error-message");

    if (isNaN(dob_day) || isNaN(dob_month) || isNaN(dob_year)) {
        errorElement.textContent = "Please fill in all the fields.";
        return;
    }

    if (dob_day < 0 || dob_month < 0 || dob_year < 0) {
        errorElement.textContent = "Please enter valid positive numbers.";
        return;
    }

    var today = new Date();
    var current_year = today.getFullYear();
    var current_month = today.getMonth() + 1;
    var current_day = today.getDate();

    if (dob_month < 1 || dob_month > 12) {
        errorElement.textContent = "Please input a valid month.";
        return;
    }

    var daysInMonth = new Date(dob_year, dob_month, 0).getDate();
    if (dob_day < 1 || dob_day > daysInMonth) {
        errorElement.textContent = "Please input a valid day for the selected month.";
        return;
    }

    var years = current_year - dob_year;
    var months = current_month - dob_month;
    var days = current_day - dob_day;

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        var prevMonthDays = new Date(current_year, current_month - 1, 0).getDate();
        days += prevMonthDays;
        months--;
    }

    var formattedYears = years >= 0 ? (years < 10 ? '0' + years : years) : "-" + ("00" + Math.abs(years)).slice(-2);
    var formattedMonths = months < 10 ? '' + months : months;
    var formattedDays = days < 10 ? '' + days : days;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p style='font-size: 24px; font-weight: 600;'>Your Age is:</p>" +
                              "<b style='font-size: larger; color: #2e5984;'>" + formattedYears + "&nbsp;" + "</b> Years<br>" +
                              "<b style='font-size: larger; color: #2e5984;'>" + (formattedMonths < 10 ? '0' + formattedMonths : formattedMonths) + "&nbsp;" + "</b> Months<br>" +
                              "<b style='font-size: larger; color: #2e5984;'>" + (formattedDays < 10 ? '0' + formattedDays : formattedDays) + "&nbsp;" + "</b> Days.";

    var extremeMessageElement = document.getElementById("extreme-message");
    extremeMessageElement.innerHTML = "";

    if (dob_year <= 1) {
        extremeMessageElement.innerHTML += "Bro you playing with dinosaurs or something 😂<br>";
    }
    if (dob_year < 1950 && dob_year > 1) {
        extremeMessageElement.innerHTML += "How are you still alive bro 🙏😂<br>";
    }
    if (dob_year === current_year && dob_month === current_month && dob_day === current_day) {
    extremeMessageElement.innerHTML += "Bro just born today 😮";
    } else if (dob_year > current_year || (dob_year === current_year && dob_month > current_month) || (dob_year === current_year && dob_month === current_month && dob_day > current_day)) {
    extremeMessageElement.innerHTML += "Damn we got time travelers from future 🙏🤯";
    }
    document.getElementById("reset-button").style.display = "block";
}

function resetForm() {
document.getElementById("dob_day").value = "";
document.getElementById("dob_month").value = "";
document.getElementById("dob_year").value = "";
document.getElementById("result").innerHTML = "";
document.getElementById("extreme-message").innerHTML = "";

document.getElementById("reset-button").style.display = "none";

clearErrorMessage();

}

function clearErrorMessage() {
var errorElement = document.getElementById("error-message");
errorElement.textContent = "";
}
    
