"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script'
// import JotformEmbed from 'react-jotform-embed'
import JotformEmbed from '@ui/components/custom/Jotform'

export default function About() {
    return <div className={styles.page}>
        <p className={styles.title}>{"Let's get started!"}</p>
        <div className={styles.content}>
            <div className={styles.asset_wrapper}>
                <Image
                    className={styles.asset}
                    src="/images/customer/logo.png"
                    alt="Completed Project 1"
                    width={983}
                    height={370}
                    priority
                />

            </div>

            {/* <JotformEmbed src="https://form.jotform.com/232608709857165" className={styles.form} /> */}
            <JotformEmbed formURL="https://form.jotform.com/232608709857165" className={styles.form} autoResize />
        </div>
    </div>
}