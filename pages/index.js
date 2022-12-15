import Head from 'next/head'
import { useEffect, useState } from 'react';
import Header from '../components/Header'
import TimebankContainer from '../components/TimebankContainer';

const Home = () => {
  const [title, setTitle] = useState('TimeBank Timer');

  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <div className='min-h-screen flex flex-col items-center gap-y-16'>
      <Head>
        <title className='text-red-500'>Timebank Timer</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <TimebankContainer setTitle={setTitle} />
    </div>
  )
}

export default Home;