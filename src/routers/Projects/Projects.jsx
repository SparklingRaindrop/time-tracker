import { List, ListItem } from '../../components';
import { Controller } from '../../blocks';
import { Modal } from '../../blocks';
import ModalCreateProject from './ModalCreateProject';
import { useOutletContext } from 'react-router-dom';

const test = [
    {
        color: 'red',
        title: 'Project 1',
        id: 1,
        taskTotal: 12,
        onGoingTotal: 8
    }, {
        color: 'pink',
        id: 2,
        title: 'Project 2',
        taskTotal: 12,
        onGoingTotal: 8
    }
]

export default function Projects() {
    const { isOpen, onClose } = useOutletContext();
    return (
        <>
            <List>
                {
                    test.map((item) => (
                        <ListItem
                            key={item.id}
                            values={item}
                            separate
                            extra={<Controller names={['remove', 'edit']} />} />
                    ))
                }
            </List>
            <Modal isOpen={isOpen} content={<ModalCreateProject onClose={onClose} />} />
        </>
    )
}