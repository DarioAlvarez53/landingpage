import Grupo from "./assets/grupo.png"

const Nosotros = () => {
    return (
        <>
            <div className="bg-fondo w-screen h-72 mt-16 bg-cover bg-center flex lg:h-[400px]">
                <div className="p-5 lg:px-32 flex flex-col items-left justify-center">
                    <p className="font-bold text-2xl text-white">Construyendo sueños</p>
                    <p className="text-md font-regular text-white">Una sucursal cerca de ti, visitanos</p>
                    <div className="bg-white p-3 mt-3 rounded-xl w-3/5 text-center hover:bg-slate-500 cursor-pointer">
                        <p className="font-semibold">Ver sucursales</p>
                    </div>
                </div>
            </div>
            {/* Quienes somos */}
            <div className="p-5 lg:px-32 flex flex-col items-left justify-center">
                <div className="flex">
                    <img src={Grupo} alt="Grupo Ecohome" />
                </div>
                <div className="">
                    <p className="text-xl font-bold text-primary">¿Quienes somos?</p>
                    <p className="text-regular font-normal mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, odit nihil! Reprehenderit maxime dignissimos praesentium! Saepe nisi ipsam odit labore. Illo natus error deserunt consequuntur quibusdam veniam at, dicta excepturi.</p>
                </div>
            </div>
            <div className="px-5 lg:px-32 flex flex-col">
                {/* Creacion de las cards */}
                <div className="w-scree h-72 bg-slate-500">
                    
                </div>
            </div>
        </>
    )
}

export default Nosotros