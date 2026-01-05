import { Edit } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Vim cheatsheet',
  path: '/vim-cheatsheet',
  description: 'Vim editor commands, modes, and navigation cheatsheet',
  keywords: ['vim', 'vi', 'editor', 'terminal', 'text', 'navigation', 'cheatsheet', 'memo'],
  component: () => import('./vim-cheatsheet.vue'),
  icon: Edit,
  createdAt: new Date('2025-01-05'),
});
