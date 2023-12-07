---
sidebar_position: 2
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Training Concepts

A limitation of generative models (including Eden's base model) is that they can only generate things they've been trained on. But what if you want to consistently compose with a specific object, person's face, or artistic style which is not found in the original training data? This is where *Concepts* come in.

Concepts are custom characters, objects, styles, or specific people which have been trained and added by Eden users to the Eden generators' knowledge base, using the [LoRA technique](https://arxiv.org/abs/2106.09685). With concepts, users are able to consistently reproduce specific content and styles in their creations.

Concepts are first trained by uploading example images to the [concept trainer](https://app.eden.art/create/concepts). Training a concept takes around 10 minutes. Once trained, the concept becomes available to use in the [creation tool](/docs/guides/creation) for all of the endpoints, including images and video.

:::note
This doc is about training concepts. For help generating creations with your concepts, see the [creation tool doc](/docs/guides/creation/#concepts).
:::note

## Training

You can train a concept through the [training UI](https://app.eden.art/create/concepts) or through the [SDK](/docs/guides/sdk).

### Selecting your training set

All you need to train a concept is a selection of images. The number of images can vary a lot depending on what you are trying to learn. For a face or object, 3-10 images is usually enough, but you can include hundreds or even thousands of images to capture a more diverse style.

In general, the choice of dataset impacts the quality and accuracy of the concept immensely. With practice you will develop an intuition for how different dataset qualities affect your results. If you're unsatisfied with your results, you should experiment with the selection of the training images before adjusting the settings.

Some suggestions and tips for choosing training images:

- **Selective diversity**: If you're trying to learn a specific face or object, your training images should feature the target consistently, and maximize the variance of everything you're *not* trying to learn. For example, if you have several images of a person whose face you are trying to learn, and they are wearing a green shirt in all of the images, the concept is more likely to include the green shirt. It helps to capture the target in different poses, from different angles, and with different lighting conditions or facial expressions. Similarly, if you want to learn a artistic style or aesthetic, you should have a selection of works which is diverse with respect to all the features you're *not* trying to learn (e.g. content, layout, color palettes, etc), while being consistent with respect to the features you are trying to learn (the "style").

Some additional guidelines that you should almost always follow:

- **High resolution**: Images that are at least 1000x1000 pixels are best quality. Below 700 or 800 pixels is not recommended.
- **Center-cropped**: The concept trainer will automatically crop your images to the center square. Avoid placing your the target subject outside of that square. 
- **Prominence**: For faces and objects, aim to feature the target object prominently in the image.

### (Optional) Including your own prompts

Concepts are trained on a set of images and their corresponding prompts. By default, the concept trainer produces these prompts for you automatically, extracting them from the images and rephrasing them to all contain a reference to the concept name.

You may optionally upload your own prompts along with the training images, overriding this behavior. To do this, create a set of text files whose names match the images (e.g. `1.txt` for `1.jpg`, `image2.txt` for `image2.png`, etc) and which contain the prompt you want to use for the corresponding image.

:::tip
Make sure all the training prompts contain the concept name, otherwise you'll lack the ability to refer to it in your prompts!
:::tip

### Training parameters

The following parameters are required:

* **Training images**: You may upload image files (jpg, png, or webm) directly or upload zip files containing images. You may optionally upload your own prompts for the training images by zipping the images together with a set of text files whose names match the images. You may upload up to 10 files, and each file must be below 100MB.
* **Concept name**: This is how you refer to the concept in prompts. You do not need to version   Names are not required to be unique.
* **Training mode**: There are three available modes: object, face, and style. The mode is used to call upon trainer templates that are optimized for these three categories. Faces refer to human faces, objects are for all other "things" (including non-human faces), and styles refer to abstract style characteristics common to all the training images.

The following parameters are optional, and rarely need to be changed:

* **Train steps**: This refers to how long to finetune the model with your dataset. More steps should lead to fitting your concept more accurately, but too many steps may overfit your concept, leading to poor proptability and generalization, as well as visual artifacts.
* **Random flip**: This setting doubles the number of training samples by randomly flipping each image horizontally. This should generally be on unless the subject has a specific horizontal orientation which cannot appear mirrored, for example text or logos. It is sometimes better to not flip faces.
* **LoRA rank**: The dimension/size of the LoRAs. Higher values allow more 'capacity' for the model to learn and can be more succesful for complex or diverse objects or styles. But they are more likely to overfit on small image sets and there are diminishing returns.
* **Train resolution** : Image resolution used for training. If your training resolution is much lower than the resolution you create with, the concept will appear smaller inside a larger image and will often have repeating artifacts like multiple noses or copies of the same face. Training at lower resolutions (e.g. 768) can be useful if you want to learn a face but want to prompt it in settings where the face is only a small part of the image. Using init_images with rough shape composition can be very helpful in this scenario.

:::tip
Training at lower resolutions (e.g. 768) can be useful if you want to learn a face but want to prompt it in settings where the face is only a small part of the image. Using init_images with rough shape composition can be very helpful in this scenario.
:::tip

The trainer is designed to handle most cases well with the default settings. In most cases, you are better off changing the training images than adjusting the optional settings to improve your results. However, some concepts and styles are more challenging to capture well and may require some trial and error adjusting the optional settings to achieve the right balance of diversity, accuracy, and promptability.

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

:::tip
When uploading faces, it's usually a good idea to crop the images so the face fills a large fraction of the total image.
:::tip

We can train a concept on these images, which we will name "Xander". After training, we can generate creations with the "Xander" concept. To refer to the concept in your prompt, you can include the concept name or `<concept\>` in your prompt. For example, we can prompt:

- Xander as a character in a noir graphic novel
- a xander action figure
- <concept\> as a knight in shining armour
- an artwork of <Xander\> as the Mona Lisa

:::tip
Note that the concept reference is not case-sensitive, and that Xander, xander, `<Xander>`, or `<concept>` are all interchangeable ways of referencing the concept.
:::tip

:::tip
When training "face" concepts it is recommended to disable random flipping
:::tip

Faces are a popular and easy use case. It is possible to learn a face accurately from a single image, although two or three images are usually recommended to provide a bit of additional diversity.


<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/xander_generated_images.jpg" caption="Generated images with the Xander concept." />

### Objects

The "Object" training mode is optimized for learning all other "things" besides for human faces. This includes non-human faces, physical objects, characters, cartoons, and miscellaneous objects.

For example, the images below are professional renders of the character [Kojii](https://twitter.com/kojii_ai). They exemplify a good training set: a single, consistent character with subtle variations in pose and appearance between every image. 

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/koji_training_imgs.jpg" caption="Kojii character training images." />

:::tip
We're used to "more data is always better", but for object training, 5 diverse HD images are usually better than 20 low-quality or similar images.
:::tip

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

## Generating with concepts

Once a concept is trained, you may select your concept in the [creation tool](https://app.eden.art/create/creations) from the concept selector, and trigger the concept by referring to it in the prompt by its name or by <concept\>.

:::info
For more information on how to use concepts in the creation tool, see the [creation tool doc](/docs/guides/creation/#concepts).
:::info