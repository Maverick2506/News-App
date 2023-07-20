import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=cae0b695bb7c4c769b9e2af74b5ed085";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsZilla - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
