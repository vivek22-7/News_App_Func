import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d7a2db813d214429b5c534ba024aa52c";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles});

  }
  render() {
    console.log("render")
    return (
      <div>
        <div className="container my-3">
          <h1>NewsMonkey - Top Headlines</h1>
          
          <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <NewsItem  title={element.title?element.title: ""} description={element.description?element.description:""} imageUrl={element.urlToImage}
              newsUrl = {element.url}/>
            </div>
          })}
            
          </div>
            
        </div>
      </div>
    );
  }
}

export default News;
