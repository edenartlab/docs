---
sidebar_position: 2
---

# Creations

Once you have [logged in with your API key](/docs/sdk/quickstart), you can make a request for a creation.

The `eden.create` function takes:

* `generatorName`: the name of the generator to use, e.g. "create"
* `config`: a dict containing the input parameters to the selected generator.
* `metadata`: (*optional*): an optional dict of metadata associated with the request. The client may retrieve the metadata with the creation later.

To get the specification for the config, you can use:

```js
const generator = eden.getGenerator("create");
console.log(generator.parameters);
```

For example, to generate an image from a text prompt, you can use the following config:

```js
let config = {
  text_input: "a dog jumping over a fence",
  width: 768,
  height: 768
}

const result = await eden.create("create", config);
console.log(result);
```

If the job is successful, the URI of the image will be found at result.uri.

Alternatively, to start the prediction asynchronously and poll for the result, you can do this.

The function `getTaskStatus(taskId)` can always be used to get the status and result of the task.

```js
const taskId = await eden.startTask("create", config);
const result = await eden.getTaskStatus(taskId);
console.log(result);
```