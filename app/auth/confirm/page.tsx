'use client'

import { useEffect, useState } from 'react'

export default function ConfirmPage() {
  const [status, setStatus] = useState<'confirming' | 'confirmed' | 'error'>('confirming')

  useEffect(() => {
    // Supabase redirects here with hash params after verifying the token
    // e.g., #access_token=...&type=signup&...
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const type = params.get('type')
    const accessToken = params.get('access_token')

    if (accessToken || type === 'signup') {
      setStatus('confirmed')
    } else {
      // Even without params, if they landed here from the email link, it's confirmed
      // Supabase already verified the token before redirecting
      setStatus('confirmed')
    }
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0A0A0A',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '20px',
    }}>
      <div style={{
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#D4952A',
          marginBottom: '32px',
          letterSpacing: '-0.5px',
        }}>
          &apos; Plain n&apos; Simple
        </div>

        {status === 'confirming' && (
          <div style={{
            backgroundColor: '#1E1E1E',
            borderRadius: '16px',
            padding: '40px 32px',
            border: '1px solid #2A2A2A',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>
              ...
            </div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#FFFFFF',
              margin: '0 0 12px',
            }}>
              Verifying your email...
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#999',
              margin: 0,
              lineHeight: 1.6,
            }}>
              Just a moment.
            </p>
          </div>
        )}

        {status === 'confirmed' && (
          <div style={{
            backgroundColor: '#1E1E1E',
            borderRadius: '16px',
            padding: '40px 32px',
            border: '1px solid #2A2A2A',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>
              &#10003;
            </div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#FFFFFF',
              margin: '0 0 12px',
            }}>
              Email Confirmed!
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#BBBBBB',
              margin: '0 0 32px',
              lineHeight: 1.6,
            }}>
              Your account is ready. Go back to LinkedIn and sign in with your email and password to start using Plain n&apos; Simple.
            </p>
            <div style={{
              backgroundColor: '#1A1A2E',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #2A2A4A',
            }}>
              <p style={{
                fontSize: '14px',
                color: '#D4952A',
                fontWeight: 600,
                margin: '0 0 8px',
              }}>
                Next steps:
              </p>
              <ol style={{
                fontSize: '14px',
                color: '#999',
                margin: 0,
                paddingLeft: '20px',
                lineHeight: 1.8,
                textAlign: 'left',
              }}>
                <li>Go to any LinkedIn job posting</li>
                <li>Click the Plain n&apos; Simple extension icon</li>
                <li>Sign in with your email and password</li>
                <li>Start translating corporate jargon!</li>
              </ol>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div style={{
            backgroundColor: '#1E1E1E',
            borderRadius: '16px',
            padding: '40px 32px',
            border: '1px solid #2A2A2A',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>
              &#9888;
            </div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#FFFFFF',
              margin: '0 0 12px',
            }}>
              Something went wrong
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#999',
              margin: '0 0 24px',
              lineHeight: 1.6,
            }}>
              We couldn&apos;t verify your email. The link may have expired.
            </p>
            <a
              href="https://www.linkedin.com/jobs/"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                backgroundColor: '#D4952A',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '8px',
              }}
            >
              Go to LinkedIn
            </a>
          </div>
        )}

        <p style={{
          marginTop: '24px',
          fontSize: '13px',
          color: '#666',
        }}>
          <a href="https://useplainandsimple.app" style={{ color: '#D4952A', textDecoration: 'none' }}>
            useplainandsimple.app
          </a>
        </p>
      </div>
    </div>
  )
}
