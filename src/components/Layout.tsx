import { ReactNode } from 'react'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  showFooter?: boolean
}

export default function Layout({ children, showFooter = true }: LayoutProps) {
  return (
    <>
      {children}
      {showFooter && <Footer />}
    </>
  )
} 