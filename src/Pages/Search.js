import Pagination from './pagination'
import News_List from './News_List';
import React, { useState, useEffect } from 'react';
import Loader from './Loader'
import { useParams } from "react-router-dom";

const Search = (props) => {
    const [data, setData] = useState(null); // State to store the fetched data
    const [error, setError] = useState(null); // State to store any errors
    const [loading, setLoading] = useState(true); // State to handle loading
    const [page,setPage]=useState(1)
    const [pagesize,setPageSize]=useState(20)
    const { query } = useParams()
    const [apiUrl, setApiUrl] = useState(`https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=${pagesize}&apiKey=5f9bc8ef58444d9da5f5782b2ed7744b`); // State for the API URL
    const countryfilter = props.filter['filter']['country']
    const languagefilter = props.filter['filter']['language']
    const sortBy=props.filter['filter']['sort_by']
    useEffect(()=>{
      let a=`https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=${pagesize}`;
      if(countryfilter!==''){
        a+=`&country=${countryfilter}`
      }
      if(languagefilter!==''){
        a+=`&language=${languagefilter}`
      }
      if(sortBy!=''){
        a+=`&sortBy=${sortBy}`
      }
      a+=`&apiKey=5f9bc8ef58444d9da5f5782b2ed7744b`
      setApiUrl(a);},
      [page,query,query,countryfilter,languagefilter,sortBy])
    const page_set=(n)=>{
        if(n>0 && n<=Math.floor(100/pagesize)){
          setPage(n);
          console.log(n)
        }
    };
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
              console.log('error:- '+ response.statusText);
              setError('Error in fetching Api');
            }
            else{
              const result = await response.json(); // Parse JSON response
              setData(result); // Save data in state
              console.log(result)
            }
        }catch (error) {
            setError(error.message); // Save error in state
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };
    fetchData(); // Call the fetch function
}, [apiUrl]);


  return (
    <>
        {loading ? (
        <Loader/>
        ) : error ? (
        <div className="container" style={{width:'100%',height:'100vh',display:'flex', alignItems:'center' ,justifyContent:'center'}}>
            <p style={{color:'white',weight:'bold',fontSize:'40px',height:'100px'}}>{error}</p>
        </div>
        ) : (
        <>
        <News_List data={data}/>
        <Pagination data={data} page_set={page_set} active_page={page} page_size={pagesize}/></>
        )}
    </>
  )
}

export default Search
