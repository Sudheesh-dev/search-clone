import React from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';
import Mic from '@material-ui/icons/Mic';
import {Link} from 'react-router-dom'


function SearchBar(props) {
    return (
        <form  style={{marginTop:props.margin, marginBottom:props.margin}}className="searchBar">
            <SearchIcon className="searchBarIcon"></SearchIcon>
            <input onChange={props.updateSearchTerm} value={props.searchTerm}className="searchBarInput"></input>
            <Mic className="searchBarMic"></Mic>
            <Link to='/search'>
                <button disabled={(props.searchTerm.length > 0)?false:true} onClick={props.changeTerm}type ='submit'style={{display:'none'}}></button>
            </Link>
        </form>
    )
}

export default SearchBar
