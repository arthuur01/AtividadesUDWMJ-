import {usestate} from 'react';

export default function Contador(){
    const [contador, setContador] = usestate (0);

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}