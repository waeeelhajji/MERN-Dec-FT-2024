import React, { useState } from 'react'

const Article = (props) => {

    //! create state variable for this component
    //!       state var name, setter method
    //!          |            |
    //!          v            v
    const [fontDisplay, setFontDisplay] = useState(props.size)
    const { title, size } = props

    const InCreaseSize = () => {
        // console.log(size)
        // size += 1
        console.log("before", fontDisplay)
        setFontDisplay(fontDisplay + 1)
        console.log("after", fontDisplay)



    }
    const DeCreaseSize = () => {
        console.log("----------------")
        setFontDisplay(fontDisplay - 1)


    }


    return (
        <fieldset>
            <button onClick={InCreaseSize} >Increase ➕</button>
            <p>size : {fontDisplay}</p>
            <span style={{ fontSize: fontDisplay + "pt" }}>{title}</span>
            <p></p>
            <button onClick={DeCreaseSize}>decrease ➖</button>
        </fieldset>
    )
}

export default Article