import { FC } from 'react'

const Aside: FC = () => {
    return (
        <div className="fixed right-0 top-0 w-[20%] bg-[--sidebar_bg] h-screen p-5">
            <div className="aside_header flex items-center justify-between px-5 py-5">
                <h1 className="font-bold text-2xl">Azizbek</h1>
                <div className="avatar w-[50px] h-[50px] overflow-hidden rounded-[50%] border-2 ">
                    <img
                        className="object-cover w-[100%] h-[100%]"
                        src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="mode_box flex items-center justify-between px-6">
                <h1>Dark mode</h1>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="all_tasks_box mt-4">
                <div className="flex items-center justify-between">
                    <h1>All tasks</h1>
                    <h1>2/3</h1>
                </div>
                <div className="bg-[--body_bg] h-[10px] rounded-2xl overflow-hidden mt-3">
                    <div className="bg-[--purple] w-[40%] h-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Aside