import PropTypes from 'prop-types';
import { Button } from '../../../../components';
import { Wrapper, Title, Input, Label, CloseButton, Header, Tag } from '../../../../blocks';
import { TagIcon } from './styled';

const test = {
    projectName: 'Project1',
}



export default function ModalCreateTask(props) {
    const { onClose } = props;
    const { projectName } = test;

    return (
        <Wrapper>
            <Header>
                <Title>Create new Task</Title>
                <CloseButton name='close' onClick={onClose} />
            </Header>
            <div>
                <Label>task name</Label>
                <Input placeholder='task name' />
            </div>
            <Tag><TagIcon name='tag' />{projectName}</Tag>
            <Button label='Create new task' onClick={() => console.log('Create new task')} />
        </Wrapper>
    )
}

ModalCreateTask.propTypes = {
    onClose: PropTypes.func.isRequired,
}