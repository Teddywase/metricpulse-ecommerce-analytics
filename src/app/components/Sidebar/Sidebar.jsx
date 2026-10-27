import Link from 'next/link'
import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
        <div className="sidebarlogo">
            <Link href="/" className='logo'>Logo</Link>
        </div>
        <div className="sidebarlinks">
            <Link href="/dashboard" className='link'>Dashboard</Link>    
            <Link href="/analytics" className='link'>Analytics</Link>            
            <Link href="/orders" className='link'>Orders</Link>            
            <Link href="/products" className='link'>Products</Link>            
            <Link href="/customers" className='link'>Customers</Link>            
            <Link href="/settings" className='link'>Settings</Link>            
        </div>
    </aside>
  )
}

export default Sidebar
