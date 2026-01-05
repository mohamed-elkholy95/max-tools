## Keyboard Shortcuts

Efficiency at the command line (Emacs mode default)

### Navigation

| Shortcut | Description |
|:--|:--|
| `Ctrl + A` | Go to the beginning of the line |
| `Ctrl + E` | Go to the end of the line |
| `Alt + F` | Move cursor one word forward |
| `Alt + B` | Move cursor one word backward |
| `Ctrl + XX` | Toggle between start of line and current cursor position |

### Editing

| Shortcut | Description |
|:--|:--|
| `Ctrl + U` | Cut from cursor to beginning of line |
| `Ctrl + K` | Cut from cursor to end of line |
| `Ctrl + W` | Cut one word backwards |
| `Alt + D` | Cut one word forward |
| `Ctrl + Y` | Paste (yank) previously cut text |
| `Ctrl + _` | Undo last edit |
| `Ctrl + L` | Clear screen (preserves current line) |

### History

| Shortcut | Description |
|:--|:--|
| `Ctrl + R` | Search history backwards (keep pressing to cycle) |
| `Ctrl + G` | Exit history search without executing |
| `!!` | Run the previous command again |
| `!$` | Use the last argument of the previous command |
| `!n` | Run command number n from history |

## Core Commands

Essential file system navigation and info

| Command | Description |
|:--|:--|
| `pwd` | Print Working Directory |
| `cd [dir]` | Change directory |
| `cd ~` | Go to Home directory |
| `cd -` | Switch to the previous working directory |
| `ls -lah` | List all files, hidden files, detailed, human-readable sizes |
| `man [cmd]` | Show manual/help for a command (q to quit) |
| `which [cmd]` | Show the full path of the executable program |
| `alias [name]='[cmd]'` | Create a shortcut (e.g., alias ll='ls -l') |
| `history` | List previously executed commands |

## Scripting Basics

Variables, loops, and logic for Bash scripts

| Syntax | Description |
|:--|:--|
| `VAR="val"` | Assign variable (No spaces around =) |
| `echo $VAR` | Print variable value |
| `echo "Text $VAR"` | Double quotes allow variable expansion |
| `echo 'Text $VAR'` | Single quotes treat text literally (no expansion) |
| `$(command)` | Command substitution (run command, replace with output) |

### Conditionals

```bash
if [ -f "file" ]; then ... fi    # Execute if file exists
if [ -z "$VAR" ]; then ... fi    # Execute if variable is empty
if [ "$A" = "$B" ]; then ... fi  # Execute if strings are equal
```

### Loops

```bash
for i in {1..5}; do ... done       # Loop through a range (1 to 5)
for f in *.txt; do ... done        # Loop through all .txt files
while read line; do ... done       # Iterate line-by-line
```

## File Operations

Standard GNU tools for managing files

| Command | Description |
|:--|:--|
| `touch [file]` | Create empty file or update timestamp |
| `mkdir -p [path]` | Create directory (and parents if needed) |
| `cp -r [src] [dest]` | Copy files or directories recursively |
| `mv [src] [dest]` | Move or Rename |
| `rm -rf [path]` | Force remove directory and contents (Use with caution!) |
| `chmod +x [script]` | Make a file executable |
| `chown [user]:[group] [file]` | Change ownership of a file |
| `ln -s [target] [link]` | Create a symbolic link (shortcut) |
| `tar -czvf [arch.tar.gz] [dir]` | Compress directory into a gzip tarball |
| `tar -xzvf [arch.tar.gz]` | Extract a gzip tarball |

## Search & Text Processing

Finding and manipulating text streams

| Command | Description |
|:--|:--|
| `grep "text" [file]` | Search for "text" in file |
| `grep -r "text" [dir]` | Search recursively for "text" in a directory |
| `find [dir] -name "*.sh"` | Find files ending in .sh in directory |
| `find [dir] -size +100M` | Find files larger than 100MB |
| `head -n 5 [file]` | Show the first 5 lines of a file |
| `tail -f [file]` | Follow the end of a file in real-time (good for logs) |
| `wc -l [file]` | Count the number of lines in a file |
| `sort [file]` | Sort lines alphabetically |
| `uniq` | Filter out adjacent duplicate lines |
| `cut -d',' -f1` | Extract the first column (comma-delimited) |

## Redirection & Pipes

Controlling input and output streams

| Symbol | Description |
|:--|:--|
| `cmd > file` | Redirect output to file (Overwrites) |
| `cmd >> file` | Redirect output to file (Appends) |
| `cmd 2> file` | Redirect Standard Error only to file |
| `cmd &> file` | Redirect Output & Error to file |
| `cmd1 \| cmd2` | Pipe output of cmd1 to cmd2 |
| `cmd < file` | Feed file contents as input to command |
| `<< EOF` | Begin "Here Document" (multiline input block) |

## Job Control

Managing background and foreground processes

| Command | Description |
|:--|:--|
| `command &` | Run command in the background |
| `Ctrl + Z` | Suspend the current foreground process |
| `jobs` | List active jobs in the current shell |
| `fg %1` | Bring job #1 to the foreground |
| `bg %1` | Resume job #1 in the background |
| `kill [pid]` | Kill process by ID |
| `killall [name]` | Kill all processes matching name |
