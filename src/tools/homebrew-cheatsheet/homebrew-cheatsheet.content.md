## Installation

Homebrew simplifies the installation of software on macOS and Linux.

### macOS Installation

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Linux Installation

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, follow the on-screen instructions to add Homebrew to your `PATH`.

## Basic Package Management

| Command | Description |
|:--|:--|
| `brew install <package>` | Installs a specified formula or cask |
| `brew uninstall <package>` | Uninstalls a specified formula or cask |
| `brew upgrade` | Upgrades all outdated installed formulae and casks |
| `brew upgrade <package>` | Upgrades a specific formula or cask |
| `brew list` | Lists all installed formulae and casks |
| `brew search <keyword>` | Searches for available formulae and casks |
| `brew info <package>` | Displays detailed information about a package |
| `brew update` | Fetches the latest Homebrew and formula definitions |

## Cask Commands for GUI Applications

| Command | Description |
|:--|:--|
| `brew install --cask <app>` | Installs a macOS application (cask) |
| `brew uninstall --cask <app>` | Uninstalls a macOS application (cask) |
| `brew list --cask` | Lists all installed casks |
| `brew info --cask <app>` | Displays detailed information about a cask |
| `brew search --cask <keyword>` | Searches for available casks |

## Dependency and Formula Management

| Command | Description |
|:--|:--|
| `brew deps <package>` | Lists the dependencies of a specified package |
| `brew autoremove` | Removes unused dependencies installed automatically |
| `brew link <package>` | Symlinks a formula's installed version into Homebrew's prefix |
| `brew unlink <package>` | Unlinks a formula from Homebrew's prefix |

## Troubleshooting Commands

| Command | Description |
|:--|:--|
| `brew doctor` | Checks your Homebrew installation for potential problems |
| `brew cleanup` | Removes old versions and downloaded installation files |
| `brew reinstall <package>` | Uninstalls and then reinstalls a specified formula or cask |
| `brew prune` | Removes dead symlinks from the Homebrew prefix |
| `brew config` | Displays Homebrew's configuration and environment |

## Environment and Configuration

| Command | Description |
|:--|:--|
| `brew shellenv` | Prints environment variables for Homebrew to be sourced |
| `brew tap <user>/<repo>` | Adds a new tap (Git repository of formulae/casks) |
| `brew untap <user>/<repo>` | Removes a previously added tap |
| `brew tap` | Lists all currently tapped repositories |

## Pinning Versions

| Command | Description |
|:--|:--|
| `brew pin <package>` | Pins a formula, preventing it from being upgraded |
| `brew unpin <package>` | Unpins a formula, allowing it to be upgraded again |
| `brew list --pinned` | Lists all currently pinned formulae |

## Brewfile and `brew bundle`

| Command | Description |
|:--|:--|
| `brew bundle dump` | Generates a Brewfile from currently installed packages |
| `brew bundle install` | Installs all packages listed in a Brewfile |
| `brew bundle check` | Checks if all Brewfile packages are installed |
| `brew bundle cleanup` | Uninstalls packages not listed in your Brewfile |

## Services Management

| Command | Description |
|:--|:--|
| `brew services start <service>` | Starts a Homebrew-installed service |
| `brew services stop <service>` | Stops a Homebrew-installed service |
| `brew services restart <service>` | Restarts a Homebrew-installed service |
| `brew services list` | Lists all services managed by Homebrew |
