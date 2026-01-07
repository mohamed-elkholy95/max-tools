import { Beer } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Homebrew cheatsheet',
  path: '/homebrew-cheatsheet',
  description: 'Homebrew package manager commands for macOS and Linux',
  keywords: ['homebrew', 'brew', 'package', 'manager', 'macos', 'linux', 'install', 'cask', 'cheatsheet', 'memo'],
  component: () => import('./homebrew-cheatsheet.vue'),
  icon: Beer,
  createdAt: new Date('2025-01-07'),
});
