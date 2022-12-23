
import './App.css';
import { useAppSelector } from './hooks/redux';

function App() {
  
  const {error} = useAppSelector(state => state.userReducer)
  
  return (
    <div className="App">
    <button>Get all users of this platform</button>
    </div>
  );
}

export default App;
