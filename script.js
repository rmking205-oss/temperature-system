// ========================================
// Temperature Converter - JavaScript
// ========================================

// Get elements from the HTML
const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const resultText = document.getElementById("resultText");


// ========================================
// 1. Form Validation
// ========================================

// Check whether all required fields are filled
function checkForm() {
    const temperature = temperatureInput.value;
    const from = fromUnit.value;
    const to = toUnit.value;

    if (temperature !== "" && from !== "" && to !== "") {
        convertBtn.disabled = false;
    } else {
        convertBtn.disabled = true;
    }
}


// Check the form whenever the user changes the input
temperatureInput.addEventListener("input", checkForm);
fromUnit.addEventListener("change", checkForm);
toUnit.addEventListener("change", checkForm);


// ========================================
// 2. Temperature Conversion
// ========================================

convertBtn.addEventListener("click", function () {

    // Get the values entered/selected by the user
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    let celsius;
    let result;


    // ----------------------------------------
    // Convert the input temperature to Celsius
    // ----------------------------------------

    if (from === "celsius") {

        celsius = temperature;

    } else if (from === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (from === "kelvin") {

        celsius = temperature - 273.15;
    }


    // ----------------------------------------
    // Convert Celsius to the selected unit
    // ----------------------------------------

    if (to === "celsius") {

        result = celsius;

    } else if (to === "fahrenheit") {

        result = (celsius * 9 / 5) + 32;

    } else if (to === "kelvin") {

        result = celsius + 273.15;
    }


    // ----------------------------------------
    // Display the result
    // ----------------------------------------

    resultText.textContent =
        `${temperature} ${getUnitSymbol(from)} = ${result.toFixed(2)} ${getUnitSymbol(to)}`;
});


// ========================================
// 3. Get Unit Symbol
// ========================================

function getUnitSymbol(unit) {

    if (unit === "celsius") {
        return "°C";

    } else if (unit === "fahrenheit") {
        return "°F";

    } else if (unit === "kelvin") {
        return "K";
    }
}