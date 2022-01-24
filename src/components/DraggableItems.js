import { DraggableBox } from "./DraggableBox"
import { DraggableText } from "./DraggableText"


export const DraggableItems = () => {


    return <div className='container'>
        <h2>Draggable items</h2>

        <div className="">
            <DraggableText />
            <DraggableBox />
        </div>
    </div>
}