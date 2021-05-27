# JSON Schema

## Basic Usage

```jsx
const personSchema = {
  $id: 'https://example.com/person.schema.json',
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'Person',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      description: "The person's first name."
    },
    lastName: {
      type: 'string',
      description: "The person's last name."
    },
    age: {
      description: 'Age in years which must be equal to or greater than zero.',
      type: 'integer',
      minimum: 0
    },
    huntingSkill: {
      type: 'string',
      description: 'The measured skill for hunting',
      default: 'lazy',
      example: 'adventurous',
      enum: ['clueless', 'lazy', 'adventurous', 'aggressive']
    }
  },
  required: ['firstName', 'lastName']
}

<JsonSchema schema={personSchema} />
```
