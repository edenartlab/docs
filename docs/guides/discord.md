---
sidebar_position: 3
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Deploy agent to Discord

:::info 
Deployments are experimental and currently in private beta. If you're interested in testing it now, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::

Users who have been granted access to the deployment beta will notice a "Deployments" section in each Agent's settings. Through this interface, you can deploy your agent to either Discord or [Telegram](/docs/guides/telegram).

To deploy your agent to Discord, follow these steps.


## Create application in Discord

You will first need to create a new application in the [Discord Developer Portal](https://discord.com/developers/applications).

<Figure src="/img/discord1.jpg" caption="Select 'New Application'" />

Give your application a name (e.g. "My Agent") and click "Create". For convenience, you can give it the same name as your agent.

In "General Information" upload your agent's profile image to App Icon.

<Figure src="/img/discord2.jpg" caption="Discord deployment settings. Give it a profile image/" />

Now click "Bot" on the left sidebar to set up the bot. First upload another profile image. This image will be used as the bot's avatar in Discord.

Then click "Reset Token" to generate a new token and copy it somewhere safe. In one of the next steps, you will need to paste this token into Eden. 

:::warning
Make sure to save the token somewhere safe. Once you leave this page, you will not be able to access it again.
:::

:::warning
If you ever reset or revoke the token, your bot will stop working. You can always generate a new token and paste it again into Eden.
:::

<Figure src="/img/discord3.jpg" caption="Click 'Reset Token' to generate a new token and copy it somewhere safe." />

On the same page, scroll down to "Privileged Gateway Intents" and make sure to select the presence, server members, and message content intents. Your bot will not be able to send or receive messages without these permissions, so make sure to select them and click "Save Changes".

<Figure src="/img/discord4.jpg" caption="Make sure to give the bot all the privileged intents." />

Now click "OAuth2" on the left sidebar to set up the bot's permissions and get a share link. In scopes, select "bot." In Bot Permissions, make sure to select "Send Messages", "Embed Links", and "Attach Files". After selecting those, copy the generated URL at the bottom of the page. This link will be used to invite the bot to your server.

<Figure src="/img/discord5.jpg" caption="Select Bot scope." />

<Figure src="/img/discord6.jpg" caption="Make sure to give the bot all the privileged intents." />

Finally, go to the URL and invite the bot to your server.

## Link bot to your agent

The last step is to paste the bot token into Eden. Go to your agent's deployment settings, select Discord, and paste the token into the "Token" field.

Finally, add channel IDs to "Allowed Channels" to permit your bot to post messages in that channel. To get the channel ID of any channel in Discord, right click the channel name in Discord and select "Copy ID" or "Copy Channel ID".

:::warning
Some users report not seeing the "Copy ID" option for a channel. 

If you are in the Discord desktop app, make sure developer mode is enabled, by going to preferences > Advanced > Developer Mode, and checking it. 

<Figure src="/img/discord_dev_mode.jpg" caption="Enable Developer Mode in Discord." />

Alternatively, access the channel from a web browser and copy the full url (It should look something like `https://discord.com/channels/573691888050241543/1003581679916548207`), and grab the ID from the URL, where it is the last number (e.g. `1003581679916548207`).
:::

<Figure src="/img/discord_deployment.jpg" caption="Select Bot scope." />

Once you're done, click "Deploy." Once it's done, the deployments page will show the status of the deployment. If it is successful, you should now be able to interact with your agent in Discord. 

## Test your agent

Go to one of the channels where the bot is allowed to send messages and try mentioning it in a message. If it responds, you're all set!

:::warning
A common issue is allowlisting your bot to a channel where it does not have permission to send messages. If it doesn't respond, check the permissions of the channel and make sure the bot has "Send Messages" permissions.
:::
