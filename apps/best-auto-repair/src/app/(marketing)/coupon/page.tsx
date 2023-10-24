import Image from "next/image";

import styles from './index.module.css'
import Link from "next/link";
import classNames from "classnames";

export default function About() {
  return <div className={styles.page}>
    <h1 className={classNames(styles.title, styles.medium)}><i className={styles.back} /> <a href="/">Go Back</a></h1>

    <div className={styles.banner}>
      <div className={styles.header}>
        <h1 className={styles.title}>Show coupon upon arrival</h1>
        <p>*</p>
      </div>
      <p>* Limit 1 per customer</p>
    </div>

    {/* <div> */}
    <Image
      className={styles.coupon}
      src="/images/customer/coupon/coupon.png"
      alt="Best Auto Repair Coupon"
      width={609}
      height={258}
      priority
    />
    {/* </div> */}

    <div className={styles.contact}>
      <div>
        <Image
          className={styles.asset}
          src="/images/customer/coupon/instagram.png"
          alt="Best Auto Repair Instagram Link"
          width={40}
          height={40}
          priority
        />
        <p>@bestautorepairsj</p>
      </div>

      <div>
        <Image
          className={styles.asset}
          src="/images/customer/coupon/facebook.png"
          alt="Completed Project 1"
          width={40}
          height={40}
          priority
        />
        <p>@bestautorepair</p>
      </div>

      <div>
        <Image
          className={styles.asset}
          src="/images/customer/coupon/phone.png"
          alt="Completed Project 1"
          width={40}
          height={40}
          priority
        />
        <p>408-499-6378</p>
      </div>

      <div>
        <Image
          className={styles.asset}
          src="/images/customer/coupon/web.png"
          alt="Completed Project 1"
          width={40}
          height={40}
          priority
        />
        <Link href={"/"}>
          bestautorepair.sjpage.com
        </Link>
      </div>
    </div>
  </div>
}
