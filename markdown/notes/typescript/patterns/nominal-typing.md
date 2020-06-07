Nominal Typing
===

Remember, TypeScript's type system is [structural](../basics/type-soundness#structural-typing)

However, there are situations when a type has special context where it cannot be allowed to become another type
- User input strings that are unsafe
- Translation strings
- User identification numbers
- Access tokens

## Creating a nominal type

We can leverage an **intersection** with a unique property

```ts
type ValidatedString = string & { __brand: 'post validation' }
```

To create this nominal type, we can have the app **assert it** at the appropriate times

```ts
const validateUserInput = (input: string) => {
  const simpleValidatedInput = input.replace(/\</g, '<=')
  return simpleValidatedInput as ValidatedString // assert as nominal type!
}

// later
const printName = (name: ValidatedString) => console.log(name)
```

---

See also
- https://github.com/Microsoft/TypeScript/issues/202
- https://michalzalecki.com/nominal-typing-in-typescript/
