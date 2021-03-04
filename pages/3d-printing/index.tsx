import Head from 'next/head'
import { useState, useEffect } from 'react'

import s from '../../styles/Pages/serviceContainer.module.sass'
import HeaderBlock from '../../components/Header/Header'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import Footer from '../../components/Footer/Footer'



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
      className={s.pageContainer}
      onWheel={(e: React.WheelEvent<HTMLDivElement>) => scrollPageHandler(e)}
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
          <div className={s.firstInfoBlock__container} >
            <div className={s.firstInfoBlock__content} >
              <div className={s.firstInfoBlock__text} >
                <h2 className={s.firstInfoBlock__title} >
                  3D ПЕЧАТЬ
                </h2>
                <h3 className={s.firstInfoBlock__subtitle} >
                  3Da modeling studio ИСПОЛЬЗУЕТ НЕКОТОРЫЕ ЗАХВАТЫВАЮЩИЕ ТЕХНОЛОГИИ 3D-ПЕЧАТИ
                </h3>
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
          </div>
          <div className={s.secondInfoBlock__container} >
            <div className={s.secondInfoBlock__content} >
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
          </div>
          <div className={s.thirdInfoBlock__container} >
            <h2 className={s.thirdInfoBlock_title} >
              Важные моменты
            </h2>
            <div className={s.thirdInfoBlock__content} >
              <InfoBlock
                src={'/design/photo_2021-01-30_03-50-18 (2).jpg'}
                style={'style_3'}
                list={false}
                title={`ПОДТВЕРДИТЕ ВАШ РАЗМЕР`}
                description={`Материал для конечного использования влияет на первоначальный размер 3D-печати, когда мы отправляем сборки на машины.`}
              />
              <InfoBlock
                src={'/3d-printer-preview.jpg'}
                style={'style_3'}
                list={false}
                title={`МОНИТОРИНГ СОЗДАНИЯ`}
                description={`Наша команда наблюдает за сборками по мере их выполнения, чтобы проверить наличие проблем.`}
              />
              <InfoBlock
                src={'/3d-printing/photo_2021-01-30_03-07-52.jpg'}
                style={'style_3'}
                list={false}
                title={`НУЖНО ЛИ ЧИСТКА?`}
                description={`Некоторые клиенты предпочитают, чтобы мы выполняли окончательную очистку деталей, и мы можем помочь с этим по мере необходимости.`}
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