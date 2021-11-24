import { Text } from "./style"
import { ModalStyle, Button } from "../ModalButton1/style";
import { useState } from "react";
import HomeLogo from "./homeIcon"
import Seta3 from "./seta"
import Alarm from './img/alarm 1.png'
import Home from '../../../img/home 1.png'
import Car from '../../../img/car 2.png'
import GoodOne from './img/good-one 1.png'
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