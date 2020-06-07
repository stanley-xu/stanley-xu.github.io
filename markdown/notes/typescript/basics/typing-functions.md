Typing functions
===

## Optional parameters

This is a way of letting client code know they an skip a param

```ts
let i = 0
const incrementIndex = (value?: number) => {
  i += (value === undeffined ? 1 : value)
}

incrementIndex() // OK
incrementIndex(2) // OK
```

## Function interfaces

Functions are first-class citizens, and we can now type them

```ts
type voidCallback = () => void
```

### Improving type inference

Type aliasing can help make callback interfaces easier to read

```ts
const callbackWithIndex = (callback: (i: number) => void) => callback(i)

// equivalent
type NumberCallback = (i: number) => void
const callbackWithIndex = (callback: NumberCallback) => callback(i)
```

Type inference will work when we pass functions as a **reference**

```ts
const numToString = (n: number) => n.toString()

// equivalent
const stringedNums = [1, 2, 3].map(i => numToString(i)) // string[]
const stringedNums = [1, 2, 3].map(numToString) // string[]
```

## Declaring mandatory parameters

Functions may accept many types while we require a select few

We can declare an **indexed-signature** type

```ts
interface AnythingWithName {
  name: string
  [key: string]: any
}

const printFormattedName = (input: AnythingWithName) => { }
printFormattedName({name: "joey"})
printFormattedName({name: "joey", age: 23})
printFormattedName({ id: 1 }) // error!
```

## Accepting sets of parameters

The two most relevant tools are unions and function overloads

### Union type parameters

This makes sense when we have only a few types

```ts
const boolOrNumFn = (input: boolean | number) => {}
boolOrNumFn(true)
boolOrNumFn(23)
```

### Function overloads

This is a function interface that accepts overloaded functions

```ts
interface BoolNumOrStringFn {
  (input: boolean): boolean
  (input: number): number
  (input: string): string
}
```

## Generics

We can parametrize function types

```ts
function wrapInArray<T>(input: T): T[] {
  return [input]
}

const stringArray = wrapInArray('generic af')
const anotherStringArray = wrapInArray<string>('')
const notStringArray: string[] = wrapInArray({}) // error!
```

### Accepting subtype parameters

We can require that subtypes are accepted using the `extends` keyword
- This encourages **extendability** of your generic functions by making them more forward compatible

```ts
interface Drawable {
  draw: () => void
}

function renderToScreen<T extends Drawable>(input: T[]) {
  input.forEach(i => i.draw())
}

const objectsWithDraw = [{ draw: () => {} }, { draw: () => {} }];
renderToScreen(objectsWithDraw);
```

---

> Suppose we want a caching function that could cache any kind of object

Piece of 🍰

```ts
interface CacheHost {
  save: (a: any) => void
}

// We'll accept any subtype of `CacheHost` since we want *at least* the `save` function property
function cache<T, Cache extends CacheHost>(obj: T, cache: Cache): Cache {
  cache.save(obj)
  return cache
}
```

> What if we now want the `CacheHost` to hold a particular kind of type each time?

```ts
interface GenericCacheHost<ContentType> {
  save: (a: ContentType) => void
}

function cache<T, Cache extends GenericCacheHost<T>>(obj: T, cache: Cache): Cache {
  cache.save(obj)
  return cache
}
```
