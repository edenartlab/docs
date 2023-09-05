---
sidebar_position: 2
---

# Concepts

Concepts are custom objects, styles, or specific people which you can compose with directly in prompts. They are first trained by uploading example images to the [concept trainer](https://app.eden.art/create/concepts). After training finishes, the concept becomes available to use in the main creation tool. 

Concepts are highly versatile. They can be used to capture a specific person's face or likeness, an animated character, or a complex object. They can also be more abstract, referring to a particular artistic style or genre.

### Example: Faces

Generative models like Stable Diffusion are very good at generating realistic faces. However, they are not very good at generating a specific person's face, or the same face consistently. To get around this, we can train a concept to learn a specific person's face.

For example, these two training samples are of [Xander](https://twitter.com/xsteenbruggex).

After training, we can use the concept in a prompt to generate realistic and figurative pictures of Xander.

Faces are a popular and easy use case. It is possible to learn a face accurately from a single image, although two or three images are usually recommended to provide a bit of additional diversity.

### Example: Character

Concepts can also be used to model consistent objects or characters. 

### Example: VJ Suave

Concepts can also be used to model artistic styles. For example, the following training samples below are artworks originally created by [VJ Suave](https://vjsuave.com/).

<p float="left">
  <img src="https://minio.aws.abraham.fun/creations-stg/69950155d03d9552ef69029d199c187fb3a9b1b2af9399e9a2cd244cbe401716.png" width="150" />
  <img src="https://minio.aws.abraham.fun/creations-stg/47d7b6adf72d635a7bd1858057dc4d14d269c519d09d1de99570221bd328a3c5.png" width="150" />
  <img src="https://minio.aws.abraham.fun/creations-stg/603c6192bd054733c6ebc5f0909f956f788f422076aba9ad330cb1a48d046110.png" width="150" />
  <img src="https://minio.aws.abraham.fun/creations-stg/870da0b222610d92ed22a3c1331c5234018a747d412dd7d82345cc82f41901f1.png" width="150" />
  <img src="https://minio.aws.abraham.fun/creations-stg/06c3acdfa01b8c3a579fe17ebb8a8651c376e6217dab5f76921171c03afb8a61.png" width="150" />
  <img src="https://minio.aws.abraham.fun/creations-stg/cc90e4c5975190c79ebd9a68acf1403d053ef2229bea2bb829ca77ba45b4c568.png" width="150" />
</p>

And the following are samples generated from the concept:

# How to train a concept

The concept trainer is available at [https://app.eden.art/create/concepts](https://app.eden.art/create/concepts). 

<img src="https://minio.aws.abraham.fun/creations-stg/7310dc281868c547ab0c99290fbf8c440fe0eac88b8f6ae708ae98e5754c903d.png" width="600" />

The three required parameters are:

* **Concept name**: The name of the concept. This can be used to refer to the concept in prompts. Names are not required to be unique and can be reused.
* **Training images**: The images to use for training. You can upload image files (jpg, png, or webm), or you can upload zip files containing multiple images. You may upload up to 10 files, and each file must be below 100MB.
* **Training mode**: There are three available modes: concept, face, and style. They refer to trainer templates that are optimized for these three categories. Faces refer to human faces, concepts may refer to objects, characters, or other "things," while styles refer to the abstract characteristics common to the training data. Select the one that best matches your training set.

The trainer is designed handle most cases well with the default settings, particularly in the case of faces or concepts. Some concepts and many styles are more challenging to capture and may require some trial and error adjusting the optional settings to achieve the right balance of diversity, accuracy, and promptability. To give some intuitions about how the advanced settings may affect the results, we describe them below.

* **Number of training steps**: This refers to how long to finetune the model with your dataset. More steps should lead to fitting your concept more accurately, but too much training may "overfit" your training data, leading the base model to "forget" much of its prior knowledge and produce visual artifacts.
* **To randomly flip training imgs left/right**: This setting doubles the number of training samples by randomly flipping each image left/right. This should generally be on, unless the object you want to learn has a specific horizontal orientation which should not appear mirrored (for example, text).
* **Learning rate for the LORA matrices**: The learning rate for the LORA matrices. Higher values produce faster training, but are more likely to overfit unless training steps are reduced.
* **Learning rate for textual inversion phase** : Textual inversion refers to the part of the training process which optimizes a token that represents the concept. 
* **LORA rank** : A larger rank gives the model more capacity to learn complex concepts, but may also lead to overfitting. The default value of 4 is recommended for most cases. Abstract styles may potentially benefit from a larger rank.
* **trigger text** : A short sentence that describes & triggers the concept to be learned (e.g "man with mustache" or "cartoon of a yellow superhero"). When this is left empty, this is automatically selected for internally. It is recommended to leave this empty.
* **Resolution** : Image resolution used for training. If your resolution is lower than the resolution you create with the concept at, it will appear at a smaller size.
* **Batch size** : Training batch size (number of images to look at simultaneously during training). Increasing this may lead to better generalization, but may lead to memory issues.

# Misc

:::tip
This is a tip
:::tip

:::note
This is a note
:::note

:::warning
This is a warning
:::warning
