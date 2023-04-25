import React, { useState, useContext } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Context } from '../context/contextApi'
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { FallingLines } from 'react-loader-spinner'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { loading, mobileMenu, setMobileMenu } = useContext(Context);
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "searchButton" && searchQuery.length > 0)) {
            navigate(`/searchResult/${searchQuery}`)
        }
    };

    console.log(searchQuery)

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0]

    return (
        <>
            {loading &&
            <span className='flex justify-center'>
                <FallingLines
                    color="#4fa94d"
                    width="50"
                    visible={true}
                    ariaLabel='falling-lines-loading'
                />
                </span>
                }
            <div className="flex justify-between items-center px-5 pt-3 h-14 bg-[#09090b] opacity-95 sticky top-0 z-50">
                <div className="flex gap-8 items-center text-2xl">
                    <div>
                        <GiHamburgerMenu className='text-white' />
                    </div>
                    <Link to="/">
                        <div className="flex gap-1 items-center justify-center">
                            <BsYoutube className='text-red-600 text-3xl' />
                            <span className="text-xl font-medium ">YouTube</span>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <form action="">
                        <div className="flex bg-zinc-900-items-center h-10 md:pl-5 border-solid border-2 border-zinc-800 rounded-full">
                            <div className="flex gap-2 items-center pr-5">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyUp={searchQueryHandler}
                                    className='mx-2 w-50 lg:w-96 bg-[#09090b] border-none focus:outline-none'
                                />
                                <AiOutlineClose className='hidden md:flex text-xl cursor-pointer ' />
                            </div>
                            <button className='h-9 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full'>
                                <AiOutlineSearch className='text-xl' onClick={() => searchQueryHandler("searchButton")} />
                            </button>
                        </div>
                    </form>
                    <div className='hidden md:flex text-xl p-3 bg-zinc-900 rounded-full'>
                        <TiMicrophone />
                    </div>
                </div>
                <div className='flex md:gap-5 text-xl items-center'>
                    <BsCameraVideo className="hidden md:flex" />
                    <IoAppsSharp className="hidden md:flex" />
                    <div className='relative'>
                        <BsBell className="hidden md:flex" />
                        <span className='hidden md:flex absolute bottom-3 left-2 bg-red-800 rounded-full text-xs px-1'>9+</span>
                    </div>
                    <img
                        className="w-8 h-8 m-2 rounded-full"
                        src="https://wallpapers.com/images/hd/animated-girl-freckles-pq088qlgdz4nud2n.jpg"
                        alt="logo" />
                </div>
            </div>
        </>
    )
}

export default Header
