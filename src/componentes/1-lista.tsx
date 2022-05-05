//1. Pintar una lista del 1 al 50.
import {FC, useEffect, useState} from 'react'

export const Lista: FC = () => {
    const [value, setValue] = useState(1)
    const [lista, setLista] = useState<String[]>([])
    
    useEffect(() => {
        if(value<51) {
            //Se obtiene una copia del arreglo y se agrega el nuevo elemento
            setLista(() =>[...lista, value.toString()])
            setValue(value+1)
        }
    }, [value]);
    
    //Se forma la lista, key={x.toString()} permite identificar cada elemento de la lista
    return <><ul>{lista.map(x=>(<li key={x.toString()}>{x}</li>))}</ul></>
}
    
