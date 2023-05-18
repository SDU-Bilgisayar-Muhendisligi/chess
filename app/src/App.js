
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import Online from './pages/Online';
import Offline from './pages/Offline';
import Settings from './components/Settings';
import { Routes, Route } from 'react-router-dom';
import PlayerPage from './pages/PlayerPage';
import CreateJoin from './pages/CreateJoin';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
     
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Online" element={<Online />} />
        <Route path="/Offline" element={<Offline />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/PlayerPage" element={<PlayerPage />} />
        <Route path="/CreateJoin" element={<CreateJoin />} />
        <Route>
        <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
