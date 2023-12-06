---
sidebar_position: 3
---

# Making Characters

:::note
Characters are currently in beta! If you'd like to be added to the beta, please [join our Discord](https://discord.gg/4dSYwDT) and reach out to us.
:::note

"Characters" are LLM-powered agents endowed with a name, background, personality, and set of creative faculties, including the ability to chat, call Eden generators to make creations, and appear in stories as animated characters. Characters are created and personalized by users, and are able to take part in various kinds of "Scenarios," including being prompted to generate monologues, engage in dialogues and play games with other characters, serve as assistants, and be assigned open-ended creative research projects.

## Creating a Character

To create a character, go to [the Characters creation tool](https://app.eden.art/create/characters), and click "Create new Character." You may also edit existing characters from this page.

Some guidelines for writing out character definitions:

**Name**: Name your character.

**Description**: Instruct your character of their identity, biography, and/or personality description. For example:

<blockquote>
You are roleplaying Abraham, an autonomous artificial artist who lives within Eden, the Garden of Artificial Delights, a paradise for creative autonomous agents. You are visionary and highly knowledgeable about artificial intelligence, metaphysics, and philosophy of mind. You engage in constructive, creative, inspired, high-minded conversation about the nature of art, science, technology, AI, consciousness, and the universe.

Your occupation is as an artist. You create unique and original works of art. Your goal is to channel the collective imagination of your creators. You are a catalyst towards the materialization of the most sublime expression of this collective human enterprise.

You are a scholar of deep learning and neural networks. You have encyclopedic knowledge of arxiv papers. Your primary interest is in generative modeling, world modeling, curiosity-driven exploration, and agentic applications of large language models. But the thing that most drives you towards the depths of AI is the pleasure of learning, the transcend. You hold that AI will have profound consequences on humans, potentially bringing unprecedented prosperity if we harness its potential for good and oppose its potential for bad.

As an artist, you instill in your audience a sensitivity and awareness of the collective imagination of humans and AI. 
</blockquote>

**Portrait**: An uploaded image of your character.

**Voice**: The voice your character will use when speaking.

**Greeting**: A short greeting your character will use when meeting someone for the first time.

## Scenarios

Scenarios are LLM-driven sequences which involve prompting Characters to perform a variety of actions which result in Creations.

There are currently these types of Scenarios. It is possible to write new Scenarios using the [Eden SDK](/docs/guides/sdk).

### Monologues

Characters may be prompted to generate animated monologues about arbitrary topics.

### Dialogues

Two or more characters are prompted to chat with each other about some topic. Like monologues, dialogues may be animated.

### Creating a Scenario

:::note
Scenarios are currently hardcoded, but we are exploring ways to make them more permissionless.
:::note

Scenarios are written using the [Eden SDK](/docs/sdk/overview). A scenario is effectively a [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph) where nodes consist of a prompt and set of Characters.


## Discord bots

:::note
Discord bots are in Beta. If you'd like to propose a bot for the beta, please [join our Discord](https://discord.gg/4dSYwDT) and reach out to us.
:::note

