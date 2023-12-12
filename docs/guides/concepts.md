---
sidebar_position: 2
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Training Concepts (LoRa)

A limitation of generative models (including Eden's base model) is that they can only generate things they've been trained on. But what if you want to consistently compose with a specific object, person's face, or artistic style which is not found in the original training data? This is where *Concepts* come in.

Concepts are custom characters, objects, styles, or specific people which have been trained and added by Eden users to the Eden generators' knowledge base, using the [LoRA technique](https://arxiv.org/abs/2106.09685). With concepts, users are able to consistently reproduce specific content and styles in their creations.

Concepts are first trained by uploading example images to the [concept trainer](https://app.eden.art/create/concepts). Training a concept takes around 10 minutes. Once trained, the concept becomes available to use in the [creation tool](/docs/guides/creation) for all of the endpoints, including images and video.

:::tip
This doc is about training concepts. For help generating creations with your concepts, see the [creation tool doc](/docs/guides/creation/#concepts).
:::tip

## Training

You can train a concept through the [training UI](https://app.eden.art/create/concepts) or through the [SDK](/docs/guides/sdk).

### Selecting your training set

All you need to train a concept is a few images. The number of images can vary a lot depending on what you are trying to learn. For a face or object, 4-10 images is usually enough, but you can include hundreds or even thousands of images to capture a more diverse style.

In general, the choice of the training images is the biggest factor determining the quality and accuracy of the concept. With practice you can develop an intuition for how different dataset qualities affect your results. If you're unsatisfied with your results, try a different selection of training images before adjusting the settings.

Some suggestions and tips for choosing training images:

- **Selective diversity**: If you're trying to learn a specific face or object, your training images should feature the target consistently, and maximize the variance of everything you're *not* trying to learn. For example, if you have several images of a person whose face you are trying to learn, and they are wearing a green shirt in all of the images, the concept is more likely to include the green shirt. It helps to capture the target in different poses, from different angles, and with different lighting conditions or facial expressions. Similarly, if you want to learn an artistic style or aesthetic, you should have a selection of works which is diverse with respect to all the features you're *not* trying to learn (e.g. content, layout, color palettes, etc), while being consistent with respect to the features you are trying to learn (the "style").

Some additional guidelines that you should almost always follow:

- **High resolution**: Images that are at least 768x768 pixels are best quality. Below that is not recommended as your concept might learn and adopt the low quality of the training images.
- **Center-cropped**: The concept trainer will automatically crop your images to the center square. Avoid placing your the target subject outside of that square. 
- **Prominence**: For faces and objects, aim to feature the target object prominently in the image.

### (Optional) Including your own prompts

Concepts are trained on a set of images and their corresponding prompts. By default, the concept trainer tries to produce these prompts for you automatically. However, in some cases you may want to prompt your concept in a very specific way. For this, you may optionally upload your own prompts along with the training images, overriding this behavior. 

To do this, create a set of text files whose names match the images (e.g. `1.txt` for `1.jpg`, `image2.txt` for `image2.png`, etc) and which contain the prompt you want to use for the corresponding image.

### Training parameters

The following parameters are required:

* **Training images**: You may upload image files (jpg, png, or webm) directly or upload zip files containing images. You may optionally upload your own prompts for the training images by zipping the images together with a set of text files whose names match the images (see above). You may upload up to 10 files, and each file must be below 100MB.
* **Concept name**: This is how you refer to the concept in prompts. You do not need to version since names are not required to be unique.
* **Training mode**: There are three available modes: object, face, and style. The mode is used to call upon trainer templates that are optimized for these three categories. Faces refer to human faces, objects are for all other "things" (including non-human faces), and styles refer to abstract style characteristics common to all the training images.

The following parameters are optional, and rarely need to be changed:

* **Train steps**: This refers to how long to finetune the model with your dataset. More steps should lead to fitting your concept more accurately, but too many steps may overfit your concept, leading to poor proptability and generalization, as well as visual artifacts.
* **Random flip**: This setting doubles the number of training samples by randomly flipping each image horizontally. This should generally be on unless the subject has a specific horizontal orientation which cannot appear mirrored, for example text or logos. Flipping is always automatically disabled when training in face mode.
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
Note that the faces mode is highly optimized for human faces. If you want to train a concept to learn a non-human face, such as a cartoon character or animal, you will probably get better results using the [object](#objects) mode instead.
:::warning

:::tip
When uploading faces, it's usually a good idea to crop the images so the face fills a large fraction of the total image.
:::tip

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/xander_training_images.jpg" caption="Face training images of Xander" />

After training a concept on these images (which we will name "Xander"), we can generate creations with it by selecting the concept in the creation interface. To refer to the concept in your prompt, you can include the concept name or `<concept>` in your prompt, this process is not case-sensitive. For example, any of the below will work:

- Xander as a character in a noir graphic novel
- a xander action figure
- <concept\> as a knight in shining armour
- <Xander\> as the Mona Lisa

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/xander_generated_images.jpg" caption="Generated images with the Xander concept." />

### Objects

The "Object" training mode is optimized for learning all other "things" besides for human faces. This includes non-human faces, physical objects, characters, cartoons, and miscellaneous objects.

For example, the images below are professional renders of the character [Kojii](https://twitter.com/kojii_ai). They exemplify a good training set: a single, consistent character with subtle variations in pose and appearance between every image. 

:::tip
We're used to "more data is always better", but for concept training, 10 really good, diverse HD images is usually better than 100 low-quality or similar images.
:::tip

<Figure src="https://storage.googleapis.com/public-assets-xander/A_workbox/eden_docs/koji_training_imgs.jpg" caption="Kojii character training images." />

After training the concept, we are again able to compose with it in the creation tool. Eg, we can prompt:

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

## Exporting LoRas for use in other tools

Eden concepts are trained using the LoRA technique, a widely used extension to Stable Diffusion, and is fully compatible with the many other tools that support it. You may export your concepts as LoRas to use in other tools, such as [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) or [ComfyUI](https://github.com/comfyanonymous/ComfyUI).

To export your concept, you can download it from the app. The concept comes as a .tar file which contains two files, one with the token embeddings and one with the LoRA weights.

<Figure src="/img/download_concept.jpg" caption="Download your concept LoRa as a .tar file" />

### AUTOMATIC1111 stable-diffusion-webui

To use your concept in [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui), follow these steps:

1. Download the concept.
2. Extract (untar) the content.
3. Put the `..._lora.safetensors` file in the `stable-diffusion-webui/models/Lora` folder.
4. Put the ``..._embeddings.safetensors` file in the `stable-diffusion-webui/embeddings` folder.
5. Eden LoRAs are currently trained using the [**JuggernautXL_v6** checkpoint](https://civitai.com/models/133005/juggernaut-xl). For best results, use that same model as your base checkpoint.
6. **Make sure to load both the embedding *and* the lora weights by triggering them in your prompt**

<Figure src="/img/auto1111.jpg" caption="Using an exported LoRA in AUTOMATIC1111. Notice how both the token embedding and the LoRa are triggered in the prompt." />

:::tip
For "face" and "object" modes, refer to your concept directly by using *..._embeddings* in the prompt. For style concepts, you should include *"... in the style of ..._embeddings"* in your prompt.
:::tip

### ComfyUI

1. Download the concept.
2. Extract (untar) the content.
3. Put the `..._lora.safetensors` file in the `ComfyUI/models/loras` folder.
4. Put the `..._embeddings.safetensors` file in the `ComfyUI/models/embeddings` folder.
5. Eden LoRAs are currently trained using the [**JuggernautXL_v6** checkpoint](https://civitai.com/models/133005/juggernaut-xl). For best results, use that same model as your base checkpoint.
6. Load the LoRA weights using a *"Load LoRA"* node in your pipeline and adjust the strength as needed.
6. Trigger the concept in your prompt by refering to it with *embedding..._embeddings*.

:::tip
For "face" and "object" modes you refer to your concept directly by using in the prompt, for style concepts you should add *"... in the style of embedding:..._embeddings"* somewhere in your prompt.
:::tip

:::note
You may notice that the LoRA strength has a relatively small effect on the final output. This is because Eden concepts optimize towards using the token embedding to learn most of the concept, rather than the LoRA matrices.
:::note