const Vacantes = () => {
  return (
    <div className="p-5 lg:px-32 mt-16 w-screen">
      <div className="text-center">
        <p className="font-bold text-xl text-primary">Bolsa de trabajo</p>
        <p>Estas buscando trabajo, déjanos tus datos</p>
      </div>
      <div className="flex w- lg:px-32">
        {/* Formulario */}
        <div className="w-full ">
          <form action="" className="py-5 text-center items-center">
            <div className="flex flex-col px-4 mb-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Nombre completo</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4 bg-backgorundColor placeholder:text-center text-center" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col px-4 mb-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Direccion</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4 bg-backgorundColor placeholder:text-center text-center" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col px-4 mb-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Correo electronico</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4 bg-backgorundColor placeholder:text-center text-center" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col px-4 mb-4">
              <label htmlFor="" className="mb-1 font-regular text-lg">Teléfono</label>
              <input type="text" className="h-10 rounded-lg placeholder:p-4 bg-backgorundColor placeholder:text-center text-center" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col px-4 mb-4">
              <button type="submit" className="bg-primary p-2 rounded-xl text-white font-semibold">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Vacantes