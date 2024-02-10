require('../register');

const assert = require('assert');
const { print } = require('graphql');
const { readFileSync } = require('fs');

describe('GraphQL Node Import', () => {
  it('should import correct definitions', () => {
    const typeDefs = require('./schema.graphql');
    assert(
      print(typeDefs).replace(/\s\s+/g, ' ') ===
        readFileSync(require.resolve('./schema.graphql'), 'utf8').replace(
          /\s\s+/g,
          ' '
        )
    );
  });
});