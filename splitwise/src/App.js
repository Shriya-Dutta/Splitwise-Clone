import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Friends from './pages/Friends/Friends';
import Expenses from './pages/Expenses/Expenses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Router>
        <Sidebar />

        <Routes>
          <Route path="/friends" element={ <Friends /> } />
          <Route path="/expenses" element={ <Expenses /> } />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;