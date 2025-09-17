import nextra from 'nextra'
 
const withNextra = nextra({
  contentDirBasePath: '/',
  search: true,
  defaultShowCopyCode: true
})
 
export default withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en'
  }
})