import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { supabase } from '@/lib/supabase'

const OneTapComponent = () => {
    const router = useRouter()
    const [session, setSession] = useState(null)

    const generateNonce = async () => {
        const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
        const encoder = new TextEncoder()
        const encodedNonce = encoder.encode(nonce)
        const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
        return [nonce, hashedNonce]
    }

    useEffect(() => {
        const initializeGoogleOneTap = async () => {
            const [nonce, hashedNonce] = await generateNonce()

            const { data, error } = await supabase.auth.getSession()
            if (error) {
                console.error('Error getting session:', error)
                return
            }

            const currentSession = data?.session ?? null
            setSession(currentSession)

            if (currentSession) {
                if (!router.asPath.includes('/guestbook')) {
                    router.push('/guestbook')
                }
                return
            }

            if (typeof window !== 'undefined' && window.google && google.accounts) {
                google.accounts.id.initialize({
                    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                    callback: async (response) => {
                        try {
                            const { data, error } = await supabase.auth.signInWithIdToken({
                                provider: 'google',
                                token: response.credential,
                                nonce,
                            })
                            if (error) throw error
                            router.push('/guestbook')
                        } catch (error) {
                            console.error('Error logging in with Google One Tap:', error)
                        }
                    },
                    nonce: hashedNonce,
                    use_fedcm_for_prompt: true,
                    auto_select: false,
                })

                // Cek lagi sebelum prompt
                if (!currentSession) {
                    google.accounts.id.prompt()
                }
            }
        }

        initializeGoogleOneTap()
    }, [router])

    return (
        <>
            {!session && (
                <Script src="https://accounts.google.com/gsi/client" async defer />
            )}
        </>
    )
}

export default OneTapComponent
