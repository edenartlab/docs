---
sidebar_position: 8
---

# SDK

:::info
API keys are currently in beta. If you'd like to use the SDK, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::info

The Eden SDK is a JavaScript library for interacting with the Eden API. The SDK allows you to make creation requests programatically and integrate Eden-facing widgets into your own applications. It is available as an npm package, with a commonjs version and Python SDK also planned for the near future.

Full API documentation is available at [https://api.eden.art/documentation](https://api.eden.art/documentation/). Some browsers have issues opening the documentation, so if you have trouble, try using a different browser or use incognito mode.

## Get API credentials

To get an API key, please message one of the devs in [the Discord](https://discord.com/invite/4dSYwDT) and ask for one.

## Installation

You can install the SDK with npm, yarn, or pnpm:

```bash
npm install @edenlabs/eden-sdk
```

## Make a creation

A full list of generators and their config parameters can be found in the [creation tool](https://beta.eden.art/create).

All requests to Eden go through the `EdenClient` class. To make a task request, target a specific generator (e.g. "create") with a configuration object. For example:

```js
import {EdenClient} from "@edenlabs/eden-sdk";

const eden = new EdenClient({
  apiKey: "YOUR_EDEN_API_KEY",
  apiSecret: "YOUR_EDEN_API_SECRET",
});

const config = {
  text_input: "An apple tree in a field",
};

const urls = await eden.create({
  generatorName: "create",
  config: config
});
console.log(urls[0])
```


Alternatively, you can create a task and poll for the result manually:

```js
const taskResult = await eden.tasks.create({
  generatorName: "create", 
  config: config
});
```

The `tasks.create` method is asynchronous and will immediately return a `taskResult` object with an ID for that task (or an error message). If you want to wait for the task to complete, you can poll the task until it is done, like so:

```js
const pollForTask = async function(pollingInterval, taskId) {
  let finished = false;
  while (!finished) {
    const taskResult = await eden.tasks.get({taskId: taskId});
    if (taskResult.task.status == "faled") {
      throw new Error('Failed')
    }
    else if (taskResult.task.status == "completed") {
      finished = true;
      const url = taskResult.task.creation.uri;
      return url;
    }
    await new Promise(resolve => setTimeout(resolve, pollingInterval))
  }
}

const result = await pollForTask(5000, taskResult.taskId);
```

## Hello Eden

An example React app which shows how to authenticate with the Eden SDK and make creations in a boilerplate NextJS web application is available [here](https://github.com/edenartlab/hello-eden).

