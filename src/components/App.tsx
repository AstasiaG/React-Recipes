import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '@/pages/Main';
import { RecipePage } from '@/pages/RecipePage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recipes/:id' element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  )
}
