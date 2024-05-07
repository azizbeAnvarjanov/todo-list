import { FormEvent, FC, useState } from 'react'

// todo type
import { Todo } from '../models/Todo';


// icons
import { MdClose } from 'react-icons/md';
import useStore from '../../store/useStore';


// props
type EditTodoFormProps = {
    setOpenEditForm: (value: boolean) => void;
    openEditForm: boolean;
    editingItem: Todo;
    setEditingItem: (value: Todo) => void;
    upDateTodo: (e: FormEvent, id: number) => void;
}



const EditTodoForm: FC<EditTodoFormProps> = (
        { 
            editingItem, 
            setEditingItem, 
            upDateTodo,
        }
    ) => {

        const {editTodoId,  openForm, setOpenForm} = useStore()

    return (
        <div
            className={`add_task_box fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur-md w-full h-full z-50 grid place-items-center transition-all ${openForm === "editForm" ? "active" : ""}`}
        >
            <button
                onClick={() => setOpenForm("")}
                className="fixed top-[30px] right-[30px] bg-white p-2 text-2xl rounded-md"
            >
                <MdClose />
            </button>

            <div
                className={`from shadow-lg bg-[--body_bg] w-[30%] min-h-[80vh] rounded-lg p-6`}
            >
                <h1>Edit todo</h1>
                <form onSubmit={(e) => upDateTodo(e, editTodoId)} className="mt-3">
                    <div className="flex flex-col mt-2">
                        <label>Title</label>
                        <input
                            value={editingItem.title}
                            onChange={(e) => {
                                setEditingItem({...editingItem, title: e.target.value})
                            }}
                            name='title'
                            type="text"
                            placeholder="Title"
                            className="p-3 mt-2 rounded-md outline-none border-none"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label>Date</label>
                        <input
                            value={editingItem.date}
                            onChange={(e) => {
                                setEditingItem({...editingItem, date: e.target.value})
                            }}
                            name='date'
                            type="date"
                            placeholder="Date"
                            className="p-3 mt-2 rounded-md outline-none border-none"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label>Description</label>
                        <textarea
                            value={editingItem.description}
                            onChange={(e) => {
                                setEditingItem({...editingItem, description: e.target.value})
                            }}
                            name='description'
                            placeholder="Description"
                            className="p-3 mt-2 rounded-md outline-none border-none"
                        />
                    </div>

                    <div className="flex flex-col mt-2">
                        <label>Select a directory</label>
                        <select
                            value={editingItem.directory}
                            onChange={(e) => {
                                setEditingItem({...editingItem, directory: e.target.value})
                            }}
                            name='directory'
                            className="outline-none p-3 rounded-lg"
                        >
                            <option>Main</option>
                            <option>Star</option>
                        </select>
                        <button type="submit" className="btn mt-5">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTodoForm