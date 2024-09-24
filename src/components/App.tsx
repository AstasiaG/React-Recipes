import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '@/pages/Main';
import { RecipePage } from '@/pages/RecipePage';
import { Navbar } from './UI/Navbar/Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recipes/:id' element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  )
}
