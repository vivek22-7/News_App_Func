import React from "react";

const NewsItem = (props) => {
  
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0", }} >
          <span class="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={!imageUrl?"https://media.istockphoto.com/photos/news-button-picture-id598565916?k=6&m=598565916&s=612x612&w=0&h=OUSPGB0ZxA1AUzbG8kG0XboE-lb_HPYAyDQnuaP8Nzs=":imageUrl}className="card-img-top"alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary" > Read More </a>
        </div>
      </div>
    </div>
  );  
}

export default NewsItem;
