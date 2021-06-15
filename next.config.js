module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true
  },
  experimental: {
    eslint: {
      dev: true,
      build: false
    }
  },
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils'
      })
    }

    return config
  }
}
