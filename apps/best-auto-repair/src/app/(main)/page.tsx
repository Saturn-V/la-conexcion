import styles from './page.module.css'
import Button, { Size } from '../components/Button'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.title}>Experience the <span>best</span></p>
          <p className={styles.title}>in auto <span>service</span></p>
        </div>

          <Badge label="SE HABLA ESPAÑOL" />

      </div>

      <div className={styles.actions}>
        <Button href='/coupon' label="Get $20 off an oil change" size={Size.Medium} />
      </div>
    </div>
  )
}


interface BadgeProps {
  label: string
}

function Badge({label}: BadgeProps) {
  return <div className={styles.badge}>
    {label}
  </div>
}