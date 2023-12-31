import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import {Bucket} from "aws-cdk-lib/aws-s3";
import {LambdaIntegration, RestApi} from "aws-cdk-lib/aws-apigateway";

interface ApiStackProps extends StackProps {
  spacesLambdaIntegration: LambdaIntegration;
}

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const api = new RestApi(this, 'SpacesApi')
    const spacesResource = api.root.addResource('spaces')

    spacesResource.addMethod('GET', props.spacesLambdaIntegration)
  }
}
