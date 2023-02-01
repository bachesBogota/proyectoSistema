import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Profilepage from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />}/>
        <Route path='/profile' element={<Profilepage />}/>
      </Routes>
    </Router>
  );
}

export default App;
