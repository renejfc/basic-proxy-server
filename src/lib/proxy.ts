export async function proxy(req: Request): Promise<Response> {
  const url = new URL(req.url, `http://${req.headers.get("host")}`)
  const targetUrl = url.toString()

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: req.headers,
      body: req.body,
    })

    return new Response(response.body, {
      headers: response.headers,
      status: response.status,
      statusText: response.statusText,
    })
  } catch (error) {
    if (error instanceof Error) return new Response(`Error: ${error.message}`, { status: 500 })
    return new Response("An unknown error occurred", { status: 500 })
  }
}
