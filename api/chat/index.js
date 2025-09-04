const { app } = require('@azure/functions');

app.http('chat', {
    methods: ['POST'],
    authLevel: 'anonymous', 
    handler: async (request, context) => {
        context.log('Chat endpoint called');
        
        try {
            const body = await request.json();
            const { message, modelId, conversationHistory } = body || {};

            if (!message || !modelId) {
                return {
                    status: 400,
                    jsonBody: { error: "Message and modelId are required" }
                };
            }

            // Test response for now
            const response = `Hello! You asked: "${message}" using model: ${modelId}. This is a test response from the API.`;

            return {
                jsonBody: { response }
            };

        } catch (error) {
            context.log.error('Error in chat function:', error);
            return {
                status: 500,
                jsonBody: { error: 'Internal server error' }
            };
        }
    }
});
