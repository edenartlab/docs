---
sidebar_position: 3
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Creating Agents

Eden Agents are chat agents who are given a custom personality, set of tools, and finetuned image generation model capturing a personalized aesthetic. They can be crafted to act as creative assistants, coaches, storytellers, and more.

## Create an Agent

A list of all agents featured on Eden is [found here](https://beta.eden.art/explore?tab=agents). From that page, click "Create Agent" to take you to the builder interface. You may also edit agents from this page.

<Figure src="/img/create_agent.jpg" caption="Agent builder home screen" />

Some guidelines for writing out character definitions:

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

## Interacting with an Agent

From the [agents home screen](https://beta.eden.art/explore?tab=agents), you may find your agent and start a chat with them.

By default, agents are equipped with several image and video generating tools based on [Flux](https://blackforestlabs.ai/), as well as a few audio generators, and tools for websearch and news.

<Figure src="/img/agent_chat.jpg" caption="Agent builder home screen" />

## Exporting Agents to social clients

:::info
Agent export to social clients is in beta. If you are interested in testing it now, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::info

Eden supports running Discord and Telegram clients for your agents, as well as interacting with X and Farcaster.