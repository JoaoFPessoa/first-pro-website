import { ModalStyle, Button, Text } from "../ModalButton1/style";
import { useState } from "react";
import FileLogo from "./fileIcon"
import Seta6 from "./seta"
import FileFocus from '../../Modals/Modal6/img/file-focus 1.svg'
import Modal6 from "../../Modals/Modal6"
import Seta1 from "../ModalButton1/seta";


export default function ModalButton6() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>

        <ModalStyle>
        <Button  onClick={openModal}>
        <FileLogo />
        <Text >
        Sindicância
        </Text>
        <Seta1 />
        </Button>
        </ModalStyle>

        {showModal && (        <Modal6 showModal={showModal} setShowModal={openModal} 
        modal={{image: FileFocus, 
            title: 'Sindicância', 
            subtitle: 'O Serviço de Sindicância da PRMA visa compilar todos os elementos de um sinistro, com embasamento capaz de orientar qualquer decisão para o ressarcimento de um veículo sinistrado por roubo, furto ou danos. O Relatório é altamente detalhado, assinado por profissionais habilitados e revisado pelo Corpo Jurídico da PRMA FEDERAL.'
}} />)}
        </>

    )
}