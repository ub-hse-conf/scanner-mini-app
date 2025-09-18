import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    source: {
        entry: {
            index: {
                import: './src/index.tsx',
                html: true
            },
        }
    },
    html: {
        template: './src/index.html',
        title: 'Моя Telegram Mini-App',
        meta: {
            description: 'Сканер QR-кодов',
        },
        templateParameters: {
            appName: 'QR-scanner',
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://ub.hse-perm-helper.ru',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                }
            }
        },
    },
});
