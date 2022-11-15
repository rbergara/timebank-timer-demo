import Head from 'next/head'
import Header from '../components/Header'
import TimebankContainer from '../components/TimebankContainer';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col items-center gap-y-16'>
      <Head>
        <title>Timebank Timer</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <TimebankContainer />
    </div>
  )
}

export default Home;