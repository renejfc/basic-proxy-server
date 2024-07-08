import type { Serve } from "bun"
import { proxy } from "./lib/proxy"
import { middleware as authMiddleware } from "./lib/auth"
import { config, validateConfig } from "./lib/config"

validateConfig()
console.log("Proxy server running")

export default {
  fetch: req => {
    console.log(`Request received: ${req.url}`)
    return authMiddleware(req, proxy)
  },
  port: config.port,
} satisfies Serve