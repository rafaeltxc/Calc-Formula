export default config;
declare namespace config {
    let mode: string;
    let entry: string;
    namespace output {
        let filename: string;
        let path: string;
        let publicPath: string;
    }
    let devtool: string;
    namespace cache {
        let type: string;
        namespace buildDependencies {
            let config: string[];
        }
    }
    namespace resolve {
        let extensions: string[];
    }
    namespace module {
        let rules: ({
            test: RegExp;
            exclude: RegExp;
            use: {
                loader: string;
                options: {
                    presets: string[];
                    plugins: string[];
                };
            };
        } | {
            test: RegExp;
            use: string[];
            exclude?: undefined;
        })[];
    }
    let plugins: (HtmlWebpackPlugin | ReactRefreshWebpackPlugin | webpack.HotModuleReplacementPlugin)[];
    namespace devServer {
        export namespace _static {
            let directory: string;
        }
        export { _static as static };
        export let historyApiFallback: boolean;
        export let compress: boolean;
        export let port: number;
    }
}
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
//# sourceMappingURL=webpack.renderer.d.mts.map