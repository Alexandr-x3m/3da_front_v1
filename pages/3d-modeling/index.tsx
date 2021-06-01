import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import s from '../../styles/Pages/serviceContainer.module.sass'
import HeaderBlock from '../../components/Header/Header'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import Footer from '../../components/Footer/Footer'
import Slider3D from '../../components/Slider3D/Slider3d'
import ServiceNav from '../../components/ServiceNav/ServiceNav'
import ModelingPage from '../../containers/ModelingPage/ModelingPage'



export default function Main() {

  const [activeSection, setActiveSection] = useState<string>('Художественное')

  let block_1 = useRef<HTMLDivElement>(null)
  let block_2 = useRef<HTMLDivElement>(null)
  let container = useRef<HTMLDivElement>(null)
  let nav = useRef<HTMLDivElement>(null)

  const [navTop, setNavTop] = useState<boolean>(false)

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


  /* const sliderScroll = (sections: HTMLDivElement[], container: HTMLDivElement) => {
    gsap.to(sections, {
      scrollTrigger: {
        trigger: container,
        start: 'top top+=64px',
        end: () => '+=' + container.offsetWidth,
        scrub: 0.3,
        pin: true,
        //snap: 1 / (sections.length - 1),
        snap: 0.1
      },
      xPercent: -100 * ((sections.length - 1)/2),
      ease: 'none'
    })
  } */

  let handleScroll = () => {
    if (nav && nav.current) {
      let topX = nav.current.getBoundingClientRect().top
      console.log(topX)

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
    if (window.document.body.clientWidth > 1200
      && block_1 && block_1.current
      && block_2 && block_2.current
      && container && container.current
    ) {
      //gsap.registerPlugin(ScrollTrigger)
      //sliderScroll([block_1.current, block_2.current], container.current)
    }
  }, [block_1, block_2, container])

  const router = useRouter()
  const { segment } = router.query

  const [scroll, setScroll] = useState<number>(0)

  useEffect(() => {
    let scrollTop = window.scrollY
    setScroll(scrollTop)
  }, [])

  const scrollPageHandler = () => {
    let scrollTop = window.scrollY
    setScroll(scrollTop)
  }


  useEffect(() => {
    let sect = segment

    switch (sect) {
      case '1':
        setActiveSection('Художественное')
        break
      case '2':
        setActiveSection('Инженерное')
        break
      case '3':
        setActiveSection('Ювелирное')
        break
    }

  }, [])

  return (
    <div
      className={s.pageContainer}
      onWheel={() => scrollPageHandler()}
    >
      <Head>
        <title>
          Заказать {activeSection} моделирование | 3D Craft - услуги по 3D моделированию и 3D печати
        </title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='most famous words' />
        <meta name='description' content='test desc' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ModelingPage
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