import React, { useState } from 'react';
import './App.css';

const ChildComponent = ({ number }) => <div>Child Component {number}</div>;

const App = () => {
  const records = ['Record 1', 'Record 2', 'Record 3', 'Test 1', 'Example 2', 'Sample 3'];
  const [isVisible, setIsVisible] = useState(true);
  const [components, setComponents] = useState([]);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true); // State to track button enable/disable

  const addComponent = () => {
    setComponents([...components, components.length + 1]);
  };

  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const handleShowHide = () => {
    if (isButtonEnabled) {
      setIsVisible(!isVisible);
    }
  };

  return (
    <div>
      <h1>Hello, World!</h1>

      <h2>Records List</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>

      <h2>Show/Hide Element</h2>
      <button onClick={handleShowHide} disabled={!isButtonEnabled}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>You clicked Show! Now you are able to see me! .</p>}

      <button onClick={() => setIsButtonEnabled(true)}>Enable</button>
      <button onClick={() => setIsButtonEnabled(false)}>Disable</button> 

      <h2>Dynamically Add Child Components</h2>
      <button onClick={addComponent}>Add Component</button>
      {components.map((number, index) => (
        <ChildComponent key={index} number={number} />
      ))}

      <h2>Sum of Two Numbers</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculateSum}>Calculate</button>
      <p>Sum: {sum}</p>

      <h2>Counter</h2>
      <button onClick={decreaseCounter}>Decrease</button>
      <span> {counter} </span>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default App;
