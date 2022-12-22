import { Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './Page/Board';
import BoardPage from './Page/BoardPage';
import BoardWriteFrom from './Page/BoardWriteFrom';
import Home from './Page/Home';



function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/board' element={<Board />}></Route>
        <Route path='/board/:id' element={<BoardPage />}></Route>
        <Route path='/board/modifyform' element={<BoardWriteFrom />}></Route>
      </Routes>

    </div>
  );
}

export default App;
