export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        handleError(response)
        return response.json()
      })
}

const handleError = (response) => {
  if (!response.ok) {
    throw new Error()
  }
}
