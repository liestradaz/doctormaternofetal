import Head from 'next/head';
import { Container, Text, Heading, UnorderedList, ListItem, Stack } from '@chakra-ui/react'


export default function Avisodeprivacidad() {

    return (
        <>
            <Head>
                <title>Aviso de privacidad</title>
                <link rel="icon" type="image/png" href="/mmfg-logo.png" />
            </Head>
            <Container maxW={"2xl"} textAlign={"justify"} my={6}>
                <Stack spacing={8}> 
                <Heading textAlign={"center"}>Aviso de Privacidad</Heading>
                <Text as='em'>RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES</Text>
                <Text>Dra. María Inés Estrada Solorio (la Dra.) con consultorio en Av. Tepeyac N.º 115 Col. Chapalita, Guadalajara, Jalisco, México; es responsable del tratamiento de sus datos personales conforme a este aviso de privacidad.</Text>
                <Text as='em'>FINALIDAD DEL TRATAMIENTO DE LOS DATOS PERSONALES</Text>
                <Text>Los datos personales en posesión de la Dra. Serán utilizados para:</Text>
                <UnorderedList>
                    <ListItem>Prestación de servicios médico-hospitalarios, incluyendo sin limitar hospitalización, cirugía, estudios diagnósticos, servicios farmacéuticos, dieta y nutrición, así como demás fines relacionados con servicios de salud.</ListItem>
                    <ListItem>Creación, estudio, análisis, actualización y conservación del expediente clínico</ListItem>
                    <ListItem>Facturación y cobranza por servicios</ListItem>
                    <ListItem>Conservación de registros para seguimiento a servicios, prestación de servicios en el futuro y en general para dar seguimiento a cualquier relación contractual.</ListItem>
                </UnorderedList>
                <Text as='em'>DATOS SENSIBLES</Text>
                <Text>La Dra. recabará y tratará datos sensibles, relacionados con el estado de salud, antecedentes e historial clínico, información sobre modo de vida y otros datos necesarios o convenientes para los fines arriba señalados. Los datos personales sensibles serán mantenidos y tratados con estricta seguridad y confidencialidad para fines relacionados con la prestación de servicios de salud y conforme a este aviso de privacidad y legislación, reglamentos y normativa aplicable.</Text>
                <Text>TRANSFERENCIA</Text>
                <Text>Para la prestación de servicios la Dra. puede transferir dentro y fuera del país, los datos personales en su posesión a terceros subcontratados para fines relacionados con los señalados en este aviso de privacidad. Dentro de los terceros a los que se transferirán dichos datos se incluyen sin limitar laboratorios, clínicas, hospitales, centros de investigación, aseguradoras o aquellos que la Dra. considere necesario o conveniente comunicar datos personales.</Text>
                <Text>LIMITACION DE USO Y DIVULGACION DE DATOS PERSONALES</Text>
                <Text>Para limitar el uso de sus datos personales, favor de enviar un correo electrónico a mmfyginecologia@hotmail.com  o notificación por escrito en el que se señale la limitación al uso de sus datos deseada.</Text>
                <Text>MEDIOS PARA EJERCER DERECHOS ARCO (ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICION)</Text>
                <Text>Para tener acceso a los datos personales que la Dra. posee, así como para rectificarlos en caso de que éstos sean inexactos o incompletos, o para cancelarlos u oponerse a su tratamiento para ciertos fines, favor de enviar un correo electrónico a   mmfyginecologia@hotmail.com

                    o notificación por escrito que contenga la siguiente información.</Text>
                <UnorderedList>
                    <ListItem>Nombre del titular</ListItem>
                    <ListItem>Domicilio de titular o dirección de correo electrónico para comunicar respuesta a solicitud</ListItem>
                    <ListItem>Documentos que acrediten identidad o autorización para representarlo en la solicitud</ListItem>
                    <ListItem>Descripción de datos personales sobre los que se pretende ejercer algún derecho ARCO</ListItem>
                    <ListItem>Cualquier otro elemento que permita la localización de los datos personales y atención a la solicitud.</ListItem>
                </UnorderedList>
                <Text as='em'>MEDIOS PARA REVOCAR CONSENTIMIENTO.</Text>
                <Text>En cualquier momento puede solicitar la revocación del consentimiento otorgado a la Dra. para tratar sus datos personales enviando un correo electrónico a mmfyginecologia@hotmail.com o notificación por escrito en la que se detalle claramente los datos respecto de los que revoca su consentimiento.</Text>
                <Text as='em'>NOTIFICACIÓN DE CAMBIOS AL AVISO DE PRIVACIDAD</Text>
                <Text>El presente Aviso de Privacidad podrá ser modificado en cualquier momento para cumplir con actualizaciones legislativas, jurisprudenciales, políticas internas, nuevos requisitos para la prestación de servicios de la Dra. o cualquier otra causa a entera discreción de la Dra. en tal caso, las modificaciones estarán disponibles impresas en el consultorio.</Text>
                <Text fontWeight={500}>DRA MARIA INES ESTRADA SOLORIO</Text>
                <Text fontWeight={500}>GINECOLOGIA Y OBSTETRICIA</Text>
                <Text fontWeight={500}>MEDICINA MATERNO FETAL</Text>
                </Stack>
            </Container>

        </>
    );
}
