// Live screenshots come from Microlink, which renders the real site in a headless
// browser — this also works for sites that refuse to be embedded in an iframe.
import type { GlimpseThemeType } from '../types';

const GLIMPSE_ENDPOINT = 'https://api.microlink.io/';

/** URL of a fresh 1280×800 screenshot of the given site. */
export function GlimpseUrl(siteUrl: string, theme: GlimpseThemeType = 'light') {
  const params = new URLSearchParams({
    colorScheme: theme,
    url: siteUrl,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    'viewport.width': '1280',
    'viewport.height': '800',
    'viewport.deviceScaleFactor': '1',
    waitForTimeout: '1500',
  });
  return `${GLIMPSE_ENDPOINT}?${params}`;
}

/** Host name shown in the glimpse's address bar, e.g. `code-fit.vercel.app`. */
export function HostOf(siteUrl: string) {
  return new URL(siteUrl).host;
}
