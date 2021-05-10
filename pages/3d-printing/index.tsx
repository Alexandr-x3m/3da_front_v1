import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import s from '../../styles/Pages/serviceContainer.module.sass'
import HeaderBlock from '../../components/Header/Header'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import Footer from '../../components/Footer/Footer'
import ServiceNav from '../../components/ServiceNav/ServiceNav'
import Slider3D from '../../components/Slider3D/Slider3d'
import ParameterCard from '../../components/ParameterCard/ParameterCard'



export default function Main() {

  const [activeSection, setActiveSection] = useState<string>('SLA')
  const [scroll, setScroll] = useState<number>(0)

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

  useEffect(() => {
    console.log(nav.current)

    if (nav && nav.current) {
      gsap.registerPlugin(ScrollTrigger)
      topFixing(nav.current)
    }
  }, [nav])

  const sliderScroll = (sections: HTMLDivElement[], container: HTMLDivElement) => {
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
  }

  useEffect(() => {
    if (window.document.body.clientWidth >  1200 
      && block_1 && block_1.current 
      && block_2 && block_2.current 
      && container && container.current
    ) {
      gsap.registerPlugin(ScrollTrigger)
      sliderScroll([block_1.current, block_2.current], container.current)
    }
  }, [block_1, block_2, container])

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
      className={s.pageContainer}
      onWheel={() => scrollPageHandler()}
    >
      <Head>
        <title></title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='most famous words' />
        <meta name='description' content='test desc' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />s
      </Head>
      <div >
        <HeaderBlock scroll={scroll} />

        <div className={s.serviceContainer} >
          <div className={s.previewBlock__container} >
            <img
              className={s.previewBlock__background}
              src={'/artistic-preview.jpg'}
              alt="художественное моделирование"
            />
            <div className={s.previewBlock__text} >
              <h1 className={s.previewBlock__title} >
                3D печать
              </h1>
              <p className={s.serviceContainer__subtitle} >
                Перенесите свое 3D-изображение в физический мир.
              </p>
            </div>

          </div>


          {activeSection === 'SLA'
            ? (<div className={s.section_item + ' ' + s.scroll_item} ref={container} >
              <div className={s.nav_container} ref={nav} >
                <ServiceNav
                  data={[
                    { name: 'SLA', icon: '/icons/color_lens_24px_outlined.svg' },
                    { name: 'FDM', icon: '/icons/memory_24px_outlined.svg' },
                  ]}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
              </div>
              <div className={s.section_item} ref={block_1} >
                <div className={s.block_content} >
                  <div className={s.title_container} >
                    <h2 className={s.title} >
                      Художественное 3D Моделирование
                            </h2>
                  </div>
                  <InfoBlock
                    src={'/jewelry/photo_2021-01-30_04-03-43.jpg'}
                    style={'style_1'}
                    list={false}
                    additClass={s.style_1_printing}
                    description={`
                            Имея технические решения как для широкоформатной печати, так и для мелкоформатной печати с высокой детализацией, мы можем помочь выбрать лучшую машину для вашего проекта и выполнить эту печать на месте в 27 CHYPER.
        
                            Если у вас уже есть данные или вам нужно, чтобы мы их построили, мы можем помочь.
                            `}
                  />
                </div>
              </div>
              <div className={s.section_item} ref={block_2} >
                <div className={s.block_content} >
                  <div className={s.title_container} >
                    <h2 className={s.title} >
                      Важные моменты
                          </h2>
                  </div>
                  <InfoBlock
                    src={'/design/photo_2021-01-30_03-50-18 (2).jpg'}
                    style={'style_2'}
                    list={true}
                    additClass={s.style_2_printing}
                    listData={[
                      {
                        title: `Сложно, не значит невозможно`,
                        subtitle: `SLA 3D принтер может печатать детали с очень высокой точностью размеров и со сложной геометрией.`
                      },
                      {
                        title: `Готовое изделие`,
                        subtitle: `Детали будут иметь очень гладкую поверхность, что делает их идеальными, например для визуальных прототипов.`
                      },
                      {
                        title: `??????????????`,
                        subtitle: `Доступны специальные материалы, такие как прозрачные, эластичные и литьевые смолы.`
                      }
                    ]}
                  />
                </div>
              </div>
            </div>)
            : activeSection === 'FDM'
              ? (<div className={s.section_item + ' ' + s.scroll_item} ref={container} >
                <div className={s.nav_container} ref={nav} >
                  <ServiceNav
                    data={[
                      { name: 'SLA', icon: '/icons/color_lens_24px_outlined.svg' },
                      { name: 'FDM', icon: '/icons/memory_24px_outlined.svg' },
                    ]}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                  />
                </div>
                <div className={s.section_item} ref={block_1} >
                  <div className={s.block_content} >
                    <div className={s.title_container} >
                      <h2 className={s.title} >SLA - печать</h2>
                    </div>
                    <InfoBlock
                      src={'/jewelry/photo_2021-01-30_04-03-43.jpg'}
                      style={'style_1'}
                      list={false}
                      additClass={s.style_1_printing}
                      description={`
                            Имея технические решения как для широкоформатной печати, так и для мелкоформатной печати с высокой детализацией, мы можем помочь выбрать лучшую машину для вашего проекта и выполнить эту печать на месте в 27 CHYPER.
        
                            Если у вас уже есть данные или вам нужно, чтобы мы их построили, мы можем помочь.
                            `}
                    />
                  </div>
                </div>
                <div className={s.section_item} ref={block_2} >
                  <div className={s.block_content} >
                    <div className={s.title_container} >
                      <h2 className={s.title} >
                        FDM - печать
                          </h2>
                    </div>
                    <InfoBlock
                      src={'/design/photo_2021-01-30_03-50-18 (2).jpg'}
                      style={'style_2'}
                      list={true}
                      additClass={s.style_2_printing}
                      listData={[
                        {
                          title: `Размер не так важен`,
                          subtitle: `Производство с технологией FDM позволяет печатать на принтере любые сложные детали малых и больших габаритов (детали, размеры которых превосходят габариты рабочей зоны принтера, можно моделировать по частям, а затем собирать в единое целое, например, склеивать).`
                        },
                        {
                          title: `Это лишь заготовка`,
                          subtitle: `Свойства модельных материалов технологии FDM позволяют с легкостью проводить дополнительную обработку моделей: шлифовать, красить, обрабатывать на ЧПУ, рассверливать в них отверстия и другие процессы.`
                        },
                        {
                          title: `Адаптация`,
                          subtitle: `Широкий ассортимент термопластов позволяет без труда подобрать необходимый по свойствам материал, а также выбрать предпочтительный цвет готового изделия.`
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>)
              : null
          }

          <div className={s.section_item} >
            <div className={s.block_content} >
              <div className={s.title_container} >
                <h2 className={s.title} >СТОИМОСТЬ 3D-ПЕЧАТИ</h2>
              </div>
              <div className={s.parameters} >
                <ParameterCard
                  dataPr={{
                    name: 'Материал',
                    value: 'PLA',
                    parameters: [
                      { name: 'Технология', type: 'text', value: 'FDM' },
                      { name: 'Точность', type: 'text', value: '5 - 25 mkm' },
                      { name: 'Детализация', type: 'score', value: 3 },
                      { name: 'Прочность', type: 'score', value: 3 },
                      { name: 'Цена', type: 'text', value: 'от 8 ₽' },
                      { name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней?' },
                      { name: 'Область печати (мм)', type: 'text', value: '145-145-175 ?' },
                    ]
                  }}
                />
                <ParameterCard
                  dataPr={{
                    name: 'Материал',
                    value: 'PETG',
                    parameters: [
                      { name: 'Технология', type: 'text', value: 'FDM' },
                      { name: 'Точность', type: 'text', value: '5 - 25 mkm' },
                      { name: 'Детализация', type: 'score', value: 3 },
                      { name: 'Прочность', type: 'score', value: 4 },
                      { name: 'Цена', type: 'text', value: 'от 10 ₽' },
                      { name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней ?' },
                      { name: 'Область печати (мм)', type: 'text', value: '145-145-175 ?' },
                    ]
                  }}
                />
                <ParameterCard
                  dataPr={{
                    name: 'Материал',
                    value: 'Фотополимер',
                    parameters: [
                      { name: 'Технология', type: 'text', value: 'SLA' },
                      { name: 'Точность', type: 'text', value: '28 - 32 mkm' },
                      { name: 'Детализация', type: 'score', value: 5 },
                      { name: 'Прочность', type: 'score', value: 3 },
                      { name: 'Цена', type: 'text', value: 'от 350 ₽' },
                      { name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней ?' },
                      { name: 'Область печати (мм)', type: 'text', value: '145-145-175 ?' },
                    ]
                  }}
                />
              </div>
            </div>
          </div>

          <div className={s.section_item} >
            <div className={s.block_content} >
              <div className={s.title_container} >
                <h2 className={s.title} >Наши работы</h2>
              </div>
              <Slider3D dt={[{
                id: 'id_1',
                position: 1,
                src: '/placeholder.jpg',
                name: 'Laba daba dap'
              },
              {
                id: 'id_2',
                position: 2,
                src: '/design/photo_2021-01-30_03-50-18 (2).jpg',
                name: 'Riki tiki tai'
              },
              {
                id: 'id_3',
                position: 3,
                src: '/design/photo_2021-01-30_03-50-18.jpg',
                name: 'Laba daba dap'
              },
              {
                id: 'id_4',
                position: 4,
                src: '/jewelry/photo_2021-01-30_04-02-14.jpg',
                name: 'Laba daba dap'
              },
              {
                id: 'id_5',
                position: 5,
                src: '/jewelry/photo_2021-01-30_04-02-14 (3).jpg',
                name: 'Laba daba dap'
              },]} />
            </div>
          </div>
          <div className={s.section_item} >
            <div className={s.block_content}  >
              <div className={s.title_container} >
                <h2 className={s.title} >Важные моменты</h2>
              </div>
              <div className={s.hor_block} >
                <InfoBlock
                  src={'/souvenir/c3083b8355840c9e76010f76297ec7d4.jpg'}
                  style={'style_3'}
                  list={false}
                  title={'Если у вас есть чертеж'}
                  description={'??????? ??????? ?????????????? ??????? ??????? ??????? '}
                  animation={true}
                />
                <InfoBlock
                  src={'/souvenir/photo_2021-01-30_03-55-25.jpg'}
                  style={'style_3'}
                  list={false}
                  title={`ЭТО ДОЛЖНО БЫТЬ ДИНАМИЧНЫМ`}
                  description={`Представление и реализация необходимого события - все это в фигурной модели`}
                  animation={true}
                />
                <InfoBlock
                  src={'/souvenir/photo_2021-01-30_03-53-03.jpg'}
                  style={'style_3'}
                  list={false}
                  title={`МЫ СМОТРИМ ВПЕРЁД`}
                  description={`Мы проектируем наши 3D-модели таким образом, чтобы все элементы были связаны, работали вместе и были готовы к производству.`}
                  animation={true}
                />
              </div>
            </div>
          </div>
          <AttentionLane
            title={'Давайте воплотим вашу идею'}
            subtitle={'Отправте свои требования к проекту, мы обработаем заявку и свяжемся с вами в ближайшее время'}
            btn={true}
          />
          <Footer />
        </div>
      </div>

    </div>
  )
}