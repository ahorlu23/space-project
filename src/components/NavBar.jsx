function NavBar() {
    return (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between py-6">

            <img src="logo.svg" alt="Logo" className="pl-5" />

            <div className="border-gray-400 z-50 border -t w-1/2"></div>

            <div className="w-2/3 backdrop-blur-sm bg-white/10 px-10 text-sm flex gap-10 text-gray-300">
                <ul className="flex gap-5">
                    <a href="/"><li className="text-white text-sm py-8 hover:border-b-2">00 HOME</li></a>
                    <a href="/destination"><li className="text-white text-sm py-8 hover:border-b-2">01 DESTINATION</li></a>
                    <a href="/crew"><li className="text-white text-sm py-8 hover:border-b-2">02 CREW</li></a>
                    <a href="/tech"><li className="text-white text-sm py-8 hover:border-b-2">03 TECHNOLOGY</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;