import Image from 'next/image'
import Title from '@ui/components/custom/Title'
import styles from './page.module.css'

const caption1 = "At La Conexcion, we specialize in supporting family-owned businesses facing tech challenges in today's digital landscape. Our team is dedicated to ensuring a smooth transition by creating affordable websites that capture your business's essence and broaden its audience."
const caption2 = "With bilingual capabilities, we foster connections with diverse customers. Let us enhance your online presence and visibility."

export default function About() {
    return <div className={styles.page}>
        
            <div>
                <Title>
                    <>
                    <span>Adapt</span> at an affordable price
                    </>

                </Title>
                <br />
                <p className={styles.text}>{caption1}</p>
                <br />
                <p className={styles.text}>{caption2}</p>
            </div>

            <Image
                className={styles.asset}
                src="/images/customer/about/asset1.png"
                alt="Completed Project 1"
                width={1466}
                height={1173}
                priority
              />
    </div>
}