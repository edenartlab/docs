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

Eden offers a number of generative pipelines for making images and videos, mostly built on top of the [Stable Diffusion](https://stability.ai/stablediffusion) model family. The pipelines are divided into a number of *endpoints* or *generators* (terms used interchangeably) which are optimized for different visual tasks.

## Summary of endpoints

#### Image endpoints

- [**/create**](#create) is our general-purpose text-to-image pipeline.
- [**/remix**](#remix) generates variations of an uploaded image.
- [**/blend**](#blend) generates a novel mixture of two uploaded images.
- [**/controlnet**](#controlnet) generates a prompt-guided style transfer over an uploaded image.
- [**/upscale**](#upscale) upscales a single image to a higher resolution.

#### Video endpoints
- [**/interpolate**](#interpolate) generates a video which gradually interpolates through a sequence of prompts.
- [**/real2real**](#real2real) generates a video which gradually interpolates through a sequence of uploaded images.
- [**/img2vid**](#img2vid) generates a video from a starting image (animating the image)
- [**/txt2vid**](#txt2vid) generates a video from a (list of) prompt(s)
- [**/vid2vid**](#vid2vid) apply style transfer to an input video

Each of the endpoints are calibrated to give you good creations using the default settings, but achieving more particular or custom results requires some understanding of the optional parameters.

### /create

**[Create](https://app.eden.art/create/creations)** is our default *text-to-image* endpoint. Simply enter a prompt, click "Create" and wait a few moments for the resulting image.

<Figure src="/img/create.jpg" caption="Creation tool interface" />

Besides the prompt, you are able to request 1, 2, or 4 different samples. 

#### Settings

The "Settings" dropdown lists optional settings which can be used to customize your creation. It is always divided into commonly customized settings like the resolution, as well as *advanced* settings which should rarely need to be modified, but are available for further customization.

##### Common settings

- **Width** and **Height** set the resolution of the image.

:::note
Because SDXL was trained at 1024x1024, increasing the resolution beyond that often causes visual artifacts to appear, like a face with multiple noses or too many eyes. If you want large images, it's often better to generate them at a normal resolution first, and upscale them after.
:::note

##### Advanced settings

- **Negative prompt** allows you to specify what you *don't* want to see in the image. If you wish to remove or de-emphasize some undesirable feature, e.g. "color", it is best to include it in the negative prompt rather than as a negation in the regular prompt (e.g. "no color").
- **Prompt strength** controls how strongly the prompt drives the creation. Higer values usually result in more saturated images.
- **Sampler** sets the diffusion sampler to use. See [here for an explanation](https://huggingface.co/docs/diffusers/v0.20.0/en/api/schedulers/overview).
- **Steps** sets the number of denoising steps during diffusion. A higher step count may produce better details but is slower. There are strong diminishing returns past 30 steps.
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

- **Image strength** controls how much influence the starting image has over the final result. Setting this to 0.0 will try to fully regenerate the content of the starting image but ignore its shape, colors, and composition. Increasing this will produce results which more closely resemble the starting image.
- **Remix prompt** allows you to guide the remix generation towards an optional prompt. If left blank, the remix will be entirely guided by the input image.
- **Image prompt strength** controls the relative influence between the input image and the Remix prompt (if set). Setting this to 0.0 will produce a remix that is entirely guided by the prompt, while setting it to 1.0 will produce a remix that is entirely guided by the starting image.
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

<Figure src="/img/generators/controlnet.jpg" caption="An example of canny-edge controlnet images driven by the Eden logo. The leftmost image (the Eden logo) is the control image, the four images to the right are output images given different prompts." />

The following parameters are specific to the controlnet endpoint:

- **Shape guidance image** this is the control image which spatially guides the final creation.
- **Prompt** has the same function as in the [/create](#create).
- **Shape guidance image strength** sets the influence of the shape guidance. This should usually be above 0.5.
- **Controlnet mode** sets what to use as conditioning signal:
  - "canny-edge" will try to produce a creation that has the same edges and lines as the control image
  - "depth" will try to produce a creation that has the same perceived sense of depth as the control image
  - "luminance" will try to mimic the bright and dark regions in your control image

It also inherits the same **Width**, **Height**, **Negative prompt**, **Guidance scale**, **Sampler**, **Steps**, and **Seed** parameters as [/create](#create).

Controlnet can be a great way to achieve style-transfer on faces as seen in this example:

<Figure src="/img/generators/controlnet_style_transfer.jpg" caption="A style transfer of a face using canny-edge controlnet + the prompt 'a statue made of marble'" />

### /upscale

Upscale takes a single input image and simply produces an upscaled version of it.

<Figure src="/img/generators/upscale.jpg" caption="Upscaling the image on the left" />

The only parameters are:

- **Init Image** is the input image to be upscaled.
- **AI creativity** controls the level of influence of the input image. Lower values (0.2-0.4) result in images that are more similar to the input image. Higher values (0.4-0.7) allow for generated details, but can also deviate more from the input image by inventing new details.
- **Width** Maximum width of the final image (/upscale will always maintain aspect ratio).
- **Height** Maximum height of the final image (/upscale will always maintain aspect ratio).

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


### /txt2vid

Txt2vid turns a single prompt or a list of prompts into a video animation. This is similar to /interpolate, but uses an actual video generation model, leading to more realistic video output. This endpoint is perfect to visualize narratives driven by prompts. Note that the video model needs enough frames to transition from one prompt to another, so make sure to increase the number of frames if you're using many prompts. 24 frames per prompt is a good rule of thumb! Exposed parameters:

- **Width**: Width in pixels
- **Height**: Height in pixels
- **Number of frames** How many frames to render. The final video will be n_frames / 8 seconds.
- **Loop**: Whether to generate a seamless loop. If off, the model has a bit more freedom.
- **Motion Scale**: How much motion to use. 0.8 is only subtle motion; 1.1 is the default amount of motion; 1.25 is heavy motion and may make the video incoherent.

Advanced Settings: 
- **Seed**: as always, the seed can be set for reproducibility
- **Negative prompt**: specify what you dont want to see


### /img2vid

This is an animation endpoint that takes a single input image and generates an animated video from it. Under the hood this uses [AnimateDiff](https://github.com/guoyww/AnimateDiff). Several input arguments are exposed:

- **Width**: Maximum width of the creation (the input aspect ratio will always be maintained)
- **Height**: Maximum height of the creation (the input aspect ratio will always be maintained)
- **Number of frames** How many frames to render. The final video will be n_frames / 8 seconds.
- **Loop**: Whether to generate a seamless loop. If off, the model has a bit more freedom.
- **AI Strength**: This is the amount of diffusion done on top of the input image to create the animation. Lowering this value will result in an animation that stays closer to the input image, and exhibits less motion.
- **Animation prompt**: This is an optional prompt you can provide which will be used as the motion prompt for AnimateDiff.
- **Motion Scale**: How much motion to use. 0.8 is only subtle motion; 1.1 is the default amount of motion; 1.25 is heavy motion and may make the video incoherent.

Advanced Settings (only change these when you really know what you're doing):
- **Motion Brush Mask**: Optional Motion Brush mask (only the white regions will be animated)
- **Seed**: as always, the seed can be set for reproducibility
- **Negative prompt**: specify what you dont want to see.

### /vid2vid

Vid2vid takes a single input video (mp4, webm, or gif) and one or two style images and tries to recreate the input video in the style of the style image(s). This endpoint may require experimentation to get good results. Some style image / input video combinations work much better than others! Exposed parameters:

- **number of frames** How many animation frames to render. The final video length will be n_frames / 8 seconds. This value will automatically get capped when reaching the end of your input video
- **shape guidance method**: Set if you want coarse or fine shape guidance form the input video. Coarse usually gives better looking videos, but will ignore more small details from the input video.
- **Optional style prompt**: Optional prompt used on top of the style image(s). You can try something like "an animation of [describe your input video] in the style of [describe your style image]"
- **Width**: Maximum width of the creation (the input aspect ratio will always be maintained)
- **Height**: Maximum height of the creation (the input aspect ratio will always be maintained)
- **AI Strength**: How much diffusion to apply to the input video/gif (1.0 = fully reimagine input, 0.0 = return input as is). The default of 0.95 will use a tiny bit of the colors from the input.
- **Shape Control Strength**: How much the shape of the input video/gif drives the shape of the result.
- **Loop**: This tries to create a seamlessly looping video where end = start. If the input video/GIF does not loop, this might not be a good idea.
- **Motion Scale**: How much motion you want to see (1.1 is usually great, 0.8 is only very subtle motion, 1.25 is a LOT of motion and often destroys the video)

Advanced Settings (only change these when you really know what you're doing):
- **Seed**: as always, the seed can be set for reproducibility
- **Negative prompt**: specify what you dont want to see.

## Creating with concepts

:::tip
To train your own concept, see [training concepts](/docs/guides/concepts).
:::tip

Concepts are custom objects, styles, or specific people which have been trained and added by Eden users to the Eden generators' knowledge base, using the [LoRA technique](https://arxiv.org/abs/2106.09685). Concepts are available in all the creation endpoints, and work the same way for all of them.

Concepts are necessary to be able to consistently generate a specific person, style, or object which is not part of the base model's knowledge.

The base model with no concepts is the default model used by all the endpoints. To activate a specific concept, it must first be selected. Clicking "Select Concept" brings up a menu of all available concepts on Eden. Toggle between "All Concepts" and "My Concepts" to filter by either all public concepts or just your own concepts.

<Figure src="/img/conceptselector.jpg" caption="Selecting a public concept" />

### Composing with concepts

Once selected, you may optionally compose with that concept by including its name or "concept" in the prompt. Note that the concept is *not* case-sensitive. For example, if your concept is named **Alice**, then you can reference the concept in any of the equivalent ways.

* A photograph of Alice training a neural network.
* A photograph of alice training a neural network.
* A photograph of <alice\> training a neural network.
* A photograph of <Alice\> training a neural network.
* A photograph of <concept\> training a neural network.

:::tip
If the concept was trained in "face" or "object" mode, it is recommended to trigger the concept by referring to it in the prompt. If the concept was trained in "style" mode, the concept will be automatically triggered for you.
:::tip

### Adjusting concept strength

The "Concept strength" parameter controls the influence of the concept on the final output. If your creations dont resemble your concept enough you can increase this value, if your prompt is being ignored and everything looks to similar to the training images, try reducing the strength.
