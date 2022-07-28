//get the values from the Page
//starts or controller function
function getValues() {


    //get values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        if(endValue > 100 && startValue < 0) {
            alert('Values cannot be less than 0 or greater than 100.');
        }
        else if(endValue > 100) {
            alert ('End Value cannot be bigger than 100.');
        } else if(startValue < 0) {
            alert('Start Value cannot be less than 0.');
        } 
        else {
            //we call gernateNumbers
           let numbers = generateNumbers(startValue, endValue);

            //we call displayNumbers
             displayNumbers(numbers);
        }
        
     } else {
        alert("You must enter numbers.")
    }
    

    if (startValue > endValue) {
        alert("You must enter a start value less than end value.")
    }
   
}


//generate numbers from startValue to the endValue
//logic function
function generateNumbers(startValue, endValue) {
    let numbers = [];

    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
        
    }

    return numbers;
}

// display the numbers and mark even numbers bold
//display function
function displayNumbers(numbers) {

    let resultsDiv = document.getElementById('results');
    let templateRows = "";
    

    for(let index = 0; index< numbers.length; index++) {
        let className = "even";
        let number = numbers[index];

        if(number % 2 === 0 && number !==0) {
            className = "even";

        } else { 
            className = "odd"
        }
        templateRows += `<tr><td class='${className}'>${number}</td></tr>`

    }

    resultsDiv.innerHTML = templateRows;
}