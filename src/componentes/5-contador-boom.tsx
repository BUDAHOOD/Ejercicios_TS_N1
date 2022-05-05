//5. Crear un componente que tenga un contador que empieza en 10. 
//Cuando pulsas en un botón va restando. 
//Si llega a 0 sale la palabra ¡Boom! y aparece un botón que permite resetear el contador a 10. 
//Si se resetea, la palabra ¡Boom! desaparece.
import { FC, useState, } from 'react'

export const ContadorBoom: FC = () => {
    const [contador, setContador] = useState(10)

    //Permite descontar una unidad al contador
    const restaClick = () => {
        setContador(contador - 1)
    }
    //Permite resetear el contador a 10
    const resetClick = () => {
      setContador(10)
    }
    
    //Controla el valor del contador mientras no sea menor a 0 solo muestra el valor del contador y el botón que decrementa el contador
    //Caso contrario, además de lo anterior, muestra el mensaje "Boom!" y un botón que permite reiniciar el contador y ocultar el mensaje
    const salida = () => {
    if (contador < 1){
      return <>
              <p><label>{contador}</label>
              <button onClick={restaClick}>Resta</button>
              <label>Boom!</label>
              <button onClick={resetClick}>Reset</button></p>
            </>
    }   
    return <>
            <p><label>{contador}</label>
            <button onClick={restaClick}>Resta</button></p>
          </>
    }
    return salida()
  }
 