import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Hauke Tönjes</title>
            </Head>

            <Header/>

            {children}

            <Footer/>
        </div>
    )
}