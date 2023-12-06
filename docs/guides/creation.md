---
sidebar_position: 1
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Using the Creation Tool

The easiest way to make creations with Eden is through the [creation tool frontend](https://app.eden.art/create/creations).

:::tip
You can also interact with the creator tool <!-- [through the Discord bot](/create), or -->[through the SDK](/docs/guides/sdk).
:::tip

## Overview

Eden offers a number of generative pipelines for making images and videos, mostly built on top of the [Stable Diffusion (SDXL)](https://stability.ai/stablediffusion) model family. The pipelines are divided into a number of *endpoints* or *generators* (terms used interchangeably) which are optimized for different visual tasks.

#### Image endpoints

- [**/create**](#create) is our general-purpose text-to-image pipeline.
- [**/remix**](#remix) generates variations of an uploaded image.
- [**/blend**](#blend) generates a novel mixture of two uploaded images.
- [**/controlnet**](#controlnet) generates a prompt-guided style transfer over an uploaded image.
- [**/upscale**](#upscale) upscales a single image to a higher resolution.

#### Video endpoints
- [**/interpolate**](#interpolate) generates a video which gradually interpolates through a sequence of prompts.
- [**/real2real**](#real2real) generates a video which gradually interpolates through a sequence of uploaded images.
- [**/animate**](#animate) TBD.

Each of the endpoints are calibrated to give you good creations using the default settings, but achieving more particular or custom results requires some understanding of the optional parameters.

## Summary of endpoints

### /create

**[Create](https://app.eden.art/create/creations)** is our default *text-to-image* endpoint. Simply enter a prompt, click "Create" and wait a few moments for the resulting image.

<Figure src="/img/create.jpg" caption="Creation tool interface" />

Besides the prompt, you are able to request 1, 2, or 4 different samples. 

#### Settings

The "Settings" dropdown lists optional settings which can be used to customize your creation. It is always divided into commonly customized settings like the resolution, as well as *advanced* settings which should rarely need to be modified, but are available for further customization.

##### Common settings

- **Width** and **Height** set the resolution of the image.

##### Advanced settings

- **Negative prompt** allows you to specify what you *don't* want to see in the image. If you wish to remove or de-emphasize some undesirable feature, e.g. "color", it is best to include it in the negative prompt rather than as a negation in the regular prompt (e.g. "no color").
- **Guidance scale** how strongly the prompt drives the creation. Higer values usually result in more saturated images.
- **Sampler** sets the diffusion sampler to use. See [here for an explanation](https://huggingface.co/docs/diffusers/v0.20.0/en/api/schedulers/overview).
- **Steps** sets the number of denoising steps during diffusion. A higher step count may produce better details but is slower. There are diminishing returns past 40 steps.
- **Seed** sets the random seed for reproducibility. Fixing the seed can make it easier to determine the precise effect of a certain parameter while keeping everything else fixed.

#### Starting Image

Instead of generating an image purely from a prompt, you can also use an uploaded image as a starting point for the creation. The starting image will constrain the final creation to resemble the shape and form of the starting image.

- **Starting image strength** controls how heavily the starting image influences the final creation. A medium strength to try is around 0.2. Values above 0.5 will look almost identical to your init image, while setting it to 0 is equivalent to having no starting image.
- **Adopt aspect ratio of starting image** will adjust the width and height of the creation to match the aspect ratio of the starting image, while keeping the same number of pixels.

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/init_img.jpg" caption="An example of create with a starting image. Starting image on the left, resulting creation on the right." />

### /remix

The remix endpoint takes an input image and creates variations of it. Internally, it does so by using a combination of [IP adapter](https://ip-adapter.github.io/) and a technique to construct a prompt that matches your image.

<Figure src="/img/generators/remix.jpg" caption="An example of remix. The top left image is the input, the top right image is a remix without a prompt, and the bottom two images are remixes with prompts." />

In remix, the **Starting image** is the input image to be remixed. Like [/create](#create), remix allows you to request 1, 2, or 4 different samples, and inherits all the same basic and advanced settings as create, including **Width**, **Height**, **Negative prompt**, **Guidance scale**, **Sampler**, **Steps**, and **Seed**. However, the following additional settings are specific to the remix endpoint:

- **Starting image strength** controls how much influence the init image has over the final result. Setting this to 0.0 will produce more images which maximally diverge from the original, while increasing this will produce results which more closely resemble the starting image.
- **Remix prompt** allows you to guide the remix generation towards an optional prompt. If left blank, the remix will be entirely guided by the input image.
- **Image strength** controls the relative influence between the input image and the Remix prompt (if set). Setting this to 0.0 will produce a remix that is entirely guided by the prompt, while setting it to 1.0 will produce a remix that is entirely guided by the starting image.
- **Upscale Factor** upscales the output resolution of your generated image by the given factor. If you want large images, upscaling is generally better than rendering at a higher starting resolution, which can result in repeating artifacts.


### /blend

The blend endpoint is similar to [/remix](#remix), but takes two input images rather than just one and creates an image which combines or mixes the two inputs in a novel way. Like remix, it also relies on [IP adapter](https://ip-adapter.github.io/) and prompt reconstruction to match each image, but then averages the internal conditioning of each input image to produce a new image.

<Figure src="/img/generators/blend.jpg" caption="Two examples of blend. The left two images are blended to create the right image." />

In blend, **Your images** lets you upload two starting images. /blend inherits all the same basic and advanced settings as [/remix](#remix), including **Width**, **Height**, **Negative prompt**, **Guidance scale**, **Sampler**, and **Steps**. The following additional settings are specific to the blend endpoint:

- **Override prompts** allow you to optionally use a custom prompt for each input image rather than rely on the generator to reconstruct it.
- **Interpolation seeds** let you optionally specify the random seed for each input image. This can be useful for reproducibility.
- **Image strengths** sets the strength of each image during blending. Low values will give the blend more freedom, higher values will look more like alpha-blending of the original images. Recommended values are 0.0 - 0.1.

### /controlnet

[Controlnet](https://arxiv.org/abs/2302.05543) is a versatile technique for guiding image generations with a spatial conditioning map from a control image. The controlnet endpoint in Eden has various capabilities, such as:

* prompt-guided style transfer which conforms to the shape and contours of the control image.
* Generating prompt-guided images which have the same perceived depth or luminosity maps as the control image.

It is distinct from using a starting image in /create by attempting to reconstruct a specific conditioning signal from the control image, rather than simply using it as the starting image.

<Figure src="/img/generators/controlnet.jpg" caption="An example of a luminance-based controlnet of the Eden logo. The leftmost image (the Eden logo) is the control image, the four images to the right are output images given different prompts." />

The following parameters are specific to the controlnet endpoint:

- **Shape guidance image** this is the control image which spatially guides the final creation.
- **Prompt** has the same function as in the [/create](#create).
- **Shape guidance image strength** sets the influence of the shape guidance. This should usually be above 0.5.
- **Controlnet mode** sets what to use as conditioning signal:
  - "canny-edge" will try to produce a creation that has the same edges and lines as the control image
  - "depth" will try to produce a creation that has the same perceived sense of depth as the control image
  - "luminance" will try to mimic the bright and dark regions in your control image

It also inherits the same **Width**, **Height**, **Negative prompt**, **Guidance scale**, **Sampler**, **Steps**, and **Seed** parameters as [/create](#create).


### /upscale

Upscale takes a single input image and simply produces an upscaled version of it.

<Figure src="/img/generators/upscale.jpg" caption="Upscaling the image on the left" />

The only important parameters are:

- **Init Image** is the input image to be upscaled.
- **Init image strength** controls the level of influence of the original image. A lower values give the upscaler more freedom to create new details, often leading to a sharper final image, but will also deviate more from the original input. Recommended values are 0.3-0.7.
- **Width** the desired width of the final image.
- **Height** the desired height of the final image.
- **Adopt aspect ratio of starting image** (true by default) will adjust the width and height of the creation to match the aspect ratio of the starting image, while keeping the same number of pixels.

Like [/create](#create), /upscale also inherits **Negative prompt**, **Guidance scale**, **Sampler**, **Steps**, and **Seed**.

### /interpolate

Interpolate generates smooth videos which interpolate through a sequence of text prompts. This allows you to create simple, linear video narratives. For example, the following video was created with the prompt sequence:
   
* a photo of a single lone sprout grows in a barren desert, the horizon is visible in the background
* a photo of a lone sappling growing in a field of mud, realistic water colour
* a photo of a huge, green tree in a forest, the tree is covered in moss
* a photo of an old, crumbled Tree of life, intricate wood folds

<FigureVideo src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/tree_lerp.mp4" w={600} h={400} caption="An interpolation through a prompt sequence." />

/interpolate only requires:

- **Prompts** an array of prompts to interpolate through.

Optional settings you may modify regularly include:

- **Width** and **Height** set the resolution of the video.
- **Frames** sets the number of frames in the video.

Advanced settings which you may occasionally wish to modify include:

- **Loop** will loop the video back to the first prompt after reaching the last prompt.
- **Smooth** will apply a smoothing algorithm that reduces large jumps during interpolations. This is recommended.
- **FILM Iterations** when set to 1 (recommended), this will double the number of frames using [FILM](https://github.com/google-research/frame-interpolation)
- **FPS** sets the frames per second of the video.
- **Interpolation Seeds** sets the random seed for each prompt. This can be useful for reproducibility.

Additionally, like [/create](#create), /interpolate also inherits **Negative prompt**, **Guidance scale**, **Sampler**, **Steps**, and **Seed**.

In addition to those parameters, /interpolate also includes a set of three parameters which enable controlnet conditioning to guide the shape of the video, as in the [/controlnet](#controlnet) endpoint:

- **Shape Guidance Image** sets a control image as a guidance signal throughout the entire video (you must enable one of the controlnet modes).
- **Shape guidance image strength** sets the influence of the shape guidance. This should usually be above 0.5.
- **Controlnet mode** optionally allows you to use a controlnet conditioning signal. If one is selected, the shape guidance image must also be set.
  - "off" will not use a controlnet
  - "canny-edge" will try to produce a creation that has the same edges and lines as the control image
  - "depth" will try to produce a creation that has the same perceived sense of depth as the control image
  - "luminance" will try to mimic the bright and dark regions in your control image

<FigureVideo src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/eden_lerp.mp4" w={500} h={500} aspectRatio={1} caption="An interpolation with the Abraham logo as a controlnet image." />

<FigureVideo src="https://www.youtube.com/embed/Bo3VZCjDhGI?si=QlMB3T_aCAx8rrRc" w={900} h={506} caption="An /interpolate video by Xander" />

### /real2real

**Real2Real** generates videos which interpolate through a sequence of uploaded images (called "keyframes"). It is similar to [/interpolate](#interpolate), except that it interpolates through images rather than prompts (although it optionally also allows a sequence of prompts as a secondary guidance signal).

Real2Real accepts any input image, including photographs, sketches, video frames, images from other generative AI platforms, and so on.

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/real2real_input.jpg" caption="/real2real input keyframes" />

<FigureVideo src="https://www.youtube.com/embed/5a-hcE8OfQo?si=FOPHay2PBH4dOu9q" w={900} h={506} caption="/real2real output video interpolating through the above keyframes" />

Real2Real has mostly the same parameters as /interpolate, including **Width**, **Height**, **Frames**, **Loop**, **Smooth**, **FILM Iterations**, **FPS**, **Seeds**, **Negative prompt**, **Guidance scale**, **Sampler**, **Steps**, and **Interpolation Seeds**. It currently lacks compatibility with controlnet. It also includes:

- **Override prompts** which allows you to optionally use a custom prompt to optimize towards in addition to each keyframe, similar to **Prompts** in /interpolate.
- **Fading smoothness**: low values will result in a rich visual journey, while higher values will look more like alpha-fading but will also be smoother. Values above 0.4 are almost never needed.
- **Keyframe strength** is the strength of the keyframes during interpolation. Setting this to 1.0 will exactly reproduce the init imgs at some point in the video, while lower values will allow the video to drift away from your uploaded images.


## Concepts

Concepts are custom objects, styles, or specific people which have been trained and added by Eden users to the Eden generators' knowledge base, using the [LoRA technique](https://arxiv.org/abs/2106.09685). Concepts are available in all the endpoints except for /upscale, and work the same way for all of them.

:::note
To train your own concept, see [training concepts](/docs/guides/concepts)
:::note

Concepts are necessary to be able to consistently generate a specific person, style, or object which is not part of the base model's knowledge.

The base model with no concepts is the default model used by all the endpoints. To activate a specific concept, it must first be selected. Clicking "Select Concept" brings up a menu of all available concepts on Eden. Toggle between "All Concepts" and "My Concepts" to filter by either all public concepts or just your own concepts.

<Figure src="/img/conceptselector.jpg" caption="Selecting a public concept" />

### Composing with concepts

Once selected, you may optionally compose with that concept by including its name or the string concept in the prompt. For example, if your concept is named **Alice**, then you can reference the concept in any of the equivalent ways.

* A photograph of alice training a neural network.
* A photograph of <alice\> training a neural network.
* A photograph of <concept\> training a neural network.

Note that the concept is *not* case-sensitive. Also note that it is not required to explicitly reference the concept in the prompt, and for concepts which are intended to model styles, it is usually better to not include it in the prompt.

### Adjusting concept strength

The "Concept scale" parameter controls the influence of the concept on the final output. The default should work in most cases, but occasionally you may find your concept is somewhat over or underfit, in which case adjusting this value may improve your results.

