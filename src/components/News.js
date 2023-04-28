import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ pageSize, category ,setProgress,apiKey}) => {
  const articles = [];
  const [state, setState] = useState(articles);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setPage(1);
      setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=1`;
      setLoading(true);
      const data = await fetch(url);
      setProgress(30);
      const parsedData = await data.json();
      setProgress(70);
      setState(parsedData.articles);
      setLoading(false);
      setTotalResults(parsedData.totalResults);
      setProgress(100);
    }
    fetchData();
    // eslint-disable-next-line
  }, [category]);
  

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page+1}`;
    const data = await fetch(url);
    setPage(page + 1);
    const parsedData = await data.json();
    setState(state.concat(parsedData.articles));
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
  return (
    <div className="container my-3 text-center">
      <h2 style={{
        marginTop:'80px'
      }}>{`News - Top ${capitalizeFirstLetter(category)} Headlines`}</h2>
      <InfiniteScroll
        dataLength={state.length}
        next={fetchMoreData}
        hasMore={state.length !== totalResults}
        loader={<Spinner/>}
      >
        <div className="row">
          {!loading &&
            state.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    source={element.source.name}
                    date={element.publishedAt}
                    author={element.author}
                  />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  pageSize: 12,
  category: "general",
};

News.prototypes = {
  pageSize: PropTypes.string,
  category: PropTypes.string,
};

export default News;
