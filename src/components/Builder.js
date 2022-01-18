import clx from 'clsx'
import styles from './Builder.module.css'

export const Builder = () => {

    return <div>
        <div id='builderArea' className={clx("container", [styles.blankSlate])}>
        </div>

    </div>
}
