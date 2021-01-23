import React from 'react'
import styles from './FancyParagraph.module.css'

const FancyParagraph = (props) => {
    return ( 
        <div>
            <p className={styles.fancy}></p>
            {props.children}
        </div>
    )
}

export default FancyParagraph
