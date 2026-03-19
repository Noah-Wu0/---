import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export const metadata: Metadata = {
  title: '新疆西传数字科技有限公司 | 传递温度、传递科技',
  description: '深耕新疆地区的数字信息化建设本地优质集成商。提供网络安全、无人机巡检、医疗信息化等行业级解决方案。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
