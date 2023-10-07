"use client"

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import { ResponsiveQuery, useResponsiveQuery } from "ui/hooks/responsive";
import Image from "next/image";
import classNames from "classnames";
import Button, { Size } from "../Button";

enum Tab {
  Home = "home",
  About = "about",
  Process = "process",
  Clients = "clients",
  Services = "services",
  GetStarted = "get-started",
}

export enum LogoPosition {
  Left = "LEFT",
  Top = "TOP"
}
export interface NavigationProps {
  logo?: string
}

export default function Navigation({logo}: NavigationProps) {
  const [toggledState, setToggleState] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>();

  const isMobile = useResponsiveQuery(ResponsiveQuery.Mobile)


  const pathname = usePathname()

  useEffect(() => {
    const tab = extractTab(pathname)
    setActiveTab(tab)
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
            <Link
              href="/"
              className={classNames(styles.item, activeTab === Tab.Home && styles.active)}
              onClick={() => setActiveTab(Tab.Home)}
            >
              Home

            </Link>

            <Link
              href="/about"
              className={classNames(styles.item, activeTab === Tab.About && styles.active)}
              onClick={() => setActiveTab(Tab.About)}
            >
              About

            </Link>

            <Link
              href="/process"
              className={classNames(styles.item, activeTab === Tab.Process && styles.active)}
              onClick={() => setActiveTab(Tab.Process)}
            >
              Process

            </Link>
            
            <Link
              href="/clients"
              className={classNames(styles.item, activeTab === Tab.Clients && styles.active)}
              onClick={() => setActiveTab(Tab.Clients)}
            >
              Clients

            </Link>
            
            <Link
              href="/services"
              className={classNames(styles.item, activeTab === Tab.Services && styles.active)}
              onClick={() => setActiveTab(Tab.Services)}
            >
              Services

            </Link>
            
            {<Link
              href="/get-started"
              className={classNames(styles.item, activeTab === Tab.GetStarted && styles.active)}
              onClick={() => setActiveTab(Tab.GetStarted)}
            >
              Get Started
            </Link>}
          </div>

          <div className={styles.right}>
            {activeTab === Tab.GetStarted &&  <Link href={"/"} onClick={() => setActiveTab(Tab.Home)} className={classNames(styles.item)}>
              <Image
                className={styles.logo}
                src="/images/customer/home/instagram.png"
                alt="Completed Project 1"
                width={512}
                height={512}
                priority
              />
            </Link>}
            {activeTab === Tab.GetStarted && <Link href={"/"} onClick={() => setActiveTab(Tab.Home)} className={classNames(styles.item)}>
              <Image
                className={styles.logo}
                src="/images/customer/home/facebook.png"
                alt="Completed Project 1"
                width={512}
                height={512}
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
          <li className={classNames(styles.item, activeTab === Tab.Home && styles.active)}>
            <Link
              href="/"
              onClick={() => {
                setActiveTab(Tab.Home)
                setToggleState(false)
              }}
            >
              Home
            </Link>
          </li>

          <li className={classNames(styles.item, activeTab === Tab.About && styles.active)}>
            <Link
              href="/about"
              onClick={() => {
                setActiveTab(Tab.About)
                setToggleState(false)
              }}
            >
              About
            </Link>
          </li>
          <li className={classNames(styles.item, activeTab === Tab.Process && styles.active)}>
            <Link
              href="/process"
              onClick={() => {
                setActiveTab(Tab.Process)
                setToggleState(false)
              }}
            >
              Process
            </Link>
          </li>
          <li className={classNames(styles.item, activeTab === Tab.Clients && styles.active)}>
            <Link
              href="/clients"
              onClick={() => {
                setActiveTab(Tab.Clients)
                setToggleState(false)
              }}
            >
              Clients
            </Link>
          </li>
          <li className={classNames(styles.item, activeTab === Tab.Services && styles.active)}>
            <Link
              href="/services"
              onClick={() => {
                setActiveTab(Tab.Services)
                setToggleState(false)
              }}
            >
              Services
            </Link>
          </li>
          <li className={classNames(styles.item, activeTab === Tab.GetStarted && styles.active)}>
            <Link
              href="/get-started"
              onClick={() => {
                setActiveTab(Tab.GetStarted)
                setToggleState(false)
              }}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>}
    </>
  );
}


function extractTab(fromPath: string): Tab {
  switch (true) {
    case fromPath.includes(Tab.About):
      return Tab.About
    case fromPath.includes(Tab.Services):
      return Tab.Services
    case fromPath.includes(Tab.Clients):
      return Tab.Clients
    case fromPath.includes(Tab.GetStarted):
      return Tab.GetStarted
    case fromPath.includes(Tab.Process):
      return Tab.Process
    default:
      return Tab.Home
  }
}