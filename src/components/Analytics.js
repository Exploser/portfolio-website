
// import { useEffect } from 'react'

// import posthog from 'posthog-js'
// import { PostHogProvider } from 'posthog-js/react'

// // Check that PostHog is client-side (used to handle Next.js SSR)
// if (typeof window !== 'undefined') {
//   posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
//     api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '"https://us.i.posthog.com"',
//     // Enable debug mode in development
//     loaded: (posthog) => {
//       if (process.env.NODE_ENV === 'development') posthog.debug()
//     }
//   })
// }

// // export default function App({ Component, pageProps }) {
// //   const router = useRouter()

// //   useEffect(() => {
// //     // Track page views
// //     const handleRouteChange = () => posthog?.capture('$pageview')
// //     router.events.on('routeChangeComplete', handleRouteChange)

// //     return () => {
// //       router.events.off('routeChangeComplete', handleRouteChange)
// //     }
// //   }, [])

// //   return (
// //     <PostHogProvider client={posthog}>
// //       <Component {...pageProps} />
// //     </PostHogProvider>
// //   )
// // }

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: "/ingest",
      ui_host: 'https://us.i.posthog.com',
    });
  }

  export function CSPostHogProvider({ children }) {
    return ( 
        <PostHogProvider client={posthog}>
            <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
        </PostHogProvider>
    );
}

function PostHogAuthWrapper({ children }) {
    


    return children;
}