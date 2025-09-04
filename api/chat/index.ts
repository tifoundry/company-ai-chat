import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    try {
        const { message, modelId, conversationHistory } = req.body;

        if (!message || !modelId) {
            context.res = {
                status: 400,
                body: { error: "Message and modelId are required" }
            };
            return;
        }

        // Prepare messages for OpenAI API
        const messages = [
            { role: "system", content: "You are a helpful AI assistant." },
            ...conversationHistory.slice(-10).map(msg => ({
                role: msg.role,
                content: msg.content
            })),
            { role: "user", content: message }
        ];

        // Call Azure OpenAI API
        const response = await fetch(
            `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${modelId}/chat/completions?api-version=2024-02-15-preview`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': process.env.AZURE_OPENAI_API_KEY
                },
                body: JSON.stringify({
                    messages: messages,
                    max_tokens: 1000,
                    temperature: 0.7
                })
            }
        );

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices?.[0]?.message?.content || "No response generated.";

        context.res = {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: { response: aiResponse }
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
