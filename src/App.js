import './App.css';
import React, {useState} from 'react'
import BookList from './Components/BookList'
import SearchIcon from '@material-ui/icons/Search';

function App() {
  const [search,searchInput]=useState("")
  return (
    <div className="App">

      <div className="search">
        <SearchIcon style={{width:"80px",marginTop:"100px"}} />
        
        <input className="search-input" placeholder="Search" type = "text" onChange={(e)=>searchInput(e.target.value)} />
       </div>

      <BookList val={search} />
    </div>
  );
}

export default App;
