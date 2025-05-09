export const RouterTypes = {
  Index: 'index',
  Foo: 'foo',
  Bar: 'bar',
  Login: 'login',
  Register: 'register',
} as const

export type RouterTypes = (typeof RouterTypes)[keyof typeof RouterTypes]
