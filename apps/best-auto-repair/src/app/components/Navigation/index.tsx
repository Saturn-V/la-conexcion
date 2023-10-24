"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./index.module.css";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import { ResponsiveQuery, useResponsiveQuery } from "@/app/hooks/responsive";
import Image from "next/image";
import classNames from "classnames";
// import IconSVG, { SVGName, SVGSize } from "@/app/foundation/IconSVG";

enum Tab {
  Home = "home",
}

const HOME_TAB = Tab.Home

const TABS = ["Home", "Why Us", "Services", "Contact"];

export default function Navigation() {
  const [toggledState, setToggleState] = useState(false);
  const [activeTab, setActiveTab] = useState<string>();

  const isMobile = useResponsiveQuery(ResponsiveQuery.Mobile)


  const pathname = usePathname()

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  return (
    <>
      <nav className={styles.navigation}>

        <div className={styles.controls}>
          <Link href={"/"} onClick={() => setActiveTab(Tab.Home)} className={styles.home}>
            <Image
              className={styles.logo}
              src="/images/customer/logo.png"
              alt="Completed Project 1"
              width={1026}
              height={92}
              priority
            />
          </Link>

          <div className={styles.collection}>
            {TABS.map(tab => {
              const path = tabToPath(tab)
              return <Link
                key={path}
                href={path}
                className={classNames(styles.item, activeTab === path && styles.active)}
                onClick={() => setActiveTab(path)}
              >
                {tab}
              </Link>
            })}
          </div>

          <div className={styles.right}>
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

          <div className={styles.main}>
            {/* <Link href={"/"} onClick={() => setActiveTab(Tab.Home)} className={classNames(styles.item)}>
              <Image
                className={styles.logo}
                src="/images/customer/logo.png"
                alt="Completed Project 1"
                width={200}
                height={75}
                priority
              />
            </Link> */}

            <p className={styles.menu} onClick={() => setToggleState(true)}>☰</p>
          </div>
        </div>
      </nav>

      {toggledState && <div className={styles.gutter}>
        <h1 className={styles.menu} onClick={() => setToggleState(false)}>✕</h1>
        <ul className={styles.list}>
          {TABS.map(tab => {
            const path = tabToPath(tab)
            return <li key={`${path}-mobile`} className={classNames(styles.item, activeTab === path && styles.active)}>
              <Link
                href={path}
                onClick={() => {
                  setActiveTab(path)
                  setToggleState(false)
                }}
              >
                {tab}
              </Link>
            </li>
          })
          }
        </ul>
      </div>}
    </>
  );
}


function tabToPath(tab: string) {
  if (tab.toLowerCase() === HOME_TAB) return '/'
  return `/${tab.toLowerCase().replace(" ", "-")}`
}