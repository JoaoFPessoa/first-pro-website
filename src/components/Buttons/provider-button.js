import {PButton} from './styles'
import HireModals from '../HireModals'
import { useState } from 'react';

export function ProviderButton({type = "button" }) {

    const [showHireModal, setShowHireModal] = useState(false);

    const openModal = () => {
        setShowHireModal(prev => !prev);
    }

    return (
        <>
        <PButton type={type} onClick={openModal}>
            Seja um Prestador
        </PButton>
        {showHireModal && <HireModals showHireModal={showHireModal} setShowHireModal={openModal}/>} 
        </>
    )
}