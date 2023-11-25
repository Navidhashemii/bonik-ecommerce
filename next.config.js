/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: true,
      },
      output: {
        export: {
          generate: {
            '/products/[productId]': {
              generateStaticParams: './pages/products/[productId].js',
            },
          },
        },
      },
}

module.exports = nextConfig
