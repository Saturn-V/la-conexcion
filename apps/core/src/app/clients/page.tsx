"use client"

import Image from 'next/image'
import Card from '@ui/components/custom/Card'
import classNames from 'classnames'
import { Tabs, TabsList, TabsTrigger } from '@ui/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { Badge } from '@ui/components/ui/badge'
import styles from './page.module.css'

export default function About() {
    return <div className={styles.page}>
        <ClientCard name="Hustle Art" plan="Startup" assetPath='hustle-art' />
        <ClientCard name="Best Auto Repair" plan="Premium" assetPath='best-auto-repair' />
    </div>
}

interface ClientCardProps {
    name: string
    plan: string
    assetPath: string
}

function ClientCard({name, plan, assetPath}: ClientCardProps) {
    return <Card>
    <Tabs defaultValue="desktop">
        <div className={styles.header}>
            <p><span className={classNames(styles.title, styles.medium)}>{name}</span> / Visit</p>
            <Badge variant="outline" className={styles.badge}>{plan}</Badge>
            <div className={styles.tabs}>

                <TabsList>
                    <TabsTrigger value="desktop">Dekstop</TabsTrigger>
                    <TabsTrigger value="mobile">Mobile</TabsTrigger>
                </TabsList>
            </div>

        </div>

            <TabsContent value="desktop">
                <Image
                    className={styles.asset}
                    src={`/images/clients/${assetPath}/desktop.png`}
                    alt={`Screenshot of the ${name} Website on Desktop`}
                    width={1080}
                    height={607}
                    priority
                />
            </TabsContent>
            <TabsContent value="mobile">
                <Image
                    className={styles.asset_mobile}
                    src={`/images/clients/${assetPath}/mobile.png`}
                    alt={`Screenshot of the ${name} Website on Mobile`}
                    width={500}
                    height={1080}
                    priority
                />
            </TabsContent>
    </Tabs>
</Card>
}