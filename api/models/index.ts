import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // Replace these with your actual model deployment names from Azure AI Foundry
    const models = [
        {
            id: "GhatGPT-model-router",  // Change this to your actual deployment name
            name: "GhatGPT-model-router",
            description: "Most capable model for complex tasks",
            endpoint: process.env.AZURE_OPENAI_ENDPOINT,
            deploymentName: "GhatGPT-model-router"  // Change this to your actual deployment name
        },
        {
            id: "grok-3",  // Change this to your actual deployment name
            name: "grok-3",
            description: "Fast and efficient for most tasks",
            endpoint: process.env.AZURE_OPENAI_ENDPOINT,
            deploymentName: "grok-3"  // Change this to your actual deployment name
        }
        // Add more models here if you have them deployed
    ];

    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: models
    };
};

export default httpTrigger;
