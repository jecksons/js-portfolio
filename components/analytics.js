import Script from 'next/script'
import { GA_TRACKING_ID } from './analytics-controller'

const Analytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      id='tag-google'
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <Script
      strategy="afterInteractive"
      id='tag-google-config'
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            var host = window.location.hostname;
            if (host != "localhost") {
                function gtag(){dataLayer.push(arguments);}
            // your google analytics code goes here
            } else {
                function gtag(){}
            }            
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics