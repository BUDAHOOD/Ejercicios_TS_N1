//3. Crear un componente input que solamente te deje escribir consonantes.
import { FC, useState, useEffect} from 'react'

export const SoloConsonantes: FC = () => {
    const [palabra, setPalabra] = useState('')
    useEffect(() => {
        //Se obtiene la última letra de la palabra ingresada
        let letra = palabra.substring(palabra.length-1, palabra.length)
        //Se considera la letra en minúscula solo para reducir el universo la expresión regular
        let min = letra.toLowerCase()
        //Expresión regular para solo considerar las consonantes
        const r = /^[bcdfghjklmnñpqrstvwxyz]/;
        //Se aplica expresión regular, cualquier caracter distinto a la expresión regular se quita de la palabra 
        if(!r.test(min)){
            //Si no cumple con la expresión regular se quita la última letra ingresada
            setPalabra(palabra.replace(letra,''))
        }
    }, [palabra])

    return <><input autoFocus onChange={(e) => setPalabra(e.target.value)} type="text" id="txtConsonantes" name="txtConsonantes" value={palabra} /></>
}
