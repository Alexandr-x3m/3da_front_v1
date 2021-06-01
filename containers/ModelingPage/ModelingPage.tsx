import { Dispatch, RefObject, SetStateAction } from 'react'
import s from '../../styles/Pages/serviceContainer.module.sass'

import HeaderBlock from '../../components/Header/Header'
import ServiceNav from '../../components/ServiceNav/ServiceNav'
import InfoBlock from '../../components/InfoBlock/InfoBlock'
import Slider3D from '../../components/Slider3D/Slider3d'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import Footer from '../../components/Footer/Footer'

interface ModelingPage {
    scroll: number,
    navTop: boolean,
    nav: RefObject<HTMLDivElement>,
    activeSection: string,
    setActiveSection: Dispatch<SetStateAction<ModelingPage["activeSection"]>>,
    container: RefObject<HTMLDivElement>,
    block_1: RefObject<HTMLDivElement>,
    block_2: RefObject<HTMLDivElement>
}

const ModelingPage: React.FC<ModelingPage> = ({ scroll, navTop, nav, activeSection, setActiveSection, container, block_1, block_2 }) => {
    return (
        <div>
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
                        src={'/preview/engineering-preview-min.jpg'}
                        alt="художественное моделирование"
                    />
                </div>
                <div className={s.nav_container + ' ' + (navTop ? s.nav_top : null)} ref={nav} >
                    <ServiceNav
                        data={[
                            { name: 'Художественное', icon: '/icons/color_lens_24px_outlined.svg' },
                            { name: 'Инженерное', icon: '/icons/memory_24px_outlined.svg' },
                            { name: 'Ювелирное', icon: '/icons/diamond_24px_outlined.svg' }]}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />
                </div>

                {/* ----------------------------------- */}
                {activeSection === 'Художественное'
                    ? (<div className={s.section_item} ref={container} >
                        <div className={s.section_item} ref={block_1} >
                            <div className={s.block_content} >
                                <div className={s.title_container} >
                                    <h2 className={s.title} >
                                        Художественное 3D Моделирование
                    </h2>
                                </div>
                                <InfoBlock
                                    src={'/souvenir/asdasdlvf-56438-min.jpg'}
                                    style={'style_1'}
                                    list={false}
                                    description={`Обладая сильными основными художественными навыками, 3D Craft Studio хорошо разбирается в анатомии человека и тонкостях создания 3D-моделей, которые хорошо работают в конечном масштабе и конечном использовании, чтобы эффективно передать художественный замысел вашего проекта. Клиенты с существующими моделями, которые необходимо изменить, могут рассчитывать на то, что мы сохраним важную сущность исходной геометрии, пока мы вносим необходимые изменения. Независимо от того, является ли ваша цель гипер-реальностью или причудливо стилизованным образом, мы можем помочь вам в ее достижении.`}
                                    animation={true}
                                    additClass={s.style_1_modeling}
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
                                    src={'/souvenir/sdasadasd-21544587-min.jpg'}
                                    style={'style_2'}
                                    list={true}
                                    listData={[
                                        {
                                            title: 'ИДЕЯ',
                                            subtitle: `Мы стремимся понять все стили и образы вашей фигуры и помогаем нашим клиентам добавлять новые черты в модель, чтобы обеспечить еще более натуральную проработку деталей.`
                                            //
                                            //subtitle: `Мы стремимся понять все стили вашей фигуры и помогаем нашим клиентам вводить новшества, чтобы обеспечить еще больше тонкостей в стилизации вашей модели.`
                                        },
                                        {
                                            title: `СТАТУИ И ДИОРАМЫ`,
                                            subtitle: `Мы легко переходим от игрушек к предметам коллекционирования и изобразительному искусству, создавая простраство для вашего творчества, забирая на себя всю техническую работу.`
                                        },
                                        {
                                            title: `ДЕТАЛИЗАЦИЯ`,
                                            subtitle: `Наше цифровое моделирование выполняется в средах моделирования с большим количеством полигонов. Наличие миллионов и миллионов полигонов в модели во время строительства позволяет нам создавать мельчайшие детали и делать их идеально читаемыми в окончательном масштабе.`
                                        }
                                    ]}
                                    animation={true}
                                />
                            </div>
                        </div>
                    </div>)
                    : activeSection === 'Инженерное'
                        ? (<div className={s.section_item} ref={container} >
                            <div className={s.section_item} ref={block_1} >
                                <div className={s.block_content} >
                                    <div className={s.title_container} >
                                        <h2 className={s.title} >
                                            Инженерное 3D Моделирование
                      </h2>
                                    </div>
                                    <InfoBlock
                                        src={'/main/yabloko-iphone-chertezh-telefon-min.jpg'}
                                        style={'style_1'}
                                        list={false}
                                        description={`Необходимо получить деталь с высокой точностью в размерах? Мы создаем модели закладывая особенности устройств, на который данная 3D модель будет изготавливаться, будь то фотополимерный принтер или чпу. Размеры и надежность модели, для важные качества!`}
                                        animation={true}
                                    />
                                </div>
                            </div>
                            <div className={s.section_item} ref={block_2} >
                                <div className={s.block_content} >
                                    <div className={s.title_container}>
                                        <h2 className={s.title} >
                                            Важные моменты
                    </h2>
                                    </div>
                                    <InfoBlock
                                        src={'/3d-printing/3d-printing-min.jpg'}
                                        style={'style_2'}
                                        list={true}
                                        listData={[
                                            {
                                                title: 'ТОЧНОСТЬ',
                                                subtitle: `Если у вас есть чертеж, мы следуем размерам указанным в нем. Если у вас нет чертежа, но вы можете сформулировать область примения детали и ее форму, мы вместе с вами создадим прототип и далее готовую деталь.`
                                            },
                                            {
                                                title: `Индивидуальный подбор`,
                                                subtitle: `Правильное расположение модели при печати, выбор разных феломентов или даже цвета феломента, все это адаптируется и меняется для разных задач и условий, которые уготовлены к моделям.`
                                            }
                                        ]}
                                        animation={true}
                                    />
                                </div>
                            </div>
                        </div>)
                        : (<div className={s.section_item} ref={container} >
                            <div className={s.section_item} ref={block_1} >
                                <div className={s.block_content} >
                                    <div className={s.title_container} >
                                        <h2 className={s.title} >
                                            Ювелирное 3D Моделирование
                      </h2>
                                    </div>
                                    <InfoBlock
                                        src={'/jewelry/photo_2021-01-30_04-03-43-min.jpg'}
                                        style={'style_1'}
                                        list={false}
                                        description={`3D-печать провоцирует революцию дизайна в ювелирном деле. Создание 3D-печатных изделий, которые имели бы сравнимый внешний вид с традиционно изготовленными вручную и литыми ювелирными изделиями, раньше было непростой задачей. Однако после последнего раунда достижений в области специализированных высококачественных программ 3D-моделирования и с большим количеством доступных для печати материалов все больше и больше дизайнеров ювелирных изделий теперь предпочитают 3D-модель и печать своих дизайнов традиционным методам ручной работы.`}
                                        animation={true}
                                    />
                                </div>
                            </div>
                            <div className={s.section_item} ref={block_2} >
                                <div className={s.block_content} >
                                    <div className={s.title_container}>
                                        <h2 className={s.title} >
                                            Важные моменты
                    </h2>
                                    </div>
                                    <InfoBlock
                                        src={'/jewelry/4a53201d9a7dc29d89be3b99a14c2483-min.jpg'}
                                        style={'style_2'}
                                        list={true}
                                        listData={[
                                            {
                                                title: 'Готова к отливке',
                                                subtitle: `Вам нужен прототип с поддержками, чтобы изготовить форму для отливки, мы за вас продумаем тонкости будущей модели, а вам останется создать готовое украшение.`
                                            },/* 
                        {
                          title: `Правильное расположение для камней`,
                          subtitle: `Разбираться в драгоценных камнях часть нашей профессии, поэтому разместить поддержки для камней одна из основных задач, которую мы помогаем решить нашим клиентам.`
                        }, */
                                            {
                                                title: `ТЕХНОЛОГИЯ`,
                                                //Взяв вашу идею на стадии зарождения. Правильно ее подготовим, соблюдая идеологию изделия с тонкости ювелирного , чтобы представив ее вам, у вас не осталось сомнения, что перед вами ювелирное украшение.
                                                subtitle: `Взяв вашу идею на стадии зарождения. Понимание идеологии изделия и ювелирного украшения, позволяет нам правильно его подготовить, чтобы представив изделие вам, у вас не осталось сомнения, что перед вами ювелирное украшение.`
                                            }
                                        ]}
                                        animation={true}
                                    />
                                </div>
                            </div>
                        </div>)
                }

                <div className={s.section_item} >
                    <div className={s.block_content} >
                        <div className={s.title_container} >
                            <h2 className={s.title} >Наши Работы</h2>
                        </div>
                        <Slider3D dt={[{
                            id: 'id_1',
                            position: 1,
                            src: '/souvenir/dfsfsdfds1232-min.jpg',
                            name: 'Laba daba dap'
                        },
                        {
                            id: 'id_2',
                            position: 2,
                            src: '/souvenir/dsadasd-12312-min.png',
                            name: 'Riki tiki tai'
                        },
                        {
                            id: 'id_3',
                            position: 3,
                            src: '/souvenir/njniim-67563-min.jpg',
                            name: 'Подвеска "New York"'
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
                            name: 'Подставка'
                        },]} />
                    </div>
                </div>

                {/* <div className={s.section_item} >
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
          </div> */}

                <AttentionLane
                    title={'Давайте воплотим вашу идею'}
                    subtitle={'Отправте свои требования к проекту, мы обработаем заявку и свяжемся с вами в ближайшее время'}
                    btn={true}
                />
                <Footer />
            </div>
        </div >
    )
}

export default ModelingPage;