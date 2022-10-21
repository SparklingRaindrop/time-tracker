import PropTypes from 'prop-types';
import { useContext, useState } from 'react';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Button, InputField } from '../../../components';
import {
    ModalWrapper,
    ModalTitle,
    ModalLabel,
    ModalColors,
    ModalColorSwatch,
    ModalCloseButton,
    ModalHeader,
} from '../../../components';

const colors = [
    '#FF80ED', '#00FFFF', '#FF7373', '#FFD700', '#008080',
    '#BADA55', '#66CDAA', '#FAEBD7', '#C6E2FF', '#8A2BE2'
];

export default function ModalCreateProject(props) {
    const { onClose } = props;
    const [inputValue, setInputValue] = useState({
        name: '',
        color: colors[0]
    });
    const { createProject } = useContext(UserDataContext);

    function handleOnChange(event) {
        setInputValue(prev => ({
            ...prev,
            name: event.target.value
        }));
    }

    function updateSelectedColor(color) {
        setInputValue(prev => ({
            ...prev,
            color,
        }))
    }

    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>Create new project</ModalTitle>
                <ModalCloseButton onClick={onClose} name='close' />
            </ModalHeader>
            <div>
                <ModalLabel>project name</ModalLabel>
                <InputField
                    placeholder='project name'
                    value={inputValue.name}
                    onChange={handleOnChange} />
            </div>
            <ModalColors>
                {colors.map(color => (
                    <ModalColorSwatch
                        key={color}
                        $color={color}
                        $selected={color === inputValue.color}
                        onClick={() => updateSelectedColor(color)} />
                ))}
            </ModalColors>
            <Button label='Create new project' onClick={() => createProject(inputValue)} />
        </ModalWrapper>
    )
}

ModalCreateProject.propTypes = {
    onClose: PropTypes.func.isRequired,
}