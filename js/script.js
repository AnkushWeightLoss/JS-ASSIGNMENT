// ================================================
// JavaScript Assignment - Complete External Script
// ================================================

// ========================================
// PAGE 1: index.html - User Form Handler
// ========================================

// Check if we're on the index.html page
if (document.getElementById('submitBtn')) {
    // Add event listener to the submit button (Modern way)
    document.getElementById('submitBtn').addEventListener('click', userForm);
}

/**
 * Function to handle user form submission
 * Gets all form data and displays it on the page
 */
function userForm() {
    // Get all form values using DOM
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const province = document.getElementById('province').value.trim();
    
    // Get the selected membership radio button
    let membership = '';
    const membershipRadios = document.getElementsByName('membership');
    for (let i = 0; i < membershipRadios.length; i++) {
        if (membershipRadios[i].checked) {
            membership = membershipRadios[i].value;
            break;
        }
    }
    
    // Validate that all required fields are filled
    if (!firstName || !lastName || !email || !address || !city || !province) {
        alert('Please fill in all required fields!');
        return;
    }
    
    // Concatenate first name and last name with a space
    const fullName = firstName + ' ' + lastName;
    
    // Create the output HTML
    const resultHTML = `
        <div id="result-display">
            <h3>Registration Successful!</h3>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>City/Province:</strong> ${city}, ${province}</p>
            <p><strong>Membership:</strong> ${membership}</p>
        </div>
    `;
    
    // Display the result using innerHTML
    document.getElementById('output').innerHTML += resultHTML;
    
    // Optional: Scroll to the result
    setTimeout(() => {
        document.getElementById('result-display').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}


// ========================================
// PAGE 2: excel.html - Excel Functions
// ========================================

// Check if we're on the excel.html page
if (document.getElementById('calculateBtn')) {
    // Add event listener to the calculate button (Modern way)
    document.getElementById('calculateBtn').addEventListener('click', myExcelFuns);
}

/**
 * Main function to handle Excel-like calculations
 * Processes user input and performs the selected calculation
 */
function myExcelFuns() {
    // Variable to store the final result
    let result;
    
    // Get the user input string
    let numberStr = document.getElementById('numbers').value;
    
    // Check if the user has entered any values
    if (!numberStr || numberStr.trim() === '') {
        alert('Please enter some numbers separated by spaces!');
        return;
    }
    
    // Trim the white space before and after the input
    numberStr = numberStr.trim();
    
    // Convert the string into an array using split()
    let numberArr = numberStr.split(' ');
    
    // Create a new array with only valid numbers (no spaces, numeric values only)
    let finalNumericArray = [];
    
    // Loop through the array to filter and convert to numbers
    for (let i = 0; i < numberArr.length; i++) {
        // Check if the element is not empty and is a number
        if (numberArr[i] !== '' && !isNaN(numberArr[i])) {
            // Convert to number and push to the new array
            finalNumericArray.push(parseFloat(numberArr[i]));
        }
    }
    
    // Check if we have valid numbers
    if (finalNumericArray.length === 0) {
        alert('Please enter valid numbers!');
        document.getElementById('result').value = '';
        return;
    }
    
    // Check which radio button is selected and perform the calculation
    if (document.getElementById('sum').checked) {
        // AutoSum - Calculate the total
        result = calculateSum(finalNumericArray);
        
    } else if (document.getElementById('avg').checked) {
        // Average - Calculate the average
        result = calculateAverage(finalNumericArray);
        
    } else if (document.getElementById('max').checked) {
        // Maximum - Find the maximum number
        result = calculateMax(finalNumericArray);
        
    } else {
        // Minimum - Find the minimum number
        result = calculateMin(finalNumericArray);
    }
    
    // Display the result in the readonly input field
    document.getElementById('result').value = result;
}

/**
 * Calculate the sum of all numbers in an array
 * @param {Array} arr - Array of numbers
 * @returns {number} - Sum of all numbers
 */
function calculateSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total.toFixed(2);
}

/**
 * Calculate the average of all numbers in an array
 * @param {Array} arr - Array of numbers
 * @returns {number} - Average of all numbers
 */
function calculateAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    let average = total / arr.length;
    return average.toFixed(2);
}

/**
 * Find the maximum number in an array using Math.max()
 * @param {Array} arr - Array of numbers
 * @returns {number} - Maximum number
 */
function calculateMax(arr) {
    // Using Math.max() with spread operator
    let maxValue = Math.max(...arr);
    return maxValue.toFixed(2);
}

/**
 * Find the minimum number in an array using Math.min()
 * @param {Array} arr - Array of numbers
 * @returns {number} - Minimum number
 */
function calculateMin(arr) {
    // Using Math.min() with spread operator
    let minValue = Math.min(...arr);
    return minValue.toFixed(2);
}

// Alternative method using sort() for finding max/min
/**
 * Find max using sort method
 * @param {Array} arr - Array of numbers
 * @returns {number} - Maximum number
 */
function calculateMaxWithSort(arr) {
    // Sort the array in ascending order
    let sortedArr = arr.slice().sort(function(a, b) {
        return a - b;
    });
    // The last element is the maximum
    return sortedArr[sortedArr.length - 1].toFixed(2);
}

/**
 * Find min using sort method
 * @param {Array} arr - Array of numbers
 * @returns {number} - Minimum number
 */
function calculateMinWithSort(arr) {
    // Sort the array in ascending order
    let sortedArr = arr.slice().sort(function(a, b) {
        return a - b;
    });
    // The first element is the minimum
    return sortedArr[0].toFixed(2);
}


// ========================================
// PAGE 3: geometry.html - Geometry Functions
// ========================================

