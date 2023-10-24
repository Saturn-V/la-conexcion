import Image from 'next/image'
import styles from './index.module.css'
import Button, { Size } from '@/app/components/Button'

const SERVICES = [
  {
    service: 'Oil Change',
    asset: 'oil.png',
    width: 80,
    height: 32
  },
  {
    service: 'Engine Maintenance & Replacement',
    asset: 'engine-maintenance.png',
    width: 56,
    height: 42
  },
  {
    service: 'Transmission Maintenance & Replacement',
    asset: 'transmission-maintenance.png',
    width: 51,
    height: 51
  },
  {
    service: 'Diagnosis',
    asset: 'diagnosis.png',
    width: 73,
    height: 45
  },
  {
    service: 'Suspension',
    asset: 'suspension.png',
    width: 53,
    height: 62
  },
  {
    service: 'Alignment',
    asset: 'alignment.png',
    width: 110,
    height: 50
  },
  {
    service: 'Tires (new & used)',
    asset: 'tires.png',
    width: 54,
    height: 56
  },
  {
    service: 'Brakes & Rotors',
    asset: 'brakes.png',
    width: 56,
    height: 56
  },
]

export default function Services() {
  return (
    <div className={styles.page}>
      <p className={styles.title}>Services</p>

      <div className={styles.services}>
        {SERVICES.map(({ service, asset, width, height }) => {
          return <div key={service} className={styles.item}>
            <Image
              className={styles.asset}
              src={`/images/customer/services/${asset}`}
              alt="Completed Project 1"
              width={width*1.5}
              height={height*1.5}
              priority
            />

            <p className={styles.subtitle}>{service}</p>
          </div>
        })}
      </div>

      <Button label="Schedule your service" size={Size.Medium} />
    </div>
  )
}
