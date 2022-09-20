import Landing from './landing/landing';

export default Home;

function Home(data) {
    console.log("data",data);
    return (
        <Landing/>
    );
}



export async function getStaticProps() {
    console.log("test ");
    // get posts from our api
    const res = await fetch('http://localhost:1337/api/landing-page?populate=deep');
    const posts = await res.json();
    return {
      props: { posts: posts.data },
    }
  }