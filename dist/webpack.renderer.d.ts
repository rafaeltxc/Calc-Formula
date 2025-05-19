import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
interface Configuration extends webpack.Configuration {
    devServer?: DevServerConfiguration;
}
declare const config: Configuration;
export default config;
//# sourceMappingURL=webpack.renderer.d.ts.map