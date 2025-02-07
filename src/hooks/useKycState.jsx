import { createContext, useContext, useState } from "react";




const KycContext = createContext();



export const KycStateProvider = ({children}) => {

    const [ kycState, setKycState] = useState(null);

    return (
        <KycContext.Provider value={{ kycState, setKycState}}>
            {children}
        </KycContext.Provider>
    );
}


export const useKycState = () => {
    return useContext(KycContext);
}