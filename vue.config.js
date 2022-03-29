module.exports = {
    devServer: {
        port: 8081,
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    pages: {
        index: {
            entry: 'src/frontend/main.ts'
        }
    }
};