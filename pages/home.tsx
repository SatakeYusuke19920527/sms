import Link from 'next/link';
import Layout from '../components/Layout';

const HomePage = () => {
  const handleClick = () => {
    console.log('line');
  };
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋 in Home</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <button onClick={handleClick}>line</button>
      </p>
    </Layout>
  );
};

export default HomePage;
