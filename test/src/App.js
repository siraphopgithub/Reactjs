import logo from './logo.svg';
import './App.css';

function App() {
  const textInput= <input type="text" />;
  const Button = (
    <button>
      press
    </button>
  );
  return (
    <div className="App">
      <h1>Test</h1>
      <h2>bbb</h2>
      <p>
        {textInput}
      </p>
      <p>
        {Button}
      </p>
    </div>
  );
}

export default App;
