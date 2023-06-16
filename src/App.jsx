import { useState } from "react";
import "./App.css";
import { styles } from "../src/styles";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      case "-":
        return firstOperand - secondOperand;
      default:
        console.log(secondOperand);
        return secondOperand;
    }
  };

  const operation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);
    setOperator(nextOperator);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
  };

  const clearDisplay = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(null);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen px-3">
        <div className="bg-red-500 h-[710px] lg:w-[550px] sm:w-[450px] rounded-3xl p-7">
          <input
            className="bg-[#ff9466] h-[20%] w-[100%] text-4xl rounded-3xl text-white text-right p-6"
            type="text"
            value={displayValue}
          />
          <div className="grid grid-cols-4 gap-4 mt-7">
            <button className={`${styles.symbols}`} onClick={clearDisplay}>
              C
            </button>
            <button
              className={`${styles.symbols}`}
              onClick={() => operation("/")}
            >
              /
            </button>
            <button
              className={`${styles.symbols}`}
              onClick={() => operation("*")}
            >
              *
            </button>
            <button
              className={`${styles.symbols}`}
              onClick={() => operation("-")}
            >
              -
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("7")}
            >
              7
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("8")}
            >
              8
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("9")}
            >
              9
            </button>
            <button
              className={`${styles.symbols} row-span-2`}
              onClick={() => operation("+")}
            >
              +
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("4")}
            >
              4
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("5")}
            >
              5
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("6")}
            >
              6
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("1")}
            >
              1
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("2")}
            >
              2
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("3")}
            >
              3
            </button>
            <button
              className={`${styles.symbols} row-span-2`}
              onClick={() => operation("=")}
            >
              =
            </button>
            <button
              className={`${styles.numbers}`}
              onClick={() => inputDigit("0")}
            >
              0
            </button>
            <button
              className={`${styles.symbols} col-span-2`}
              onClick={inputDecimal}
            >
              .
            </button>
          </div>
          <span className="flex justify-center relative top-2 text-white italic text-opacity-25">
            Made with ❤️ Jamir Bances.
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
