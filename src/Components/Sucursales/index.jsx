import CardSucursales from "../CardSucursales"
import data from '../CardSucursales/sucursales.json'

const Sucursales = () => {
  return (
    <div className="p-5 lg:px-32 mt-16">
      <div className="text-center">
        <p className="font-bold text-xl text-primary">Sucursales</p>
        <p>Encuentra tu sucursal mas cercana para brindarte la mejor atencion</p>
      </div>
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3 mt-5">
      {data.map((sucursal) => (
        <CardSucursales 
          key={sucursal.id}
          id={sucursal.id}
          nombre={sucursal.nombre}
          direccion={sucursal.direccion}
          mapa={sucursal.mapa}
          img={sucursal.img}
        />
      ))}
      </div>
    </div>
  )
}

export default Sucursales