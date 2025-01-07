import React from 'react'
import './News_Cards.css'
const News_Cards = (props) => {
    const openInNewTab = (ref) => {
        window.open(ref, "_blank");
      };    
  return (
        <div className="card border-0 me-lg-4 mb-lg-0 mb-4" onClick={()=>{openInNewTab(props.data['url'])}}>
            <div className="backgroundEffect"></div>
            <div className="pic">
                <img className="" src={props.data["urlToImage"]} alt=""/>
                <div className="date">
                <span className="day">{props.data["publishedAt"].slice(8,10) }</span>
                <span className="month">{props.data["publishedAt"].slice(5,7) }</span>
                <span className="year">{props.data["publishedAt"].slice(0,4) }</span>
                </div>
            </div>
            <div className="content">
                <p className="h-1 mt-4 multiline-ellipsis">{props.data["title"]}</p>
                <p className="text-muted mt-3 multiline-ellipsis-3">
                {props.data["description"]}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                <div className="btn btn-primary">
                    Read More<span className="fas fa-arrow-right"></span>
                </div>
                <div className="d-flex align-items-center justify-content-center foot">
                    <p className="admin">Admin</p>
                    <p className="ps-3 icon text-muted">
                    <span className="fas fa-comment-alt pe-1"></span>3
                    </p>
                </div>
                </div>
            </div>
        </div>

  )
}

export default News_Cards;
