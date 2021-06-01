import { useState, useEffect } from 'react'
import Head from 'next/head'

import HeaderBlock from '../../components/Header/Header'
import ModelComponent from '../../containers/ModelPage/ModelPage'


const ModelPage: React.FC = () => {

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
        <>
            <Head>
                <title>Добро подаловать в 27 CYPHER</title>
                <meta charSet='utf-8' />
                <meta name='keywords' content='most famous words' />
                <meta name='description' content='test desc' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div onWheel={() => scrollPageHandler()} >
                <HeaderBlock scroll={scroll} />
                <ModelComponent />

            </div>
        </>
    )
}

export default ModelPage;