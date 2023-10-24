"use client"

// import JotformEmbed from 'react-jotform-embed'
import classNames from 'classnames'
import { useState } from 'react'
import Link from 'next/link'
import JotformEmbed from '@ui/components/custom/Jotform'
import { Tabs, TabsList, TabsTrigger } from '@ui/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { Badge } from '@ui/components/ui/badge'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@ui/components/ui/select'
import styles from './page.module.css'

export default function About() {
    const [selected, setSelected] = useState("web")

    return <div className={styles.page}>
        <div className={styles.header}>
            <p className={styles.title}>Services</p>
            <div className={styles.services_picker}>
                <p>/</p>
                <Select onValueChange={setSelected}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Web Services" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="web">Web Services</SelectItem>
                        <SelectItem value="smma">Social Media Marketing (SMMA)</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>

        {selected === "web" ? <WebServicesPage/> : <SMMAPage/>}
    </div>
}

function WebServicesPage() {
    return <Tabs defaultValue="monthly">
    <div className={styles.wrapper}>
    <Link
              href="/get-started"
              className={styles.link}
            >
              Get Started

            </Link>
        <div className={styles.tabs}>
            <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">Annually</TabsTrigger>
            </TabsList>
        </div>

        <TabsContent value="monthly">
            <div className={styles.plans}>
                <Plan title="Startup" type="month" pricing="$15" aside='One-time website design & development fee of $150' offerings={{"2 Page Website": ["Landing Page", "Product / Service Page"], "3 Stock Photos (max)": null, "1 Update per month": null, "Unlimited personal assets": null, "Free subdomain provided": null }} />
                <Plan title="Premium" type="month" pricing="$50" aside='Everything in Startup, plus waived one-time fees and more' offerings={{"4 Page Interactive Website": ["Landing Page", "Product / Service Page", "About / Why Us Page", "Contact Page",], "Site Design": null, "Personal Subdomain": null, "Unlimited Updates": null, "Site Development": null, "Interactive Info Corners": null, "Unlimited stock assets": null, "Unlimited personal assets": null }} />
            </div>
        </TabsContent>
        <TabsContent value="annually">
            <div className={styles.plans}>
                <Plan title="Startup" type="year" pricing="$120" discount='17%' aside='One-time website design & development fee of $150' offerings={{"2 Page Website": ["Landing Page", "Product / Service Page"], "3 Stock Photos (max)": null, "1 Update per month": null, "Unlimited personal assets": null, "Free subdomain provided": null }} />
                <Plan title="Premium" type="year" pricing="$500" discount='17%' aside='Everything in Startup, plus waived one-time fees and more' offerings={{"4 Page Interactive Website": ["Landing Page", "Product / Service Page", "About / Why Us Page", "Contact Page",], "Site Design": null, "Personal Subdomain": null, "Unlimited Updates": null, "Site Development": null, "Interactive Info Corners": null, "Unlimited stcok assets": null, "Unlimited personal assets": null }} />
            </div>
        </TabsContent>
    </div>
</Tabs>
}

interface PlanProps {
    title: string
    type: string
    pricing: string
    discount?: string
    aside: string
    offerings: Record<string, string[] | null | undefined>
}
function Plan({ title, type, pricing, discount, aside, offerings }: PlanProps) {
    const offeringsElements = Object.keys(offerings).flatMap(offering => {
        const elements = [<li key={offering}><Check /> {offering}</li>];
        const subGroup = offerings[offering];
        if (subGroup) {
            elements.push(...subGroup.map(subOffering => {
                return <li key={`${offering}-${subOffering}`} className={styles.indent}><Check /> {subOffering}</li>
            }))
        }
        return elements
    });
    
    return <div className={styles.plan}>
        <div className={styles.info}>
            <p className={classNames(styles.title, styles.small)}>{title}</p>
            <p><span className={classNames(styles.title, styles.medium)}>{pricing}</span> / {type}</p>
            <div>
                {Boolean(discount) && <Badge variant="outline" className={styles.badge}>{discount} discount</Badge>}
            </div>
            <p>{aside}</p>
        </div>

        <ul className={styles.offerings}>
            {offeringsElements}
        </ul>
    </div>
}

function Check() {
    return <svg data-testid="geist-icon" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" style={{ display: "inline-block", color: "black", width: "20px", height: "20px" }}>
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="rgb(86, 180, 170)" stroke="rgb(86, 180, 170)"/>
        <path d="M8 11.8571L10.5 14.3572L15.8572 9" fill="none" stroke="var(--geist-stroke)"/>
    </svg>
}

function SMMAPage() {
    return <div className={styles.wrapper}>
        {/* <div>
            <p className={classNames(styles.title, styles.medium)}>SMMA</p>
            <p>/ (Social Media Marketing Agency)</p>
        </div> */}


        <div className={styles.content}>
            <p className={`${styles.title} ${styles.medium}`}><span>Grow</span> your business with our Social Media Marketing team!</p>
            {/* <Image
                className={styles.asset}
                src="/images/customer/services/asset1.png"
                alt="Completed Project 1"
                width={1447}
                height={1258}
                priority
                /> */}

            {/* <Button label='Coming Soon' /> */}

            {/* <JotformEmbed src="https://form.jotform.com/232607829705159" className={styles.form} /> */}
            <JotformEmbed formURL="https://form.jotform.com/232607829705159" autoResize/>
        </div>

    </div>
}