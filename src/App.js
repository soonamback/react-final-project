import React from 'react';
import SearchForm from './Components/SearchForm';
import Stories from './Components/Stories';
import Buttons from './Components/Buttons';
import './App.css';
import { AppProvider } from './Components/context';
import Header from './Components/Header'

function App() {
  return (
   <>
    <AppProvider>
    <Header />
    <SearchForm />
    <Buttons />
    <Stories />
    </AppProvider>
   </>
  );
}

export default App;
