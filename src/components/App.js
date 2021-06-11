const App = ({ number, day, title, plus, minus, asyncMinus, getJson }) => (
  <div>
    <h2
      onClick={() => {
        plus(10);
      }}
    >
      App {number} | {title} | {day}
    </h2>
    <button
      onClick={() => {
        plus(10);
      }}
    >
      {" "}
      +10{" "}
    </button>
    <button
      onClick={() => {
        minus(10);
      }}
    >
      {" "}
      -10{" "}
    </button>
    <button
      onClick={() => {
        asyncMinus(10);
      }}
    >
      {" "}
      async -10{" "}
    </button>
    <button
      onClick={() => {
        getJson();
      }}
    >
      {" "}
      getJson{" "}
    </button>
  </div>
);

export default App;
