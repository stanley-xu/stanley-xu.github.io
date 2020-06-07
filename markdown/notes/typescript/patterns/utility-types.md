Utility Types
===

When a certain types becomes so useful, it could be merged into TypeScript's core built-in types

Here are a couple that have been through that

## `Partial<T>`

This converts all of type `T`'s properties into **optional** ones

```ts
interface Sticker {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  submitter: undefined | string
}

type StickerUpdateParam = Partial<Sticker>
```

## `Readonly<T>`

This converts all of type `T`'s properties into `readonly` ones

```ts
type StickerFromAPI = Readonly<Sticker>
```

## `Record<KeysFrom, T>`

Creates a **"mapped"** type with properties from `KeysFrom`, each with a type of `T`

```ts
type Pages = 'home' | 'stickers' | 'about' | 'contact'
interface PageInfo {
  title: string
  url: string
  axTitle?: string
}

const navigationInfo: Record<Pages, PageInfo> = {
  home: { title: "Home", url: "/" },
  about: { title: "About" , url: "/about"},
  contact: { title: "Contact", url: "/contact" },
  stickers: { title: "Stickers", url: "/stickers/all" }
}
```

## `Pick<T, Keys>`

Creates a type with a **subset of properties** from `T` by white-listing allowed properties

```ts
type StickerSortPreview = Pick<Sticker, 'name' | 'updatedAt'>
```

## `Omit<T, Keys>`

Creates a type with a **subset of properties** from `T` by black-listing unallowed properties

```ts
type StickerTimeMetadata = Omit<Sticker, 'name'>
```
