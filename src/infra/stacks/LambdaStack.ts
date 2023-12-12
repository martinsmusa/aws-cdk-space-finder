import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import {Code, Function, Runtime} from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import {LambdaIntegration} from "aws-cdk-lib/aws-apigateway";
import {ITable} from "aws-cdk-lib/aws-dynamodb";

interface ILambdaStackProps extends StackProps {
    spacesTable: ITable
}

export class LambdaStack extends Stack {
    public readonly helloLambdaIntegration: LambdaIntegration;

    constructor(scope: Construct, id: string, props: ILambdaStackProps) {
        super(scope, id, props);

        const lambdaIntegration = new Function(this, "HelloLambda", {
            runtime: Runtime.NODEJS_20_X,
            handler: 'hello.main',
            code: Code.fromAsset(join(__dirname, '..', '..', 'services')),
            environment: {
                TABLE_NAME: props.spacesTable.tableName,
            }
        })

        this.helloLambdaIntegration = new LambdaIntegration(lambdaIntegration)
    }
}
