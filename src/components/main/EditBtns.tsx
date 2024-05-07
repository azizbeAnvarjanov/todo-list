import { FC, useState } from 'react'


// icons
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";


// antd design modal
import { Modal } from 'antd';
import useStore from '../../store/useStore';



// props
type EditBtnsProps = {
    setOpenEditForm: (value: boolean) => void;
    deleteTodo: (value: number) => void;
    getId: (value: number) => void;
    id: number;
}

const EditBtns: FC<EditBtnsProps> = (
    {
        deleteTodo,
        id,
        getId
    }
) => {

    const { setOpenForm } = useStore()

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false);
        deleteTodo(id);
    };


    const handleCancel = () => {
        setOpen(false);
    };


    const handleEdit = () => {
        setOpenForm("editForm");
        getId(id);
    }


    return (
        <div className='flex items-center'>
            <span onClick={handleEdit} className='w-[30px] h-[30px] bg-cyan-500 flex items-center justify-center rounded-md text-white cursor-pointer mr-2'>
                <MdModeEdit />
            </span>
            <span onClick={showModal} className='w-[30px] h-[30px] bg-red-500 flex items-center justify-center rounded-md text-white cursor-pointer'>
                <FaTrash size={13} />
            </span>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>Delete this todo</p>
            </Modal>

        </div>
    )
}

export default EditBtns