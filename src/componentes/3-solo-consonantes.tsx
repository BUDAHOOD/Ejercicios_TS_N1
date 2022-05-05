//3. Crear un componente input que solamente te deje escribir consonantes.
import { FC, useState, useEffect} from 'react'

export const SoloConsonantes: FC = () => {
    const [tecla, setTecla] = useState('')
    

    useEffect(() => {
        const teclaPresionada = (e: KeyboardEvent) => {
            //filtra el valor de la tecla pulsada para que solo permita consonantes en minúscula y mayuscula solamante
            //e.key.length===1 permite filtrar teclas espaciales. Ej. al pulsar Ctrl, el evento captura "Ctrl"
            if(((e.key>='b'&& e.key<='z' && e.key!=='e' && e.key!=='i' && e.key!=='o' && e.key!=='u') ||
            (e.key>='B'&& e.key<='Z' && e.key!=='E' && e.key!=='I' && e.key!=='O' && e.key!=='U')) && e.key.length===1)
            setTecla(tecla + e.key)
            //busca y da foco al input
            document.getElementById('txtConsonantes')?.focus()
        }
        //document.getElementsByName("txtConsonantes")[0].addEventListener('keydown', teclaPresionada);
        document.addEventListener('keydown', teclaPresionada);

        //Esto provoca error al dejar el componente
        //return () => {document.getElementsByName("txtConsonantes")[0].removeEventListener('keydown', teclaPresionada)}

        return () => {document.removeEventListener('keydown', teclaPresionada)}
    }, [tecla])

    //onChange={()=>null} evita error
    return <><input autoFocus onChange={()=>null} type="text" id="txtConsonantes" name="txtConsonantes" value={tecla} /></>
}