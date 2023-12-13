import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from "aws-lambda";
import {v4} from "uuid";
import {ListBucketsCommand, S3Client} from "@aws-sdk/client-s3";

const s3Client = new S3Client()

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
  const command = new ListBucketsCommand({})
  const bucketList = (await s3Client.send(command)).Buckets

  console.log(bucketList)

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, this is a list of buckets: ${JSON.stringify(bucketList)}, id: ${v4()}`,
    }),
  };

  return response;
}
