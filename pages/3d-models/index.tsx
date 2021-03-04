import Head from "next/head"
import { useState, useEffect } from 'react'

import HeaderBlock from "../../components/Header/Header"
import PortfolioPage from "./PortfolioPage"


const Portfolio: React.FC = () => {

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
            onWheel={(e: React.WheelEvent<HTMLDivElement>) => scrollPageHandler(e)}
        >
            <Head>
                <title>3д модели</title>
                <meta charSet='utf-8' />
                <meta name='keywords' content='most famous words' />
                <meta name='description' content='test desc' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <HeaderBlock scroll={scroll} />
                <PortfolioPage />
            </div>
        </div>
    )
}

export default Portfolio;