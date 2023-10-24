import Link from 'next/link'
import styles from './index.module.css'

export interface Props {
    label: string
    size?: Size
    href?: string
}

export enum Size {
    Large = "large",
    Medium = "medium",
    Small = "small"
}

export default function Button({ label, size = Size.Large, href }: Props) {
    let component: JSX.Element
    switch (size) {
        case Size.Medium:
            component = <h2>{label}</h2>
            break;
        case Size.Small:
            component = <h3>{label}</h3>
            break;
        default:
            component = <h1>{label}</h1>
            break;
    }

    if (href!!) {
        component = <Link href={href}>
            {component}
        </Link>
    }

    return <div className={styles.button}>
        {component}
    </div>
}