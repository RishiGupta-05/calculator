const button = document.querySelectorAll("button");
const result = document.getElementById("result");

for (let i=0; i<button.length; i++){
    button[i].addEventListener("click", () =>
        {
            const buttonValue = button[i].textContent;
            if(buttonValue === "C")
                {
                    clearResult();
                }

            else if(buttonValue === "=")
                {
                    calculateResult();

                }

                else
                {
                    appendValue(buttonValue);

                }

            });
        }

        function calculateResult(){
            result.value = eval(result.value);

        }

        function clearResult(){
            result.value="0";
        }

        function appendValue(buttonValue)
        {
            result.value = result.value + buttonValue;
        }

        
