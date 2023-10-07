import classNames from 'classnames'
import Button from '@ui/components/custom/Button'
import styles from './page.module.css'

export default function About() {
    return <div className={styles.page}>
        <div className={styles.actions}>
            <p className={styles.title}>4 Easy <span>Steps</span></p>
            <Button label='See Plans' href='/services' />
        </div>

        <div className={styles.content}>
            <Step step="1" title="Enroll" description="We work with a limited number of companies to ensure top-quality results. Get started with us today by completing our enrollment form and telling us a bit about yourself." />
            <Step step="2" title="Onboarding" description="Once approved, one of our agents will call you and finalize any missing details, explain the rest of the process and answer any questions." />
            <Step step="3" title="Development" description="Here is where the fun begins! One of our talented developers will begin building your website based on the information and details you provided." />
            <Step step="4" title="Launch" description="After reviewing and approving the prototype, your site will launch!" />
        </div>
    </div>
}

interface StepsProps {
    step: string
    title: string
    description: string
}
function Step({step, title, description}: StepsProps) {
    return <div>
        <p className={classNames(styles.title, styles.medium)}><span>{step}</span> {title}</p>
        <div className={styles.divider}/>
        <p>{description}</p>
    </div>
}