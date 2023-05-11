---
sidebar_position: 2
---

# Architecture

Eden has a two-layer architecture:

* **Generators** are remote servers which produce generative assets on demand. 
* **Eden API** is a REST API which intermediates requests between clients and generators, and is responsible for storing and updating data (including on-chain), business logic, and authentication.

The [Eden Client SDK](/docs/sdk/quickstart) is a JavaScript library which provides a convenient interface for interacting with the Eden API.

## Generators

:::tip
To learn more about how to deploy your own generators on Eden, see the [Generators](/docs/sdk/generators) section.
:::tip

Generators are remote servers which typically run inference on a model checkpoint and return the result along with useful metadata. Generators are specified by a model checkpoint, a container for running inference, and an input specification. Given these three pieces of information, all generative assets are fully reproducible.

In principle, generators can be run by any provider that conforms to the input/output specification of the API. Eden currently supports two providers out-of-the-box, [Replicate](https://replicate.com) (which currently hosts [Eden's Stable Diffusion pipeline](https://replicate.com/abraham-ai/eden-sd-pipelines)) and [OpenAI](https://platform.openai.com/), 

Additionally, Eden maintains [a library](https://github.com/abraham-ai/eden) for spinning up your own provider.

# API

[Eden's API](https://github.com/abraham-ai/eden-api) is a REST API which is responsible for the business logic of the platform, including managing the database, authentication, interfacing with the blockchain, and routing requests between clients and generators.


SDK
 - quick start
   - setting up the API
   - making a basic call
 - authentication
 - generators
   - how to make generators
 - creations
 - users
 - manna
 - collections and reactions
