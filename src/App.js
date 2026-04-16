import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddTicket from './components/AddTicket';
import SearchTicket from './components/SearchTicket';
import DeleteTicket from './components/DeleteTicket';
import ViewAllTickets from './components/ViewAllTickets';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddTicket/>}/>
      <Route path="/search" element={<SearchTicket/>}/>
      <Route path="/delete" element={<DeleteTicket/>}/>
      <Route path="/ViewAll" element={<ViewAllTickets/>}/>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
