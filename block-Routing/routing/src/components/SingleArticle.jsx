import data from './data.json';
import { Link } from 'react-router-dom';

function SingleArticle(props) {
  let slug = props.match.params.slug;
  let single = data.filter((elm) => elm.slug === slug);

  return (
    <>
      <Link to="/article">go back to article</Link>
      <h6 className="slug">the slug of article is :{single[0].slug}</h6>
      <p>{single[0].title}</p>
    </>
  );
}

export default SingleArticle;