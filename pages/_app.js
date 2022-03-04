import '../styles/settings.css';
import '../styles/objects.css';
import '../styles/components.css';
import '../i18n';
import Analytics from '../components/analytics';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}

export default MyApp
