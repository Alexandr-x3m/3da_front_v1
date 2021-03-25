import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import s from '../../styles/Pages/serviceContainer.module.sass'
import HeaderBlock from '../../components/Header/Header'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import Footer from '../../components/Footer/Footer'
import Slider3D from '../../components/Slider3D/Slider3d'
import ServiceNav from '../../components/ServiceNav/ServiceNav'



export default function Main() {

  const [activeSection, setActiveSection] = useState<string>('Художественное')

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

    if (sect === "1") setActiveSection('Художественное')
    if (sect === "2") setActiveSection('Инженерное')
    if (sect === "3") setActiveSection('Ювелирное')

  }, [])

  return (
    <div
      className={s.pageContainer}
      onWheel={() => scrollPageHandler()}
    >
      <Head>
        <title>3Da modeling studio</title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='most famous words' />
        <meta name='description' content='test desc' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div >
        <HeaderBlock scroll={scroll} />

        <div className={s.serviceContainer} >
          <div className={s.previewBlock__container} >
            <div className={s.previewBlock__text} >
              <h1 className={s.previewBlock__title} >
                3D моделирование
              </h1>
              <p className={s.serviceContainer__subtitle} >
                От художественного произведения до 3D-модели.
              </p>
            </div>
            <img
              className={s.previewBlock__background}
              src={'/artistic-preview.png'}
              alt="художественное моделирование"
            />
          </div>
          <ServiceNav
            data={[{ name: 'Художественное' }, { name: 'Инженерное' }, { name: 'Ювелирное' }]}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* ----------------------------------- */}
          {activeSection === 'Художественное'
            ? (<div className={s.section_item} >
              <div className={s.block_content} >
                <div className={s.title_container} >
                  <h2 className={s.title} >
                    Художественное 3D Моделирование
                    </h2>
                </div>
                <InfoBlock
                  src={'/souvenir/VR3XApcRbOg.jpg'}
                  style={'style_1'}
                  list={false}
                  description={`
                        Клиенты с существующими моделями, которые необходимо изменить, могут рассчитывать на то, что мы сохраним важную сущность исходной геометрии, пока мы вносим необходимые изменения. 
                        
                        Обладая сильными основными художественными навыками, Gentle Giant Studios хорошо разбирается в анатомии человека и тонкостях создания 3D-моделей, которые хорошо работают в конечном масштабе и конечном использовании, чтобы эффективно передать художественный замысел вашего проекта. 
                        
                        Независимо от того, является ли ваша цель гипер-реальностью или причудливо стилизованным образом, мы можем помочь вам в ее достижении.`
                  }
                  animation={true}
                  additClass={s.style_1_modeling}
                />
              </div>
              <div className={s.block_content} >

                <div className={s.title_container} >
                  <h2 className={s.title} >
                    Важные моменты
                  </h2>
                </div>
                <InfoBlock
                  src={'/souvenir/c3083b8355840c9e76010f76297ec7d4.jpg'}
                  style={'style_2'}
                  list={true}
                  listData={[
                    {
                      title: 'ДВИЖЕНИЯ ФИГУР',
                      subtitle: `Мы стремимся понять все стили артикуляции фигуры и помогаем нашим клиентам вводить новшества, чтобы обеспечить еще больший диапазон движений / возможностей.`
                    },
                    {
                      title: `СТАТУИ И ДИОРАМЫ`,
                      subtitle: `Мы легко переходим от игрушек к предметам коллекционирования и изобразительному искусству, создавая основу для презентаций с высокой детализацией.`
                    },
                    {
                      title: `ТЕХНОЛОГИЯ`,
                      subtitle: `Наше цифровое моделирование выполняется в средах моделирования с большим количеством полигонов. Наличие миллионов и миллионов полигонов в модели во время строительства позволяет нам создавать мельчайшие детали и делать их идеально читаемыми в окончательном масштабе.`
                    }
                  ]}
                  animation={true}
                />
              </div>
            </div>)
            : activeSection === 'Инженерное'
              ? (<div className={s.section_item} >
                <div className={s.block_content} >
                  <div className={s.title_container} >
                    <h2 className={s.title} >
                      Инженерное 3D Моделирование
                      </h2>
                  </div>
                  <InfoBlock
                    src={'/souvenir/photo_2021-01-30_03-53-03.jpg'}
                    style={'style_1'}
                    list={false}
                    description={`
                        Клиенты с существующими моделями, которые необходимо изменить, могут рассчитывать на то, что мы сохраним важную сущность исходной геометрии, пока мы вносим необходимые изменения. 
                        
                        Обладая сильными основными художественными навыками, Gentle Giant Studios хорошо разбирается в анатомии человека и тонкостях создания 3D-моделей, которые хорошо работают в конечном масштабе и конечном использовании, чтобы эффективно передать художественный замысел вашего проекта. 
                        
                        Независимо от того, является ли ваша цель гипер-реальностью или причудливо стилизованным образом, мы можем помочь вам в ее достижении.`
                    }
                    animation={true}
                  />
                </div>
                <div className={s.block_content} >
                  <div className={s.title_container}>
                    <h2 className={s.title} >
                      Важные моменты
                    </h2>
                  </div>
                  <InfoBlock
                    src={'/souvenir/c3083b8355840c9e76010f76297ec7d4.jpg'}
                    style={'style_2'}
                    list={true}
                    listData={[
                      {
                        title: 'ДВИЖЕНИЯ ФИГУР',
                        subtitle: `Мы стремимся понять все стили артикуляции фигуры и помогаем нашим клиентам вводить новшества, чтобы обеспечить еще больший диапазон движений / возможностей.`
                      },
                      {
                        title: `СТАТУИ И ДИОРАМЫ`,
                        subtitle: `Мы легко переходим от игрушек к предметам коллекционирования и изобразительному искусству, создавая основу для презентаций с высокой детализацией.`
                      },
                      {
                        title: `ТЕХНОЛОГИЯ`,
                        subtitle: `Наше цифровое моделирование выполняется в средах моделирования с большим количеством полигонов. Наличие миллионов и миллионов полигонов в модели во время строительства позволяет нам создавать мельчайшие детали и делать их идеально читаемыми в окончательном масштабе.`
                      }
                    ]}
                    animation={true}
                  />
                </div>
              </div>)
              : (<div className={s.section_item} >
                <div className={s.block_content} >
                  <div className={s.title_container} >
                    <h2 className={s.title} >
                      Ювелирное 3D Моделирование
                      </h2>
                  </div>
                  <InfoBlock
                    src={'/souvenir/photo_2021-01-30_03-55-25.jpg'}
                    style={'style_1'}
                    list={false}
                    description={`
                          Клиенты с существующими моделями, которые необходимо изменить, могут рассчитывать на то, что мы сохраним важную сущность исходной геометрии, пока мы вносим необходимые изменения. 
                          
                          Обладая сильными основными художественными навыками, Gentle Giant Studios хорошо разбирается в анатомии человека и тонкостях создания 3D-моделей, которые хорошо работают в конечном масштабе и конечном использовании, чтобы эффективно передать художественный замысел вашего проекта. 
                          
                          Независимо от того, является ли ваша цель гипер-реальностью или причудливо стилизованным образом, мы можем помочь вам в ее достижении.`
                    }
                    animation={true}
                  />
                </div>
                <div className={s.block_content} >
                  <div className={s.title_container}>
                    <h2 className={s.title} >
                      Важные моменты
                    </h2>
                  </div>
                  <InfoBlock
                    src={'/souvenir/c3083b8355840c9e76010f76297ec7d4.jpg'}
                    style={'style_2'}
                    list={true}
                    listData={[
                      {
                        title: 'ДВИЖЕНИЯ ФИГУР',
                        subtitle: `Мы стремимся понять все стили артикуляции фигуры и помогаем нашим клиентам вводить новшества, чтобы обеспечить еще больший диапазон движений / возможностей.`
                      },
                      {
                        title: `СТАТУИ И ДИОРАМЫ`,
                        subtitle: `Мы легко переходим от игрушек к предметам коллекционирования и изобразительному искусству, создавая основу для презентаций с высокой детализацией.`
                      },
                      {
                        title: `ТЕХНОЛОГИЯ`,
                        subtitle: `Наше цифровое моделирование выполняется в средах моделирования с большим количеством полигонов. Наличие миллионов и миллионов полигонов в модели во время строительства позволяет нам создавать мельчайшие детали и делать их идеально читаемыми в окончательном масштабе.`
                      }
                    ]}
                    animation={true}
                  />
                </div>
              </div>)
          }

          <ServiceNav
            data={[{ name: 'Художественное' }, { name: 'Инженерное' }, { name: 'Ювелирное' }]}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <div className={s.section_item} >
            <div className={s.block_content} >
              <div className={s.title_container} >
                <h2 className={s.title} >Наши Работы</h2>
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
        </div>
        <AttentionLane
          title={'Давайте воплотим вашу идею'}
          subtitle={'Отправте свои требования к проекту, мы обработаем заявку и свяжемся с вами в ближайшее время'}
          btn={true}
        />
        <Footer />
      </div>
    </div>
  )
}