import { Text } from "./style"
import { ModalStyle, Button } from "../ModalButton1/style";
import { useState } from "react";
import BalanceIcon from "./balanceIcon"
import Seta5 from "./seta"
import Balance2 from '../../Modals/Modal5/img/balance2.svg'
import Lock from '../../Modals/Modal5/img/lock 1.svg'
import GoodOne from '../../Modals/Modal5/img/good-one 1.svg'
import Addition from '../../Modals/Modal5/img/file-addition 1.svg'
import Eye from '../../Modals/Modal5/img/eyes 1.svg'
import Modal5 from "../../Modals/Modal5"


export default function ModalButton5() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
        <ModalStyle>
        <Button onClick={openModal}>
        <BalanceIcon />
        <Text>
        Acompanhamento jurídico
        </Text>
        <Seta5 />
        </Button>
        </ModalStyle>

        {showModal && (        <Modal5 showModal={showModal} setShowModal={openModal} 
        modal={{image: Balance2, 
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