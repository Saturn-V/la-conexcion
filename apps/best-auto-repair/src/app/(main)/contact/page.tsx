import Image from 'next/image'
import styles from './index.module.css'
import Button, { Size } from '@/app/components/Button'
import classNames from 'classnames'

export default function Contact() {
  return (
    <div className={styles.page}>
      <p className={classNames(styles.title, styles.medium)}>Your <span>trusted</span> partner for all things automotive - <span>reach</span> us here!</p>
      <div className={styles.content}>
        <div></div>

        <div className={styles.center}>
          <Image
            className={styles.asset}
            src="/images/customer/logo_large.png"
            alt="Best Auto Repair Coupon"
            width={947}
            height={745}
            priority
          />

          <div className={styles.connect}>
            <Image
              // className={styles.asset}
              src="/images/customer/coupon/facebook.png"
              alt="Completed Project 1"
              width={40}
              height={40}
              priority
            />

            <Image
              // className={styles.asset}
              src="/images/customer/coupon/instagram.png"
              alt="Best Auto Repair Instagram Link"
              width={40}
              height={40}
              priority
            />

            <a href="https://www.yelp.com/biz/best-auto-repair-san-jose-2" className={classNames(styles.item)} target="_blank" rel="noreferrer noopener">
              <Image
                className={styles.asset}
                src="/images/customer/navigation/location.png"
                alt="Completed Project 1"
                width={18}
                height={30}
                priority
              />
            </a>
            <a href="tel:+14084996378" className={classNames(styles.item)}>
              <Image
                className={styles.asset}
                src="/images/customer/navigation/phone.png"
                alt="Completed Project 1"
                width={30}
                height={30}
                priority
              />
            </a>
          </div>

          <Button href='/coupon' label="Get $20 off an oil change!" size={Size.Medium} />
        </div>

        <div className={styles.hours}>
          <p className={classNames(styles.title, styles.small)}><span>Operating Hours</span></p>
          <div>
            <p>Monday - Friday</p>
            <p>9 AM - 6 PM</p>
          </div>

          <div>
            <p>Saturday</p>
            <p>9 AM - 2 PM</p>
          </div>

          <div>
            <p>Sunday</p>
            <p>Closed</p>
          </div>
        </div>
      </div>

    </div>
  )
}
