---
sidebar_position: 2
---

# Provenance

Eden's core data structure is an open, public, decentralized ledger of model checkpoints, [assets created by them](/docs/features/creations), and [user interactions](/docs/features/interactions) stored immutably on Ethereum and IPFS. The ledger records all creations made on Eden alongside the [generator](/docs/features/generators) and input config (prompt, seed, etc) which made it, making it possible to reproduce them.

enabling a broader view of attribution to be captured than is possible in traditional intellectual property systems. An on-chain ledger can potentially scale to many more of the participants in the process that led up to a creation than was previously possible. Attribution is currently limited to the author of the [generator](/docs/features/generators) and the creator who sampled a [creation](/docs/features/creations). Attribution could in principle extend to the providers of training data, code, and compute as well.

The ledger enables:
 - a public record of creations, which can be shared among independent participants
 - interoperability and composability of creations between different platforms
 - a way for new projects to overcome [cold start problems](https://en.wikipedia.org/wiki/Cold_start_(recommender_systems))

:::note
If you are interested in learning more about the benefits of provenance, [start here](https://medium.com/@genekogan/provenance-on-eden-d80dacce572a).
:::note

## Design

Each entry in the ledger contains an image, text, or other generated asset, along with a reference to a specific [generator] and an input config that made it. With this information, it is possible for anybody to reproduce the asset and thereby verify the authenticity of the creation.


## Storage

TBD

## Applications

TBD


