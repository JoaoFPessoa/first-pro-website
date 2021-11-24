import { ModalStyle, Button } from "../ModalButton1/style"
import {Line4, Text,} from './style'
import Seta2 from './seta'

import Balance from '../../Modals/Modal2/img/balance-two 1.svg'
import Car from '../../Modals/Modal2/img/car 1.svg'
import Focus from '../../Modals/Modal2/img/file-focus 1.svg'
import Refresh from '../../Modals/Modal2/img/refresh 1.svg'

import { useState } from "react";
import Modal2 from "../../Modals/Modal2"
import Car1 from './car'

export default function ModalButton2() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
        <Button onClick={openModal}>
        <ModalStyle>
        <Text>
        Pronta resposta veicular
        </Text>
        <Car1 />
        <Seta2 />
        <Line4 />
        </ModalStyle>
        </Button>
        {showModal && (        <Modal2 showModal={showModal} setShowModal={openModal} 
        modal={{image: Car, 
            title: 'Pronta resposta veicular', 
            subtitle: 'Conta com uma equipe de apoio tático, distribuída em pontos estratégicos da cidade. Nossa tecnologia garante rápida interligação entre nossa central de monitoramento e nossa equipe de prestadores, resultando em uma melhor eficiência em nossas ações de recuperação proveniente de roubo ou furto de veículos e cargas.'
            ,iconList: [
                {name: 'Recuperação em caso de roubo e furto',
                image: Refresh},
                {name: 'Sindicância',
                image: Focus},
                {name: 'Auxílio jurídico',
                image: Balance}
            ]}} />)}
        </>

    )
}