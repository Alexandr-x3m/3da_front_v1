import { useEffect, useState } from 'react'
import Head from 'next/head'

import HeaderBlock from '../components/Header/Header'
import MainPage from '../containers/MainPage/MainPage'


export default function Main() {


  const [scroll, setScroll] = useState<number>(0)

  useEffect(() => {
    let scrollTop = window.scrollY
    setScroll(scrollTop)
  }, [])

  const scrollPageHandler = () => {
    let scrollTop = window.scrollY
    setScroll(scrollTop)
  }

  return (
    <div 
      onWheel={() => scrollPageHandler()} 
    >
      <Head>
        <title>3D Craft - услуги по созданию 3D моедлей и 3D печати, для Москвы и всей России</title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='most famous words' />
        <meta name='description' content='test desc' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div >
        <HeaderBlock scroll={scroll} />
        <MainPage scroll={scroll}  />
      </div>
    </div>
  )
}
