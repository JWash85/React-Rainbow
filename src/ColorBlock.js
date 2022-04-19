import React from 'react'

//This component will take a color as props and render the color name in a field of that color.
function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
