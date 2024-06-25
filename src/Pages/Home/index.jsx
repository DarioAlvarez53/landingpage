import Footer from '../../Components/Footer'
import Marcas from '../../Components/Marcas'
import Nosotros from '../../Components/Nosotros'
import Sucursales from '../../Components/Sucursales'
import Vacantes from '../../Components/Vacantes'
import Layout from '../../Layouts'

function Home() {
    return (
        <Layout>
            <div id="Nosotros">
                <Nosotros />
            </div>
            <div id='Marcas'>
                <Marcas />
            </div>
            <div id='Sucursales'>
                <Sucursales />
            </div>
            <div id='Bolsa de trabajo'>
                <Vacantes />
            </div>
            <div>
                <Footer />
            </div>
        </Layout>
    )
}

export default Home
