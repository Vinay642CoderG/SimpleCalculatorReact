import { useRef, useState } from "react";
import "./App.css";
import MyBtn from "./components/MyBtn";

const App = () => {
  const [outScreenVal, setOutScreenVal] = useState("");
  let userInput = useRef("");

  const testInputExp = (exp = "") => {
    const regex = /^[0-9+\-*/.]+$/;
    return regex.test(exp);
  };

  const inputChangeHandler = (e) => {
    const targetVal = e.target.value;

    if (targetVal) {
      if (testInputExp(targetVal)) {
        setOutScreenVal(targetVal);
      }
    } else {
      setOutScreenVal("");
    }
  };

  const btnClickHandler = (e) => {
    const targetVal = e.target.value;
    switch (targetVal) {
      case "C":
        userInput.current = "";
        break;
      case "=":
        if (testInputExp(userInput.current)) {
          try {
            userInput.current = eval(userInput.current);
          } catch (e) {
            userInput.current = "invalid exp";
          }
        } else {
          userInput.current = "invalid exp";
        }
        break;
      default:
        if (userInput.current == "invalid exp") {
          userInput.current = "";
        }
        userInput.current += targetVal;
        break;
    }
    setOutScreenVal(userInput.current);
  };
  return (
    <div className="mainAppWrapper">
      <h1 className="title">My Simple Calculator</h1>
      <div className="calcWrapper">
        <input
          type="text"
          value={outScreenVal}
          onChange={inputChangeHandler}
          className="inputScreen"
          placeholder="0"
        />
        <div className="btnWrapper" onClick={btnClickHandler}>
          <div className="row1">
            <MyBtn val="C" btnType={3} />
            <MyBtn val="/" btnType={2} />
            <MyBtn val="*" btnType={2} />
            <MyBtn val="-" btnType={2} />
          </div>
          <div className="row2">
            <MyBtn val="7" />
            <MyBtn val="8" />
            <MyBtn val="9" />
            <MyBtn val="+" btnType={2} />
          </div>
          <div className="row3">
            <div className="col1">
              <MyBtn val="4" />
              <MyBtn val="5" />
              <MyBtn val="6" />
              <MyBtn val="1" />
              <MyBtn val="2" />
              <MyBtn val="3" />
              <MyBtn val="0" />
              <MyBtn val="." />
            </div>
            <div className="col2">
              <MyBtn val="=" btnType={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
