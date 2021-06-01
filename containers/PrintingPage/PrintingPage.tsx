import { Dispatch, RefObject, SetStateAction } from 'react'
import s from '../../styles/Pages/serviceContainer.module.sass'

import HeaderBlock from '../../components/Header/Header'
import ServiceNav from '../../components/ServiceNav/ServiceNav'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import ParameterCard from '../../components/ParameterCard/ParameterCard'
import Slider3D from '../../components/Slider3D/Slider3d'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import Footer from '../../components/Footer/Footer'

interface PrintingPage {
  scroll: number,
  navTop: boolean,
  nav: RefObject<HTMLDivElement>,
  activeSection: string,
  setActiveSection: Dispatch<SetStateAction<PrintingPage["activeSection"]>>,
  container: RefObject<HTMLDivElement>,
  block_1: RefObject<HTMLDivElement>,
  block_2: RefObject<HTMLDivElement>
}

const PrintingPage: React.FC<PrintingPage> = ({ scroll, navTop, nav, activeSection, setActiveSection, container, block_1, block_2 }) => {

  return (
    <div >
      <HeaderBlock scroll={scroll} />
      <div className={s.serviceContainer} >
        <div className={s.previewBlock__container} >
          <img
            className={s.previewBlock__background}
            src={'/preview/3d-printer-preview-min.jpg'}
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
        <div className={s.nav_container + ' ' + (navTop ? s.nav_top : null)} ref={nav} >
          <ServiceNav
            data={[
              { name: 'SLA', icon: '/icons/color_lens_24px_outlined.svg' },
              { name: 'FDM', icon: '/icons/memory_24px_outlined.svg' },
            ]}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {activeSection === 'SLA'
          ? (<div className={s.section_item} ref={container} >
            <div className={s.section_item} ref={block_1} >
              <div className={s.block_content} >
                <div className={s.title_container} >
                  <h2 className={s.title} >
                    Стереолитография <marker className={s.title_mark}>(</marker> SLA <marker className={s.title_mark}>)</marker>
                  </h2>
                </div>
                <InfoBlock
                  src={'/3d-printing/photo_2021-01-30_03-07-52-min.jpg'}
                  style={'style_1'}
                  list={false}
                  additClass={s.style_1_printing}
                  description={`SLA-принтеры помогают оперативно получить прототип с 3D модели. Специальная оснастка и промежуточные этапы обработки не требуются, поэтому на создание готового изделия уходит всего несколько часов. Стереолитографическая 3D-печать экономит время на тестирование экспериментальных образцов и помогает создавать модели близкие к законченному виду.`}
                />
              </div>
            </div>
            <div className={s.section_item} ref={block_2} >
              <div className={s.block_content} >
                <div className={s.title_container} >
                  <h2 className={s.title} >
                    преимущества
                    </h2>
                </div>
                <InfoBlock
                  src={'/3d-printing/photo_2021-01-30_03-07-51-min.jpg'}
                  style={'style_2'}
                  list={true}
                  additClass={s.style_2_printing}
                  listData={[
                    {
                      title: `Сложно, не значит невозможно`,
                      subtitle: `SLA 3D принтер может печатать детали с очень высокой точностью размеров и со сложной геометрией.`
                    },
                    {
                      title: `Возможность выбрать`,
                      subtitle: `Доступны специальные материалы, такие как прозрачные, эластичные и литьевые смолы.`
                    },
                    {
                      title: `Готовое изделие`,
                      subtitle: `Детали будут иметь очень гладкую поверхность, что делает их идеальными, например для визуальных прототипов.`
                    }
                  ]}
                />
              </div>
            </div>
          </div>)
          : activeSection === 'FDM'
            ? (<div className={s.section_item} ref={container} >
              <div className={s.section_item} ref={block_1} >
                <div className={s.block_content} >
                  <div className={s.title_container} >
                    <h2 className={s.title} >
                      Моделирование послойного наплавления <marker className={s.title_mark}>(</marker> FDM <marker className={s.title_mark}>)</marker>
                    </h2>
                  </div>
                  <InfoBlock
                    src={'/3d-printing/3d-printing-min.jpg'}
                    style={'style_1'}
                    list={false}
                    additClass={s.style_1_printing}
                    description={`FDM является одним из наиболее дешевых методов печати. Применяется для быстрого прототипирования и быстрого производства, что облегчает возможность тестирования и модернизации детали при необходимости. Быстрое производство служит в качестве недорогой альтернативы стандартным методам при создании мелкосерийных партий.`}
                  />
                </div>
              </div>
              <div className={s.section_item} ref={block_2} >
                <div className={s.block_content} >
                  <div className={s.title_container} >
                    <h2 className={s.title} >
                      Преимущества
                      </h2>
                  </div>
                  <InfoBlock
                    src={'/3d-printing/Eken H9R Action Camera Power Bank by jpnurro-min.jpg'}
                    style={'style_2'}
                    list={true}
                    additClass={s.style_2_printing}
                    listData={[
                      {
                        title: `Размер не так важен`,
                        subtitle: `Производство с технологией FDM позволяет печатать на принтере любые сложные детали малых и больших габаритов (детали, размеры которых превосходят габариты рабочей зоны принтера, можно моделировать по частям, а затем собирать в единое целое).`
                      },
                      {
                        title: `Это лишь заготовка`,
                        subtitle: `Свойства модельных материалов технологии FDM позволяют с легкостью проводить дополнительную обработку моделей: шлифовать, красить, сглаживать и т.д.`
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
            <div className={s.parameters_container} >
              <h4 className={s.priorities_title}>FDM - печать</h4>
              <div className={s.parameters_row} >
                <ParameterCard
                  dataPr={{
                    name: 'Материал',
                    value: 'PLA',
                    parameters: [
                      { name: 'Технология', type: 'text', value: 'FDM' },
                      { name: 'Точность', type: 'text', value: '50 mkm' },
                      { name: 'Детализация', type: 'score', value: 5 },
                      { name: 'Прочность', type: 'score', value: 5 },
                      { name: 'Цена', type: 'text', value: 'от 10 ₽' },
                      { name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней' },
                    ]
                  }}
                />
                <ParameterCard
                  dataPr={{
                    name: 'Материал',
                    value: 'SBS',
                    parameters: [
                      { name: 'Технология', type: 'text', value: 'FDM' },
                      { name: 'Точность', type: 'text', value: '50 mkm' },
                      { name: 'Детализация', type: 'score', value: 4 },
                      { name: 'Прочность', type: 'score', value: 5 },
                      { name: 'Цена', type: 'text', value: 'от 10 ₽' },
                      { name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней' },
                    ]
                  }}
                />
              </div>
              <h4 className={s.priorities_title}>SLA - печать</h4>
              <div className={s.parameters_row}>
                <ParameterCard
                  dataPr={{
                    name: 'Материал',
                    value: 'Фотополимер',
                    parameters: [
                      { name: 'Технология', type: 'text', value: 'SLA' },
                      { name: 'Точность', type: 'text', value: 'от 1 mkm' },
                      { name: 'Детализация', type: 'score', value: 5 },
                      { name: 'Прочность', type: 'score', value: 5 },
                      { name: 'Цена', type: 'text', value: 'от 85 ₽' },
                      { name: 'Срок изготовления', type: 'text', value: 'от 1 до 3 дней' },
                      { name: 'Область печати (мм)', type: 'text', value: '192-120-245' },
                    ]
                  }}
                />
              </div>
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
              src: '/3d-printing/photo_2021-01-30_03-07-51-min.jpg',
              name: 'Миниатюрный Сити-холл Сан-Франциско'
            },
            {
              id: 'id_2',
              position: 2,
              src: '/3d-printing/Eken H9R Action Camera Power Bank by jpnurro-min.jpg',
              name: 'Зарядка для камеры Eken H9R'
            },
            {
              id: 'id_3',
              position: 3,
              src: '/3d-printing/Крепление для шагового двигателя-min.jpg',
              name: 'Крепление для шагового двигателя'
            },
            {
              id: 'id_4',
              position: 4,
              src: '/3d-printing/Пропелер-min.jpg',
              name: 'Лодочный винт'
            },
            {
              id: 'id_5',
              position: 5,
              src: '/3d-printing/Подставка-min.jpg',
              name: 'Подставка для телефона(планшета)'
            },]} />
          </div>
        </div>

        {/*          <div className={s.section_item} >
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
           */}
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

export default PrintingPage