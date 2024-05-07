import React, { FC } from 'react'

// icons
import { MdClose } from 'react-icons/md';


// props
type AddDirectoryProps = {
    setOpenDirectoryForm: (value: boolean) => void;
    openDirectoryForm: boolean;
}

const AddDirectoryForm: FC<AddDirectoryProps> = (
    {
        setOpenDirectoryForm,
        openDirectoryForm
    }
) => {
    return (
        <div className={`add_directory_box fixed top-0 left-0 w-full h-full backdrop-blur-md bg-black bg-opacity-50 z-50 grid place-items-center ${openDirectoryForm && "active"}`}>

            <button onClick={() => setOpenDirectoryForm(false)} className="fixed top-[30px] right-[30px] bg-white p-2 text-2xl rounded-md">
                <MdClose />
            </button>

            <div className={`directpry_from shadow-lg bg-[--body_bg] w-[30%] min-h-[20vh] rounded-lg p-6 `}>
                <h1 className='font-medium text-2xl text-center'>Add directory</h1>
                <form className="mt-3">
                    <div className="flex flex-col mt-2">
                        <label>Directory name</label>
                        <input
                            type="text"
                            placeholder="Directory"
                            className="p-3 mt-2 rounded-md outline-none border-none"
                        />
                    </div>
                    <button className="btn mt-5 w-full">Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddDirectoryForm