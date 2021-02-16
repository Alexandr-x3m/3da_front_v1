import { useState } from 'react'
import Head from 'next/head'
import s from '../styles/main.module.sass'
import HeaderBlock from '../components/Header/Header'
import MainPageContainer from '../components/MainPageContainer/MainPageContainer'
import ActiveSlideMP from '../interfaces/interfaces';



export default function Main() {

  const [activeSlide, setActiveSlide] = useState<number>(0)

  return (
    <div 
      className={s.container} 
      onWheel={e => {
        if (e.deltaY < 0 && activeSlide !== 0) {
          let val = activeSlide - 1
          setActiveSlide(val)
        }
        if (e.deltaY > 0 && activeSlide !== 4) {
          let val = activeSlide + 1
          setActiveSlide(val)
        }
      }} >
      <Head>
        <title>Добро подаловать в 27 CYPHER</title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='most famous words' />
        <meta name='description' content='test desc' />
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <HeaderBlock />
        <MainPageContainer
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide} />
      </div>
      
    </div>
  )
}
