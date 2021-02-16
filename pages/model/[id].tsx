import Head from 'next/head'
import { useRouter } from 'next/router'

import HeaderBlock from '../../components/Header/Header'
import ModelComponent from '../../components/Pages/ModelPage/ModelPage'


const ModelPage: React.FC = () => {

    const info = useRouter()

    console.log(info)

    return (
        <>
            <Head>
                <title>Добро подаловать в 27 CYPHER</title>
                <meta charSet='utf-8' />
                <meta name='keywords' content='most famous words' />
                <meta name='description' content='test desc' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={s.modelPage__container} >
                <HeaderBlock />
                <ModelComponent />

            </div>
        </>
    )
}

export default ModelPage;