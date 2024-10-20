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
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
            <Image src="/icons/logo.svg" width={34} height={34} alt='Horizon logo' className='size-[24px] max-xl:size-14'/>
            <h1 className='sidebar-logo'> Horizon</h1>
            </Link>
            {/* //links to pointing to other pages 
            //we are using className here where it will highlight the active tab in sidebar for that we will make use of cn 
            //it is sort of like ngClass where we apply custom tailwind based on boolean flag or conditions */}
            {sidebarLinks.map((item) => {
              const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
              //instead of returning item label we will return div with the item logo and below that we will return itemLabel using p tag
              return (<Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}> <div className='relative size-6'><Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0' : isActive})}></Image></div> <p className={cn('sidebar-label', {'!text-white' : isActive})}>{item.label}</p> </Link>)
            })}

            USER
        </nav>

        USER
    </section>
  )
}

export default SideBar