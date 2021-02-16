import { useState } from 'react'
import Head from 'next/head'
import s from '../../styles/Pages/serviceContainer.module.sass'
import HeaderBlock from '../../components/Header/Header'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import Footer from '../../components/Footer/Footer'



export default function Main() {


  return (
    <div
      className={s.pageContainer} >
      <Head>
        <title> 27 CYPHER</title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='most famous words' />
        <meta name='description' content='test desc' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div >
        <HeaderBlock />

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
          <div className={s.firstInfoBlock__container} >
            <div className={s.firstInfoBlock__content} >
              <div className={s.firstInfoBlock__text} >
                <h2 className={s.firstInfoBlock__title} >
                  3D Моделирование
                </h2>
                <h3 className={s.firstInfoBlock__subtitle} >
                  НАША КОМАНДА ИМЕЕТ БОЛЬШОЙ ОПЫТ В ОБЛАСТИ ЖЕСТКИХ ПОВЕРХНОСТЕЙ И ОРГАНИЧЕСКОГО МОДЕЛИРОВАНИЯ.
                  </h3>
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
              />
            </div>
          </div>
          <div className={s.secondInfoBlock__container} >
            <h2 className={s.thirdInfoBlock_title} >
              Важные моменты
            </h2>
            <div className={s.secondInfoBlock__content} >
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
          </div>
          <div className={s.thirdInfoBlock__container} >
            <div className={s.thirdInfoBlock__content} >
              <InfoBlock
                src={'/souvenir/c3083b8355840c9e76010f76297ec7d4.jpg'}
                style={'style_3'}
                list={false}
                title={'???????'}
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