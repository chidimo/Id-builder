import { useDrag } from 'react-dnd'
import { DraggableTextBox } from "./DraggableTextBox"

export const DraggableItems = () => {


    return <div className='container'>
        <h2>Draggable items</h2>

        <div className="">
            <DraggableTextBox />
        </div>
    </div>
}