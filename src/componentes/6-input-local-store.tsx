//6. Crear un componente que al escribir en un input vaya guardando en [local storage]
//(https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) lo que escribes. 
//Cuando el componente carga debe cargar lo que haya en local storage y rellenar el input con ese contenido.
import { FC, useState,useEffect } from 'react'

export const GuardaLocalStore: FC = () => {
    const [txt, setTxt] = useState(localStorage.getItem("txt")||'')

    useEffect(() => {
        localStorage.setItem("txt", txt);
    }, [txt]);

  return <><input type="text" onChange={(e) => setTxt(e.target.value)} value={txt} /></>
}
