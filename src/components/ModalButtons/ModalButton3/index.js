import { Text } from "./style"
import { ModalStyle, Button } from "../ModalButton1/style";
import { useState } from "react";
import HomeLogo from "./homeIcon"
import Seta3 from "./seta"
import Alarm from '../../Modals/Modal3/img/alarm 1.svg'
import Home from '../../Modals/Modal3/img/home 1.svg'
import Car from '../../Modals/Modal3/img/car 2.svg'
import GoodOne from '../../Modals/Modal3/img/good-one 1.svg'
import Modal3 from "../../Modals/Modal3"


export default function ModalButton3() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
        <Button onClick={openModal}>
        <ModalStyle>
        <Text>
        Pronta resposta patrimonial
        </Text>
        <HomeLogo />
        <Seta3 />
        </ModalStyle>
        </Button>
        {showModal && (        <Modal3 showModal={showModal} setShowModal={openModal} 
        modal={{image: Home, 
            title: 'Pronta resposta matrimonial', 
            subtitle: 'Com objetivo de garantir a segurança do imóvel, a equipe de agentes da PRMA Federal, faz a inspeção para verificar eventuais danos e intrusões buscando garantir a segurança até o término da operação.'
            ,iconList: [
                {name: 'Vistoria de disparos de alarme',
                image: Alarm},
                {name: 'Rondas',
                image: Car},
                {name: 'Preservação',
                image: GoodOne}
            ]}} />)}
        </>

    )
}