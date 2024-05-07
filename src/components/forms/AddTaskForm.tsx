import { FC, ChangeEvent, FormEvent, useState } from 'react'

// todo type
import { Todo } from '../models/Todo';

// icons
import { MdClose } from 'react-icons/md';
import useStore from '../../store/useStore';


// props
type AddTaskFormProps = {
    setOpenAddForm: (value: boolean) => void;
    openAddForm: boolean;
    addTodo: (value: Todo) => void;
}


// add form reseting obect
const initSate = {
    title: "",
    description: "",
    date: "",
    directory: "Main",
}

// new todo type
type newTodoType = {
    title: string,
    description: string,
    date: string,
    directory: string,
}


const AddTaskForm: FC<AddTaskFormProps> = (
        { 
            addTodo 
        }
    ) => {

    const [newTodo, setNewTodo] = useState<newTodoType>(initSate);

    const {openForm, setOpenForm} = useStore()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setNewTodo({
            ...newTodo,
            [name]: value
        });


    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = newTodo.title;
        const description = newTodo.description;
        const date = newTodo.date;
        const directory = newTodo.directory;


        if (title && description && date && directory) {
            addTodo({
                title,
                description,
                date,
                directory,
                isComplited: false,
                id: Math.random(),
                saved: false,
            });
            setNewTodo(initSate);
            setOpenForm('');
        }
    }

    return (
        <div
            className={`add_task_box fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur-md w-full h-full z-50 grid place-items-center transition-all ${openForm === "addForm" ? "active" : ''}`}
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
                <h1>Add task</h1>
                <form onSubmit={handleSubmit} className="mt-3">
                    <div className="flex flex-col mt-2">
                        <label>Title</label>
                        <input
                            onChange={handleChange}
                            value={newTodo.title}
                            name='title'
                            type="text"
                            placeholder="Title"
                            className="p-3 mt-2 rounded-md outline-none border-none"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label>Date</label>
                        <input
                            onChange={handleChange}
                            value={newTodo.date}
                            name='date'
                            type="date"
                            placeholder="Title"
                            className="p-3 mt-2 rounded-md outline-none border-none"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label>Description</label>
                        <textarea
                            value={newTodo.description}
                            onChange={handleChange}
                            name='description'
                            placeholder="Title"
                            className="p-3 mt-2 rounded-md outline-none border-none"
                        />
                    </div>

                    <div className="flex flex-col mt-2">
                        <label>Select a directory</label>
                        <select
                            onChange={handleChange}
                            value={newTodo.directory}
                            name='directory'
                            className="outline-none p-3 rounded-lg"
                        >
                            <option>Main</option>
                            <option>Star</option>
                        </select>
                        <button type="submit" className="btn mt-5">
                            Add todo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTaskForm