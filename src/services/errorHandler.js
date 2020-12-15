import errorHandlerApi from 'api/errorHandler'

export default async (error = {}, ref = '') =>
  errorHandlerApi.post(`/?ref=${ref}`, JSON.stringify(error))
