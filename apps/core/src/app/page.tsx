import Button from 'ui/components/custom/Button'
import { Badge } from 'ui/components/ui/badge'
import Title from 'ui/components/custom/Title'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Title>
          <>
            {"The connection to your business's "}<span>success</span>
          </>
        </Title>
        <Badge variant="outline" className={styles.badge}>SE HABLA ESPAÑOL</Badge>
      </div>
      <div className={styles.actions}>
        <Button label='Get Started' href="/get-started" />
      </div>
    </div>
  )
}
