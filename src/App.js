import { Route, Routes } from 'react-router';
import './App.css';
import Address from './components/Address';
import Name from './components/Name';
import Natija from './components/Natija';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Name />} />
        <Route path='/Address' element={<Address />} />
        <Route path='/Natija' element={<Natija />} />
      </Routes>
    </div>
  );
}

export default App;
