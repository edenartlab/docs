---
sidebar_position: 2
---

# Concepts

**TLDR**
1. Train a new concept by uploading images to the [concept trainer](https://app.eden.art/create/concepts) and picking a training mode.
2. Wait for training to finish (takes 5-10 mins)
3. Go to the [creation tool](https://app.eden.art/create/creations) (/create, /interpolate or /real2real)
4. Select your concept from the concept dropdown menu
5. Trigger the concept by referring to it with <concept\> in your prompt text (not needed for styles and real2real).

**Concepts** are custom characters, styles, or specific people that are not part of the base generative model's (SDXL) knowledge, but that can be trained into the model by showing it a few examples of your concept. Once trained, you can naturally compose with concepts in your prompts just like you'd normally do with things the model knows already, like a person named 'Barack Obama' or a style like 'cubism'.

Concepts are first trained by uploading example images to the [concept trainer](https://app.eden.art/create/concepts). After training finishes (takes about 5 mins), the concept becomes available to use in the main creation tool and is compatible with single image creates, interpolations and real2real. Note that a concept has to be:
- activated in the creation by selecting the corresponding name from the concept dropdown menu
- triggered by using <concept\> to refer to it in the prompt text.

Concepts are a highly versatile and powerful creation tool. They can be used to capture a specific person's face or likeness, an animated character, or a complex object. They can also be more abstract, referring to a particular artistic style or genre.

### Example: Faces

Generative models like Stable Diffusion are very good at generating realistic faces. However, the model obviously doesn't know what everyone looks like (unless you are very famous). To get around this, we can train a concept to learn a specific person's face.

For example, these two training samples are of [Xander](https://twitter.com/xsteenbruggex).

After training, we can use the concept in a prompt to generate realistic and figurative pictures of Xander.

Faces are a popular and easy use case. It is possible to learn a face accurately from a single image, although two or three images are usually recommended to provide a bit of additional diversity.

### Example: Character

<p align="center">
  <img src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/koji_training_imgs.jpg" width="550" />
  <br />
  Koji character training images
</p>

**Concepts** can also be used to model consistent objects or characters. The above images are professional renders of the character for our Koji project. This is a good example of a great training set since it contains: a single, consistent character with subtle variations in pose and appearance between every image. After training a new concept with name "koji" with mode 'concept' and default settings, we get a fully promptable Koji character, eg (see top image row):
- a photo of <koji\> surfing a wave
- <koji\> in a snowglobe
- a low-poly artwork of <koji\>
- a photo of <koji\> climbing mount Everest, alpinism
- etc ...


<p align="center">
  <img src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/koji_grid.jpg" width="1050" />
  <br />
  Generated images with the koji concept
</p>

### Example: VJ Suave

Concepts can also be used to model artistic styles. For example, the following training samples below are artworks originally created by [VJ Suave](https://vjsuave.com/).

<p align="center">
  <img src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/suave_training_imgs.jpg" width="1050" />
  <br />
  Training images to learn the VJ Suave visual style
</p>

And the following are samples generated from the concept:

# How to train a concept

The concept trainer is available at [https://app.eden.art/create/concepts](https://app.eden.art/create/concepts). 

<img src="https://minio.aws.abraham.fun/creations-stg/7310dc281868c547ab0c99290fbf8c440fe0eac88b8f6ae708ae98e5754c903d.png" width="600" />

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
- We're used to "more data is always better", but for concept training this usually isn't true: 5 diverse, HD images are usually better than 20 low-quality images.
:::warning
