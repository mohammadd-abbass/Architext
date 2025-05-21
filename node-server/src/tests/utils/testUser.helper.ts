import request from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../bootstrap/server'

export const createTestUser = async () => {
  const fakeUser = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: 'password',
  };

  const response = await request(app)
    .post('/api/auth/signup')
    .send(fakeUser);

  if (response.statusCode !== 201) {
    throw new Error('Failed to create test user');
  }

  const token = response.body.data.token;
  return { token, user: fakeUser };
}
