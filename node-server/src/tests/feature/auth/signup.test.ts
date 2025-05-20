import request from 'supertest';
import app from '../../../bootstrap/server.js';
import { generateFakeUser } from  '../../utils/fakeUser.helper.js'; 

describe('User Signup', () => {
  it('should register a new user and return user data with token', async () => {
    const testUser = await generateFakeUser();
    try{
    const response = await request(app)
      .post('/api/auth/signup')
      .send({
        name: testUser.name,
        email: testUser.email,
        password: testUser.password,
      });

      console.log('Response Body:', response.body);
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty('message', 'User created successfully');
    expect(response.body).toHaveProperty('data.user');
    expect(response.body.data.user).toMatchObject({
      name: testUser.name,
      email: testUser.email,
    });
    expect(response.body.data).toHaveProperty('token');
    expect(typeof response.body.data.token).toBe('string');
    } catch (error) {
        console.error('Error during signup:', error);
    }
  });
});
