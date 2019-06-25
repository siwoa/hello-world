import Layout from '../components/MyLayout.js';
import Link from 'next/link';
// import {login} from "../core/api";
import fetch from 'isomorphic-unfetch';

// import Markdown from 'react-markdown';
const List = ({ show }) => (
  <li>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
  </li>
)
function aa() {
  // login({
  //   loginName: "15701571076",
  //   passWord: "12345q"
  // }).then(res => {

  // })
}
const Index = props => (

  <Layout>
    <h1 onClick={aa}>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <List key={show.id} show={show}></List>
      ))}
    </ul>
    <style jsx global>
      {
        `
                h1 {
                    color: red;
                }
                li {
                    list-style: none;
                }
            `
      }
    </style>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;