'use client'
import { useState } from "react"

export default function NavMenu() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const visibility = isVisible ? '-top-1 shadow-md shadow-primary ' : 'top-[-500px]'
    const topBar = isMenuOpen ? 'rotate-45 translate-y-2 bg-primary/60 shadow-sm shadow-primary' : '';
    const botBar = isMenuOpen ? '-rotate-45 -translate-y-2 bg-primary/60 shadow-sm shadow-primary' : '';
    const hideBar = isMenuOpen ? 'hidden -translate-y-2' : '';

    const toggleMenu = () => {
        console.log('clicking toggle menu')
        setIsMenuOpen(!isMenuOpen);
        setIsVisible(!isVisible)
    }

    return (
        <header className="z-[500] fixed w-screen max-w-[1920px] h-50  top-0 left-[50%] -translate-x-[50%] flex flex-col just md:flex-row md:justify-end md:items-center items-end p-2">

            <nav
                id="nav"
                className={`${visibility} p-4 md:px-28 flex md:flex-row flex-col w-full h-[60vh] md:h-max overflow-hidden left-0 justify-between md:items-center gap-6 absolute transition-all bg-dark`}
            >
                <div className="bg-logo bg-cover rounded-lg w-14 h-14 content-center relative">
                    <a
                        href="#hero"
                        className="w-14 h-14 flex"
                    ></a>
                </div>

                <div className="flex md:flex-row flex-col gap-2 h-[60vh] md:h-max">
                    <a
                        href="#hero"
                        className="p-2 font-semibold border border-primary/50 hover:border-secondary/50 hover:shadow-sm hover:shadow-primary rounded-md bg-gradientcolor bg-clip-text text-transparent hover:text-primary backdrop-blur-lg text-center"
                    >Sobre Mí</a>
                    <a
                        href="#about"
                        className="p-2 font-semibold border border-primary/50 hover:border-secondary/50 hover:shadow-sm hover:shadow-primary rounded-md bg-gradientcolor bg-clip-text text-transparent hover:text-primary backdrop-blur-lg text-center"
                    >Mis Pasiones</a>
                    <a
                        href="#game"
                        className="p-2 font-semibold border border-primary/50 hover:border-secondary/50 hover:shadow-sm hover:shadow-primary rounded-md bg-gradientcolor bg-clip-text text-transparent hover:text-primary backdrop-blur-lg text-center"
                    >Juguemos</a>
                </div>
            </nav>
            <button
                type="button"
                onClick={toggleMenu}
                className="w-14 h-14 rounded-full bg-black shadow-inner shadow-primary p-2 py-3 flex flex-col justify-around z-10"
            >
                <div id="topBar" className={`w-full h-1 bg-white rounded-sm transition-all ${topBar}`}>
                </div>
                <div id="botBar" className={`w-full h-1 bg-white rounded-sm transition-all ${botBar}`}>
                </div>
                <div id="hiddenBar" className={`w-full h-1 bg-white rounded-sm transition-all duration-500 ${hideBar}`}>
                </div>
            </button>
        </header>
    )
}