import PropTypes from 'prop-types';
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

import { TagIcon } from './styled';

const test = {
    projectName: 'Project1',
}

export default function ModalCreateTask(props) {
    const { onClose } = props;
    const { projectName } = test;

    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>Create new Task</ModalTitle>
                <ModalCloseButton name='close' onClick={onClose} />
            </ModalHeader>
            <div>
                <ModalLabel>task name</ModalLabel>
                <InputField placeholder='task name' />
            </div>
            <ModalTag><TagIcon name='tag' />{projectName}</ModalTag>
            <Button label='Create new task' onClick={() => console.log('Create new task')} />
        </ModalWrapper>
    )
}

ModalCreateTask.propTypes = {
    onClose: PropTypes.func.isRequired,
}