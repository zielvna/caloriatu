require('dotenv').config();

module.exports = {
    expo: {
        name: 'Caloriatu',
        slug: 'caloriatu',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier: 'com.zielvna.caloriatu',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            package: 'com.zielvna.caloriatu',
        },
        extra: {
            eas: {
                projectId: process.env.EAS_PROJECT_ID,
            },
        },
    },
};
