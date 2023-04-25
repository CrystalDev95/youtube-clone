import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/contextApi'
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb'
import { FaRegNewspaper } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'
import { BsFire } from 'react-icons/bs'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import {
    MdHomeFilled,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball
} from 'react-icons/md'


const Sidebar = () => {
    const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const menuHandler = (name, type) => {
        console.log(type)
        if (type === "category") {
            setSelectCategories(name)
        } if (type === "home") {
            setSelectCategories(null)
        } if (type === "menu")
        return false;
    }


    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-2xl' />,
            name: "Home",
            type: "home"
        },
        {
            icon: <TbMusic className='text-2xl' />,
            name: "Music",
            type: "category"
        },
        {
            icon: <BsFire className='text-2xl' />,
            name: "Trending",
            type: "category"
        },
        {
            icon: <MdOutlineSportsVolleyball className='text-2xl' />,
            name: "Sports",
            type: "category"
        },
        {
            icon: <RiLightbulbFlashLine className='text-2xl' />,
            name: "Learning",
            type: "category"
        },
        {
            icon: <FaRegNewspaper className='text-2xl' />,
            name: "News",
            type: "category"
        },
        {
            icon: <TbDeviceGamepad2 className='text-2xl' />,
            name: "Gaming",
            type: "category"
        },
        {
            icon: <GiFilmStrip className='text-2xl' />,
            name: "Films",
            type: "category"
        },
    ]

    const helpLinks = [
        {
            icon: <MdSettings className='text-2xl' />,
            name: "Settings",
            type: "menu"
        },
        {
            icon: <MdOutlinedFlag className='text-2xl' />,
            name: "Report History",
            type: "menu"
        },
        {
            icon: <MdOutlineHelpOutline className='text-2xl' />,
            name: "Help",
            type: "menu"
        },
        {
            icon: <MdOutlineFeedback className='text-2xl' />,
            name: "Send Feedback",
            type: "menu"
        },
    ]

    const textLinks = [
        [
            "About",
            "Press",
            "CopyRight",
            "Contact us",
            "Creator",
            "Advertise",
            "Developers",
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safety",
            "How Youtube Works",
            "Test New Features"
        ],
    ];


    return (
        <div className='w-60 bg-white dark:bg-[#09090b] pr-5 overflow-auto pb-8 sidebar py-4 px-3'>
            <ul className="flex flex-col border-b-2 border-gray-700 py-2">
                {
                    mainLinks.map((item) =>
                        <li
                            key={item.name}
                            onClick={() => {
                                menuHandler(item.name, item.type)
                                navigate("/")
                            }}
                            className={`flex flex-col gap-5 text-x px-2 py-3 hover:bg-zinc-800 hover:rounded-xl hover:cursor-pointer 
                            ${selectCategories === item.name ? "bg-zinc-800 rounded-xl" : ""
                                }`}
                        >
                            <a href="#" className='flex items-center gap-5'>
                                {item.icon}
                                <span className='text-sm tracking-wider'>{item.name}</span>
                            </a>
                        </li>
                    )
                }
            </ul>

            <ul className="flex flex-col border-b-2 border-gray-700 py-2">
                {
                    helpLinks.map(({ icon, name, type }) =>
                        <li
                            key={name}
                            action={() => {
                                menuHandler(name, type)
                                navigate("/")
                            }}
                            className='flex gap-5 text-x px-2 py-3 hover:bg-zinc-800 hover:cursor-pointer rounded-xl'
                        >
                            <a href="#" className='flex items-center gap-5'>
                                {icon}
                                <span className='lg:text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                }
            </ul>
            <ul className='flex flex-wrap p-3 text-sm gap-2'>
                {
                    textLinks[0].map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
            <ul className='flex flex-wrap p-3 text-sm gap-2'>
                {
                    textLinks[1].map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Sidebar