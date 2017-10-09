export default async ({
  env,
  isServer,
  isClient,
  store,
  req,
  app,
  redirect
}) => {
  if (isServer && !req) return
  //   app.$axios.defaults.baseURL = 'http://jianshu.dev'

  app.$axios.defaults.baseURL = env.baseUrl
  app.$axios.interceptors.response.use(
    undefined,
    (error) => {
      //   if (error.response && error.response.status === 401 && !error.response.config.isRetry) {
      //     const token = isServer ? store.state.authUser : localStorage.getItem('access_token')
      //     redirect('/')
      //   }
      return Promise.reject(error)
    }
  )
}
