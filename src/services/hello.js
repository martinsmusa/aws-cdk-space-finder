exports.main = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, this reads data from ${process.env.TABLE_NAME}`,
    }),
  }
}
