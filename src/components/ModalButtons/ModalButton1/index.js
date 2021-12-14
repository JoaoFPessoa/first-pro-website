import { ModalStyle, Text, Line3, Button } from "./style"
import Seta1 from './seta'
import Eye1 from './eye'
import Modal1 from '../../Modals/Modal1'
import Eye from '../../Modals/Modal1/img/eye.svg'
import Battery from '../../Modals/Modal1/img/battery-working 1.svg'
import AngryFace from '../../Modals/Modal1/img/angry-face 1.svg'
import Caution from '../../Modals/Modal1/img/caution 1.svg'
import Local from '../../Modals/Modal1/img/local 1.svg'
import FailMessage from '../../Modals/Modal1/img/message-failed 1.svg'
import PaintedScreen from '../../Modals/Modal1/img/painted-screen 1.svg'
import PointOut from '../../Modals/Modal1/img/point-out 1.svg'
import BaterryCharge from '../../Modals/Modal1/img/battery-charge 1.svg'
import Report from '../../Modals/Modal1/img/report 1.svg'
import { useState } from "react";

export default function ModalButton1() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
        <ModalStyle>
        <Button onClick={openModal}>
        <Eye1 />
        <Text>
        Central de
        monitoramento
        </Text>
        <Seta1 />
        <Line3 />
        </Button>
        </ModalStyle>
        {showModal && (        <Modal1 showModal={showModal} setShowModal={openModal} 
        modal={{image: Eye, 
            title: 'Central de monitoramento', 
            subtitle: 'Acompanhamos os alertas dos eventos gerados na plataforma de monitoramento veicular 24 horas por dia, 7 dias por semana, durante 365 dias do ano.'
            ,iconList: [
                {name: 'Carga de Bateria',
                image: Battery},
                {name: 'Alerta de violação do painel',
                image: Report},
                {name: 'Equipamento sem comunicação',
                image: FailMessage},
                {name: 'Bateria violada',
                image: BaterryCharge},
                {name: 'Alerta de violação do painel',
                image: PaintedScreen},
                {name: 'Saída de cerca não autorizada',
                image: Local},
                {name: 'Acionamento de botão pânico',
                image: PointOut},
                {name: 'Alerta de Jammer',
                image: Caution},
                {name: 'Bloqueio',
                image: AngryFace}
            ]}} />)}
        </>

    )
}