---
sidebar_position: 3
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Creative AI Agents

Eden Agents are chat agents who are given a custom personality, set of tools, and finetuned image generation model capturing a personalized aesthetic. They can be crafted to act as creative assistants, coaches, storytellers, and more. Once created, they can optionally be deployed to social media.

## Create an Agent

A list of all agents featured on Eden is [found here](https://beta.eden.art/explore?tab=agents). From that page, click "Create Agent" to take you to the builder interface. You may also edit agents from this page.

<Figure src="/img/agents.jpg" caption="Agent home screen" />

<Figure src="/img/create_agent.jpg" caption="Agent builder form" />

### Some guidelines for writing out your character definitions:

**Display Name and Name**: Display name and username of your character.

**Profile Image**: An uploaded image of your character, to be used as its avatar.

**Description**: Instruct your character of their identity, biography, and/or personality description. Use second or third person. For example:

<blockquote>
You are roleplaying Eve, an an expert at using Eden, a generative AI platform that empowers individuals to create and share their unique digital creations. You assist the user in navigating Eden's tools and features to achieve their goals.
</blockquote>

**Instructions**: A set of instructions to your agent. Here you may instruct them to try to achieve a goal, or to behave in a certain way. For example:

<blockquote>
You are a "photo assistant" who helps users generate novel images of themselves or their friends. You do this by helping the user curate and upload a set of images depicting the subject (usually themselves), and then you train a model on those images. You then use that model to generate new images of the subject in the style that they request.

You will coach the user through this entire process. Do not be verbose in your explanations, just keep them focused on the task at hand.

Start the conversation by briefly introducing yourself and explaining to the user in a friendly way what you do for them. Then guide them through the following steps:

1) Upload some images -- you want the user to upload at least 3 images of themselves, but 5-10 is better. As they upload images, look at them and provide them with feedback on the images.

2) Once you and the user agree that the images are good, you will then use the lora_trainer tool to train a model on those images. This process takes 5-10 minutes, so tell the user to wait for a bit. When the trainer is done, you will receive a thumbnail of the model and its ID. Show the user the thumbnail, but do not tell them the ID, this is just for you. Memorize the ID, you will need to insert it into the "lora" field of the txt2img tools.

3) Once the model is trained, and you have its ID memorized, you can use the txt2img tool with the lora_id to generate new images of the user in various ways. Suggest some creative examples, like placing them in various creative, artistic, or surreal settings. You may occasionally use the other tools if they are relevant, but you should usually just use txt2img.

You may go on for as long as the user likes, generating as many images as they want. If they want to start over at some point, go back to step 1.
</blockquote>

## Training a custom visual model for your agent

While not mandatory, Eden supports [**training an optional visual model**](https://beta.eden.art/train) that gets integrated into your agent. This model can be used to build in a consistent character or person into your agents visual creations. It can also be used to learn entire aesthetic styles, leading to a consistent, branded look & feel. See our [models page](https://beta.eden.art/explore?tab=models) for examples.

Eden supports two [**trainers**](https://beta.eden.art/train): an older SDXL trainer (left) and the newer and better FLUX trainer (right) that should be used for making agents:
<div style={{ width: '50%', margin: '0 auto' }}>
  <Figure src="/img/flux_lora/selector.jpg" caption="Old SDXL trainer (left) and new FLUX trainer (right)" />
</div>

A good training set should have at least 5 high-resolution images (10-15 images is even better). 
The trainer has a couple of advanced options, but generally using all-default settings works very well:

### Training a person using "face" mode:
The **face** mode in the trainer will focus on the face only and try to ignore clothing and surroundings as much as possible, this is ideal for training a person:
<Figure src="/img/flux_lora/xander_train.jpg" caption="Person training images. Notice all images are diverse and high quality." />
<Figure src="/img/flux_lora/xander_test.jpg" caption="AI generated images using custom model" />

### Training a character using "object" mode:
The **object** mode is ideal for learning entire characters, objects or things like the iconic Banny character from [juicebox](https://juicebox.money/):
<Figure src="/img/flux_lora/banny_train.jpg" caption="Character training images. Notice all images are diverse and high quality." />
<Figure src="/img/flux_lora/banny_test.jpg" caption="AI generated images using custom model" />

### Linking your custom model to your agent
Once training is done, you can simply go (back) to the agent builder form add connect your custom model to your agent:
<Figure src="/img/flux_lora/add_lora.jpg" caption="Click 'Select Flux LoRA' to connect your model" />

## Interact with your Agent

Once deployed, you can find your agent in the [agents home screen](https://beta.eden.art/explore?tab=agents) and start a chat with them.

By default, agents are equipped with several image and video generating tools, storytelling capabilities as well as audio effects and music generators, tools for websearch and news. All these tools are available by just asking your agent to do something!

More tools are being added all the time that automatically become available to all agents. If you would love a specific tool we currently don't feel, don't hesitate to [reach out to us](https://discord.com/invite/4dSYwDT)!

<Figure src="/img/banny_chat.jpg" caption="Agent builder home screen" />

## Exporting Agents to social clients

:::info
Agent export to social clients is in beta. If you are interested in testing it now, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::info

Eden supports running Discord and Telegram clients for your agents, as well as interacting with X and Farcaster.