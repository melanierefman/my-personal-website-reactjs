const NavbarComponent = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex item-center z-10">
        <div className="container">
            <div className="flex items-center justify-between relative">
                <div className="px-4">
                    <a href="#home" className="font-bold text-lg text-primary block py-6">MelanieRefman</a>
                </div>
                <div className="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                        <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>

                    <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul className="block lg:flex">
                            <li className="group">
                                <a href="#about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">About</a>
                            </li>
                            <li className="group">
                                <a href="#skills" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Skills</a>
                            </li>
                            <li className="group">
                                <a href="#experience" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Experience</a>
                            </li>
                            <li className="group">
                                <a href="#project" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Project</a>
                            </li>
                            <li className="group">
                                <a href="#contact" className="text-medium text-white px-4 py-2 mx-8 rounded-full flex bg-primary group-hover:bg-indigo-400">Contact Me</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavbarComponent