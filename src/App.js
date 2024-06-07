import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewBook from './components/ViewBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBooks/>}/>
      <Route path='/s' element={<SearchBook/>}/>
      <Route path='/d' element={<DeleteBook/>}/>
      <Route path='/v' element={<ViewBook/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
