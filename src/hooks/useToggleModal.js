import { useState } from 'react'

export default function useToggleModal() {
    const [isOpen, setIsOpen] = useState(false);
    
    function onOpen() {
        setIsOpen(true);
    }

    function onClose() {
        setIsOpen(false);
    }

  return {
        isOpen,
        onClose,
        onOpen
    }
}