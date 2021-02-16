import Head from "next/head"
import HeaderBlock from "../../components/Header/Header"
import PortfolioPage from "./PortfolioPage"


const Portfolio:React.FC = () => {
    return (
        <>
            <Head>
                <title>3д модели</title>
                <meta charSet='utf-8' />
                <meta name='keywords' content='most famous words' />
                <meta name='description' content='test desc' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <HeaderBlock />
                <PortfolioPage />
            </div>
        </>
    )
}

export default Portfolio;