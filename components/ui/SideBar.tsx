'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const SideBar = ({user} :SiderbarProps) => {
  const pathName = usePathname();
  //We have to use 'use client' because this is a hook
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
            <Image src="/icons/logo.svg" width={34} height={34} alt='Horizon logo' className='size-[24px] max-xl:size-14'/>
            <h1 className='sidebar-logo'> Horizon</h1>
            </Link>
            // links to pointing to other pages 
            // we are using className here where it will highlight the active tab in sidebar for that we will make use of cn 
            // it is sort of like ngClass where we apply custom tailwind based on boolean flag or conditions
            {sidebarLinks.map((item) => {
              const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
              return (<Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}> {item.label} </Link>)
            })}
        </nav>
    </section>
  )
}

export default SideBar