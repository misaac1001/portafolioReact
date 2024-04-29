import InfoIcon from '@mui/icons-material/Info';

export function SoftSkill() {
  return (
    <section className="container rounded-lg shadow-gray-400/50 mx-auto ">
      <div className="px-5 py-10 mx-auto lg:px-40">
        <div className=" text-lg md:text-xl">
          <h1 className="text-center sm:text-4xl text-3xl font-medium title-font text-white mb-8 flex justify-center gap-x-4 items-center">
            Un poco mas sobre mi
            <InfoIcon style={{ fontSize: "1.5rem", color: "white", paddingBottom:"5px", marginBottom: "10px" }}/> 
          </h1>
          <p className="flex py-4 parrafo-con-sangria">
          Empecé en este mundo, primero con un curso de CoderHouse, donde
            descubri el maravilloso mundo de la programacion. Continue mi
            apredinzaje con otros curso hasta alcanzar mi objetivo como
            programadora FrontEnd. De manera autodidacta diariamente me
            encuentro descubriendo nuevas herramientas que me ayudan a lograr
            una mejor eficiencia como desarrolladora.
            
          </p>
          <p className="flex py-4 parrafo-con-sangria">
          Actualmente me encuentro trabajando como freelance para un cliente
            donde mi cumplo la funcion de codificar lo que pactamos tanto con el
            cliente como con los diseñadores utilizando como frameware principal
            React JS Y Javascript.
            
          </p>
          <p className="flex py-4 parrafo-con-sangria">
          Siempre me gusto tener un conocimiento integral de todo, el proceso
            del proyecto, servidores y el producto final. Soy versatil y poseo
            conocimientos de administración, por lo tanto logro tomar decisiones
            en menos sesgadas en base a mi experiencia.
            
          </p>
        
          </div>
      </div>
  
    </section>
  );
}
