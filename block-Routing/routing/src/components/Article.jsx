import data from './data.json';
import { Link } from 'react-router-dom';
import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    this.setState({ article: data });
  }
  render() {
    if (!this.state.article) {
      return <h3>Loading.....</h3>;
    }
    return (
      <ul>
        {data.map((elm) => {
          return (
            <li className="article">
              <Link to={`/post/${elm.slug}`}>
                <p>{elm.title}</p>
                <h5>{elm.author}</h5>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Article;