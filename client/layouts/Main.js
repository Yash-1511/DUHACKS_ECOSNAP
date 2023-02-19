import Head from 'next/head';
// import Header from 'components/header';

export default ({ children, title = 'EcoSnap' }) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
      </Head>

      {/* <Header /> */}

      <main>
        { children }
      </main>
    </div>
  )
}
