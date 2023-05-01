const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = [
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [{loader: 'babel-loader',}]
        },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
            type: 'asset/inline',
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /(?<!\.module)\.s(a|c)ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../..', './'),
        },
        {
            test: /\.module\.s(a|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: {localIdentName: `[name]__[local]`},
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
            include: path.resolve(__dirname, '../..', './'),
        },
    ]