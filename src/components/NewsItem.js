import React from "react";
const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div className="my-3 mx-2">
      <div className="card">
        <div style={{
          display:'flex',
          justifyContent:'center',
          position:'absolute',
          right:0,
        }}>
          <span
            className="badge rounded-pill bg-danger"
          >
            {source}
          </span>
        </div>

        <img
          style={{
            height: "200px",
          }}
          src={
            imageUrl
              ? imageUrl
              : "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-184376430.jpg?resize=1200,898"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small>
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
