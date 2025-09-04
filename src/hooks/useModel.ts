import { useState, useEffect } from 'react';
import { AIModel } from '../types';
import { fetchModels } from '../services/aiService';

export const useModels = () => {
  const [models, setModels] = useState<AIModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      try {
        setLoading(true);
        const fetchedModels = await fetchModels();
        setModels(fetchedModels);
        setError(null);
      } catch (err) {
        setError('Failed to load models');
        console.error('Error loading models:', err);
      } finally {
        setLoading(false);
      }
    };

    loadModels();
  }, []);

  return { models, loading, error };
};
