import Head from 'next/head'
import { useState, useEffect } from 'react'

import s from '../../styles/Pages/serviceContainer.module.sass'
import HeaderBlock from '../../components/Header/Header'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import Footer from '../../components/Footer/Footer'
import ServiceNav from '../../components/MainNav/ServiceNav'
import Slider3D from '../../components/Slider3D/Slider3d'
import ParameterCard from '../../components/ParameterCard/ParameterCard'



export default function Main() {

  const [activeSection, setActiveSection] = useState<string>('SLA')
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
            <div className={s.previewBlock__text} >
              <h1 className={s.previewBlock__title} >
                3D печать
              </h1>
              <p className={s.serviceContainer__subtitle} >
                Перенесите свое 3D-изображение в физический мир.
              </p>
            </div>
            <img
              className={s.previewBlock__background}
              src={'/artistic-preview.png'}
              alt="художественное моделирование"
            />
          </div>

          <ServiceNav
            data={[{ name: 'SLA' }, { name: 'FDM' }]}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {activeSection === 'SLA'
            ? (<div className={s.section_item} >
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
              <div className={s.block_content} >
                <InfoBlock
                  src={'/design/photo_2021-01-30_03-50-18 (2).jpg'}
                  style={'style_2'}
                  list={true}
                  additClass={s.style_2_printing}
                  listData={[
                    {
                      title: `Точный размер`,
                      subtitle: `Размеры сборок соответствуют вашим точным спецификациям и выполняются с компьютерной точностью.`
                    },
                    {
                      title: `Быстрая обработка заказа`,
                      subtitle: `Оценим стоимость печати и время изготовления изделий в день заказа.`
                    },
                    {
                      title: `Качество изделий`,
                      subtitle: `Испозльзование ориганальных материалов.`
                    },
                    {
                      title: `Сроки`,
                      subtitle: `FDM печать от 1-5 дней(в зависимости от количества и размеров). SLA печать от 2-7 дней (в зависимости от количества и размеров)`
                    },
                    {
                      title: `Важно знать`,
                      subtitle: `В данный момент предоставление услуги 3D печати возможна из следующих материалов: FDM - (PLA,ABS,PETG), SLA - (любой)`
                    }
                  ]}
                />
              </div>
            </div>)
            : activeSection === 'FDM'
              ? (<div className={s.section_item} >
                <div className={s.block_content} >
                  <div className={s.title_container} >
                    <h2 className={s.title} >FDM - печать</h2>
                  </div>
                  <InfoBlock
                    src={'/jewelry/photo_2021-01-30_04-03-43.jpg'}
                    style={'style_1'}
                    list={false}
                    description={`
                      Имея технические решения как для широкоформатной печати, так и для мелкоформатной печати с высокой детализацией, мы можем помочь выбрать лучшую машину для вашего проекта и выполнить эту печать на месте в 27 CHYPER.
  
                      Если у вас уже есть данные или вам нужно, чтобы мы их построили, мы можем помочь.
                      `}
                  />
                </div>
                <div className={s.block_content} >
                  <InfoBlock
                    src={'/design/photo_2021-01-30_03-50-18 (2).jpg'}
                    style={'style_2'}
                    list={true}
                    listData={[
                      {
                        title: `Точный размер`,
                        subtitle: `Размеры сборок соответствуют вашим точным спецификациям и выполняются с компьютерной точностью.`
                      },
                      {
                        title: `Быстрая обработка заказа`,
                        subtitle: `Оценим стоимость печати и время изготовления изделий в день заказа.`
                      },
                      {
                        title: `Качество изделий`,
                        subtitle: `Испозльзование ориганальных материалов.`
                      },
                      {
                        title: `Сроки`,
                        subtitle: `FDM печать от 1-5 дней(в зависимости от количества и размеров). SLA печать от 2-7 дней (в зависимости от количества и размеров)`
                      },
                      {
                        title: `Важно знать`,
                        subtitle: `В данный момент предоставление услуги 3D печати возможна из следующих материалов: FDM - (PLA,ABS,PETG), SLA - (любой)`
                      }
                    ]}
                  />
                </div>
              </div>)
              : null
          }


          <ServiceNav
            data={[{ name: 'SLA' }, { name: 'FDM' }]}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <div className={s.section_item} >
            <div className={s.block_content} >
              <div className={s.title_container} >
                <h2 className={s.title} >СТОИМОСТЬ 3D-ПЕЧАТИ</h2>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '32px'}} >
                <ParameterCard 
                  dataPr={{
                    name: 'Материал',
                    value: 'PLA',
                    parameters: [
                      {name: 'Технология', type: 'text', value: 'FDM'},
                      {name: 'Точность', type: 'text', value: '5 - 25 mkm'},
                      {name: 'Детализация', type: 'score', value: 3},
                      {name: 'Прочность', type: 'score', value: 3},
                      {name: 'Цена', type: 'text', value: 'от 8 ₽'},
                      {name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней?'},
                      {name: 'Область печати (мм)', type: 'text', value: '145-145-175 ?'},
                    ]
                  }}
                />
                <ParameterCard 
                  dataPr={{
                    name: 'Материал',
                    value: 'PETG',
                    parameters: [
                      {name: 'Технология', type: 'text', value: 'FDM'},
                      {name: 'Точность', type: 'text', value: '5 - 25 mkm'},
                      {name: 'Детализация', type: 'score', value: 3},
                      {name: 'Прочность', type: 'score', value: 4},
                      {name: 'Цена', type: 'text', value: 'от 10 ₽'},
                      {name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней ?'},
                      {name: 'Область печати (мм)', type: 'text', value: '145-145-175 ?'},
                    ]
                  }}
                />
                <ParameterCard 
                  dataPr={{
                    name: 'Материал',
                    value: 'Фотополимер',
                    parameters: [
                      {name: 'Технология', type: 'text', value: 'SLA'},
                      {name: 'Точность', type: 'text', value: '28 - 32 mkm'},
                      {name: 'Детализация', type: 'score', value: 5},
                      {name: 'Прочность', type: 'score', value: 3},
                      {name: 'Цена', type: 'text', value: 'от 350 ₽'},
                      {name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней ?'},
                      {name: 'Область печати (мм)', type: 'text', value: '145-145-175 ?'},
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