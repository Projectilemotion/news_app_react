import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import logo from './Images/Logo/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import data_countries from './countries.json'
const Navbar = (props) => {
  const location=useLocation()
  const [is_top_headlinepage,setIs_top_headline]=useState(null)
  useEffect(() => {
    setIs_top_headline(location.pathname.toLowerCase() === "/top-headline");
  }, [location.pathname]);


  //for languages Filter:-
  const langauges = [
    { code: "ar", name: "Arabic" },
    { code: "de", name: "German" },
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "he", name: "Hebrew" },
    { code: "it", name: "Italian" },
    { code: "nl", name: "Dutch" },
    { code: "no", name: "Norwegian" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "sv", name: "Swedish" },
    { code: "ud", name: "Urdu" },
    { code: "zh", name: "Chinese" }
  ];  
  const [langauegs_data,setLanguages_data]=useState(langauges)
  const [languagesearchval,setLangauesearchval]=useState("")
  const language_filter=(e)=>{
    setLangauesearchval(e.target.value);
    let filteredlangauges = langauges.filter((c) =>c['name'].toLowerCase().includes(e.target.value.toLowerCase()));
    setLanguages_data(filteredlangauges);
  }
  const language_click=(lan)=>{
    props.filter['setFilter']((prevFilter) => ({...prevFilter,language: lan, }));
    console.log(props.filter['filter']['language']);
    setLangauesearchval('');
    let filteredlangauges = langauges;
    setLanguages_data(filteredlangauges);
  }

  //languages Filter ends here:-

  //for sort_by filter starts here:-
  const sort_by_values=['popularity','publishedAt'];
  const [sort_by_search_val,setSort_by_search_val]=useState('')
  const [filtered_sort,setFiltered_sort]=useState(sort_by_values)
  const sort_by_click=(sor)=>{
    props.filter['setFilter']((prevFilter) => ({...prevFilter,sort_by: sor, }));
    setSort_by_search_val('');
    setFiltered_sort(sort_by_values)
  }
  const sort_by_filter=(e)=>{
    setSort_by_search_val(e.target.value);
    setFiltered_sort(sort_by_values.filter((c)=>c.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  const all_news_click=()=>{
    setLangauesearchval('')
    setLanguages_data(langauges)
    setCountrysearchval('')
    setCountriesData(data_countries)
    setSort_by_search_val('')
    setFiltered_sort(sort_by_values)
    props.filter['setFilter']({'country':'','language':'','sort_by':'publishedAt'})
  }
  const top_headlines_click=()=>{
    setLangauesearchval('')
    setLanguages_data(langauges)
    setCountrysearchval('')
    setCountriesData(data_countries)
    setSort_by_search_val('')
    setFiltered_sort(sort_by_values)
    props.filter['setFilter']({'country':'','language':'','sort_by':'publishedAt'})
  }
  const search_click=()=>{
    setLangauesearchval('')
    setLanguages_data(langauges)
    setCountrysearchval('')
    setCountriesData(data_countries)
    setSort_by_search_val('')
    setFiltered_sort(sort_by_values)
    props.filter['setFilter']({'country':'','language':'','sort_by':'publishedAt'})
  }












  console.log('top-headline_page:-'+is_top_headlinepage);
    const font_weight={
      fontWeight: '500',
      fontStyle: 'Normal',
      fontSize:"17px",
    }
    const ellipse ={
      whiteSpace: 'nowrap',       /* Prevent the text from wrapping */
      overflow: 'hidden',        /* Hide overflowed text */
      textOverflow: 'ellipsis',    /* Add ellipsis to truncated text */
      width: '200px',    /* Set a fixed width for the container */
      display: 'inline-block',      /* Ensure the element behaves like a block for width */
    }
    const back={
      height:"70px",
      backgroundColor: '#0f162d',
      borderBottom:'0.1px solid #9f9595',
    }
    const font_weight_2={
      fontWeight: '500',
      fontStyle: 'Normal',
      fontSize:"20px",
      color:'White'
    }
    const col={
      color:'white',
    }
    const col2={
      backgroundColor:'#0f162d',
    }
    const [val,setVal]=useState("");

    const handlechange=(e)=>{
      let z=e.target.value
      setVal(z);
    }
    const navigate=useNavigate()
    const handlesubmit=(e)=>{
      e.preventDefault();
      props.filter['setFilter']({'country':'','language':'','sort_by':'publishedAt'})
      setLangauesearchval('')
      setLanguages_data(langauges)
      if(val!=""){
        navigate(`/search/${val}`);
        setVal("");
      }
    }
    //for countries Filter:-
    const [fcountry,setFcountry]=useState("")
    const [countrysearchval,setCountrysearchval]=useState("")
    const country_filter=(e)=>{
      let p=e.target.value
      setCountrysearchval(p)
      setFcountry(countrysearchval)
    }
    const country_click=(val)=>[
      setCountriesData(data_countries),
      setCountrysearchval(''),
      props.filter['setFilter']((prevFilter) => ({...prevFilter,country: val }))
    ]
    console.log('aomkapadia')
    const l=100
    const [ errorCountries,SetErrorCountries]=useState("")
    const [countriesData,setCountriesData]=useState(data_countries)
    useEffect(() => {
      let filteredCountries = data_countries.filter((c) =>c["Name"].toLowerCase().includes(fcountry.toLowerCase()));
      setCountriesData(filteredCountries);
      }
    , [fcountry]);

    //countries filter ends here:-
  return (
    <>
    <nav style={back} className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid fixed-top" style={back}>
        <Link to="/" ><img className='mt-2 ms-3' src={logo} alt="Logo" style={{ width: '200px', height: 'auto', cursor: 'pointer' }} /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{color:'white',backgroundColor:'white'}}></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header" style={col2}>
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={col}>
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{backgroundColor: 'white',
                border: 'none',
                color: 'white',
              }}
            ></button>
          </div>
          <div className="offcanvas-body fs-6" style={col2}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link active mx-3" style={({ isActive }) => ({
              fontWeight: "500",
              fontStyle: "Normal",
              fontSize: "17px",
              color: isActive ? "red" : "white", // Use the isActive value here
            })} aria-current="page" to="/" onClick={()=>( all_news_click())}>
                  All News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active mx-3" onClick={()=>(top_headlines_click())} style={({ isActive }) => ({fontWeight: "500",fontStyle: "Normal",fontSize: "17px",color: isActive ? "red" : "white", })}aria-current="page" to="Top-Headline">
                  Top-Headlines
                </NavLink>
              </li>
              <li className="nav-item dropdown" style={col}>
              <a
                className="nav-link active dropdown-toggle mx-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontWeight: "500",
                  fontStyle: "Normal",
                  fontSize: "17px",
                  color: "white",
                }}
              >
                Filter
              </a>
              <ul className="dropdown-menu">
                {is_top_headlinepage && (<li className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    
                    {props.filter['filter']['country']=="" ? <>Country(All)</>:<>Country({props.filter['filter']['country']})</>}
                  </a>
                  <ul
                    className="dropdown-menu scrollable-menu"
                    style={{
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={countrysearchval}
                onChange={country_filter}
                style={{width:'200px'}}
              />
                    <li><a className="dropdown-item bg-primary" href="#">{props.filter['filter']['country']=="" ? <>All Countries</>:<>{props.filter['filter']['country']}</>}</a></li>
                    {props.filter['filter']['country']!="" && (<li><a className="dropdown-item" onClick={()=>{country_click('')}} >All Countries</a></li>)}
                    {countriesData.map((c,index)=>(props.filter['filter']['country']!=c['Code'] && (<li><a className="dropdown-item" onClick={()=>{country_click(c['Code']);}} Key={index} style={ellipse} >{c['Name']}</a></li>)))}
                  </ul>
                </li>)}
                <li className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {props.filter['filter']['language']=="" ? (<>Language(All)</>):(<>Language({props.filter['filter']['language']})</>)}
                  </a>
                  <ul
                    className="dropdown-menu scrollable-menu"
                    style={{
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={languagesearchval}
                onChange={language_filter}
                style={{width:'200px'}}
              />
                    <li><a className="dropdown-item bg-primary" href="#">{props.filter['filter']['language']=="" ? (<>All langauges</>):(<>{props.filter['filter']['language']}</>)}</a></li>
                    {props.filter['filter']['language']!=="" && (<li><a className="dropdown-item" onClick={()=>{language_click('')}} >All Languages</a></li>)}
                    {langauegs_data.map((c,index)=>(props.filter['filter']['language']!=c['code'] && (<li><a className="dropdown-item" onClick={()=>{language_click(c['code'])}} Key={index} style={ellipse} >{c['name']}</a></li>)))}
                  </ul>
                </li>
                <li className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Sort News
                  </a>
                  <ul
                    className="dropdown-menu scrollable-menu"
                    style={{
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={sort_by_search_val}
                onChange={sort_by_filter}
                style={{width:'200px'}}
              />
                    <li><a className="dropdown-item bg-primary" href="#">{props.filter['filter']['sort_by']=="" ? (<>publishedAt</>):(<>{props.filter['filter']['sort_by']}</>)}</a></li>
                    {filtered_sort.map((c,index)=>(props.filter['filter']['sort_by']!=c && (<li><a className="dropdown-item" onClick={()=>{sort_by_click(c)}} Key={index} style={ellipse} >{c}</a></li>)))}
                  </ul>
                </li>
              </ul>
            </li>
            </ul>
            <form className="d-flex" onSubmit={handlesubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={val}
                onChange={handlechange}
              />
              <button className="btn btn-outline-success" type="submit" onClick={()=>(search_click())} style={{marginRight:'60px'}}>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
