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

Lastly, you need to specify the "Allowed Channels" field, which is all of the channels the bot is permitted to chat. These are called "groups" or "topics" in Telegram. 

To get the ID of a topic or group, you have to visit the channel in [Telegram web](https://web.telegram.org/) and then inspect the url when you've selected the group. 

**If the group does not have topics**

Inspect the link in the browser, and copy everything after the last slash and #. It should look something like `-some_number`. Here it is `-4656194598`.

<Figure src="/img/telegram/telegram1.jpg" caption="Inspect the link in the browser, and copy everything after the last slash and #. It should look something like `-some_number`." />

**If the group has topics**

Inspect the link in the browser, and copy everything after the last slash and #. The group ID should look something like `-100` + `some_number` + `_some_string`. If your URL doesn't look like this and your URL has a /k/, try changing it to /a/ instead. Here it is `-1002429164874_30`.

<Figure src="/img/telegram/telegram2.jpg" caption="Inspect the link in the browser, and copy everything after the last slash. The group ID should look something like `-100` + `some_number` + `_some_string`." />

Copy these IDs and paste them into the "Allowed Channels" field for each channel you want your bot to post to.

Once you're done, click "Deploy." You will be alerted that the deployment is starting. Once it's done, the deployments page will show the status of the deployment. If it is successful, you should now be able to interact with your agent in Telegram. Try mentioning it in a message.

:::warning
The deployment may show as "successful" a couple minutes before it is actually ready. If it is successful but not responding, please wait a few more minutes.
:::