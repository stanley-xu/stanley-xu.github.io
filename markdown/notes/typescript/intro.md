TypeScript Primer
===

TypeScript ships with these types by default: `string`, `number`, `object`, `undefined`, `null`, `any` and more!

## Type annotation

Annotate your types *inline* for type safety from the compiler

```ts
let anything: any // no type safety (regular JS)
let stringVar: string
stringVar = 2 // error!

let strings: string[] = []
strings.push(1) // error!
```

## Type inference

### Inference via assignment

It just works! ✨

```ts
let inferredNum = 2 // deduced number
inferredNum = 'two' // error!
let phoneBook = [{ name: 'Isabelle', phoneNo: 12345 }] // deduced { name: string, phoneNo: number }
const voidCallbackWithIndex = (i: number) => void // deduced function type
```

You can be clever by using the `typeof` operator

```ts
type Contact = typeof phoneBook // describes the shape of the existing `phoneBook`
```

## Type definitions

TypeScript compiler will either read your type definitions or infer them
- See also [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

The main tools you'd use to define types are `type` aliases and `interface`s

### `type` and `interface`

These are both very similar in features

```ts
// type alias
type Book = { title: string, author: string }
type BookShelf = Book[] // composition
type WebArticle = Book & { url: string } // extension

// interface
interface IBook {
  title: string
  author: string
}
type YellowPages = PhoneBook[] // composition
interface PhoneBook extends IBook { phoneNo: number } // extension
```

Check out [unions and intersections](#unions-and-intersections)

### Which to use?

It's recommended to default to interfaces for **better error messages**

*Note:* `interface` is open to extension while `type` isn't
- By that, they mean you can "redeclare" an interface to extend it

```ts
interface Kitten { purrs: boolean }
interface Kitten { colour: string } // OK
```

## Primitives

Here are the TypeScript essentials

### Literals

TypeScript allows you to specify hard-coded **literals as types** themselves!

```ts
declare function greet(greeting: 'Welcome back sir 👋')
const greeting = 'Welcome back sir 👋'
greet(greeting) // OK

declare function transition(state: 'initial' | 'pending' | 'terminal') // more useful
```

*Note:* variables declared with `let` are **widened**
- Consequently, they don't match the required literal type and fails

See also
- This is more useful when used with [unions](#unions-and-intersections) or instead with [enums](#enums)
- More about [object literals and immutability](patterns/immutability)

### Unions and intersections

This is super useful for expressing a type as a set of other types 👇
- Unions (`|`): an "OR" of types
  - *Note:* be careful of **type widening**
- Intersections (`&`): an "AND" of types
  - Useful for **composing** types

```ts
// union type
type WindowStates = "open" | "closed" | "minimized" | string; // `string` widens `WindowStates`, making it only a string

interface ErrorHandling {
  success: boolean
  error?: { message: string }
}
interface ArtworksData {
  artworks: { title: string }[]
}
// intersection type
type ArtworksResponse = ArtworksData & ErrorHandling
```

More about [type widening](basics/type-correctness#type-widening-&-narrowing)

---

This can be really useful when dealing with multiple type requirements

> Suppose we want to fire a request to create an artist's bio
>
> The request requires the artist's ID and additionally, either HTML or markdown content

Piece of 🍰

```ts
interface CreateArtistBioBase {
  artistID: string
  thirdParty?: boolean
}

type CreateArtistBioRequest = CreateArtistBioBase & { html: string } | { markdown: string }
```

### Enums

The classic enum

```ts
enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized, // 401
  PaymentRequired, // 402
  Forbidden, // 403
  NotFound // 404
}
const okNumber = StatusCodes.OK; // 200
const okNumberIndex = StatusCodes["OK"]; // 200
const stringBadRequest = StatusCodes[400]; // 'BadRequest' (reverse lookup)
```

### Tuples

TypeScript brings us tuples! 🎉
- JavaScript allows multi-type arrays, which TypeScript infers as an *array of union types*
  - We need to **annotate** explicitly to get tuples
- TypeScript tuples are type checked at its specific parts
  - We can be more confident about a type at its proper position and the length of the tuple too

```ts
const failingResponse = ['Not found', 404] // (string | number)[]
const passingResponse: [string, number] = ['{}', 200] // [string, number]
if (passingResponse[1] === 200) { JSON.parse(passingResponse[0]) } // OK
passingResponse[2] // error
```

TypeScript supports **rest** arguments if we don't know the number of remaining args

```ts
type PayStubs = [StaffAccount, ...number[]] // spread operator
```

### `any`

For now, just think about `any` as an escape hatch to JavaScript
- *Note:* you'll forego any kind of typechecking of course...

```ts
const thing: any = retrieveSomething()
thing = 2 // OK
```

More about type correctness [here](basics/type-correctness)

## Code flow

"Code flow" refers to how TypeScript's type definitions change throughout the code

```ts
const users = [{ name: "Ahmed" }, { name: "Gemma" }, { name: "Jon" }]
const jon = users.find(u => u.name === "jon")

if (jon) { // { name: string } | undefined
  jon // { name: string }
} else {
  jon // undefined
}
```

This ensures correctness throughout our code!

---

> What happens if I want to define behaviour constrained to certain types?

We can resort to JS idioms like **duck typing**
- Specifically, prefer to use `'propertyName' in object` to test for unique type's properties

However, it's recommended to use [type guards](patterns/type-guards)

## Generics

As in the case of `C++/C#`, generics enable parametrized type definitions

```ts
function wrapInArray<T>(input: T): T[] {
  return [input]
}
const stringArray: string[] = wrapInArray(1) // error!
```

---

Awesome, you're ready to get started 🙌

But check these out when you have time
- [Typing functions](basics/typing-functions)
- [Typing classes](basics/typing-classes)
- [Useful utility types](patterns/utility-types)

Now get typing!

Feel free to check out the attached `sandbox` repo (it's a basic node + TS project) to test drive TS
