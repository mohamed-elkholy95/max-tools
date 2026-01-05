# Max-Tools

A collection of useful online tools for developers and IT professionals, built with Vue.js.

## Features

- **Cheat Sheets** - Git, Regex, Bash, Vim, Tmux, macOS references
- **Crypto Tools** - Token generator, hash functions, UUID/ULID, encryption, bcrypt
- **Converters** - Date/time, base conversion, color, case, encoding formats
- **Web Tools** - URL parser, JWT decoder, HTML entities, meta tag generator
- **Development** - JSON viewer, SQL formatter, crontab generator, chmod calculator
- **Network** - IPv4/IPv6 tools, MAC address lookup, subnet calculator
- **Text Tools** - Lorem ipsum, text statistics, diff viewer, emoji picker
- And many more...

## Tech Stack

- Vue 3 + TypeScript
- Vite
- Naive UI
- UnoCSS
- Pinia

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Run Tests

```bash
pnpm test
```

## Self Host with Docker

```bash
docker run -d --name max-tools --restart unless-stopped -p 8080:80 max-tools:latest
```

## Creating a New Tool

```bash
pnpm run script:create:tool my-tool-name
```

This creates a new tool directory in `src/tools` with boilerplate files.

## License

This project is under the [GNU GPLv3](LICENSE).
