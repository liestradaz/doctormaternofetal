import Head from 'next/head';
import { Wrap, WrapItem } from '@chakra-ui/react'
import Card from '../components/Card';
import atencion from "../public/images/atencion-personalizada.png"
import capacitacion from "../public/images/capacitacion.png"
import seguimiento from "../public/images/seguimiento-caso.png"
import DoctorCard from '../components/DoctorCard';
import draines from "../public/images/dra-ines.jpg"
import grupoimg from "../public/images/grupo.jpg"
import UsColumn from '../components/UsColumn';
import UsBanner from '../components/UsBanner';

export default function Contacto() {

    return (
        <>
            <Head>
                <title>Nosotros</title>
            </Head>
            <UsBanner/>
            <Wrap justify='center' my={10}>
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
            <DoctorCard title={"DRA. MARIA INES ESTRADA SOLORIO"} text={"Médico con especialidad en Ginecología y Obstetricia por la Universidad de Guadalajara, con Junior Fellow en Medicina Materno Fetal por el Hospital Vall d’ Hebron en Barcelona España, Doctorado en Ginecología y Obstetricia por la Universidad Autónoma de Barcelona, certificada por la Fetal Medicine Fundation de Londres Inglaterra, Diplomado en Bariatría Clínica por el Instituto de Bariatría Clínica y Nutrición Metabólica de Jalisco."} image={draines} />
            <DoctorCard title={"“Gozar de buena salud es el mejor motivo para considerarte una persona feliz”"} text={"."} image={grupoimg} />
            <UsColumn />
        </>
    );
}
