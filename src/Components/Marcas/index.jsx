import CardMarcas from "../CardMarcas"
import data from "../CardMarcas/imagenes.json"

const Marcas = () => {
  return (
    <div className="p-5 lg:px-32 mt-16">
        <div className="text-center">
            <p className="font-bold text-xl text-primary">Nuestras marcas</p>
            <p>Tenemos todos los productos para tus necesidades</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {data.map((marca) => (
          <CardMarcas
            key={marca.id}
            id={marca.id}
            nombre={marca.nombre}
            ruta_completa={marca.ruta_completa}
          />
        ))}
      </div>
    </div>
  )
}

export default Marcas