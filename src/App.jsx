import { Provider } from "react-redux";
import "./App.css";
import { ToDo } from "./components/ToDo";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

export default App;
