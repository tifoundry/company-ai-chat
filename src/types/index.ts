export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  modelId?: string;
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  endpoint: string;
  deploymentName: string;
}

export interface User {
  userId: string;
  userDetails: string;
  userRoles: string[];
}
