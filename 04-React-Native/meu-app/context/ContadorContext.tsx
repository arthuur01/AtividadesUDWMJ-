import { createContext, useContext, useState, ReactNode } from 'react';
type ContadorContextType = {
    valor: number;
    incrementar: () => void;
    decrementar: () => void;
};

const ContadorContext = createContext<ContadorContextType>({
    valor: 0,
    incrementar: () => {},
    decrementar: () => {}
});

export const ContadorProvider = ({ children }: { children: React.ReactNode }) => {
    const [valor, setValor] = useState(0);

    const incrementar = () => setValor((v) => v + 1);
    const decrementar = () => setValor((v) => v - 1);

    return (
        <ContadorContext.Provider value={{ valor, incrementar, decrementar }}>
            {children}
        </ContadorContext.Provider>
    );
};
export function useContador() {
    const context = useContext(ContadorContext);
    if (!context)
        throw new Error('useContador deve ser usado dentro de ContadorProvider');
return context;
}