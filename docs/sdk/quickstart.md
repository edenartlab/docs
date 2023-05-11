---
sidebar_position: 1
---

# Quickstart

Eden exposes a REST API at https://api.eden.art. The easiest way to interact with it is through the [Eden SDK](https://github.com/abraham-ai/eden-sdk).

:::info
Eden is looking for developers to help us improve the API and SDK. In particular, we are looking for help with:

* Generating Swagger docs and UI for the API
* Creating commonjs version of the SDK for use on client-side.
* Making a package for Eden hooks and components.

Please reach out on [Discord](https://discord.gg/4dSYwDT) if you are interested in helping out!
:::info

## Installation

To install the SDK with npm or yarn:

```bash
npm install eden-sdk
```

or 

```bash
yarn add eden-sdk`
```

In Node, you can import the SDK with:

```js
import {EdenClient} from "eden-sdk";
const eden = new EdenClient();
```

## Authentication

All write requests to the API require authentication. To get an API key and secret, go to [the app](https://app.eden.art), navigate to the Account tab, and create a new API key and secret.

To authenticate with the API, use the `loginApi` method:

```js
const apiKey = 'YOUR_API_KEY';
const apiSecret = 'YOUR_API_SECRET';
eden.loginApi(apiKey, apiSecret);
```

In the [next section](/docs/sdk/creations.md), we will walk through the process of requesting creations.