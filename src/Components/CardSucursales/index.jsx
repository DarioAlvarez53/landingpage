import { FaLocationDot } from "react-icons/fa6";

const CardSucursales = ({id, nombre, direccion, mapa, img}) => {
  return (
    <div className="relative w-full h-96 lg:w-full gap-5 ">
      <img src={img} alt={nombre} className="w-full h-full object-cover rounded-xl shadow-xl"/>
      <div className="absolute bottom-0 left-0 w-[calc(100%-2rem)] mx-4 mb-4 bg-white p-4 z-10 rounded-xl lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-500">
        <p className="font-bold text-lg text-primary">{nombre}</p>
        <div className="flex items-center gap-3">
          <FaLocationDot className="text-3xl text-primary"/>
          <p className="text-sm">{direccion}</p>
        </div>
        <div className="bg-primary rounded-xl p-2 text-center mt-4">
          <a className="font-bold text-white" href={mapa}>Ver en maps</a>
        </div>
      </div>
    </div>
  )
}

export default CardSucursales;