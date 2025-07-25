import request from 'supertest';
import app from '../../app';

describe('GET /health', () => {
  it('should return status ok and timestamp', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('timestamp');
  });
});
