"use client"

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import { ResponsiveQuery, useResponsiveQuery } from "ui/hooks/responsive";
import Image from "next/image";
import classNames from "classnames";
import Button, { Size } from "../Button";

const HOME_TAB = 'Home'
enum Tab {
  Home = "/home",
  About = "/about",
  Process = "/process",
  Clients = "/clients",
  Services = "/services",
  GetStarted = "/get-started",
}

export enum LogoPosition {
  Left = "LEFT",
  Top = "TOP"
}
export interface Props {
  tabs: string[]
  logo?: string
  top?: JSX.Element
  left?: JSX.Element
  right?: JSX.Element
}

export default function Navigation({ tabs, logo }: Props) {
  const [toggledState, setToggleState] = useState(false);
  const [activeTab, setActiveTab] = useState<string>();

  const pathname = usePathname()

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.controls}>
          {!!logo && logo === LogoPosition.Left && <Link href={"/"} onClick={() => setActiveTab(Tab.Home)} className={classNames(styles.item)}>
            <Image
              className={styles.logo}
              src="/images/customer/logo.png"
              alt="Completed Project 1"
              width={963}
              height={370}
              priority
            />
          </Link>}

          <div className={styles.collection}>
            {tabs.map(tab => {
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
            {activeTab === Tab.GetStarted && <Link href={"/"} onClick={() => setActiveTab(Tab.Home)} className={classNames(styles.item)}>
              <Image
                className={styles.logo}
                src="/images/social/instagram.png"
                alt="Completed Project 1"
                width={115}
                height={128}
                priority
              />
            </Link>}
            {activeTab === Tab.GetStarted && <Link href={"/"} onClick={() => setActiveTab(Tab.Home)} className={classNames(styles.item)}>
              <Image
                className={styles.logo}
                src="/images/social/facebook.png"
                alt="Completed Project 1"
                width={178}
                height={169}
                priority
              />
            </Link>}
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

            <h1 className={styles.menu} onClick={() => setToggleState(true)}>☰</h1>
          </div>
        </div>
      </nav>

      {toggledState && <div className={styles.gutter}>
        <h1 className={styles.menu} onClick={() => setToggleState(false)}>✕</h1>
        <ul className={styles.list}>
          {tabs.map(tab => {
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
  if (tab === HOME_TAB) return '/'
  return `/${tab.toLowerCase().replace(" ", "-")}`
}