import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTyoes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cae0b695bb7c4c769b9e2af74b5ed085&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevious = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">NewsZilla - Top Headlines</h2>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      dateAndTime={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between my-5">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevious}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalArticles / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              {" "}
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
