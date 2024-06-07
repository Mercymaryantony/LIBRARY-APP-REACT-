import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewBook from './components/ViewBook';

function App() {
  return (
    <div >
      <AddBooks/>
      <SearchBook/>
      <DeleteBook/>
      <ViewBook/>
    </div>
  );
}

export default App;
