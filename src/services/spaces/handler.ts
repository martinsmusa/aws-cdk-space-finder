import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from "aws-lambda";


export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const responseMap: Record<string, any> = {
    GET: 'Get request sent',
    POST: 'Post request sent'
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: responseMap[event.httpMethod] || 'Some other method',
    }),
  };
}
