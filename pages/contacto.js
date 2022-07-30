import Head from 'next/head';
import ContactFormBox from '../components/ContactFormBox';

export default function Contacto() {

    return (
        <>
            <Head>
                <title>Contacto</title>
                <link rel="icon" type="image/png" href="/mmfg-logo.png" />
            </Head>
            <ContactFormBox />
        </>
    );
}
