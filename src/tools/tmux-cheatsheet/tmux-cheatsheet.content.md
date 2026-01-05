## Prefix Key

All commands require the Prefix Key first.
Default Prefix: `Ctrl + b` (Press Ctrl+b, release, then press command).

## Session Management

Persistent workspaces that survive disconnects

### Outside tmux

| Command | Description |
|:--|:--|
| `tmux new` | Start a new session |
| `tmux new -s [name]` | Start a new session with a name |
| `tmux ls` | List running sessions |
| `tmux a` | Attach to the last session |
| `tmux a -t [name]` | Attach to a specific session |
| `tmux kill-session -t [name]` | Kill a specific session |

### Inside tmux

| Command | Description |
|:--|:--|
| `Prefix d` | Detach from current session (leave it running) |
| `Prefix $` | Rename current session |
| `Prefix s` | Show/Switch between sessions interactively |

## Window Management

Tabs/Workspaces within a session

| Command | Description |
|:--|:--|
| `Prefix c` | Create new window |
| `Prefix ,` | Rename current window |
| `Prefix &` | Close current window |
| `Prefix n` | Go to Next window |
| `Prefix p` | Go to Previous window |
| `Prefix 0..9` | Switch to window by number |
| `Prefix w` | List all windows (interactive menu) |

## Pane Management

Splitting your screen into multiple terminals

| Command | Description |
|:--|:--|
| `Prefix %` | Split pane Vertically (left/right) |
| `Prefix "` | Split pane Horizontally (top/bottom) |
| `Prefix x` | Close current pane |
| `Prefix z` | Toggle Zoom (maximize current pane) |
| `Prefix ;` | Toggle between last active pane |
| `Prefix {` or `}` | Move/Swap pane left or right |
| `Prefix space` | Toggle through preset layouts |
| `Prefix !` | Convert pane into a separate Window |

### Navigation

| Command | Description |
|:--|:--|
| `Prefix Arrow Keys` | Switch focus to pane in that direction |
| `Prefix q` | Show pane numbers (type number to jump) |

## Copy Mode

Scrolling and copying text without a mouse

| Command | Description |
|:--|:--|
| `Prefix [` | Enter Copy Mode (allows scrolling) |

### Inside Copy Mode

| Command | Description |
|:--|:--|
| `Arrow Keys` | Move cursor |
| `Space` | Start selection |
| `Enter` | Copy selection and exit mode |
| `q` | Quit copy mode without copying |

### Pasting

| Command | Description |
|:--|:--|
| `Prefix ]` | Paste copied text |

## Misc & Configuration

Helpful utilities

| Command | Description |
|:--|:--|
| `Prefix :` | Enter Command Prompt |
| `Prefix ?` | List all key bindings (Press q to exit) |
| `Prefix t` | Show big digital clock |
| `:source-file ~/.tmux.conf` | Reload configuration file (from cmd prompt) |
