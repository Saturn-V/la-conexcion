import styles from './index.module.css'

export interface Props {
    children: any
    // label: string
    // size?: Size
}

export enum Size {
    Large = "large",
    Medium = "medium",
    Small = "small"
}

export default function Card({ children }: Props) {
    // let component: JSX.Element
    // switch (size) {
    //     case Size.Medium:
    //         component = <h2>{label}</h2>
    //         break;
    //     case Size.Small:
    //         component = <h3>{label}</h3>
    //         break;
    //     default:
    //         component = <h1>{label}</h1>
    //         break;
    // }
    return <div className={styles.card}>
        {children}
    </div>
}