---
sidebar_position: 5
---

# Python SDK

:::info
API keys are currently in beta. If you'd like to use the SDK, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::info

The Eden SDK is a Python library for interacting with the Eden API. The SDK allows you to make creation requests programatically and integrate Eden-facing widgets into your own applications. The Python library is incomplete implementation of the Eden API, and more complete applications should use the [JS SDK](/docs/guides/sdk) instead.

Full API documentation is available at [https://api.eden.art/documentation](https://api.eden.art/documentation/). Some browsers have issues opening the documentation, so if you have trouble, try using a different browser or use incognito mode.

## Get API credentials

To get an API key, please message one of the devs in [the Discord](https://discord.com/invite/4dSYwDT) and ask for one.

## Installation

You can install the SDK from git:

```bash
pip install git+https://github.com/edenartlab/eden-sdk-py.git
```

## Make a creation

A full list of generators and their config parameters can be found in the [creation tool](https://app.eden.art/create).

All requests to Eden go through the `EdenClient` class. To make a task request, target a specific generator (e.g. "create") with a configuration object. For example:

```python
from eden_sdk.EdenClient import EdenClient

eden = EdenClient(
    api_key="YOUR_EDEN_API_KEY",
    api_secret="YOUR_EDEN_API_SECRET"
)

config = {
  "text_input": "An apple tree in a field",
}

urls = eden.create(generator_name='create', config=config)
print(urls[0])
