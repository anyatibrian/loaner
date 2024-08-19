const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
        assetExts: [],
        sourceExts: [],
    },
};

// Merge the default configuration with your custom configuration
const defaultConfig = getDefaultConfig(__dirname);

config.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
    ext => ext !== 'svg'
);
config.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'svg'];

module.exports = mergeConfig(defaultConfig, config);