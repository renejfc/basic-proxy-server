export const config = {
  username: import.meta.env.USERNAME,
  password: import.meta.env.PASSWORD,
  port: import.meta.env.PORT,
}

export function validateConfig() {
  if (!config.username || !config.password || !config.port) {
    throw new Error("Missing environment variables.")
  }
}