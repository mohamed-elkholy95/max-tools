import { Terminal } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Bash cheatsheet',
  path: '/bash-cheatsheet',
  description: 'Bash commands and shortcuts cheatsheet for terminal productivity',
  keywords: ['bash', 'shell', 'terminal', 'command', 'linux', 'unix', 'script', 'cheatsheet', 'memo'],
  component: () => import('./bash-cheatsheet.vue'),
  icon: Terminal,
  createdAt: new Date('2025-01-05'),
});
