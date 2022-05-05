//4. Crear un componente que al pulsar en un botón actualice el título de la página con la fecha de hoy. 
//Hacer uso de useEffect.
import { FC, useState, useEffect} from 'react'
    
export const ActualizaTitulo: FC = () => {
    const [fecha, setFecha] = useState('')
    //Instancia una variabla con la clase Date() para poder obtener la feca
    let date = new Date();
    useEffect(() => {
        //la variable fecha es casteada con formato string para poder asignarla al título del documento 
        document.title = fecha
    }, [fecha])

    //Actualiza el valor de fecha con la fecha que se obtiene de la variable date, esto gatilla la atualización del título
    return <><button onClick={() => setFecha(date.toString())}>Actualiza título</button></>
}