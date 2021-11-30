import { Text } from "./style"
import { ModalStyle, Button } from "../ModalButton1/style";
import { useState } from "react";
import ProtectIcon from "./protectIcon"
import Seta4 from "./seta"
import Protect from '../../Modals/Modal4/img/protect 1.svg'
import Car from '../../Modals/Modal4/img/car 3.svg'
import Arrow from '../../Modals/Modal4/img/arrow-left 1.svg'
import Battery from '../../Modals/Modal4/img/battery-working 1.svg'
import Round1 from '../../Modals/Modal4/img/round 1.svg'
import Tool from '../../Modals/Modal4/img/tool 1.svg'
import Water from '../../Modals/Modal4/img/water-level 1.svg'
import Modal4 from "../../Modals/Modal4"
import { Line5, Line6, Line7, Line8, Line9 } from "../../Modals/Modal4/style";


export default function ModalButton4() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
        <Button onClick={openModal}>
        <ModalStyle>
        <Text>
        Assistência veicular 24 horas
        </Text>
        <ProtectIcon />
        <Seta4 />
        <Line5 />
        <Line6 />
        <Line7 />
        <Line8 />
        <Line9 />
        </ModalStyle>
        </Button>
        {showModal && (        <Modal4 showModal={showModal} setShowModal={openModal} 
        modal={{image: Protect, 
            title: 'Assistência veicular 24 horas', 
            subtitle: 'A nossa Central 24 horas, está preparada para atender seus clientes em todo território nacional, do veículo leve ao extra pesado.'
            ,iconList: [
                {name: 'Assitência mecânica e elétrica',
                image: Tool},
                {name: 'Remoção',
                image: Arrow},
                {name: 'Carga de bateria',
                image: Battery},
                {name: 'Troca de pneus',
                image: Round1},
                {name: 'Combustível',
                image: Water},
                {name: 'Veículo reserva',
                image: Car},
                {name: 'MTA - Meio de transporte alternativo',
                image: Car}
            ]}} />)}
        </>

    )
}