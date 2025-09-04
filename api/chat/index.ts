import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    try {
        const { message, modelId, conversationHistory } = req.body || {};

        if (!message || !modelId) {
            context.res = {
                status: 400,
                body: { error: "Message and modelId are required" }
            };
            return;
        }

        // For now, return a simple response to test the deployment
        const response = `Hello! You asked: "${message}" using model: ${modelId}. This is a test response.`;

        context.res = {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: { response }
        };

    } catch (error) {
        context.log.error('Error in chat function:', error);
        context.res = {
            status: 500,
            body: { error: 'Internal server error' }
        };
    }
};

export default httpTrigger;
