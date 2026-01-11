'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import ConditionalNavigation from '@/components/conditional-navigation'

const TechBackground = dynamic(() => import('@/components/tech-background'), { ssr: false })
const Footer = dynamic(() => import('@/components/footer'), { ssr: true })

export default function RouteScopedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isMun = pathname?.startsWith('/mun')

  if (isMun) {
    return <>{children}</>
  }

  return (
    <>
      <TechBackground>
        <ConditionalNavigation />
        {children}
      </TechBackground>
      <Footer />
    </>
  )
}
