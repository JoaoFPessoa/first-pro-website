import { ModalStyle, Text, Line3, Button } from "./style"
import Seta1 from './seta'
import Eye1 from './eye'
import Modal1 from '../../Modals/Modal1'
import Eye from '../../../img/Eye.png'
import Battery from '../../Modals/Modal1/img/Battery.png'
import AngryFace from '../../Modals/Modal1/img/AngryFace.png'
import Caution from '../../Modals/Modal1/img/Caution.png'
import Local from '../../Modals/Modal1/img/Local.png'
import FailMessage from '../../Modals/Modal1/img/FailMessage.png'
import PaintedScreen from '../../Modals/Modal1/img/PaintedScreen.png'
import PointOut from '../../Modals/Modal1/img/PointOut.png'
import BaterryCharge from '../../Modals/Modal1/img/BaterryCharge.png'
import Report from '../../Modals/Modal1/img/Report.png'
import { useState } from "react";

export default function ModalButton1() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
        <Button onClick={openModal}>
        <ModalStyle>
        <Text>
        Central de
        monitoramento
        </Text>
        <Eye1 />
        <Seta1 />
        <Line3 />
        </ModalStyle>
        </Button>
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