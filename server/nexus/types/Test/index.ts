import { extendType, objectType } from 'nexus'

export const Test = objectType({
  name: 'Test',
  description: 'Somde test object',
  definition(t) {
    t.id('id')
  },
})

export const TestExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.int('tests', {
      // type: "Test",
      resolve() {
        return [2342, 234, 234]
      },
    })
  },
})
