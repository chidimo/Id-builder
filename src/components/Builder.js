import clx from 'clsx'
import { useDrop } from 'react-dnd'
import { itemTypes } from '../constants'
import styles from './Builder.module.css'

export const Builder = () => {

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: [itemTypes.TEXT, itemTypes.BOX],
        drop: () => console.log('item dropped'),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    }))

    return <div ref={dropRef} id='builderArea' className={clx("container", [styles.builde_area])}>
        {isOver && <div className={clx([styles.builder_overlay])}></div>}
    </div>

}
