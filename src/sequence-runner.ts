export default (test) => {
  console.log('test keys:', Object.keys(test))
  const start = new Date()
  const end = new Date()

  return fail({ start, end, test: test.testPath })
}
