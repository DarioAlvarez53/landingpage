const Vacantes = () => {
  return (
    <div className="p-5 lg:px-32 mt-16">
      <div className="text-center">
        <p className="font-bold text-xl text-primary">Bolsa de trabajo</p>
        <p>Estas buscando trabajo, déjanos tus datos</p>
      </div>
      <div className="flex w-screen lg:px-32">
        {/* Formulario */}
        <div className="w-full bg-red-900">
          <form action="" className="py-5">
            <div className="flex flex-col px-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Nombre completo</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col px-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Nombre completo</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col px-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Nombre completo</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col px-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Nombre completo</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col px-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Nombre completo</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4" placeholder="Nombre completo" />
            </div>
          </form>
        </div>
        {/* Imagen de promocion */}
        <div className="bg-primary w-full">

        </div>
      </div>
    </div>
  )
}

export default Vacantes