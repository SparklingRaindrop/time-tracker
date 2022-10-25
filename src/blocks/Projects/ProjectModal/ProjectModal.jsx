import { useContext, useState } from 'react';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Button, InputField } from '../../../components';
import {
    ModalWrapper,
    ModalTitle,
    ModalColors,
    ModalColorSwatch,
    ModalCloseButton,
    ModalHeader,
} from '../../../components';
import { useOutletContext } from 'react-router-dom';

const colors = [
    '#FF80ED', '#00FFFF', '#FF7373', '#FFD700', '#008080',
    '#BADA55', '#66CDAA', '#FAEBD7', '#C6E2FF', '#8A2BE2'
];

const initValue = {
    name: '',
    color: colors[0]
};

export default function ProjectModal() {
    const { onClose, data } = useOutletContext();
    const [inputValue, setInputValue] = useState(
        data ? {
            name: data.name,
            color: data.color
        } : initValue
    );
    const { createProject, editProject } = useContext(UserDataContext);

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

    async function handleOnClick() {
        let status;
        if (data) {
            const response = await editProject(data.id, inputValue);
            status = response.status;
        } else {
            const response = await createProject(inputValue);
            status = response.status;
        }
        if (status === 201 || status === 200) {
            setInputValue({
                name: '',
                color: colors[0]
            });
        }
    }

    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>{data ? 'Edit' : 'Create'} new project</ModalTitle>
                <ModalCloseButton onClick={onClose} name='close' />
            </ModalHeader>
            <div>
                <label>project name</label>
                <InputField
                    placeholder='project name'
                    value={inputValue.name}
                    onChange={handleOnChange}
                    autoFocus />
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
            <Button label={data ? 'Update project' : 'Create new project'} onClick={handleOnClick} />
        </ModalWrapper>
    )
}