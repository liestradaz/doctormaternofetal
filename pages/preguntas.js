import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Faq from '../components/Faq';

export default function Preguntas() {

    return (
        <>
            <Head>
                <title>Preguntas Frecuentes</title>
                <link rel="icon" type="image/png" href="/mmfg-logo.png" />
            </Head>
            <Faq />
        </>
    );
}
