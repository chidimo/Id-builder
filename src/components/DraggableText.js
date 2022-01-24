import { useState } from "react"
import clx from 'clsx'
import { useDrag } from "react-dnd"
import { itemTypes } from "../constants"

export const DraggableText = () => {

    const [text, setText] = useState('Text here')

    const [{ isDragging, data }, dragRef] = useDrag(
        () => ({
            type: itemTypes.TEXT,
            getItem: () => ({ text }),
            collect: (monitor) => {
                return {
                    data: !!monitor.getItem(),
                    isDragging: !!monitor.isDragging()
                }
            }
        }),
        []
    )

    console.log('dragging data', data)

    return <input className={clx("draggable", { 'opacity-half': isDragging })} ref={dragRef} value={text} onChange={e => setText(e.target.value)} />
}