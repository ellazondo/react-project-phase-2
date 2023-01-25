import Home from './Home';
import Header from './Header';
import Weather from './Weather';
import "./App.css";

function App() {
  return (
    <div>
    <Header />
    <Weather defaultCity="New York" />
    <Home />
    </div>
  );
}

export default App;
