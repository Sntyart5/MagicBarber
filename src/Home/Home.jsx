import './Home.css'

export function Home(){
    
    let locales=Array(
        {
            nombre:"Magic Barber LA 30 CON 80",
            direccion:'Cl. 30 #80-122, Belén, Medellín',
            descripcion:"Rotonda de la 80 con la 30 Diagonal a la Estación del MetroPlus La Palma",
            fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/barberia4.jpg?alt=media&token=aaa4a8f6-8699-4186-9880-f2a2a9bebaaa"],
            ubicacion:""
        },
        {
            nombre:"Magic Barber ZONA 2 POBLADO",
            direccion:'Carrera 32 #2 Sur-47',
            descripcion:"Medellín, Colombia Sotano 1 Zona de Parqueaderos",
            fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/barberia2.webp?alt=media&token=69581679-efb8-40b9-89a6-fbe01e6826ca"],
            ubicacion:""
        },
        {
            nombre:"Magic Barber MIXY LOS COLORES",
            direccion:'Cll 55 #79a-42 Lc 0323',
            descripcion:"Mall Mixy Los Colores, Medellín, Colombia",
            fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/barberia3.jpeg?alt=media&token=e22a104d-bc0f-4804-a75e-f41aaf926ee7"],
            ubicacion:""
        }

)
    

    return(
        
        

        <section className=' ubi bg-dark'>


        <div className="text-center text-white"><h1>Ubicacion</h1></div>
        
        <section className="row row-cols-1 row-cols-md-3 g-3 tienda ">

            {
                locales.map(function(local){
                    return(
                        <div key={local.id}>
                            <div className="col">
                                <div className="card bg-dark h-100 shadow text-white ">
                                    <img src={local.fotos} alt="foto" className="img-fluid w-100" />
                                    <div className="txt p-5">

                                    <h3 className="text-center fw-bold">{local.nombre}</h3>
                                    <h4 className="mt-3 text-center"> {local.direccion}</h4>
                                    <h5 className="mt-3 text-center"> {local.descripcion}</h5>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>  
                        
                    )
                })
            }

        </section>

        </section>
    )
}