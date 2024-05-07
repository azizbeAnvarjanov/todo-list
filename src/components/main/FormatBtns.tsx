import { FC } from 'react'


// icons
import { MdFormatListBulleted } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'


// antd design filtering select
import { Select } from 'antd';
import useStore from '../../store/useStore';



const FormatBtns: FC = () => {
        const {filtering, setFiltering} = useStore()
        const handleChange = (value: string) => {
            setFiltering(value);
        };
        
    return (
        <div className="flex items-center justify-between pt-3 pb-10">
            <div className="format_grid mt-4 flex">
                <button
                    className={`mr-2 cursor-pointer`}
                >
                    <MdFormatListBulleted size={25} />
                </button>
                <button
                    className={`cursor-pointer`}
                >
                    <RxDashboard size={23} />
                </button>
            </div>

            <div>
                <Select
                    defaultValue={filtering}
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 'all', label: 'All' },
                        { value: 'complited', label: 'Complited' },
                        { value: 'uncomplited', label: 'Uncomplited' },
                    ]}
                />
            </div>
        </div>
    )
}

export default FormatBtns