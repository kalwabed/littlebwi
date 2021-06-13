import { DefaultSeoProps } from 'next-seo'

import appConfig from './appConfig'

const defaultSeo: DefaultSeoProps = {
  defaultTitle: 'Little BWI',
  description: appConfig.description,
  canonical: appConfig.siteUrl,
  openGraph: {
    title: 'Little BWI',
    description: appConfig.description,
    locale: 'id',
    site_name: 'Little BWI',
    url: appConfig.siteUrl,
    type: 'website'
  },
  twitter: { cardType: 'summary_large_image', handle: '@kalwabed', site: appConfig.siteUrl }
}

export default defaultSeo
