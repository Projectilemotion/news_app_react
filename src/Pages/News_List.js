import React from 'react'
import News_Cards from './News_Cards'

const News_List = (props) => {
    const background={
        backgroundHeight:'100vh',
        marginTop:'70px',
    }
    return (
      <>
        <div className="container">
          <div className="d-lg-flex">
            {props.data['articles'].map((data, index) => (
              <News_Cards data={data} key={index} />
            ))}
          </div>
        </div>
      </>
    );
}

export default News_List
