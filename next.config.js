module.exports = {
    i18n: {
        locales: ['en-us', 'ta-in', 'hi-in', 'kn-in'],
        defaultLocale: 'en-us'
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
    }
}