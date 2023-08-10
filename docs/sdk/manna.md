---
sidebar_position: 4
---

# Manna

Users must expend Manna to make Creations.

## Get Manna Balance

To get your user's Manna balance, use the `getManna` method:

```js
const manna = await eden.getManna();
console.log(manna);
```

:::warning
There is currently no way to retrieve the cost in Manna of a specific config or job requests. This is a high priority feature.
:::warning