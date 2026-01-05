## Modes & Essentials

Vim is modal. You start in Normal Mode (cannot type text).
Press `i` to type (Insert Mode). Press `Esc` to go back to Normal Mode.

| Command | Description |
|:--|:--|
| `i` | Insert text before cursor |
| `a` | Append text after cursor |
| `v` | Visual mode (select text) |
| `Esc` | Exit current mode / Go to Normal Mode |
| `:w` | Write (Save) file |
| `:q` | Quit |
| `:wq` or `ZZ` | Save and Quit |
| `:q!` | Force Quit (Discard unsaved changes) |

## Navigation

Moving around faster than a mouse

### Basic Movement

| Command | Description |
|:--|:--|
| `h j k l` | Left, Down, Up, Right |
| `w` | Jump forward to start of next word |
| `b` | Jump backward to start of previous word |
| `e` | Jump forward to end of word |

### Line Movement

| Command | Description |
|:--|:--|
| `0` | Jump to start of line |
| `^` | Jump to first non-blank character of line |
| `$` | Jump to end of line |

### File Movement

| Command | Description |
|:--|:--|
| `gg` | Go to first line of file |
| `G` | Go to last line of file |
| `:[n]` | Go to line number [n] (e.g., :10) |
| `Ctrl + u` | Move up half a screen |
| `Ctrl + d` | Move down half a screen |

## Editing Text

Deleting, changing, and undoing

| Command | Description |
|:--|:--|
| `x` | Delete character under cursor |
| `r` | Replace single character under cursor |
| `u` | Undo |
| `Ctrl + r` | Redo |
| `dd` | Delete (cut) current line |
| `dw` | Delete (cut) current word |
| `D` | Delete (cut) from cursor to end of line |
| `yy` | Yank (Copy) current line |
| `y$` | Yank (Copy) to end of line |
| `p` | Paste after cursor |
| `P` | Paste before cursor |
| `cw` | Change word (delete word and enter Insert mode) |
| `cc` | Change line (delete line and enter Insert mode) |
| `.` | Repeat last command |

## Search & Replace

Finding patterns in the file

| Command | Description |
|:--|:--|
| `/pattern` | Search forward for "pattern" |
| `?pattern` | Search backward for "pattern" |
| `n` | Repeat search in same direction |
| `N` | Repeat search in opposite direction |
| `:%s/old/new/g` | Replace all occurrences of "old" with "new" in file |
| `:%s/old/new/gc` | Replace all with confirmation |

## Visual Mode

Selecting blocks of text

| Command | Description |
|:--|:--|
| `v` | Start character-wise selection |
| `V` | Start line-wise selection |
| `Ctrl + v` | Start block-wise (rectangular) selection |
| `y` | Yank (Copy) selection |
| `d` | Delete selection |
| `>` or `<` | Indent or Un-indent selection |

## Windows & Files

Working with splits and multiple files

| Command | Description |
|:--|:--|
| `:e [file]` | Edit (open) a file |
| `:sp [file]` | Split window horizontally |
| `:vsp [file]` | Split window vertically |
| `Ctrl + w, w` | Switch between windows |
| `Ctrl + w, q` | Close current window |
