import {Button, Modal} from 'flowbite-react';
import {useState} from "react";
import Calendar from "react-calendar";
import formatDate from "../../mixins/formatDate";

export default function OpenCalendar({setDate}) {
    const [openModal, setOpenModal] = useState(undefined);
    const props = {openModal, setOpenModal};

    return (
        <>
            <Button onClick={() => props.setOpenModal('default')}>Choose date</Button>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Available dates</Modal.Header>
                <Modal.Body>
                    <Calendar className="dark:text-white text-lg" onChange={e => {
                        console.log(e);
                        setDate(formatDate(e));
                        setOpenModal(undefined);
                    }}/> </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
