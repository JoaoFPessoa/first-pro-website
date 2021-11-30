import {WhatsAppLogo, Email, Trademark, Subtitle, ContainerServicos, Servicos, ContactTitle, Cellphone, Container, Title, Logotipo} from './style.js'
import LogoImg from '../../img/logotipo.svg'
import Whatsapp from '../../img/Whatsapp.svg'
import { LocationContainer } from './style.js'
import { LocationImg } from './style.js'
import LocationLogo from '../../img/local-two 1.svg'
import { Location } from './style.js'
export default function Footer(){
    return(
        <Container>
            <Logotipo src={LogoImg}/>
            <Title>
            Soluções rápidas e efetivas
            na área de segurança.
            </Title>
            <Trademark>
            PRMA Federal
            © Todos os direitos reservados
            </Trademark>
            <Subtitle>
                Serviços
            </Subtitle>
            <ContainerServicos>
                <Servicos>
                Central de monitoramento
                </Servicos>
                <Servicos>
                Pronta resposta veicular
                </Servicos>
                <Servicos>
                Pronta resposta patrimonial
                </Servicos>
                <Servicos>
                Assistência veicular 24 horas
                </Servicos>
                <Servicos>
                Acompanhamento jurídico
                </Servicos>
                <Servicos>
                Sindicância
                </Servicos>                
            </ContainerServicos>
            <ContactTitle>
                Contato
            </ContactTitle>
            <Cellphone id="contact">
            +55 (11) 4195-0859
            </Cellphone>
            <WhatsAppLogo src={Whatsapp} />
            <Email>
            contato@prmafederal.com.br
            </Email>
            <LocationContainer>
                <LocationImg src={LocationLogo} />
                <Location>
                Alphaville Comercial
                Barueri - SP

                </Location>
            </LocationContainer>
        </Container>
    )
}