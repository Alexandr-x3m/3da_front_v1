import { useState } from 'react'
import Head from 'next/head'
import s from '../../styles/Pages/serviceContainer.module.sass'
import HeaderBlock from '../../components/Header/Header'
import ServiceContainer from '../../components/Pages/Service/Service'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <HeaderBlock />

        <div className={s.serviceContainer} >
          <div className={s.previewBlock__container} >
            <div className={s.previewBlock__text} >
              <h1 className={s.previewBlock__title} >
                {'ХУДОЖЕСТВЕННОЕ МОДЕЛИРОВАННИЕ'}
              </h1>
              <p className={s.serviceContainer__subtitle} >
                В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании
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
                <h2 className={s.firstInfoBlock__title} >У нас уже есть образы.</h2>
                <h3 className={s.firstInfoBlock__subtitle} >Создадим вашего персонажа.</h3>
              </div>
              <InfoBlock
                style={'style_1'}
                list={false}
                description={'Независимо от того, начинаем ли мы с 2D или с 3D, мы имеет обширный опыт помощи клиентам в разработке и артикулировании внешнего вида персонажей, чтобы заселить их фантастические миры. В начале проекта мы определяем, какие влияния должны присутствовать в концепциях, и используем отзывы клиентов, чтобы охватить основы. Формы, силуэты или важные для сюжета детали, мы можем быстро итерировать и приблизить дизайн к стадии готовности к работе.'}
              />
            </div>
          </div>
          <div className={s.secondInfoBlock__container} >
            <div className={s.secondInfoBlock__content} >
              <InfoBlock
                style={'style_2'}
                list={true}
                listData={[
                  {
                    title: 'ЗАГАЛОВОК 1',
                    subtitle: 'Прототипирование, Скульптинг, Инженерное моделирование Прототипирование, Скульптинг, Инженерное моделированиеПрототипирование'
                  },
                  {
                    title: 'ЗАГАЛОВОК 2',
                    subtitle: 'Прототипирование, Скульптинг, Инженерное моделирование Прототипирование, Скульптинг, Инженерное моделированиеПрототипирование'
                  },
                  {
                    title: 'ЗАГАЛОВОК 3',
                    subtitle: 'Прототипирование, Скульптинг, Инженерное моделирование Прототипирование, Скульптинг, Инженерное моделированиеПрототипирование'
                  }
                ]}
              />
            </div>
          </div>
          <div className={s.thirdInfoBlock__container} >
            <div className={s.thirdInfoBlock__content} >
              <InfoBlock
                key={'block_1'}
                style={'style_3'}
                list={false}
                title={'ЗАГАЛОВОК 1'}
                description={'Прототипирование, Скульптинг, Инженерное моделирование Прототипирование, Скульптинг, Инженерное '}
              />
              <InfoBlock
                key={'block_2'}
                style={'style_3'}
                list={false}
                title={'ЗАГАЛОВОК 2'}
                description={'Прототипирование, Скульптинг, Инженерное моделирование Прототипирование, Скульптинг, Инженерное '}
              />
              <InfoBlock
                key={'block_3'}
                style={'style_3'}
                list={false}
                title={'ЗАГАЛОВОК 3'}
                description={'Прототипирование, Скульптинг, Инженерное моделирование Прототипирование, Скульптинг, Инженерное '}
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