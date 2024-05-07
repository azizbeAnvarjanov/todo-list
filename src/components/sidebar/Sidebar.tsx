import { FC } from 'react'


// antd design menu - directory uchun
import { Menu } from 'antd'
import useStore from '../../store/useStore';




const Sidebar: FC = () => {

    const setOpenDirectoryForm = useStore((state) => state.setOpenDirectoryForm)
    // directory items
    const directoriesItem = [
        {
            label: "Directories",
            key: "directories",
            children: [
                {
                    label: "Main",
                    key: "main"
                },
                {
                    label: "Star",
                    key: "start"
                },
            ],
        },
    ];

    const setOpenForm = useStore((state) => state.setOpenForm)

    return (
        <div className="fixed left-0 top-0 w-[20%] bg-[--sidebar_bg] h-screen p-5">
            <div className="sidebar_header">
                <div className="h-[20vh] flex items-center justify-center flex-col">
                    <h1 className="main_text mb-5">Todo-list</h1>
                    <button className="btn w-full" onClick={() => setOpenForm("addForm")}>Add new task</button>
                </div>
            </div>
            <div>
                <ul>
                    <li className="li">Today's tasks</li>
                    <li className="li" >All tasks</li>
                    <li className="li" >Complited tasks</li>
                    <li className="li" >Uncomplited tasks</li>
                    <hr className="mt-3" />
                    <button
                        onClick={() => setOpenDirectoryForm(true)}
                        className="border-2 border-dashed border-[--border] py-1 px-3 rounded-md hover:text-[--purple] my-2"
                    >
                        + New
                    </button>
                    <Menu
                        className="bg-transparent border-r-none"
                        mode="inline"
                        items={directoriesItem}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Sidebar