---
sidebar_position: 4
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Deploy agent to Telegram

:::info 
Deployments are experimental and currently in private beta. If you're interested in testing it now, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::

Users who have been granted access to the deployment beta will notice a "Deployments" section in each Agent's settings. Through this interface, you can deploy your agent to either Telegram or [Discord](/docs/guides/discord).

To deploy an agent to Telegram, follow these steps:

1. Message [BotFather](https://t.me/botfather) in Telegram.
2. Send the message `/newbot` to create a new bot, and give your bot a display name and username which ends with `_bot`.
3. Copy the token and save it somewhere safe. You will need it in the next step.
4. In order to let the bot receive messages in groups, you need to disable privacy mode. You can do this with the command `/setprivacy` and then enter "Disable" when prompted.
5. Once your bot is created, you'll receive a token.

<Figure src="/img/telegram1.jpg" caption="Creating a new bot in Telegram" />

Additionally, use the command `/setuserpic` to upload the bot's profile picture.

Now go to your agent's deployment settings, select Telegram, and paste the token into the "Token" field.

<Figure src="/img/telegram_deployment.jpg" caption="Enter the token and click 'Deploy'" />

The "Allowed Channels" field is optional. If you want to specify certain channels ("groups" or "topics" in Telegram) where the bot is permitted to send messages, specify those here. To get the ID of a topic or group, you have to visit the channel in [Telegram web](https://web.telegram.org/) and then inspect the url when you've selected the group. The ID is the number after the last slash, excluding the hash.

<Figure src="/img/telegram1.jpg" caption="The ID of the group is `-2155286223` (note the dash!)" />

Once you're done, click "Deploy." You will be alerted that the deployment is starting. Note this process may take up to 10 minutes to complete. Once it's done, the deployments page will show the status of the deployment. If it is successful, you should now be able to interact with your agent in Discord. Try mentioning it in a message.

:::warning
The deployment may show as "successful" a couple minutes before it is actually ready. If it is successful but not responding, please wait a few more minutes.
:::