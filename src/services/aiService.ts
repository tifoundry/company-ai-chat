import { Message } from '../types';

export const sendMessage = async (
  message: string,
  modelId: string,
  conversationHistory: Message[]
): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        modelId,
        conversationHistory: conversationHistory.slice(-10) // Keep last 10 messages for context
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const fetchModels = async () => {
  try {
    const response = await fetch('/api/models');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};
