var input = document.getElementById("input");
var result = document.getElementById("result");

function abc() {
    var birthDate = new Date(input.value);
    var currentDate = new Date();

    // Calculate the difference in years
    var years = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    var monthDifference = currentDate.getMonth() - birthDate.getMonth();
    var dayDifference = currentDate.getDate() - birthDate.getDate();
    

    // Adjust years and months if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        years--;
        monthDifference += 12; // Add 12 months to handle negative month difference
    }

    // Calculate the remaining months
    var months = monthDifference;

    // Calculate the remaining days
    var lastBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    console.log(lastBirthday);
    
    if (currentDate < lastBirthday) {
        lastBirthday.setFullYear(currentDate.getFullYear() - 1);
    }
    var days = Math.floor((currentDate - lastBirthday) / (1000 * 60 * 60 * 24));

    // Adjust months and days if the day difference is negative
    if (dayDifference < 0) {
        months--; // Subtract 1 month
        // Calculate the number of days in the previous month
        var daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days = daysInLastMonth - birthDate.getDate() + currentDate.getDate();
    }

    // Display the result
    result.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
    
}
