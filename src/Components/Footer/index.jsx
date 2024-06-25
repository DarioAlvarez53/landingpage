import {Link} from 'react-scroll'
import Logo from './assets/Logo.png'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 w-screen bg-primary p-5 lg:px-32">
        <div className="text-white">
          <img src={Logo} alt="" className='mb-3'/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque facere aperiam obcaecati eaque voluptates</p>
        </div>
        <div className='lg:pl-24 mt-3 lg:mt-0'>
          <p className="font-bold text-white text-lg mb-1">Conocenos</p>
            <div className='flex flex-col gap-2'>
              <Link to='Nosotros' spy={true} smooth={true} duration={300}>
                <p className='text-white cursor-pointer'>Nosotros</p>
              </Link>
              <Link to='Marcas' spy={true} smooth={true} duration={300}>
                <p className='text-white cursor-pointer'>Marcas</p>
              </Link>
              <Link to='Sucursales' spy={true} smooth={true} duration={300}>
                <p className='text-white cursor-pointer'>Sucursales</p>
              </Link>
              <Link to='Bolsa de trabajo' spy={true} smooth={true} duration={300}>
                <p className='text-white cursor-pointer'>Bolsa de trabajo</p>
              </Link>
            </div>
          </div>
        <div className='text-white mt-3 lg:mt-0'>
          <p className="font-bold text-lg mb-1">Boletin informativo</p>
          <p>Suscríbete a nuestro boletín informativo para recibir novedades</p>
          <div className='flex'>
            <input type="text" className='w-full rounded-lg p-1 px-4 mt-2' placeholder='Correo electronico' />
          </div>
          <div className='mt-1'>
            <p>Siguenos en:</p>
            <div className='flex gap-5 text-2xl mt-2'>
              <a href=""><FaFacebook /></a>
              <a href=""><FaInstagram /></a>
              <a href=""><FaTiktok /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-scree bg-backgorundColor items-center justify-center flex'>
        <p>©2024 <span className='text-primary'>Ecohome en Movimiento S.A. de C.V.</span></p>
      </div>
    </>
  )
}

export default Footer