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
      description: 'QR-scanner',
    },
    templateParameters: {
      appName: 'Данил Кунакбаев любит изюм',
    },
  },
});
