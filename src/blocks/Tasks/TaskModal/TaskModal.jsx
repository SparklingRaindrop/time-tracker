import { useContext, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    ModalWrapper,
    ModalTitle,
    ModalLabel,
    ModalCloseButton,
    ModalHeader,
    ModalTag,
    InputField,
    Button
} from '../../../components';
import { UserDataContext } from '../../../context/UserDataProvider';

import { TagIcon } from './styled';

const initValue = {
    title: ''
};

export default function TaskModal() {
    const { onClose, currentProjectId, data } = useOutletContext();
    const { getProjectTitleByProjectId, createTask, editData } = useContext(UserDataContext);
    const [inputValue, setInputValue] = useState(data ? { title: data.title } : initValue);

    function handleOnChange(event) {
        setInputValue(prev => ({
            ...prev,
            title: event.target.value
        }));
    }

    async function handleClick() {
        let status;
        if (data) {
            const response = await editData(`/tasks/${data.id}`, inputValue);
            status = response.status;
        } else {
            const response = await createTask(currentProjectId, inputValue);
            status = response.status;
        }
        if (status === 201 || status === 200) {
            setInputValue({
                title: ''
            });
        }
    }

    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>{data ? 'Edit' : 'Create'} new Task</ModalTitle>
                <ModalCloseButton name='close' onClick={onClose} />
            </ModalHeader>
            <div>
                <ModalLabel>task name</ModalLabel>
                <InputField placeholder='task name' value={inputValue.title} onChange={handleOnChange} />
            </div>
            <ModalTag><TagIcon name='tag' />{getProjectTitleByProjectId(currentProjectId)}</ModalTag>
            <Button label={data ? 'Update task' : 'Create new task'} onClick={handleClick} />
        </ModalWrapper>
    )
}