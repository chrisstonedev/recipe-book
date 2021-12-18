import '../styles.css';

export default function Application({Component, pageProps}) {
    return <Component {...pageProps}/>;
}

export function reportWebVitals(metric) {
    const firstContentfulPaint = 'FCP';
    const largestContentfulPaint = 'LCP';
    const cumulativeLayoutShift = 'CLS';
    const firstInputDelay = 'FID';
    const timeToFirstByte = 'TTFB';
    const nextJsHydration = 'Next.js-hydration';
    const nextJsRouteChangeToRender = 'Next.js-route-change-to-render';
    const nextJsRender = 'Next.js-render';
    switch (metric.name) {
        case firstContentfulPaint:
            break;
        case largestContentfulPaint:
            break;
        case cumulativeLayoutShift:
            break;
        case firstInputDelay:
            break;
        case timeToFirstByte:
            break;
        case nextJsHydration:
            break;
        case nextJsRouteChangeToRender:
            break;
        case nextJsRender:
            break;
        default:
            break;
    }
}