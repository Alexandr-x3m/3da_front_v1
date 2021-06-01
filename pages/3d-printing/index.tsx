import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import s from '../../styles/Pages/serviceContainer.module.sass'
import PrintingPage from '../../containers/PrintingPage/PrintingPage'



export default function Main() {

  const [activeSection, setActiveSection] = useState('SLA')
  const [scroll, setScroll] = useState<number>(0)
  const [navTop, setNavTop] = useState<boolean>(false)

  let block_1 = useRef<HTMLDivElement>(null)
  let block_2 = useRef<HTMLDivElement>(null)
  let container = useRef<HTMLDivElement>(null)
  let nav = useRef<HTMLDivElement>(null)

  let topFixing = (block: HTMLDivElement) => {
    gsap.to(block, {
      scrollTrigger: {
        trigger: block,
        start: 'top-=12 top+=64',
        end: 'bottom',
        toggleActions: 'play none play reverse',
      },
      //background: '#066991',
      ease: 'none'
    })
  }

  let handleScroll = () => {
    if (nav && nav.current) {
      let topX = nav.current.getBoundingClientRect().top

      if (topX <= 64) return setNavTop(true)
      return setNavTop(false)
    }
  }
 
  useEffect(() => {
    if (window.document.body.clientWidth > 1200) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log(nav.current)

    if (nav && nav.current) {
      //gsap.registerPlugin(ScrollTrigger)
      topFixing(nav.current)
    }
  }, [nav])

  /* const sliderScroll = (sections: HTMLDivElement[], container: HTMLDivElement) => {
    gsap.to(sections, {
      scrollTrigger: {
        trigger: container,
        start: 'top top+=64px',
        end: () => '+=' + container.offsetWidth,
        scrub: 0.3,
        pin: true,
        snap: 1 / (sections.length - 1),
      },
      xPercent: -100 * (sections.length - 1),
      ease: 'none'
    })
  } */

  /* useEffect(() => {
    if (window.document.body.clientWidth > 1200
      && block_1 && block_1.current
      && block_2 && block_2.current
      && container && container.current
    ) {
      gsap.registerPlugin(ScrollTrigger)
      sliderScroll([block_1.current, block_2.current], container.current)
    }
  }, [block_1, block_2, container]) */

  /* useEffect(() => {
    let scrollTop = window.scrollY
    setScroll(scrollTop)
  }, [])

  const scrollPageHandler = () => {
    let scrollTop = window.scrollY
    setScroll(scrollTop)
  } */

  console.log(activeSection)
  return (
    <div className={s.pageContainer} >
      <Head>
        <title>Заказать {activeSection} печать | 3D Craft - услуги по 3D моделированию и 3D печати</title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='most famous words' />
        <meta name='description' content='test desc' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />s
      </Head>
      <PrintingPage 
        scroll={scroll} 
        navTop={navTop} 
        nav={nav} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        container={container}
        block_1={block_1}
        block_2={block_2}  
      />

    </div>
  )
}