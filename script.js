const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText;

        /* Add functionallity on the buttons */

        if (value === "Ac") {
            expression = "";
            inputBox.value = "";
        }
        else if (value === "Del") {
            expression = expression.slice(0, -1);
            inputBox.value = expression;
        }
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                inputBox.value = expression;
            } catch {
                inputBox.value = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            inputBox.value = expression;
        }
    });
});