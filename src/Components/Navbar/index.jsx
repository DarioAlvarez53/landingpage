import Logo from "./assets/Logo.png"
import { Link } from "react-scroll"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {

  //Creando el estado de los iconos al dar click
  const [menu, setMenu] = useState(false)

  //Creando la variable para el cambio de estado
  const handleChange = () => {
    setMenu(!menu)
  }
  
  //En caso de usar algun item del menu se debera de cerrar el menu
  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-3 lg:px-32 px-5 bg-gradient-to-r from-backgorundColor to-primary shadow[0_3px_10px_rgba(0,0,0,0.2)]">
          {/* Logo */}
          <div className=" flex flex-row items-center cursor-pointer">
            <img src={Logo} alt="Logo" className="w-[100px] h-[40px]"/>
          </div>
          {/* Menu de navegacion */}
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="Nosotros" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="group relative inline-block cursor-pointer hover:text-primary"
              onClick={closeMenu}
            >
                Nosotros
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
            </Link>

            <Link to="Marcas" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="group relative inline-block cursor-pointer hover:text-primary"
              onClick={closeMenu}
            >
                Marcas
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
            </Link>

            <Link to="Sucursales" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="group relative inline-block cursor-pointer hover:text-primary"
              onClick={closeMenu}
            >
                Sucursales
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
            </Link>

            <Link to="Vacantes" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="group relative inline-block cursor-pointer hover:text-primary"
              onClick={closeMenu}
            >
                Bolsa de trabajo
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
            </Link>
          </nav>

          {/* Estado de los botones en mobile */}
          <div className="md:hidden flex items-center">
            {/* menu para version mobile */}
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} className="text-white"/>
            ):(
              <AiOutlineMenu size={25} onClick={handleChange} className="text-white"/>
            )}
          </div>

        </div>
        
        {/* Menu deslizante del mobile */}
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-gradient-to-r from-backgorundColor to-primary shadow[0_3px_10px_rgba(0,0,0,0.2)] text-white left-0 top-16 font-semibold text-xl text-center pt-4 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <Link to="Nosotros" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="group relative inline-block cursor-pointer hover:text-primary"
            onClick={closeMenu}
          >
              Nosotros
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
          </Link>

          <Link to="Marcas" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="group relative inline-block cursor-pointer hover:text-primary"
            onClick={closeMenu}
          >
              Marcas
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
          </Link>

          <Link to="Sucursales" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="group relative inline-block cursor-pointer hover:text-primary"
            onClick={closeMenu}
          >
              Sucursales
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
          </Link>

          <Link to="Bolsa-de-trabajo" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="group relative inline-block cursor-pointer hover:text-primary"
            onClick={closeMenu}
          >
              Bolsa de trabajo
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar