import { Text } from "./style"
import { ModalStyle, Button } from "../ModalButton1/style";
import { useState } from "react";
import FileLogo from "./fileIcon"
import Seta6 from "./seta"
import FileFocus from '../../../img/file-focus 1(1).png'
import Modal6 from "../../Modals/Modal6"


export default function ModalButton6() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <>
        <Button onClick={openModal}>
        <ModalStyle>
        <Text>
        Sindicância
        </Text>
        <FileLogo />
        <Seta6 />
        </ModalStyle>
        </Button>
        {showModal && (        <Modal6 showModal={showModal} setShowModal={openModal} 
        modal={{image: FileFocus, 
            title: 'Sindicância', 
            subtitle: 'O Serviço de Sindicância da PRMA visa compilar todos os elementos de um sinistro, com embasamento capaz de orientar qualquer decisão para o ressarcimento de um veículo sinistrado por roubo, furto ou danos. O Relatório é altamente detalhado, assinado por profissionais habilitados e revisado pelo Corpo Jurídico da PRMA FEDERAL.'
}} />)}
        </>

    )
}