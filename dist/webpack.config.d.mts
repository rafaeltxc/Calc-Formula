declare namespace _default {
    let target: string;
    let entry: string;
    namespace output {
        let path: string;
        let filename: string;
    }
    namespace module {
        let rules: ({
            test: RegExp;
            use: string[];
            exclude?: undefined;
        } | {
            test: RegExp;
            exclude: RegExp;
            use: string;
        })[];
    }
    namespace resolve {
        let extensions: string[];
    }
    let plugins: HtmlWebpackPlugin[];
    let mode: string;
}
export default _default;
import HtmlWebpackPlugin from 'html-webpack-plugin';
//# sourceMappingURL=webpack.config.d.mts.map