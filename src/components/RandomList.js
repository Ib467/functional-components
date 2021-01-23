import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import FancyParagraph from './FancyParagraph'

const RandomList = ( { title }) => {
    const [items, setItems ] = useState([])

    const handleClick = ()=> {
        const random = Math.floor(
            Math.random() * 99
        )
        setItems([...items, random])
    }
    //componentDidMount
    //useEffect takes a call back function
    //useEffecct only 
    // useEffect(() => {
    //     // console.log('useEffect was called!')
    //     setTimeout(

    //     );

    // }, []);

    return (
        <div>
            <h2>{title} </h2>
            <button onClick={handleClick}> Generate Number </button>
            {items.map((item,i) => (
                <FancyParagraph key={i}>{item}</FancyParagraph>
            ))}
        </div>
    )
}

RandomList.propTypes = {

}

export default RandomList
