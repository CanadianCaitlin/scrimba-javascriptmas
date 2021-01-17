// Prompt:

// You have deposited a specific amount of dollar into your bank account. Each year, your balance
// grows at the same growth rate. Find out how long it would take for your balance to pass a specific threshold
// with the assumption that you don't make any additional deposits.

// Example:

// For deposit = 100, rate = 20, and threshold = 170, the output should be depositProfile(deposit, rate, threshold) = 3

// Each year, the amount of money on your account increases by 20%. It means that throughout the years your balance would be:
// Year 0: 100
// Year 1: 120
// Year 2: 144
// Year 3: 172.8

// Thus it takes 3 years to reach the threshold.

// Plan of Action:
// Each year, the amount (initially the principal) will compound with interest
// Once the amount reaches or exceeds $170, return the number of years it took.

function depositProfit(deposit, rate, threshold) {
    let year = 0;
    while(deposit<=threshold){
        deposit += deposit*(rate/100);  
        year ++; // increment operator
   }
    return year;
}