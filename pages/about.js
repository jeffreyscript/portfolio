import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout title="About"> 
    <Link href="/">
      <a>Go to Home</a>
    </Link>
      <p>Two Cheeky Cats</p>
      <img src="/static/cats.png" alt="Cats" height="400px" /> 
  </Layout>
);