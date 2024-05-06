// import React from 'react'
import axios from 'axios'
import React,{useEffect, usestate} from 'react'

const fetching = () => {
    const [response,setResponse] = usestate([])
    const handleFetch = async ()=>{
    axios({
        method:'GET'
        url:"https://api.themoviedb.org/3/trending/all/day?language=en-US"
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkxNWJiMWQ3MTI4M2MxYjdkNDMzYmE4ZjlkNDdiYiIsInN1YiI6IjY2MzhkYTM1MmZhZjRkMDEyZGM2N2VhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONax2lte0OnwLmwVgrxixWq-MgcZWQ5Smdm9TT50b4E'
        }
  }).then(response)=>{
    console.log(response.data.results)
    setResponse(response.data.results)
}).catch((error)) =>{
        console.log(error)
    })
}

useEffect(() => {
    handleFetch()
}, [])

return(
    <div>fetch</div>
)}
export default fetching