import './App.css';
import Climate from './pages/Climate/index'
import InputField from './components/Input/index'
import { CityProvider } from './context/cityContext';

function App() {
  return (
    <div className="App">
      <CityProvider>
        <InputField />
        <Climate />
      </CityProvider>
        
    </div>
  );
}

export default App;
