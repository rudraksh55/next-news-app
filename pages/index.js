import Head from 'next/head'
import Image from 'next/image'
import { Toolbar } from '../component/toolbar';
import Styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='page-container'>

      <Toolbar />
      <div className={Styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop shop for the latest news articles</h3>
      </div>
    </div>
  );
}
