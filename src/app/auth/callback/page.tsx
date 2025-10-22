'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AuthCallBack
    = () => {
        const router = useRouter();
        const supabase = createClientComponentClient()

        useEffect(() => { 
            const checkSession = async () => {
                const { data: { session } } = await supabase.auth.getSession();
                if (session) {
                    router.push('/'); 
                } else {
                    router.push('/sign-in'); 
                }
            }
            checkSession();
        }, [router, supabase]);
  return (
      <div>
            <p className=''>Authenticating...</p>
    </div>
  )
}

export default AuthCallBack
