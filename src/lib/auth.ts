import { config } from "./config"

const validateCredentials = (username: string, password: string) => {
  return username === config.username && password === config.password
}

export async function middleware(req: Request, next: (req: Request) => Promise<Response>): Promise<Response> {
  const authorization = req.headers.get("Authorization")
  if (!authorization) return new Response("Authentication required", { status: 401 })

  const [scheme, credentials] = authorization.split(" ")
  if (scheme.toLowerCase() !== "basic") return new Response("Invalid authentication type", { status: 401 })

  const [username, password] = atob(credentials).split(":")
  if (!validateCredentials(username, password)) return new Response("Invalid credentials", { status: 401 })

  return await next(req)
}
