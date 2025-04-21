import {faker} from "@faker-js/faker";

export interface PostInterface {
    title: string;
    body: string;
}

export function createRandomPost(): PostInterface {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}