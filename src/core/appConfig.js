const createEntry = (port = 33901, ip = '124.221.44.7') => {
  return process.env.NODE_ENV === 'development' ? `http://localhost:${port}` : `http://${ip}:${port}`
}
export default appConfig = [
  {
    name: 'comp4',
    entry: createEntry(33904),
    container: '#load-micro-app',
    props: {
      initUrl: ''
    }
  }
]
