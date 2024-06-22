const CardMarcas = ({id, nombre, ruta_completa }) => {
  return (
    <div className="flex w-full h-full">
        <img src={ruta_completa} alt={nombre} className="rounded-xl" />
    </div>
  )
}

export default CardMarcas