import { useRef, useState } from "react";
import "./App.css";

function App() {
const inputRef = useRef({})

  const [otp, setOtp] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
    digitFive: "",
    digitSix: "",
  });

  const handleChange = (event, index) => {
    const { name, value } = event.target;

    setOtp((prev) => ({
      ...prev,
      [name]: value,
    }));
    if(index <5 && value){
    inputRef.current[index + 1].focus();
    }
  };

  const handleBackSpace = (event,index) => {
if(event.key === "Backspace" && index > 0){
  inputRef.current[index - 1].focus();
}

   

  }

  const renderInput = () => {
    return Object.keys(otp).map((keys, index) => (
      <input
      key={index}
      ref={element=>inputRef.current[index] = element}
        type="text"
        name={keys}
       maxLength="1"
        className="w-16 h-12 rounded-md mr-3 text-center text-xl"
        onChange={(event)=> handleChange(event,index)}
        onKeyUp={(event)=> handleBackSpace(event,index)}
      />
    ));
  };

  return (
    <form action="">
      <h1 className="text-3xl mb-8">Please fill in the otp</h1>
      <div>{renderInput()}</div>
      <button className="mt-4 w-32 border border-solid bg-[#3b3b3b] rounded hover:bg-[#252525] hover:border-[#3b3b3b]">
        Submit
      </button>
    </form>
  );
}

export default App;
