import Head from 'next/head';
import { Wrap, WrapItem, Center } from '@chakra-ui/react'
import Card from '../components/Card';
import atencion from "../public/images/atencion-personalizada.png"
import capacitacion from "../public/images/capacitacion.png"
import seguimiento from "../public/images/seguimiento-caso.png"
import DoctorCard from '../components/DoctorCard';

export default function Contacto() {

    return (
        <>
            <Head>
                <title>Nosotros</title>
            </Head>
            <Wrap justify='center'>
                <WrapItem >
                    <Card title={"Atención personalizada"} text={"Nuestra atención siempre estará enfocada en ti y en brindarte la mejor de las atenciones."} image={atencion} />
                </WrapItem>
                <WrapItem>
                    <Card title={"Seguimiento de su caso"} text={"Nos encargamos de llevar el seguimiento adecuado para tu caso y de seguir brindandote el mejor de los servicios."} image={capacitacion} />
                </WrapItem>
                <WrapItem>
                    <Card title={"El mejor equipo"} text={"Trabajamos con el mejor equipo médico y con la mayor precisión para que tu caso sea analizado de la mejor forma posible."} image={seguimiento} />
                </WrapItem>
            </Wrap>
            <DoctorCard />
        </>
    );
}
