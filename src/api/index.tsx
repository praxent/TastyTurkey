type Props = {
  path: string
  method: string
  body?: any
}

export default async (payload: Props) => {
  const base = 'https://tasty-turkey.herokuapp.com'
  const { path, method, body } = payload

  const url = `${base}/${path}`

  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })

  const responseBody = await response.json()
  if (response.status !== 200) {
    const { message } = responseBody
    throw Error(message)
  }
  return responseBody
}
