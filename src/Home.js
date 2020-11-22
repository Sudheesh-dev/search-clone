import React from 'react'
import './Home.css'
import GoogleLogo from './Google.png'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';

function Home(props) {
    return (
        <div>
            <header className="header">
                <div className="headerRight">
                    <p className="headerRightText">Gmail</p>
                    <p className="headerRightText">Images</p>
                    <AppsIcon className="headerRightIcon"></AppsIcon>
                    <Avatar className="headerRightAvatar"></Avatar>
                </div>
            </header>

            <div className="body">
                <img src={GoogleLogo} alt=""></img>
                <SearchBar changeTerm={props.changeTerm} margin='30px' updateSearchTerm={props.updateSearchTerm} searchTerm={props.searchTerm}></SearchBar>
                <div>
                    <Link to={(props.searchTerm.length > 0) ? './search' : './'}><button className="bodyButton">Google Search</button></Link>
                    <button className="bodyButton">I'm Feeling Lucky</button>
                </div>
                <p style={{ fontSize: '13px', marginTop: '23px' }}>This is a Google search page clone using Google's custom search API at the backend</p>
            </div>
        </div>
    )
}

export default Home
