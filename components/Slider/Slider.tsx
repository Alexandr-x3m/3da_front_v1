import { useEffect, useState } from 'react'
import Image from 'next/image'

import s from './Slider.module.sass'
import { SliderProps } from '../../interfaces/interfaces'
import { PositionMTouch } from '../../interfaces/interfaces'

const Slider: React.FC<SliderProps> = (props) => {

    const {
        data,
        thumbnail,
        swiper,
        additClass,
        autoSwipe
    } = props;

    const [activeSlide, setActiveSlide] = useState<number>(0);

    const [thumbnailsView, setThumbnailView] = useState<boolean>(thumbnail);
    const [sliderSwiper, setSliderSwiper] = useState<boolean>(swiper);

    const [autoSwipeS, setAutoSwipeS] = useState<boolean>(autoSwipe ? autoSwipe : false);
    const [touch, setTouch] = useState<boolean>(false);
    const [positionMTouch, setPositionMTouch] = useState<PositionMTouch>({ downX: 0, downY: 0, upX: 0, upY: 0 })


    const handleSwipeLeft = () => {
        let newSlide = activeSlide - 1
        if (newSlide < 0) {
            newSlide = data.length - 1
            setActiveSlide(newSlide)
        } else {
            setActiveSlide(newSlide)
        }
    }

    const handleSwipeRight = () => {
        let newSlide = activeSlide + 1
        if (newSlide >= data.length) {
            newSlide = 0
            setActiveSlide(newSlide)
        } else {
            setActiveSlide(newSlide)
        }
    }

    useEffect(() => {
        if (autoSwipeS) {
            setTimeout(() => {
                handleSwipeRight()
            }, 5000)
        } else {
            setAutoSwipeS(false)
            setTimeout(() => {
                setAutoSwipeS(true)
            }, 5000)
        }
    }, [autoSwipeS])


    useEffect(() => {
        if (touch) {
            if (positionMTouch.downX !== positionMTouch.upX || positionMTouch.downY !== positionMTouch.upY) {
                let x = positionMTouch.downX - positionMTouch.upX
                let y = positionMTouch.downY - positionMTouch.upY

                if (x > 50 && (y < 100 || y > -100)) {
                    handleSwipeRight()
                    setAutoSwipeS(false)
                }
                if (x < -50 && (y < 100 || y > -100)) {
                    handleSwipeLeft()
                    setAutoSwipeS(false)
                }
            }
        }
    }, [positionMTouch, touch])

    const handleTouchStart = (el: any) => {
        if (!touch) {
            setPositionMTouch({
                ...positionMTouch,
                downX: el.changedTouches[0].clientX,
                downY: el.changedTouches[0].clientY
            })
            setTouch(true)
        }
    }

    const handleTouchEnd = (el: any) => {
        setPositionMTouch({
            ...positionMTouch,
            upX: el.changedTouches[0].clientX,
            upY: el.changedTouches[0].clientY
        })
        setTouch(false)
    }


    return (
        <div
            className={additClass}
            style={{ height: 'inherit' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className={s.slider_container}
                style={{
                    left: `-${activeSlide}00%`,
                    gridTemplateColumns: `repeat(${data.length}, 100%)`,
                }}
            >
                {data.map((el, index) => (
                    <div key={`slide_${index}`}  className={s.sliderMain__itemBlock} >
                        <div className={s.text_block} >
                            {el.desc
                                ? (<span className={s.description} >
                                    {el.desc}
                                </span>)
                                : null
                            }
                            {el.title 
                                ? (<h2 className={s.title} >
                                    {el.title}
                                </h2>)
                                : null
                            }
                            
                            {/* <div className={s.textBlock_btn} >
                                <Link href={el.url}>
                                    <a>
                                        <InputButton
                                            value={'Узнать больше'}
                                            additClass={s.servicePreview__btn}
                                        />
                                    </a>
                                </Link>
                            </div> */}
                        </div>
                        <div className={s.sliderMain__imgBlock} >
                            <img src={el.img} className={s.slider__mainImg} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={s.sliderMain__infoBlock} >
                {sliderSwiper ? (
                    <div
                        className={s.swiper_nav}
                    >
                        {data.map((el, index) => (
                            <div key={`swiper_nav_${index}`} className={(activeSlide == index) ? (s.swiperNav__activeItem) : (s.swiperNav__item)} >
                                <button onClick={() => setActiveSlide(index)} >
                                    {el.title}
                                </button>
                            </div>
                        ))}
                    </div>
                ) : null}
                <div className={s.sliderMain_swiperBtns} >
                    <button className={s.swiperBtns__button} onClick={handleSwipeLeft} >
                        <Image src="/arrow-left-r.svg" width={20} height={20} />
                    </button>
                    <button className={s.swiperBtns__button} onClick={handleSwipeRight} >
                        <Image src="/arrow-right-r.svg" width={20} height={20} />
                    </button>
                </div>
            </div>
            {thumbnailsView ? (
                <div className={s.slider__thumbnail_block} >
                    <div className={s.slider__thumbnail_background} ></div>
                    {data.map((el, index) => (
                        <button
                            key={`thumbnail_${index}`}
                            onClick={() => setActiveSlide(index)}
                            className={s.slider__thumbnail_item + ' ' + (index == activeSlide ? s.slider__thumbnail_activeItem : null)}
                        >
                            <img src={el.img} />
                        </button>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default Slider;