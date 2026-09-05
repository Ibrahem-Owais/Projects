import React, { useEffect, useState } from 'react';
import { useLoading } from '../../context/LoadingContext';
import HeroCarousel from '../HeroCarousel/HeroCarousel'
import Deals from '../Deals/Deals';
import BestSeller from '../BestSeller/BestSeller';

export default function Home() {
    const { setIsLoading } = useLoading();
    const [data, setData] = useState([]);

    useEffect(() => {
        // TO SHOW THE LODER WHEN LOADING START 
        setIsLoading(true);

        // API REQUEST 
        fetch('https://api.example.com/data')
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((err) => console.error(err))
            .finally(() => {
                // TO END THE LOADER 
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div className="container my-4">
                <HeroCarousel />
                <hr />
                <Deals />
                <hr />
                <BestSeller />
            </div>
        </>
    );
}