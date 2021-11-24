import { Text } from "./style"
import { ModalStyle, Button } from "../ModalButton1/style";
import { useState } from "react";
import BalanceIcon from "./balanceIcon"
import Seta5 from "./seta"
import Balance from '../../../img/Group 148.png'
import Lock from './img/lock 1.png'
import GoodOne from './img/good-one 1(1).png'
import Addition from './img/file-addition 1.png'
import Eye from './img/eyes 1.png'
import Modal5 from "../../Modals/Modal5"


export default function ModalButton5() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
        <Button onClick={openModal}>
        <ModalStyle>
        <Text>
        Acompanhamento jurídico
        </Text>
        <BalanceIcon />
        <Seta5 />
        </ModalStyle>
        </Button>
        {showModal && (        <Modal5 showModal={showModal} setShowModal={openModal} 
        modal={{image: Balance, 
            title: 'Acompanhamento jurídico', 
            subtitle: 'Contando com Equipe Jurídica especializada no Ramo de Rastreamento e Serviços para Empresas de Monitoramento e Segurança Eletrônica, a PRMA oferece essa estrutura para seus Clientes com atuação em Eventuais Demandas Judiciais, Acompanhamento de Inquérito policial, além de Elaboração de Contratos e Implantação do Processo de Adequação à LGPD'
            ,iconList: [
                {name: 'Atuação em demandas jurídicas',
                image: GoodOne},
                {name: 'Acompanhamento de inquerito policial',
                image: Eye},
                {name: 'Elaboração de contratos',
                image: Addition},
                {name: 'Adequação à LGPD',
                image: Lock}
            ]}} />)}
        </>

    )
}