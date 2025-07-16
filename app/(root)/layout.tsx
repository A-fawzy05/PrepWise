import React from 'react'
import Image from 'next/image';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className='root-layout'>
            <nav>
                <link href="/" className='flex items-center gap-2'/>
                <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                <h2 className='text-primary-100'>Prepwise</h2>
            </nav>
            {children}
        </div>
    );
}

export default RootLayout;