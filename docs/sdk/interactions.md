---
sidebar_position: 5
---

# Collections and Reactions

Users can interact with or curate creations in two ways:

1. By adding them to a collection.
2. By adding a reaction to them.

## Collections

Collections are a way for users to organize creations. A collection is simply an array of creations. Currently only the user that creates a collection may add a creation to it, but in the future, there will be more complex permissions available.

To get a list of collections in all of Eden, use the `getCollections` method:

```js
const collections = await eden.getCollections();
console.log(collections);
```

To create a new collection, use the `createCollection` method:

```js
const collection = await eden.createCollection('My Collection');
```

To add a creation to a collection, use the `addCreation` method:

```js
const creation = await eden.create("create", {
    text_input: "a dog jumping over a fence",
});
await collection.addCreation(creation);
```

Your collections can be browsed on [the Garden](https://garden.eden.art).

## Reactions

Reactions are a way for users to express something about a creation. A reaction is simply a string emoji. A reaction can contain any string (e.g. "happy", "calming"). 

:::tip
[The Garden](https://garden.eden.art) counts and displays reactions of "👍" and "🔥".
:::tip

To add a reaction to a creation, use the `react` method:

```js
const creation = await eden.create("create", {
    text_input: "a dog jumping over a fence",
});
await creation.react("👍");
```

To get a list of reactions on a creation, use the `getReactions` method. If no argument is supplied, all reactions will be returned. If the argument is an array of strings, only those reactions will be returned.

```js
const reactions = await creation.getReactions(["👍", "🔥"]);
console.log(reactions);
```

Reactions and collections are useful training signals for future models. For example, a model could be trained to generate images that are "calming" or "happy" based on the reactions they receive.