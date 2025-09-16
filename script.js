

// GLOBAL VARIABLES - 
let globalCounter = 0;           // Tracks how many times functions are called
let cardIsFlipped = false;       // Tracks the state of our flip card

/* 
SCOPE CONCEPT:
- Global variables are declared outside any function
- They can be read and modified by any function
- They exist for the entire time the page is loaded
*/

/* ===== UTILITY FUNCTION ===== */
//
function displayResult(message) {
    // Find the HTML element with id="result-display"
    const displayArea = document.getElementById('result-display');
    
    // Update its content (innerHTML allows HTML formatting)
    displayArea.innerHTML = `<strong>Result:</strong> ${message}`;
}

/* ===== PART 2: FUNCTION EXAMPLES ===== */

/* FUNCTION 1: Simple Function (No Parameters, No Return Value) */
function simpleFunction() {
    // LOCAL VARIABLE - only exists inside this function
    let localMessage = "This is a simple function!";
    
    /* SCOPE DEMONSTRATION:
       - localMessage is LOCAL (only exists here)
       - globalCounter is GLOBAL (accessible everywhere)
    */
    
    // Modify global variable
    globalCounter++;
    
    // Display result using local and global variables
    displayResult(`${localMessage} (Called ${globalCounter} times)`);
    
    // Console logs help you understand scope
    console.log("=== Simple Function Called ===");
    console.log("Local variable:", localMessage);
    console.log("Global counter:", globalCounter);
    
    // When this function ends, localMessage disappears!
    // But globalCounter keeps its value
}

/* FUNCTION 2: Function with Parameters */
function functionWithParams(word1, word2) {
    /* PARAMETERS EXPLANATION:
       - word1 and word2 are PARAMETERS
       - They are LOCAL to this function (like local variables)
       - Their values come from whoever calls this function
       - Look in index.html: onclick="functionWithParams('Hello', 'World')"
    */
    
    // LOCAL VARIABLES using the parameters
    let combinedMessage = `You passed: "${word1}" and "${word2}"`;
    let wordCount = word1.length + word2.length;
    
    // Access global variable
    globalCounter++;
    
    // Display the result
    displayResult(`${combinedMessage}. Total characters: ${wordCount}`);
    
    // Console demonstration
    console.log("=== Function with Parameters Called ===");
    console.log("Parameter 1:", word1);
    console.log("Parameter 2:", word2);
    console.log("Combined length:", wordCount);
}

/* FUNCTION 3: Functions with Return Values */

// This function calculates something and RETURNS the result
function calculateSum(a, b) {
    /* PARAMETERS: a and b are numbers passed to this function */
    
    // LOCAL CALCULATION
    let result = a + b;
    
    /* RETURN STATEMENT:
       - Sends the result back to whoever called this function
       - The function stops running after return
    */
    return result;
}

// This function CALLS calculateSum and uses its return value
function showReturnValue() {
    /* CALLING A FUNCTION WITH RETURN VALUE:
       - calculateSum(15, 25) runs and returns 40
       - That return value gets stored in the 'sum' variable
    */
    let sum = calculateSum(15, 25);
    
    globalCounter++;
    
    displayResult(`Function returned: ${sum} (15 + 25)`);
    
    console.log("=== Return Value Demonstration ===");
    console.log("Returned value:", sum);
}

/* FUNCTION 4: Advanced Scope Demonstration */
function demonstrateScope() {
    // LOCAL VARIABLES - only exist in this function
    let localVar = "I'm a local variable!";
    const localConstant = 42;
    
    /* ACCESSING DIFFERENT SCOPES:
       This function can access:
       1. Its own local variables (localVar, localConstant)
       2. Global variables (globalCounter, cardIsFlipped)
    */
    
    let scopeDemo = `
        <strong>Local Variables:</strong><br>
        Local Variable: ${localVar}<br>
        Local Constant: ${localConstant}<br><br>
        <strong>Global Variables:</strong><br>
        Global Counter: ${globalCounter}<br>
        Card Flipped: ${cardIsFlipped}
    `;
    
    globalCounter++;
    
    displayResult(scopeDemo);
    
    // NESTED FUNCTION - demonstrates closure
    function nestedFunction() {
        /* CLOSURE CONCEPT:
           This nested function can access:
           1. Its parent function's variables (localVar)
           2. Global variables (globalCounter)
        */
        console.log("=== Nested Function (Closure) ===");
        console.log("From nested function - accessing parent's local var:", localVar);
        console.log("From nested function - accessing global var:", globalCounter);
    }
    
    // Call the nested function
    nestedFunction();
}

/* ===== PART 3: JAVASCRIPT CONTROLLING CSS ANIMATIONS ===== */

/* CONCEPT EXPLANATION:
These functions demonstrate how JavaScript can control CSS animations by:
1. Finding HTML elements with getElementById()
2. Adding or removing CSS classes with classList.add() and classList.remove()
3. The CSS file (styles.css) defines what these classes do
4. CSS transitions make the changes smooth
*/

