import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, dateAndTime, source } =
      this.props;
    return (
      <>
        <div className="card my-3" style={{ height: "40rem" }}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-dark"
            style={{ left: "85%", zIndex: '1' }}
          >
            {source}
          </span>
          <img
            src={imgUrl ? imgUrl : "/buffer.png"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(dateAndTime).toGMTString()}
              </small>
            </p>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
