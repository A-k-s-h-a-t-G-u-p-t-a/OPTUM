import React from 'react';
type props = {children: React.ReactNode}

export default function AuthLayout({children}: props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-neutral-950">
      {children}
    </div>
  )
}

