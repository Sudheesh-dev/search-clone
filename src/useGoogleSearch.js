import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useGoogleSearch = (term) => {
    let [data, setData] = useState(null)
    //const API_KEY = 'c24c2c7d'
    const keyword = term

    useEffect(() => {
        console.log("Sending use get google request")
        axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBhS8HB8NO9sFNLuVxmFmAq5lF5cDtYHtU&cx=0491ad853c4697f20&q=${keyword}`)
        .then((res) => { setData(res.data)})   
        .catch((err)=>{console.log('Some Error Occured')})    
    },[term])
    //console.log(data, "DATA")
   
    return data
}

export default useGoogleSearch

//https://www.googleapis.com/customsearch/v1?key=AIzaSyBhS8HB8NO9sFNLuVxmFmAq5lF5cDtYHtU&cx=0491ad853c4697f20&q=hello