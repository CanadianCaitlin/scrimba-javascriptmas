// Prompt:

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second from the year 101
// to the year 200, etc.

// Example:

// For the year = 1905, the output should be centuryFromYear(year) = 2000
// For the 1700 = 1700, the output should be centuryFromYear(year) = 1700

// Hints:

// math.floor()

// math.floor rounds the number to the nearest whole number
// parseInt() can get its number by removing extra text

function centuryFromYear(num) {
    if (num <= 100) { // if number is less than or equal to 100, return 1
        return 1
    } else { // if number is larger than 101
        if (num % 100 == 0) { // if number is divisble by 100, divide year by 100 and return
            return num/100
        } else { // round to nearest century and divide by 100
            let difference = 100 - (num % 100)
            return (num + difference)/100
        }
    }
}