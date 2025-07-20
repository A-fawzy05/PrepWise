import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React from 'react'
import { ReactNode } from 'react';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
    const isuserauthenticated = await isAuthenticated();
        if (!isuserauthenticated) {
            redirect("/login");
        }
    return (
        <div className='auth-layout'>{children}</div>
    );
}

export default AuthLayout;