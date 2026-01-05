import { BrandApple } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'macOS cheatsheet',
  path: '/macos-cheatsheet',
  description: 'macOS terminal commands and keyboard shortcuts cheatsheet',
  keywords: ['macos', 'mac', 'apple', 'terminal', 'command', 'keyboard', 'shortcut', 'cheatsheet', 'memo'],
  component: () => import('./macos-cheatsheet.vue'),
  icon: BrandApple,
  createdAt: new Date('2025-01-05'),
});
