import request from 'supertest';
import app from '../../../bootstrap/server.js';
import { generateFakeUser } from '../../utils/fakeUser.helper.js'; 

let token: string;

beforeAll(async () => {
  const fakeUser = generateFakeUser();

  const response = await request(app)
    .post('/api/auth/signup')
    .send(fakeUser);

  token = response.body.data?.token;

  if (!token) {
    throw new Error(`Failed to get auth token. Response: ${JSON.stringify(response.body)}`);
  }
});

describe('POST /api/ai/generate-config', () => {
  it('should return success and a valid config result for a valid input', async () => {
    const validInput = {
      config: "I want to create a nodejs project following laravel style ane mvc design pattern"
    };

    const response = await request(app)
      .post('/api/ai/generate-config')
      .set('Authorization', `Bearer ${token}`)
      .send(validInput);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('result');

    const result = response.body.data.result;

    let parsed;
    try {
      parsed = JSON.parse(result);
      expect(parsed).toHaveProperty('layers');
      expect(parsed).toHaveProperty('codeRules');
      expect(parsed.layers).toHaveProperty('controllers');
    } catch (err) {
      throw new Error(`Expected a JSON result, but parsing failed: ${err}\nRaw result: ${result}`);
    }
  });

  it('should handle invalid input gracefully (e.g. empty config)', async () => {
    const invalidInput = { config: "" };

    const response = await request(app)
      .post('/api/ai/generate-config')
      .set('Authorization', `Bearer ${token}`)
      .send(invalidInput);

    expect([400, 422]).toContain(response.statusCode);
    expect(response.body).toHaveProperty('status');
    expect(['error', 'fail']).toContain(response.body.status);
    expect(response.body).toHaveProperty('message');
  });
});
