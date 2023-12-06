---
sidebar_position: 2
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Training Concepts

A limitation of generative models (including Eden's base model) is that they can only generate things they've been trained on. But what if you want to consistently compose with a specific object, person's face, or artistic style which is not found in the original training data? This is where *Concepts* come in.

Concepts are custom characters, objects, styles, or specific people which have been trained and added by Eden users to the Eden generators' knowledge base, using the [LoRA technique](https://arxiv.org/abs/2106.09685). With concepts, users are able to consistently reproduce specific content and styles in their creations.

Concepts are first trained by uploading example images to the [concept trainer](https://app.eden.art/create/concepts). Training a concept takes around 10 minutes. Once trained, the concept becomes available to use in the [creation tool](/docs/guides/creation) for all of the endpoints, including images and video.

:::tip
This doc is about training concepts. For help generating creations with your concepts, see the [creation tool doc](/docs/guides/creation/#concepts).
:::tip

## Concept types

Concepts are a highly versatile and powerful creation tool. They can be used to capture a specific person's face or likeness, an animated character, or a complex object. They can also be more abstract, referring to a particular artistic style or genre, or even a compositional pattern without any specific content, such as a [triptych](https://www.google.com/search?q=triptych&tbm=isch) or a [knolling](https://www.google.com/search?q=knolling&tbm=isch).

While concepts can be trained on any arbitrary image set, in practice there are three main categories of concepts: faces, objects, and styles. Internally, each of these categories has a different training mode which is optimized for that category.

### Faces

Generative models like Stable Diffusion are great at generating realistic human faces. However, the model obviously doesn't know what every non-famous person looks like. To get around this limitation, we can train a concept to learn a specific person's face.

:::warning
Note that the faces mode is highly optimized for human faces. If you want to train a concept to learn a non-human face, such as a cartoon character or animal, you should use the [object](#objects) mode instead.
:::warning

For example, the images below are actual photos of [Xander](https://twitter.com/xsteenbrugge).

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/xander_training_images.jpg" caption="Xander face training images." />

We can train a concept on these images, which we will name "Xander". After training, we can generate creations with the "Xander" concept. To refer to the concept in your prompt, you can include the concept name or `<concept\>` in your prompt. For example, we can prompt:

- Xander as a character in a noir graphic novel
- a xander action figure
- <concept\> as a knight in shining armour
- an artwork of <Xander\> as the Mona Lisa

:::tip
Note that the concept reference is not case-sensitive, and that Xander, `<Xander>`, or `<concept>` are all interchangeable ways of referencing the concept.
:::tip

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/xander_generated_images.jpg" caption="Generated images with the Xander concept." />








### Objects

The "Object" training mode is optimized for learning all other "things" besides for human faces. This includes non-human faces, physical objects, characters, cartoons, and miscellaneous objects.

For example, the images below are professional renders of the character [Kojii](https://twitter.com/kojii_ai). They exemplify a good training set: a single, consistent character with subtle variations in pose and appearance between every image. 

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/koji_training_imgs.jpg" caption="Kojii character training images." />

After training the concept, we are again able to compose with it in the creation tool. For example, we can prompt:

- a photo of <kojii\> surfing a wave
- kojii in a snowglobe
- a photo of <concept\> climbing mount Everest
- a low-poly artwork of Kojii

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/koji_grid.jpg" caption="Generated images with the Kojii concept." />

### Styles

Concepts can also be used to model artistic styles or genres. The way that style concepts differ from object concepts is that style concepts are not trained on specific content or "things", but rather on the abstract style characteristics common to all the training images. 

For example, the images below are artworks originally created by [VJ Suave](https://vjsuave.com/).

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/suave_training_imgs.jpg" caption="Training images to learn the VJ Suave visual style." />

Like objects and faces, you can compose with the style concept in the creation tool by referring to it in your prompt. Particularly with style concepts, you don't have to refer to the concept at all, and can simply prompt as you normally would, and the active concept will be used to influence the image.

The following are samples are all generated from the trained Suave concept.

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/suave_generated_imgs.jpg" caption="Generated images with the Suave style concept." />

Styles are the most abstract of all the training modes, and can be used to capture a wide variety of aesthetics and compositional patterns. The most common use case for style concepts is to capture a particular artist's style or a genre such as cubism or vaporwave. However, style concepts can be used to capture non-aesthetic visual motifs, such as color palettes, layout patterns, or even more abstract notions.

For example, a [knolling](https://www.google.com/search?q=knolling&tbm=isch) is a photograph where related objects are arranged neatly in a grid-like pattern. The images below are a training set of three knolling images.

<Figure src="/img/knolling_training.jpg" caption="Knolling training set." />

Note that these images are not of the same objects, nor do they share a common visual aesthetic with each other. Their only connection is the novel layout. Despite that, training a style concept on these images results in a concept that learns the knolling layout pattern.

<Figure src="/img/knolling_generated.jpg" caption="Images generated using the Knolling concept." />











Notice how all imgs are HD, diverse and well cropped.


When training "face" concepts it is recommended to disable the random left/right flipping of training images (see more details below under **"advanced parameters"**).

Faces are a popular and easy use case. It is possible to learn a face accurately from a single image, although two or three images are usually recommended to provide a bit of additional diversity.




## How to train your own concepts

The concept trainer is available at [https://app.eden.art/create/concepts](https://app.eden.art/create/concepts) and is a rework of the great LORA trainer created by [@cloneofsimo](https://twitter.com/cloneofsimo) over [here](https://github.com/replicate/cog-sdxl).




 are custom characters, objects, styles, or specific people that are not part of the base generative model's (SDXL) knowledge, but that can be trained into the model by showing it a few examples of your concept. Once trained, you can naturally compose with concepts in your prompts just like you'd normally do with things the model knows already, eg a person named 'Barack Obama' or a style like 'cubism'.








### **Summary**
1. Train a new concept by uploading images to the [concept trainer](https://app.eden.art/create/concepts) and picking a training mode.
2. Wait for training to finish (takes 5-10 mins)
3. Go to the [creation tool](https://app.eden.art/create/creations) (/create, /interpolate or /real2real)
4. Select your concept from the concept dropdown menu
5. Trigger the concept by adding <concept\> in your prompt text (not needed for styles & real2real):  
eg ***"a photo of <concept\> climbing a mountain"***
6. **If things dont look good, instead of messing with the settings, try changing your training images: they're the most important input variable!**



## Training


<p align="center">
  <img src="https://minio.aws.abraham.fun/creations-stg/7310dc281868c547ab0c99290fbf8c440fe0eac88b8f6ae708ae98e5754c903d.png" width="400" />
  <br />
</p>


To train a good concept you need just a few (3-10 images is fine), but really good training images. Really good in this context means:
- good resolution (at least 768x768 pixels is recommended)
- diverse (it's better to have 5 very diverse images than 20 almost identical ones)
- well cropped, clearly showing the concept you're trying to learn

The training images are the most important part of concept training, if things dont look good, instead of changing the settings, just try a different (sub-) set of training images!

## Generating with concepts:

Once a concept has been trained, here's how to use it:
1. Select your trained concept from the concept dropdown menu in the creation tool:

<p align="center">
  <img src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/create_with_concept.png" width="400" />
  <br />
</p>

2. If the concept was trained with "style" mode you can prompt as normal. If the concept was trained with "face" or "concept" mode, you have to trigger your concept/face in the prompt. There are two options to do this:
   - You can either trigger your concept by referring to it as <concept\> in your prompt text, eg  
   ***"a photo of <concept\> climbing a mountain"***
   - Or you can use the actual name of your trained concept. Eg if my concept name was "Banny" I could prompt-trigger it like so:  
   ***"a photo of <Banny\> climbing a mountain"***

3. When generating you can adjust the concept scale, which will control how strongly the concept is being used in the generation. 0.8 is usually perfect (1.0 usually doesn't work so well!), but in some cases, when the concept is slightly overfit, you can try to lower this value to get more promptability.

Note: all the example images in this post were generated with the default trainer & generation settings!

## Training parameters

### Required parameters:

* **Concept name**: The name of the concept. This can be used to refer to the concept in prompts. Names are not required to be unique and can be reused.
* **Training images**: The images to use for training. You can upload image files (jpg, png, or webm), or you can upload zip files containing multiple images. You may upload up to 10 files, and each file must be below 100MB. From our experiments, the concept training actually works best if you dont have too many images. We recommend using 3-10 high quality and diverse images.
* **Training mode**: There are three available modes: concept, face, and style. They refer to trainer templates that are optimized for these three categories. Faces refer to human faces, concepts may refer to objects, characters, or other "things," while styles refer to the abstract style characteristics common to all the training images. Select the one that best matches your training set.

The trainer is designed to handle most cases well with the default settings, particularly in the case of concepts. Some concepts and  styles are more challenging to capture well and may require some trial and error adjusting the optional settings to achieve the right balance of diversity, accuracy, and promptability. To give some intuitions about how the advanced settings may affect the results, we describe them below. 

However keep in mind that **the most important input parameter are the training images themselves**: if things dont look good, instead of spending hours fiddling with the advanced parameters, we highly recommend to first try training again with a different subset of your images (using default parameters).

### Advanced parameters:

* **Number of training steps**: This refers to how long to finetune the model with your dataset. More steps should lead to fitting your concept more accurately, but too much training may "overfit" your training data, leading the base model to "forget" much of its prior knowledge (prompting wont work well anymore) and produce visual artifacts.
* **To randomly flip training imgs left/right**: This setting doubles the number of training samples by randomly flipping each image left/right. This should generally be on, unless the object you want to learn has a specific horizontal orientation which should not appear mirrored (for example text (LOGO's) or faces).
* **Learning rate for the LORA matrices**: The learning rate for the LORA matrices that adjust the inner mechanics of the generative model to be able to draw your concept. Higher values lead to 'more/faster learning' usually leading to better likeness at the cost of less promptability. So if the creations dont look enough like your training images --> try increasing this value, if your images dont listen to your prompts --> try decreasing this value.
* **Learning rate for textual inversion phase** : Textual inversion refers to the part of the training process which learns a new dictionary token that represents your concept. So in the same way that StableDiffusion knows what a "table" is and can draw tables in many different forms and contexts, it will learn a new token that represents your concept.
* **LORA rank** : Higher values create more 'capacity' for the model to learn and can be more succesful for complex objects or styles, but are also more likely to overfit on small image sets. The default value of 4 is recommended for most cases.
* **trigger text** : Optional: a few words that describe the concept to be learned (e.g "man with mustache" or "cartoon of a yellow superhero"). Giving a trigger text can sometimes help the model to understand what it is you're trying to learn and tries to leverage prior knowledge available in the model. When left empty, the trigger text will be automatically generated (recommended).
* **Resolution** : Image resolution used for training. If your training resolution is much lower than the resolution you create with, the concept will appear smaller inside your larger image and will often have repeating artefacts like multiple noses or copies of the same face. Training at lower resolutions (eg 768) can be useful if you want to learn a face but want to prompt it in a setting where the face is only a small part of the total image. Using init_images with rough shape composition can be very helpful in this scenario.
* **Batch size** : Training batch size (number of images to look at simultaneously during training). Increasing this may lead to more stable learning, however all the above values have been finetuned for batch_size = 2. Adjust at your own risk!

# Tips & trics

:::tip
- the advanced settings are pretty well optimized and should work well for most cases.
- When things dont look good: try changing your training images before adjusting the settings!
:::tip


:::warning
- When uploading face images, it's usually a good idea to crop the images so the face fills a large fraction of the total image.
- We're used to "more data is always better", but for concept training this usually isn't true: 5 diverse, HD images are usually better than 20 low-quality or similar images.
:::warning


The training mode is selected when training a concept in the [concept trainer](https://app.eden.art/create/concepts).

