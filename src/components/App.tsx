import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '@/pages/Main';
import { RecipePage } from '@/pages/RecipePage';
import { Navbar } from './UI/Navbar/Navbar';
import { useState } from 'react';
import { SearchContext } from '@/context';

export const App = () => {
  const [query, setQuery] = useState<string>('');
  const [isTag, setIsTag] = useState<boolean>(false)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [isMeal, setIsMeal] = useState<boolean>(false)

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        isTag,
        setIsTag,
        isSearch,
        setIsSearch,
        isMeal,
        setIsMeal
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/recipes/:id' element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  )
}
