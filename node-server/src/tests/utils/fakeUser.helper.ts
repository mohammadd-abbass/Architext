import { faker } from '@faker-js/faker';

export function generateFakeUser() {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: 'password',
  };
}