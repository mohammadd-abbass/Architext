import request from 'supertest';
import app from '../../../bootstrap/server.js';
import { createTestUser } from '../../utils/testUser.helper.js';

describe('User Login', () => {
  it('should log in with valid credentials and return a token', async () => {
    const {user} = await createTestUser();

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty('message', 'Login successful');
    expect(response.body.data).toHaveProperty('token');
    expect(response.body.data.user.email).toBe(user.email);
  });
});
