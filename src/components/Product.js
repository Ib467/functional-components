import React, { useEffect, useState } from 'react'

export default () => {
    const[product, setProduct] = useState(null);

    useEffect(() => {
        setTimeout(() => setProduct({
            title: 'This is my product',
            brand: "Sony"
        }),
        )

    })

    if(product === null){
        return(
            <div>Loading...</div>
        );
    }

    return(
        <div>
            <h2>{product.title}</h2>
            <h3>{ product.brand} </h3>
        </div>
    )
}
