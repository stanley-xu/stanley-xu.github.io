Soundness
===

Let's first talk about TypeScript's particular kind of type deduction

## Structural typing

TypeScript's types are based on **structural typing** and not **nominal typing**
- Nominal typing refers to the type systems of `Java/C#/C++` that rely on class inheritance
- Structural typing refers specifically to the **shape** of the data (i.e. its data members), and nothing about its name

TypeScript only checks these data *shapes*

```ts
interface Ball { diameter: number }
interface Sphere { diameter: number }

let ball: Ball = { diameter: 10 }
let sphere: Sphere = { diameter: 20 }
sphere = ball // OK (same shape)
ball = sphere // OK (same shape)

interface Tube {
  diameter: number
  length: number
}
let tube: Tube = { diameter: 12, length: 3 }
tube = ball // error! (ball is missing `length`)
ball = tube // OK
```

Implications
- To TypeScript, `Ball` and `Sphere` are identical–even though they're clearly (nominally) not...
- To TypeScript, a `Dog` with **at least as many** members as `Animal` is a subtype! (regardless of class heritage)

---

## Defining soundness

Broadly speaking, a type system is sound if the compiler can guarantee that a value is of a certain type during runtime, not just during compilation

TypeScript is a superset of JavaScript
- This means it must support its features while inheriting its quirks

## Places where TypeScript is not sound

Here are some situations when TypeScript is **unsound**
- This is good to be aware of so you aren't caught by surprise...

### Type assertions

TypeScript gives **us** the ability to **assert (and override)** that a value is of a certain type
- This consequently weakens TypeScript's type guarantees and thus soundness

```ts
const age = ('23' as any) as number
```

*Note:* unlike some other languages, TypeScript tries not to do any runtime type-checking

### Function parameter bi-variance

In a nutshell, TypeScript is more permissive when being asked if `(x: Dog) => void` is assignable to `(x: Animal) => void`

It's permissive enough to allow the following error:

```ts
function trainDog(d: Dog) { ... }
function cloneAnimal(source: Animal, done: (result: Animal) => void): void { ... }
let c = new Cat();

// Runtime error here occurs because we end up invoking 'trainDog' with a 'Cat'
cloneAnimal(c, trainDog);
```

TypeScript can raise an error when this happens via `strictFunctionTypes`
- Or, you could work around this particular case with function overloads

#### Counter-argument

TypeScript has opted for convenience, supporting common situations like these where we feel the code is correct:

```ts
function checkIfAnimalsAreAwake(arr: Animal[]) { ... }
let myPets: Dog[] = [spot, fido];

// Should we error? Can't substitute Dog[] for Animal[]?
checkIfAnimalsAreAwake(myPets);
```
*Note:* the code here is 100% correct so long as `checkIfAnimalsAreAwake` doesn't change the array

> Is there any sane reason for you to change the array?
>
> Possibly? But the naming (*check*IfAnimalsAreAwake) doesn't suggest so!

If TypeScript fixes the error in the original example, it would have to force **contravariance**
- Checking if `Animal` is assignable to `Dog` (if not, it complains about `trainDog` with a `Cat`)
- But this then breaks this example with `checkIfAnimalsAreAwake`...

---

Here's a web application; being a superset of JavaScript, TypeScript needs to support the following

```ts
interface InputEvent {
  timestamp: number;
}
interface MouseInputEvent extends InputEvent {
  x: number;
  y: number;
}
interface KeyboardInputEvent extends InputEvent {
  keyCode: number;
}

function listenForEvent(eventType: "keyboard" | "mouse", handler: (event: InputEvent) => void) {}

// OK: TypeScript accepts derived types
listenForEvent("keyboard", (event: KeyboardInputEvent) => {});
listenForEvent("mouse", (event: MouseInputEvent) => {});

// OK: This can go all the way back to the smallest common type:
listenForEvent("mouse", (event: {}) => {});

// But no further:
listenForEvent("mouse", (event: string) => {}); // error!
```

### Parameter discarding

Functions are type-checked via their structures too with 1 extra caveat: **parameters can be discarded** during type-checking 
- This means that passing `(arg: string) => void` as a param of `(arg1: string, arg2: number)` is correct

```ts
function handler(arg: string) { ... }
function doSomething(callback: (arg1: string, arg2: number) => void) { callback('hello', 42); }

// Expected error because 'doSomething' wants a callback of 2 parameters, but 'handler' only accepts 1
doSomething(handler);
```

We actually want this param discarding because in JS, it's common to discard unused parameters

#### Counter-argument

This is extremely common JavaScript code

```ts
let items = [1, 2, 3];
items.forEach(arg => console.log(arg));
```

If TypeScript enforced *all params* at all times, we would have to pass all parameters to `forEach` all the time 🤦‍♂️
- Since the signature is `forEach(cb: (value, index, array) => void)`
- This is very annoying...

---

*Note:* you cannot argue that `forEach` should just mark its parameters as optional!
- e.g. `forEach(callback: (element?: T, index?: number, array?: T[]))`

When parameters are indicated as optional, they could be **entirely skipped** and not passed when invoking the callback

```ts
// We want a callback param that *could* accept a number param
function myForEach(callback: (x?: number) => void) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    callback(42);
  }
}
```

But `forEach` **always** invokes its callback with all params
- If `forEach`'s callback params were all optional, then it couldn't support all the callbacks that it currently can!

### Rest parameters

These are assumed to be all optional, so TypeScript has no way to enforce how many there are

```ts
function getRandomNumbers(count: number, callback: (...args: number[]) => void) {}
```

### `void` functions can match to non-`void` ones

```ts
const getPI = () => 3.14 // () => number
function run(fn: () => void) { fn() }

run(getPI) // OK
```
