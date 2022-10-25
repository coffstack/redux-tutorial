import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementAmount } from "./features/counter/counter-slice";
import { useAppSelector } from "./hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleOnClick() {
    // increment();
    //dispatch({ type: "counter/increment" });
    dispatch(increment());
  }
  function handleOnClickAmount() {
    // incrementAmount(5);
    // dispatch({ type: "counter/incrementAmount", payload: 5 });
    dispatch(incrementAmount(5));
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>count is {count}</button>
        <button onClick={handleOnClickAmount}>Increment Amount</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

// OLD SCHOOL
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "counter/increment" }),
//     incrementAmount: (amount) =>
//       dispatch({ type: "counter/incrementAmount", payload: amount }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
