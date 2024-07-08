# Basic Proxy Server

A simple proxy server I built for personal use. Don't expect it to be too polished.

It forwards requests from clients to another server, and then sends the server's response back to the client. It's useful for masking your requests.

## Features

- [x] Forward HTTP requests and responses
- [x] Basic access authentication
- [x] Simple configuration options
- [ ] HTTPS support
- [ ] Logging system
- [ ] Tunneling (ngrok, cloudflared)
- [ ] Port forwarding automation

## Requirements

- Bun

## Installation

1. Clone the repo:
```sh
git clone https://github.com/renejfc/basic-proxy-server.git
```

2. Install deps:
```sh
bun install
```

## Usage

1. First you'll need to create a `.env` file from the example
```sh
cp .env.example .env
```

2. Configure
In the `.env` file replace the placeholders for whatever you want, these will be needed by the client in order to connect to the proxy.
```
USERNAME=your username here
PASSWORD=your password here
PORT=the port for the server
```

3. Start the proxy server
```sh
bun start
```

>[!NOTE]
> For now you'll need to manually set port forwarding and allow incoming connections to your ip or you can just use a tunnel.
