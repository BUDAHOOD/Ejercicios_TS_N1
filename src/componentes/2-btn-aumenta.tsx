 //Crear un componente botón que al hacer click en él aumente en 1 el valor de un contador. 
 //El valor del contador empieza en 0.
import { FC, useState} from 'react'

export const AumentaCont: FC = () => {
    const [valor, setValor] = useState(0)
    //OnClick llama a la función de asignación al valor y lo incrementa en 1
    return <>
            <label>{valor}</label>
            <button onClick={() => setValor(valor + 1)}>Aumenta</button>
        </>
}
  