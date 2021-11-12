// const defaultContentType = 'application/json'

type Props = {
  path: string
  method: string
  body?: any
}

export default async (payload: Props) => {
  const base = 'http://localhost:5000'
  const { path, method, body } = payload

  const url = `${base}/${path}`

  const response = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
  })

  const responseBody = await response.json()
  if (response.status !== 200) {
    const { message } = responseBody
    throw Error(message)
  }
  return responseBody
}
