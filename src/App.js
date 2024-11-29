import logo from './logo.svg';
import './App.css';
import Navigationbar from './Customer/Component/Navigation/Navigationbar';
import Homepage from './Customer/Pages/HomePage/Homepage';

function App() {
  return (
    <div className="">
      <Navigationbar/>
      <div>
      <Homepage/>
      </div>
    </div>
  );
}

export default App;
