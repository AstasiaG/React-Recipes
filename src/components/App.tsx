import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '@/pages/Main';
import { RecipePage } from '@/pages/RecipePage';
import { Navbar } from './UI/Navbar/Navbar';
import { useState } from 'react';

export const App = () => {
  const [filter, setFilter] = useState<string>('');
  return (
    <BrowserRouter>
      <Navbar setFilter={setFilter}/>
      <Routes>
        <Route path='/' element={<Main filter={ filter } setFilter={setFilter}/>} />
        <Route path='/recipes/:id' element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  )
}
