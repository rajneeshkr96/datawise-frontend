import api from '@/services/api';

export const getDataset = () => api.get('/datasets?limit=10');

export const submitForm = (data: {
  name: string;
  owner: string;
  tags: Array<string>;
  description: string;
}) => api.post('/datasets', data);