/**
 * Show the selected shape's calculator section
 * @param {string} shape - Name of the shape to show
 */
function showShape(shape) {
    // Hide all sections first
    hideAllShapes();
    
    // Hide the shape cards
    const shapeCards = document.querySelector('.shape-cards');
    if (shapeCards) {
        shapeCards.style.display = 'none';
    }
    
    // Show the selected shape section
    const section = document.getElementById(shape + '-section');
    if (section) {
        section.style.display = 'block';
        section.style.animation = 'formGroupSlide 0.6s ease-out';
    }
}

/**
 * Hide all geometry calculator sections and show shape cards
 */
function hideAllShapes() {
    const sections = document.querySelectorAll('.geometry-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the shape cards again
    const shapeCards = document.querySelector('.shape-cards');
    if (shapeCards) {
        shapeCards.style.display = 'grid';
    }
    
    // Clear all result fields
    const resultFields = ['circle-result', 'triangle-result', 'square-result', 'rectangle-result'];
    resultFields.forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            element.value = '';
        }
    });
}

/**
 * Calculate Circle Area
 * Formula: Area = π × r²
 */
function calculateCircle() {
    // Get the radius value with DOM
    let radiusValue = document.getElementById('circle-radius').value;
    
    // Trim the white space if any
    radiusValue = radiusValue.trim();
    
    // Convert the value to a numeric data type
    radiusValue = parseFloat(radiusValue);
    
    // Validate input
    if (isNaN(radiusValue) || radiusValue <= 0) {
        alert('Please enter a valid positive number for radius!');
        document.getElementById('circle-result').value = '';
        return;
    }
    
    // Calculate the area using the formula: Area = π × r²
    let area = Math.PI * radiusValue * radiusValue;
    
    // Round to 2 decimal places
    area = area.toFixed(2);
    
    // Output the result to the read-only input box
    document.getElementById('circle-result').value = area + ' square units';
}

/**
 * Calculate Triangle Area
 * Formula: Area = ½ × base × height
 */
function calculateTriangle() {
    // Get the base value with DOM
    let baseValue = document.getElementById('triangle-base').value;
    
    // Get the height value with DOM
    let heightValue = document.getElementById('triangle-height').value;
    
    // Trim the white space if any
    baseValue = baseValue.trim();
    heightValue = heightValue.trim();
    
    // Convert the values to numeric data types
    baseValue = parseFloat(baseValue);
    heightValue = parseFloat(heightValue);
    
    // Validate input
    if (isNaN(baseValue) || isNaN(heightValue) || baseValue <= 0 || heightValue <= 0) {
        alert('Please enter valid positive numbers for base and height!');
        document.getElementById('triangle-result').value = '';
        return;
    }
    
    // Calculate the area using the formula: Area = ½ × b × h
    let area = 0.5 * baseValue * heightValue;
    
    // Round to 2 decimal places
    area = area.toFixed(2);
    
    // Output the result to the read-only input box
    document.getElementById('triangle-result').value = area + ' square units';
}

/**
 * Calculate Square Area
 * Formula: Area = side²
 */
function calculateSquare() {
    // Get the side value with DOM
    let sideValue = document.getElementById('square-side').value;
    
    // Trim the white space if any
    sideValue = sideValue.trim();
    
    // Convert the value to a numeric data type
    sideValue = parseFloat(sideValue);
    
    // Validate input
    if (isNaN(sideValue) || sideValue <= 0) {
        alert('Please enter a valid positive number for side length!');
        document.getElementById('square-result').value = '';
        return;
    }
    
    // Calculate the area using the formula: Area = a²
    let area = sideValue * sideValue;
    
    // Round to 2 decimal places
    area = area.toFixed(2);
    
    // Output the result to the read-only input box
    document.getElementById('square-result').value = area + ' square units';
}

/**
 * Calculate Rectangle Area
 * Formula: Area = width × height
 */
function calculateRectangle() {
    // Get the width value with DOM
    let widthValue = document.getElementById('rectangle-width').value;
    
    // Get the height value with DOM
    let heightValue = document.getElementById('rectangle-height').value;
    
    // Trim the white space if any
    widthValue = widthValue.trim();
    heightValue = heightValue.trim();
    
    // Convert the values to numeric data types
    widthValue = parseFloat(widthValue);
    heightValue = parseFloat(heightValue);
    
    // Validate input
    if (isNaN(widthValue) || isNaN(heightValue) || widthValue <= 0 || heightValue <= 0) {
        alert('Please enter valid positive numbers for width and height!');
        document.getElementById('rectangle-result').value = '';
        return;
    }
    
    // Calculate the area using the formula: Area = w × h
    let area = widthValue * heightValue;
    
    // Round to 2 decimal places
    area = area.toFixed(2);
    
    // Output the result to the read-only input box
    document.getElementById('rectangle-result').value = area + ' square units';
}


// ========================================
// THEME SWITCHER (For all pages)
// ========================================

// Check if the theme button exists
if (document.getElementById('themeBtn')) {
    // Add event listener for theme switching
    document.getElementById('themeBtn').addEventListener('click', switchTheme);
}

/**
 * Function to switch between dark and light themes
 */
function switchTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');
    
    // Toggle the light-theme class
    body.classList.toggle('light-theme');
    
    // Change the button text based on current theme
    if (body.classList.contains('light-theme')) {
        themeBtn.textContent = 'Switch to Dark Theme';
    } else {
        themeBtn.textContent = 'Switch to Light Theme';
    }
}


// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Prevent form submission and page reload (if needed)
 */
function preventFormSubmit() {
    const forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function(event) {
            event.preventDefault();
        });
    }
}

// Call the function when page loads
window.addEventListener('DOMContentLoaded', preventFormSubmit);