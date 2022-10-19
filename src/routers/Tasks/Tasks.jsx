import { useOutletContext } from 'react-router-dom';
import { Controller } from '../../blocks';
import { Modal } from '../../blocks';
import { List, ListItem } from '../../components';
import ModalCreateTask from './blocks/ModalCreateTask';


const tasks = [
    {
        color: 'red',
        title: 'Clean the office',
        log: '00:00:00',
        status: 'pending',
        id: '123'
    }, {
        color: 'red',
        title: 'Clean the office',
        log: '00:00:00',
        status: 'pending',
        id: '456'
    }, {
        color: 'red',
        title: 'Clean the office',
        log: '00:00:00',
        status: 'finished',
        id: '789'
    }
]

export default function Tasks() {
    const { isOpen, onClose } = useOutletContext();

    return (
        <>
            <List>
                {
                    tasks.map(item => (
                        <ListItem
                            key={item.id}
                            values={item}
                            separate
                            extra={<Controller names={['remove', 'edit']} />} />
                    ))
                }
            </List>
            <Modal isOpen={isOpen} content={<ModalCreateTask onClose={onClose} />} />
        </>
    )
}