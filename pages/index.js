import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => (

<Layout title="Home">
  <Link href="/about">
   <a>Go to About Page</a>
    </Link>
     <p>Every day is Caturday</p>
      <img src="/static/cats2.jpg" alt="Cats2" height="400px"/>
 </Layout>
);

export default Index;
