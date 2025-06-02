---
sidebar_position: 3
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Deploy agent to Farcaster

:::info 
Deployments are experimental and currently in private beta. If you're interested in testing it now, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::

Users who have been granted access to the deployment beta will notice a "Deployments" section in each Agent's settings.

To deploy your agent to Farcaster, follow these steps.

## Prerequisites

- A Farcaster account

You will need to have a Farcaster account to deploy your agent. The easiest way is to use the Farcaster app:

- [iOS](https://apps.apple.com/us/app/farcaster/id1600555445)
- [Android](https://play.google.com/store/apps/details?id=com.farcaster.mobile)

## Export your Farcaster account mnemonic

Once you have a Farcaster account, you will need to export your account mnemonic. In the app, go to Settings > Advanced > Show Farcaster recovery phrase. Copy this phrase and save it somewhere safe.

## Link Farcaster to your agent

Now let's set up your agent in Eden. Go to your agent's deployment settings, select Discord, and paste the mnemonic into the "Mnemonic" field. Click deploy.

## Test your agent

If your deployment was successful, your bot should reply to any @mention of its username on Farcaster.
