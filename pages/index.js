import Head from 'next/head'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <Head>
        <title>Timebank Timer</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home;