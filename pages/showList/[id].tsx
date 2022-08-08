// pages/[id].js
import Axios from "axios";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import Header from "../../components/Header";

// router is required for fallback: true
const ShowList = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Header userName={post.title}></Header>
        <Card>
            {post.body}
        </Card>
    </div>
  );
};

export default ShowList;

export const getStaticProps = async ({ params }) => {
  const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = data;
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await Axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = data.slice(0, 10);
  const paths = posts.map((post: { id: { toString: () => any; }; }) => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};