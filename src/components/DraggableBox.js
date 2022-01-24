import { useState } from "react"
import clx from 'clsx'
import { useDrag } from "react-dnd"
import { itemTypes } from "../constants"

export const DraggableBox = () => {

    const [text, setText] = useState('Text here')


    const [{  isDragging }, dragRef] = useDrag(
        () => ({
            type: itemTypes.TEXT,
            item: { text },
            collect: (monitor) => {
                return {
                    isDragging: !!monitor.isDragging()
                }
            }
        }),
        []
    )


    return <div className={clx("draggable", { 'opacity-half': isDragging })} ref={dragRef} style={{ background: 'lightgrey', width: '50px', height: '50px' }}></div>
}