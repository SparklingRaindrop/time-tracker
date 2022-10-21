import { useState } from 'react'

export default function useToggleModal() {
    const [isOpen, setIsOpen] = useState(false);
    // Data can be shared to the modal
    const [data, setData] = useState(null);

    // Do not pass this function directly in onClick
    function onOpen(data) {
        setData(data);
        setIsOpen(true);
    }

    function onClose() {
        setData(null);
        setIsOpen(false);
    }

    return {
        isOpen,
        onClose,
        onOpen,
        data
    }
}