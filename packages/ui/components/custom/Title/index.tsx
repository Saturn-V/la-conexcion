import styles from "./index.module.css"

export interface Props {
    children: JSX.Element
}

// Use span tags to get colored text
export default function Title({children}: Props) {
    return <p className={styles.title}>{children}</p>
}