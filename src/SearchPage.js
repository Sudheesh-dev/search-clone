import React from 'react'
import './SearchPage.css'
import GoogleLogo from './Google.png'
import SearchBar from './SearchBar'
import NavElement from './NavElement'
import Response from './response'
import Result from './Result'
import useGoogleSearch from './useGoogleSearch'

import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import Slideshow from '@material-ui/icons/Slideshow';
import MoreVert from '@material-ui/icons/MoreVert';



function SearchResult(props) {

    //let data = Response
    let data = useGoogleSearch(props.term)
    //console.log(data)

    let results = (
        <div>
            <div className="searchInfo">
                <p className="searchInfoText">About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.searchTime.toFixed(2)} seconds)</p>
            </div>
            <div className='resultbody'>
                <Result data={data}></Result>
            </div>
        </div>
    )

    return (
        <div className="searchResult">
            <header className="searchResultHeader">
                <div className="searchResultHeaderLeft">
                    <img className='googleLogo' src={GoogleLogo} alt='img'></img>
                    <SearchBar changeTerm={props.changeTerm} updateSearchTerm={props.updateSearchTerm} searchTerm={props.searchTerm} margin='0px'></SearchBar>
                </div>
                <div className="searchResultHeaderRight">
                    <AppsIcon className="searchResultHeaderRightIcon"></AppsIcon>
                    <Avatar></Avatar>
                </div>
            </header>
            <nav className='navBar'>
                <NavElement styleChange={{ color: 'blue', borderBottom: "3px solid blue" }} icon={<SearchIcon fontSize='small' />} text="All"></NavElement>
                <NavElement icon={<BookOutlinedIcon fontSize='small' />} text="Books"></NavElement>
                <NavElement icon={<LocationOnOutlinedIcon fontSize='small' />} text="Apps"></NavElement>
                <NavElement icon={<ImageOutlinedIcon fontSize='small' />} text="Images"></NavElement>
                <NavElement icon={<Slideshow fontSize='small' />} text="Videos"></NavElement>
                <NavElement icon={<MoreVert fontSize='small' />} text="More"></NavElement>
                <NavElement styleChange={{ width: '35px', marginLeft: '80px' }} icon={null} text="Settings"></NavElement>
                <NavElement styleChange={{ width: '35px' }} icon={null} text="Tools"></NavElement>
            </nav>
            {results}
        </div>
    )
}

export default SearchResult
