import {Presentacion} from './secciones/Presentacion';
import {Proyectos} from './secciones/Proyectos';
import {Contenedor} from './componentes/Contenedor';
import {Footer} from './secciones/Footer'

export default function Home() {
  return (
    <Contenedor >
      <Presentacion />
      <Proyectos />
      <Footer />
    </Contenedor >
  );
}
