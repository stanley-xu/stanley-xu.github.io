Immutability
===

Before we dive in to **immutability** let's think about object literals

## Object literals

Since object literals' properties can be changed, TS cannot readily use hard-coded literal types, until we use `as const`

```ts
const user = { name: 'Sabrina' } // TS deduces { name: string } not { name: 'Sabrina' }
const user2 = { name: 'Sabrina' } as const // { name: 'Sabrina' } where `name` is immutable
const user3 = Object.freeze({ name: 'Sabrina' }) // equivalent type
const arrayLiteral = [{ name: 'Brian' }] as const
```

---

## Immutable object types

So to type immutable objects, we may be thinking of the following

### About `const`

Recall that `const` really just means you can't reassign to the identifier

```ts
const num = 1
num = 3 // fails

const notReallyConst = {
  name: 'Celeste'
}
notReallyConst.name = 'Jeff' // works... unfortunately
```

As seen [above](#object-literals) this is why TypeScript cannot define literal typing on `const`-declared object properties

### Solution: `Object.freeze`

```ts
const notReallyConst = {
  name: 'Blathers'
}
const actuallyConst = Object.freeze(notReallyConst)
```

### Solution: `as const`

`as const` will effectively `freeze` your object!

```ts
const actuallyConst = {
  name: 'Tom Nook'
} as const
```

