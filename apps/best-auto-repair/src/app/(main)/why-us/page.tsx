import styles from './index.module.css'

export default function WhyUs() {
  return (
      <div className={styles.page}>
        <div className={styles.content}>
          <p className={styles.title}>Why Us</p>
          <div className={styles.text}>
            <p>Best Auto Repair, proudly serving San Jose for <span>over a decade</span>, offers fast, affordable automotive solutions.</p>
            <p>Specializing in both <span>gas and diesel</span> engines for <span>commercial or domestic</span> vehicles, our bilingual staff ensures exceptional service in <span>English and Spanish</span>.</p>
          </div>
        </div>
      </div>
  )
}
