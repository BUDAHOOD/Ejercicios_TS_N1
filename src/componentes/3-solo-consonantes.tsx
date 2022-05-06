//3. Crear un componente input que solamente te deje escribir consonantes.
import { FC, useState, useEffect} from 'react'

export const SoloConsonantes: FC = () => {
    const [palabra, setPalabra] = useState('')
    //Expresión regular solo con consonantes
    const r = /^[bcdfghjklmnñpqrstvwxyz]/;
    useEffect(() => {
        //Por cada modificación en el input se recorre la palabra completa para validar los caracteres que se puedan ingresar        
        for(let i = 0; i<palabra.length; i++){
            let letra = palabra.substring(i, i+1)
            //La letra obtenida se considera en minúscula para comparar con una expresión regular más acotada
            let min = letra.toLowerCase()
            //la letra se compara contra la expresión regular
            if(!r.test(min)){
                //Si la letra no se encuetra dentro se la expresión regular, se quita de la palabra reemplazándola por '' (vacío)
                setPalabra(palabra.replace(letra,''))
            }        
        }
    }, [palabra])

    return <><input autoFocus onChange={(e) => setPalabra(e.target.value)} type="text" id="txtConsonantes" name="txtConsonantes" value={palabra} /></>
}
  
