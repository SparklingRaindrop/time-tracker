import PropTypes from 'prop-types';
import { Button, InputField } from '../../../components';
import { Wrapper, Title, Label, Colors, ColorSwatch, CloseButton, Header } from '../../../blocks'

const test = {
    title: 'Create new project'
}

const colors = [
    '#FF80ED', '#00FFFF', '#FF7373', '#FFD700', '#008080',
    '#BADA55', '#66CDAA', '#FAEBD7', '#C6E2FF', '#8A2BE2'
];

export default function ModalCreateProject(props) {
    const { onClose } = props;
    const { title } = test;

    return (
        <Wrapper>
            <Header>
                <Title>{title}</Title>
                <CloseButton onClick={onClose} name='close' />
            </Header>
            <div>
                <Label>project name</Label>
                <InputField placeholder='project name' />
            </div>
            <Colors>
                {colors.map(color => <ColorSwatch key={color} $color={color} />)}
            </Colors>
            <Button label='Create new project' onClick={() => console.log('Create new project')} />
        </Wrapper>
    )
}

ModalCreateProject.propTypes = {
    onClose: PropTypes.func.isRequired,
}