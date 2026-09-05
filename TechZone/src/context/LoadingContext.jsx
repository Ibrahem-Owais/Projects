import { createContext, useState, useContext } from 'react';
import Loader from '../component/Loader/Loader';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading && <Loader />}
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);