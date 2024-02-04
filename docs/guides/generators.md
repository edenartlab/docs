---
sidebar_position: 6
---

# Custom hosted endpoints

:::info
Custom hosted endpoints is in private beta, and will be public in Q1 2024. If you are interested in testing it now, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::info

Eden offers creators the ability to host their own generators, with their own private base models and custom pipelines/code. This allows creators to leverage the Eden ecosystem on top of their own generators, while maintaining full control and ownership over their pipelines.

Hosting your own generators on Eden provides the following benefits:
* Provides your users or fans with a convenient way to interact with your generator.
* Encapsulates the complexity of hosting and maintaining your own infrastructure for serving, as well as authentication to prevent abuse or spam.
* Plugs in nicely into Eden's ecosystem, including its social features and [character/bot framework](/docs/guides/characters).
* Offers developers the ability to design and deploy custom front-ends or interactive applications on top of your generator, using the [Eden SDK](/docs/guides/sdk).

## How to make endpoints

:::note
Custom hosted endpoints are still under development. This documentation is incomplete and many of these details are subject to change. We expect to stabilize this feature in early 2024.
:::note

To create an endpoint, there are several options, depending on your needs.

### Custom model only

If you simply have a custom finetuned model or [LoRA](/docs/guides/concepts), which you'd like to serve through Eden's [existing image and video pipelines](/docs/guides/creation), you can upload your model checkpoint to Eden, and we'll expose a new endpoint on the API for it.

### Custom interface

Although most creators generally use the same core SDXL pipelines for generating images and videos, in some cases you may wish to create a custom interface for your users, i.e. a set of adjustable parameters in the form of sliders, toggles, text inputs, and/or media uploads, which resolves to an input config that goes to that generator.

Custom interfaces are particularly good for providing a much simpler experience for users, as it allows creators to encapsulate and hide the more technical parameters behind an intuitive interface which highlights the most salient aspects of the generator, as defined by the model's creator.

:::tip
Custom interfaces are compatible with custom models, as well as the default ones.
:::tip

As a toy example, let's suppose you have a custom finetuned model for generating images of stylish cats. You may wish to create a custom interface for the model with the following adjustable parameters:

* A slider which adjusts the level of photorealism of the generated cat, from 0 (fully figurative) to 1 (fully photographic).
* A toggle which controls the genre of the cat (including "noir", "romantic", "anime", "surreal", etc).

In order to trigger a creation, the custom interface must define a function which maps a selection from the desired settings above into a full Eden config object to the underlying generator. We can do this by pre-defining a default [/create config](/docs/guides/creation#create) and adjusting it in various ways. There are often multiple ways of achieving similar effects, and this design process is more of an art than a science. We'll go over a few examples.

One way of translating the genre setting would be pre-defining the prompt (e.g. "A stylish cat in the style of {genre}"), and inserting the genre into the prompt string at runtime.

```
# Example of a user selection
settings = {
  "genre": "noir"
}

# Convert the above into a full Eden config
config = {
  "prompt": f"A stylish cat in the style of noir"
}
```

An alternative way of differentiating the genres would be to keep the prompt static (e.g. "A stylish cat") but to use a pre-assigned starting image for each genre. [Because starting images can have a large influence on the final output](/docs/guides/creation/#starting-image), this can be a powerful tool.

```
settings = {
  "genre": "romantic"
}

config = {
  "init_image": "my_romantic_starting_image.jpg"
}
```

Yet another way of differentiating the genres would be to assign separate [concepts](/docs/guides/concepts) to each genre.

To continue with the example, let's turn to the desired photorealism setting. Unlike genre, it's defined as a continuous parameter, controlled by a slider, rather than a discrete parameter. It needs continuously adjustable config parameters to map onto.

One way of representing the photorealism characteristic could be to use a [concept (LoRA)](/docs/guides/concepts) trained on photorealism, and then regulated using the `lora_scale` parameter.

```
settings = {
  "photorealism": 0.72
}

config = {
  "lora": "photorealism",
  "lora_scale": 0.72
}
```

Another option for representing photorealism as a adjustable slider value is to use the technique of prompt interpolation, where you define two static prompts for each of the extremes, and then interpolate between the two at runtime. For photorealism, the prompts may be "A stylish cat in a figurative cartoonish style" for 0, and "A stylish cat, photorealistic" for 1.

The above example is fairly simple but powerful. In practice, there is a lot of creativity and felxibility in defining the mapping function. The levers you have to control the final output, in order of influence, are:

* The base model/checkpoint
* Concepts/LoRas
* The prompt (and negative prompt)
* Starting images (as an init_image or [controlnet](/docs/guides/creation#controlnet) image), which can include static images pre-defined by the creator
* Generation parameters (guidance scale, starting image strength, etc)

The Eden team will work closely with you to come up with the mapping function which enables your desired custom interface.

### ComfyUI workflow

Creators who use [ComfyUI](https://github.com/comfyanonymous/ComfyUI) can simply export their worfklows as json objects, define the free parameters in the workflow they wish to expose to users, and we can turn them directly into endpoints.

Note that ComfyUI workflows may also make use of [custom interfaces](/docs/guides/generators#custom-interface) to simplify the user experience of triggering their workflow.

### Custom code

For creators who desire full control of the entire process and are writing their own customized pipelines directly in code, we can host your pipeline as a custom endpoint. This is the most flexible option, but also requires the most technical expertise.

Eden generators are currently hosted by [Replicate](https://replicate.com/) as [cogs](https://github.com/replicate/cog). If you are familiar with cog, you can simply create a cog and either host it yourself, or let us host it. If you are not familiar with cog, we can work with you to convert your generation code into a cog.

## Permissioning endpoints

Generators can be fully public to Eden users, like the other endpoints, or they can be fully private to the owner, or only accessible to a specific set of whitelisted users.
