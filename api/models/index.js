const { app } = require('@azure/functions');

app.http('models', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Models endpoint called');
        
        // Replace these with your actual model deployment names
        const models = [
            {
                id: "gpt-4",  // Your actual deployment name
                name: "GPT-4", 
                description: "Most capable model for complex tasks",
                endpoint: process.env.AZURE_OPENAI_ENDPOINT,
                deploymentName: "gpt-4"  // Your actual deployment name
            },
            {
                id: "gpt-35-turbo",  // Your actual deployment name
                name: "GPT-3.5 Turbo",
                description: "Fast and efficient for most tasks", 
                endpoint: process.env.AZURE_OPENAI_ENDPOINT,
                deploymentName: "gpt-35-turbo"  // Your actual deployment name 
            }
        ];

        return {
            jsonBody: models
        };
    }
});
