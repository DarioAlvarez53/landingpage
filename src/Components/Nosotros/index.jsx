import Grupo from "./assets/grupo.png"
import { Link } from "react-scroll";
import { FaBullseye, FaRegLightbulb, FaRegStar } from "react-icons/fa6";


const Nosotros = () => {
    return (
        <>
            <div className="bg-fondo w-screen h-72 mt-16 bg-cover bg-center flex lg:h-[400px]">
                <div className="p-5 lg:px-32 flex flex-col items-left justify-center">
                    <p className="font-bold text-2xl text-white">Construyendo sueños</p>
                    <p className="text-md font-regular text-white">Una sucursal cerca de ti, visitanos</p>
                    <Link to="Sucursales" spy={true} smooth={true} duration={500}>
                        <div className="bg-white text-primary p-3 mt-3 rounded-xl w-3/5 text-center hover:bg-primary hover:text-white cursor-pointer">
                            <p className="font-semibold">Ver sucursales</p>
                        </div>
                    </Link>
                </div>
            </div>
            {/* Quienes somos */}
            <div className="p-5 lg:px-32 flex flex-col items-left justify-center lg:flex-auto">
                <div className="lg:flex">
                    <div className="flex md:justify-center lg:justify-normal lg:w-1/2 lg:h-full">
                        <img src={Grupo} alt="Grupo Ecohome" className="lg:w-full lg:h-full"/>
                    </div>
                    <div className="flex flex-col lg:w-full lg:mx-4">
                        <p className="text-xl font-bold text-primary">¿Quienes somos?</p>
                        <p className="text-regular font-normal mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, odit nihil! Reprehenderit maxime dignissimos praesentium! Saepe nisi ipsam odit labore. Illo natus error deserunt consequuntur quibusdam veniam at, dicta excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, odit nihil! Reprehenderit maxime dignissimos praesentium! Saepe nisi ipsam odit labore. Illo natus error deserunt consequuntur quibusdam veniam at, dicta excepturi.</p>
                    </div>
                </div>
            </div>
            <div className="px-5 lg:px-32 flex flex-col gap-5 lg:flex-row">
                {/* Creacion de las cards */}
                <div className="h-96 bg-white shadow-xl border border-primary rounded-xl lg:w-1/3 text-primary hover:bg-primary hover:text-white">
                    <div className="flex flex-col justify-center items-center mt-8">
                        <FaBullseye size={125}/>
                        <p className="mt-3 text-2xl font-bold">Nuestra misión</p>
                        <p className="px-5 py-1 text-center lg:text-white">Somos una empresa comprometida con el servicio al cliente, ofreciendo servicios integrales de calidad para satisfacer las necesidades de construccion y remodelacion</p>
                    </div>
                </div>

                <div className="h-96 bg-white shadow-xl border border-primary rounded-xl lg:w-1/3 text-primary lg:hover:bg-primary lg:hover:text-white">
                    <div className="flex flex-col justify-center items-center mt-8">
                        <FaRegLightbulb size={125}/>
                        <p className="mt-3 text-2xl font-bold">Nuestra visión</p>
                        <p className="px-5 py-1 text-center lg:text-white">Permanecer lideres en la venta de materiales para la construcción ofreciendo siempre la mejor asesoría, servicio, precio y calidad, siendo la mejor alternativa en el mercado</p>
                    </div>
                </div>

                <div className="h-96 bg-white shadow-xl border border-primary rounded-xl lg:w-1/3 text-primary hover:bg-primary hover:text-white ">
                    <div className="flex flex-col justify-center items-center mt-8">
                        <FaRegStar size={125}/>
                        <p className="mt-3 text-2xl font-bold">Nuestros valores</p>
                        <p className="px-5 py-1 text-center lg:text-white">
                            Actitud positiva,
                            trabajo en equipo,
                            responsabilidad,
                            honestidad,
                            respeto,
                            mejora continua,
                            perserverancia
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nosotros