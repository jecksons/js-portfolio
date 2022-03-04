import '../styles/settings.css';
import '../styles/objects.css';
import '../styles/components.css';
import '../i18n';
import Analytics from '../components/analytics';
import { appWithTranslation } from 'next-i18next';



function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}

export default appWithTranslation(MyApp);
