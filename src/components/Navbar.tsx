"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import IconWithFallback from '@/components/IconWithFallback';

type languageProps = {
  name: string;
  href: string;
  icon: string;
}

const technologies: { title: string; languages:languageProps[]; description: string }[] = [
  {
    title: "Frontend",
    languages: [
      {
        name: "HTML",
        href: "/explore/html",
        icon: "html5"
      },
      {
        name: "CSS",
        href: "/explore/css",
        icon: "css3"
      },
      {
        name: "JavaScript",
        href: "/explore/javascript",
        icon: "javascript"
      },
      {
        name: "TypeScript",
        href: "/explore/typescript",
        icon: "typescript"
      }
    ],
    description: "Make software look good",
  },
  {
    title: "Backend",
    languages: [
      {
        name: "Python",
        href: "/explore/python",
        icon: "python"
      },
      {
        name: "Ruby",
        href: "/explore/ruby",
        icon: "ruby"
      },
      {
        name: "Java",
        href: "/explore/java",
        icon: "java"
      },
      {
        name: "PHP",
        href: "/explore/php",
        icon: "php"
      },
      {
        name: "C#",
        href: "/explore/csharp",
        icon: "csharp"
      }
    ],
    description: "Make software work well",
  },
  {
    title: "Fullstack",
    languages: [
      {
        name: "MERN",
        href: "/explore/mern",
        icon: "mern"
      },
      {
        name: "MEAN",
        href: "/explore/mean",
        icon: "mean"
      },
      {
        name: "LAMP",
        href: "/explore/lamp",
        icon: "lamp"
      },
      {
        name: "Python-Django",
        href: "/explore/python-django",
        icon: "python-django"
      }
    ],
    description: "The full package",
  },
  {
    title: "Mobile",
    languages: [
      {
        name: "Swift",
        href: "/explore/swift",
        icon: "swift"
      },
      {
        name: "Kotlin",
        href: "/explore/kotlin",
        icon: "kotlin"
      },
      {
        name: "React Native",
        href: "/explore/react-native",
        icon: "react"
      },
      {
        name: "Flutter",
        href: "/explore/flutter",
        icon: "flutter"
      }
    ],
    description: "",
  },
  {
    title: "Database",
    languages: [
      {
        name: "SQL",
        href: "/explore/sql",
        icon: "mysql"
      },
      {
        name: "NoSQL",
        href: "/explore/nosql",
        icon: "nosql"
      },
      {
        name: "MongoDB",
        href: "/explore/mongodb",
        icon: "mongodb"
      },
      {
        name: "PostgreSQL",
        href: "/explore/postgresql",
        icon: "postgresql"
      }
    ],
    description: "The science of data storage",
  }
]

const accountLinks: { text:string; href:string; style:string; }[] = [
  { text: 'Account Dashboard', href: '/profile', style: 'link' },
  { text: 'Settings', href: '/settings', style: 'link' },
  { text: 'Log Out', href: '/logout', style: 'button' }
]

const Explore = () => {
  return (
    <div className="grid w-screen gap-10 md:grid-cols-3 p-10">
      {technologies.map((group) => (
        <div key={group.title}>
          <div className="w-full flex justify-between">
            <p>{group.title}</p>
            <small className="text-slate-500 text-xs">{group.description}</small>
          </div>
          <Separator />
          <ul className="grid w-full gap-x-2 grid-cols-2">
            {group.languages.map((language) => (
              <li key={language.name}>
                <Link className="text-sm px-2 p-2 flex flex-row-reverse gap-2 justify-end text-slate-500 border-b-[1px] hover:text-slate-900 hover:bg-slate-100 focus:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:ring-offset-slate-100 transition-colors" href={language.href}>
                  {language.name}
                  <IconWithFallback 
                    src={`/icons/${language.icon}.svg`}
                    fallbackSrc='/icons/fallback.svg'
                    alt={`${language.name} Icon`} 
                    width={20} 
                    height={20} 
                    className="object-contain" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

const Navbar = () => {
  const userLoggedIn = true;
  
  return (
    <nav className='fixed z-50 w-full p-2 bg-white scroll-my-10'>
      <div className='lg:container w-full flex justify-between'>
        <Link 
          href="/" 
          className='flex flex-center gap-2 items-center'>
          <Image 
            src='/images/logo.svg' 
            alt='Mentor Match Logo' 
            width={30} 
            height={30} 
            className="object-contain" />
          <h1 className='text-2xl text-primary font-bold hidden md:inline-block'>Mentor Match</h1>
        </Link>

        {userLoggedIn ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Explore />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary text-sm font-medium flex items-center justify-center">
                  <span className="material-symbols-outlined">person</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0">
                  <ul className="grid w-[400px] md:w-[200px] md:grid-cols-1">
                    {accountLinks.map((link) => (
                      link.style === 'button' ? (
                        <li
                          key={link.text}
                          className="bg-primary text-white text-sm font-medium flex items-center justify-center"
                        >
                          <Link 
                            key={link.text}
                            href={link.href}
                            className="w-full block p-3 px-6"
                          >
                              {link.text}
                          </Link>
                        </li>
                      ) : (
                        <li className="w-full block">
                          <Link
                            key={link.text}
                            href={link.href}
                            className = "px-6 p-2 block text-slate-500 border-b-[1px] hover:text-slate-900 hover:bg-slate-100 focus:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:ring-offset-slate-100 transition-colors"
                          >
                            {link.text}
                          </Link>
                        </li>
                      )
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport className="fixed right-0 w-screen md:w-full h-screen md:h-auto" />
          </NavigationMenu>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Explore />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/signin" legacyBehavior passHref>
                  <NavigationMenuLink className="outline_btn text-sm font-medium flex items-center justify-center">
                    Log In
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport className="fixed right-0 w-full" />
          </NavigationMenu>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar