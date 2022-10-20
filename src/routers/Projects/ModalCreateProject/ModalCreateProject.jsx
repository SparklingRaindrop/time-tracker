import PropTypes from 'prop-types';
import { Button, InputField } from '../../../components';
import { Wrapper, Title, Label, Colors, ColorSwatch, CloseButton, Header } from '../../../blocks'
import { useState } from 'react';

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
        <Wrapper>
            <Header>
                <Title>Create new project</Title>
                <CloseButton onClick={onClose} name='close' />
            </Header>
            <div>
                <Label>project name</Label>
                <InputField
                    placeholder='project name'
                    value={inputValue.name}
                    onChange={handleOnChange} />
            </div>
            <Colors>
                {colors.map(color => (
                    <ColorSwatch
                        key={color}
                        $color={color}
                        $selected={color === inputValue.color}
                        onClick={() => updateSelectedColor(color)} />
                ))}
            </Colors>
            <Button label='Create new project' onClick={() => console.log('Create new project')} />
        </Wrapper>
    )
}

ModalCreateProject.propTypes = {
    onClose: PropTypes.func.isRequired,
}