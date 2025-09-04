module.exports = async function (context, req) {
    context.log('Models function processed a request.');

    const models = [
        {
            id: "GhatGPT-model-router",
            name: "ChatGPT Model Router", 
            description: "AI model router deployment",
            endpoint: process.env.AZURE_OPENAI_ENDPOINT,
            deploymentName: "GhatGPT-model-router"
        },
        {
            id: "Grok-3",  // ← Need the real Grok deployment name
            name: "Grok-3",
            description: "Grok AI model", 
            endpoint: process.env.AZURE_OPENAI_ENDPOINT,
            deploymentName: "Grok-3"  // ← Same as id
        }
    ];

    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: models
    };
};
