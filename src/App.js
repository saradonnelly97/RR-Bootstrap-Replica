import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/NavBar';
import HardlyCarding from './Components/Card';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navigation />
      <HardlyCarding />
      <GridlyGridding />
    </div>
  );
}

export default App;
