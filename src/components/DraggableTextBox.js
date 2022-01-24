import { useState } from "react"
import { useDrag } from "react-dnd"

export const DraggableTextBox = () => {

    const [text, setText] = useState('Text here')

    const [data, dragRef] = useDrag(
        () => {
            return data
        },
        []
    )

    return <div ref={dragRef} ><span contentEditable>{text}</span></div>
}