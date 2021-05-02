module.exports = {
    images: {
        domains: ['react.semantic-ui.com'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ]
    },
}