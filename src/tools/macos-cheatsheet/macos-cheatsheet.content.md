## Keyboard Shortcuts

Navigation, Editing, and Process Control

### Cursor Movement

| Shortcut | Description |
|:--|:--|
| `Ctrl + A` | Go to the beginning of the current line |
| `Ctrl + E` | Go to the end of the current line |
| `Ctrl + F` | Move cursor one character forward |
| `Ctrl + B` | Move cursor one character backward |
| `Option + →` | Move cursor one word forward |
| `Option + ←` | Move cursor one word backward |

### Editing

| Shortcut | Description |
|:--|:--|
| `Ctrl + U` | Cut everything backwards to the beginning of the line |
| `Ctrl + K` | Cut everything forward to the end of the line |
| `Ctrl + W` | Cut one word backwards (using whitespace as delimiter) |
| `Esc + Backspace` | Cut one word backwards (using non-alphabetic chars as delimiters) |
| `Ctrl + Y` | Paste whatever was cut by the last cut command |
| `Ctrl + T` | Swap the last two characters before the cursor |
| `Esc + T` | Swap the last two words before the cursor |
| `Ctrl + _` | Undo the last command |
| `Tab` | Auto-complete file and folder names |

### Control & View

| Shortcut | Description |
|:--|:--|
| `Ctrl + L` | Clears the Screen (redraws) |
| `Cmd + K` | Clears the Screen (Terminal app scrollback buffer) |
| `Ctrl + C` | Kill (interrupt) the running process; cancels current line |
| `Ctrl + D` | Exit current shell (or send EOF to running process) |
| `Ctrl + Z` | Suspend running process (use fg to restore) |

## Core Commands

The essentials for navigation and system interaction

| Command | Description |
|:--|:--|
| `cd [folder]` | Change directory (e.g., cd Documents) |
| `cd` or `cd ~` | Go to Home directory |
| `cd /` | Go to Root of drive |
| `cd -` | Go to the previous directory |
| `open .` | Open the current Terminal directory in Finder |
| `ls` | Short listing of files |
| `ls -l` | Long listing (permissions, owner, size, date) |
| `ls -a` | Listing including hidden files (starting with .) |
| `ls -lh` | Long listing with Human readable file sizes (KB, MB) |
| `ls -R` | List entire content of folder recursively |
| `sudo [command]` | Run command as Superuser (requires password) |
| `open [file]` | Opens a file with its default macOS app |
| `top` | Displays active processes (Press q to quit) |
| `nano [file]` | Opens file in nano editor (beginner friendly) |
| `vim [file]` | Opens file in vim editor (advanced) |
| `clear` | Clears the screen |

## System & Power

Mac-specific system controls

| Command | Description |
|:--|:--|
| `sw_vers` | Display macOS version and build number |
| `uptime` | Show how long system has been running |
| `caffeinate` | Prevent Mac from sleeping (Press Ctrl + C to stop) |
| `caffeinate -u -t [sec]` | Prevent sleep for specified seconds (e.g., 3600) |
| `pmset -g` | View current power management settings |
| `softwareupdate -l` | List available macOS software updates |
| `say "[text]"` | Text-to-speech; computer speaks the text |
| `killall [app_name]` | Force quit an app by name (e.g., killall Finder) |

## Network

Connectivity and internet utilities

| Command | Description |
|:--|:--|
| `ping [host]` | Check connection to host (e.g., ping google.com) |
| `ifconfig` | Display network interface details |
| `ipconfig getifaddr en0` | Get local IP address (Wi-Fi is usually en0) |
| `curl -O [url]` | Download a file from a URL |
| `ssh [user]@[host]` | Connect to a remote host via SSH |
| `lsof -i` | List all open network connections |
| `netstat` | Display network statistics |

## Disk & Storage

Managing space and drives

| Command | Description |
|:--|:--|
| `df -h` | Display free disk space (Human readable) |
| `du -sh [folder]` | Display total size of a specific folder |
| `diskutil list` | List all connected drives and volumes |

## File Management

Creating, moving, and copying files

| Command | Description |
|:--|:--|
| `touch [file]` | Create a new empty file |
| `pwd` | Print Working Directory (shows full path) |
| `cp [file] [new]` | Copy file to new file |
| `cp [file] [dir]` | Copy file to directory |
| `mv [file] [new]` | Move or Rename a file |
| `rm [file]` | Remove a file |
| `rm -i [file]` | Remove with confirmation prompt |
| `rm -f [file]` | Force removal without confirmation |
| `cat [file]` | Concatenate (display) file content to screen |

### macOS Clipboard

| Command | Description |
|:--|:--|
| `pbcopy < [file]` | Copies file contents to system clipboard |
| `pbpaste` | Paste clipboard contents to stdout |
| `pbpaste > [file]` | Paste clipboard contents into a file |

## Directory Management

Folder creation and navigation

| Command | Description |
|:--|:--|
| `mkdir [dir]` | Create new directory |
| `mkdir -p [a]/[b]` | Create nested directories (creates a and b) |
| `rmdir [dir]` | Remove directory (must be empty) |
| `rm -R [dir]` | Remove directory and all contents (Recursive) |
| `less [file]` | View file content one screen at a time (q to quit) |
| `.` | Represents Current folder (e.g., ls .) |
| `..` | Represents Parent directory (e.g., ls ..) |

## Search

Finding files and content

| Command | Description |
|:--|:--|
| `find [dir] -name "[name]"` | Search for files by name in a directory |
| `grep "[text]" [file]` | Search for lines containing text in a file |
| `grep -r "[text]" [dir]` | Recursively search for text in all files in a folder |
| `grep -v "[text]" [file]` | Search for lines that do NOT contain the text |
| `grep -i "[text]" [file]` | Case-insensitive search |

### Spotlight (macOS)

| Command | Description |
|:--|:--|
| `mdfind "[query]"` | Spotlight search (names, content, metadata) |
| `mdfind -onlyin [dir] [query]` | Spotlight search restricted to a directory |

## Chaining & Piping

Running multiple commands and directing output

| Symbol | Description |
|:--|:--|
| `;` | Run A then B, regardless of success ([cmd A]; [cmd B]) |
| `&&` | Run B only if A succeeded ([cmd A] && [cmd B]) |
| `\|` | Pipe output of A as input to B |
| `&` | Run command in background ([cmd A] &) |
| `>` | Push output to file (Overwrites existing content) |
| `>>` | Append output to the end of an existing file |
| `<` | Read input from a file |

## Command History

Reviewing and repeating past actions

| Command | Description |
|:--|:--|
| `history n` | Show the last n commands typed |
| `Ctrl + r` | Interactive search through history |
| `![value]` | Execute last command starting with 'value' |
| `![value]:p` | Print (don't run) last command starting with 'value' |
| `!!` | Execute the very last command typed |
| `!!:p` | Print (don't run) the very last command |

## Help

Getting information about commands

| Command | Description |
|:--|:--|
| `[command] -h` | Offers brief help (common flag) |
| `[command] --help` | Offers standard help (common flag) |
| `man [command]` | Show the full manual page (q to quit) |
| `whatis [command]` | Gives a one-line description of the command |
| `apropos [keyword]` | Searches manual pages for commands matching keyword |
