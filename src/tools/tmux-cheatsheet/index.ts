import { LayoutColumns } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Tmux cheatsheet',
  path: '/tmux-cheatsheet',
  description: 'Tmux terminal multiplexer commands and shortcuts cheatsheet',
  keywords: ['tmux', 'terminal', 'multiplexer', 'session', 'window', 'pane', 'cheatsheet', 'memo'],
  component: () => import('./tmux-cheatsheet.vue'),
  icon: LayoutColumns,
  createdAt: new Date('2025-01-05'),
});
