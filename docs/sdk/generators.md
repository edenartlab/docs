---
sidebar_position: 3
---

# Generators

* **Generators** are remote servers which produce generative assets on demand. 
* **Eden API** is a REST API which intermediates requests between clients and generators, and is responsible for storing and updating data (including on-chain), business logic, and authentication.


Generators are remote servers which typically run inference on a model checkpoint and return the result along with useful metadata. Generators are specified by a model checkpoint, a container for running inference, and an input specification. Given these three pieces of information, all generative assets are fully reproducible.

In principle, generators can be run by any provider that conforms to the input/output specification of the API. Eden currently supports two providers out-of-the-box, [Replicate](https://replicate.com) (which currently hosts [Eden's Stable Diffusion pipeline](https://replicate.com/abraham-ai/eden-sd-pipelines)) and [OpenAI](https://platform.openai.com/), 

Additionally, Eden maintains [a library](https://github.com/abraham-ai/eden) for spinning up your own provider.


A Generator is a specification for a generative program that produce [creations](/docs/sdk/creations) in the form of images, videos, and text. A generator consists of:

* a specific model checkpoint (e.g. Stable Diffusion v2.1)
* a container for running inference (e.g. Replicate, Huggingface)
* an input specification (e.g. prompt, seed, parameters)

With an open-source generator, it is possible to verify or reproduce any creation made on Eden from its input. This is what enables Eden's provenance, and facilitates coordination among the many roles in the generative AI ecosystem. 

## Generators on Eden

To get a list of generators on Eden, use the `getGenerators` method:

```js
let result = await eden.getGenerators();
for (let generator of result.generators) {
  console.log(generator);
}
```

To get a specific generator, latest version

```js
let real2real = await eden.getGenerator("real2real");
console.log(real2real);
```

Or to get a specific version

```js
let real2real_v1 = await eden.getGenerator(
    "real2real", 
    "5c0bbf5c9b41c3549f2a70de7d00fc3fa9ef24594255ca0342894f02b3cdd022"
);
console.log(real2real_v1);
```

To get the config specification for a generator, use:

```js
const params = real2real_v1.parameters;
console.log(params);
```