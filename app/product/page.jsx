'use client'
import React, { useEffect, useState } from 'react'
import BreadCrampp from '../components/product/BreadCrampp'
import ProductDataWrapper from '../components/product/ProductDataWrapper'
import Tabs from '../components/product/Tabs'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import Loading from '../loading'

export default function Product() {
    const searchParams = useSearchParams()
    const [pathId, setPathId] = useState(searchParams.get('id'))
    let [product, setProduct] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        const getHomeData = async () => {
            try {
                const productResponse = await axios.get(`https://loopz-q8.com/api/products/${pathId}`);
                let product = productResponse.data.data;
                setProduct(product)
                setLoading(false)
                console.log(product);

            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getHomeData();

    }, []);
    console.log(pathId);

    return (
        <div className="container home-slider">
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <BreadCrampp data={product} />
                        <ProductDataWrapper product={product} />
                        <Tabs product={product} />
                    </>
                )
            }
        </div>
    )
}