/* ANIMATION FUNCTION 1: Slide Animation */
function slideBox() {
    // STEP 1: Find the HTML element we want to animate
    const box = document.getElementById('animated-box');
    
    /* STEP 2: Check if it already has the animation class
       classList.contains() returns true/false */
    if (box.classList.contains('slide-right')) {
        // If it has the class, remove it (slide back)
        box.classList.remove('slide-right');
        box.textContent = 'Slid back!';
    } else {
        // If it doesn't have the class, add it (slide right)
        box.classList.add('slide-right');
        box.textContent = 'Slid right!';
    }
    
    /* HOW THIS WORKS:
       1. The CSS class .slide-right has: transform: translateX(100px);
       2. When we add this class, CSS moves the element
       3. The element has: transition: all 0.5s ease; 
       4. So the movement is smooth over 0.5 seconds!
    */
    
    globalCounter++;
    console.log("Slide animation triggered");
}

/* ANIMATION FUNCTION 2: Grow Animation */
function growBox() {
    const box = document.getElementById('animated-box');
    
    // Toggle the 'grow' class
    if (box.classList.contains('grow')) {
        box.classList.remove('grow');
        box.textContent = 'Back to normal size!';
    } else {
        box.classList.add('grow');
        box.textContent = 'I grew bigger!';
    }
    
    /* The .grow class in CSS has: transform: scale(1.5);
       This makes the element 50% bigger */
    
    globalCounter++;
    console.log("Grow animation triggered");
}

/* ANIMATION FUNCTION 3: Color Change Animation */
function colorBox() {
    const box = document.getElementById('animated-box');
    
    // Toggle the 'color-change' class
    if (box.classList.contains('color-change')) {
        box.classList.remove('color-change');
        box.textContent = 'Color changed back!';
    } else {
        box.classList.add('color-change');
        box.textContent = 'New color!';
    }
    
    /* The .color-change class in CSS changes the background color */
    
    globalCounter++;
    console.log("Color animation triggered");
}

/* UTILITY FUNCTION: Reset All Animations */
function resetBox() {
    const box = document.getElementById('animated-box');
    
    // Remove ALL animation classes at once
    box.classList.remove('slide-right', 'grow', 'color-change');
    box.textContent = 'Reset! Click buttons to animate me!';
    
    globalCounter++;
    console.log("Box reset to original state");
}

/* ADVANCED ANIMATION: 3D Card Flip */
function flipCard() {
    // Find the card element
    const card = document.getElementById('flip-card');
    
    // Toggle the global state variable
    cardIsFlipped = !cardIsFlipped;
    
    /* BOOLEAN TOGGLE EXPLANATION:
       cardIsFlipped = !cardIsFlipped;
       - If cardIsFlipped was true, !true = false
       - If cardIsFlipped was false, !false = true
       This flips the boolean value back and forth
    */
    
    // Apply or remove the CSS class based on state
    if (cardIsFlipped) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
    
    globalCounter++;
    console.log("Card flip state:", cardIsFlipped);
    
    // RETURN the current state (demonstrating return values)
    return cardIsFlipped;
}

/* ===== ADVANCED EXAMPLES ===== */

/* FUNCTION COMPOSITION: Functions calling other functions */
function createComplexAnimation(elementId, className, duration) {
    // This function demonstrates parameters with default values
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.log("Element not found!");
        return false; // Return false to indicate failure
    }
    
    // Add the animation class
    element.classList.add(className);
    
    // Remove it after the specified duration
    setTimeout(() => {
        element.classList.remove(className);
    }, duration);
    
    // Return an object with information about what we did
    return {
        element: elementId,
        animation: className,
        duration: duration,
        success: true
    };
}

/* INITIALIZATION FUNCTION */
function initializePage() {
    console.log("=== PAGE INITIALIZED ===");
    console.log("JavaScript file loaded successfully!");
    console.log("Global variables initialized:");
    console.log("- globalCounter:", globalCounter);
    console.log("- cardIsFlipped:", cardIsFlipped);
    
    // Set initial message
    displayResult("Welcome! Try the function buttons above to see JavaScript in action.");
}

/* EVENT LISTENER: Run initialization when page loads */
document.addEventListener('DOMContentLoaded', initializePage);

/* ADDITIONAL SCOPE DEMONSTRATIONS FOR CONSOLE */
console.log("=== SCOPE AND FUNCTION CONCEPTS ===");
console.log("Check the browser console (F12) to see detailed logs!");
console.log("Try clicking the buttons and watch the console output.");

/* ===== JAVASCRIPT CONCEPTS SUMMARY =====

1. GLOBAL SCOPE:
   - Variables declared outside functions
   - Accessible from anywhere in the file
   - Example: globalCounter, cardIsFlipped

2. LOCAL SCOPE:
   - Variables declared inside functions
   - Only accessible within that function
   - Disappear when function ends

3. PARAMETERS:
   - Special local variables
   - Values passed into functions
   - Example: functionWithParams(word1, word2)

4. RETURN VALUES:
   - Functions can send data back
   - Use 'return' keyword
   - Calling function can capture the returned value

5. DOM MANIPULATION:
   - document.getElementById() finds HTML elements
   - classList.add() adds CSS classes
   - classList.remove() removes CSS classes
   - classList.contains() checks if class exists

6. CSS + JAVASCRIPT INTEGRATION:
   - JavaScript changes CSS classes
   - CSS defines what classes do
   - CSS transitions make changes smooth
   - Result: Smooth, interactive animations!
*/
