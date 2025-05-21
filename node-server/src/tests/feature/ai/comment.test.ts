import request from 'supertest';
import app from '../../../bootstrap/server';
import { createTestUser } from '../../utils/testUser.helper';

describe('POST /api/playground/comment', () => {
  let token: string;

  beforeAll(async () => {
    const { token: userToken } = await createTestUser();
    token = userToken;

    console.log('Token:', token);
  });

  it('should return commented Python code successfully', async () => {
    const code = `
def reverse_string(s):
    return s[::-1]

def calculate_factorial(n):
    if n == 0:
        return 1
    else:
        return n * calculate_factorial(n-1)

def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    `;

    const res = await request(app)
      .post('/api/playground/comment')
      .set('Authorization', `Bearer ${token}`)
      .send({ code, language: 'Python' });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.message).toBe('Code commented successfully');

  });

  it('should fail with 401 if no auth token is provided', async () => {
    const res = await request(app)
      .post('/api/playground/comment')
      .send({
        code: `print("hello")`,
        language: 'Python',
      });

    expect(res.status).toBe(401);
  });
});
