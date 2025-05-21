---
sidebar_position: 2
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Deploy agent to Twitter/X

:::info 
Deployments are experimental and currently in private beta. If you're interested in testing it now, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::

Users who have been granted access to the deployment beta will notice a "Deployments" section in each Agent's settings. To deploy your agent to Twitter, follow these steps.


## [1/4] Create a Twitter/X application

Begin by signing into X using the account you want to deploy your agent to! When logged in, navigate to the **[X Developer Portal](https://developer.x.com/en/portal/projects-and-apps)**.

Ignore the subscription tiers and just click "sign up for Free Account":
<Figure src="/img/twitter/twitter_01.jpg" caption="Sign up for a Free Account" width="60%" />

In the **developer Agreement** you can explain what you're intending to use the agent for, but to make things easy we've already drafted something for you, feel free to edit if you want:

> Programmatically read, classify and respond to public tweets that discuss generative-AI, autonomous agents and community-driven creativity. Prototype research agents that serve as transparent information filters: collecting relevant threads and information, extract key insights, generate multimedia and publish context-rich replies using a multi-modal agentic tool-suite. Aggregated, de-identified activity metrics will inform studies on collective knowledge-building, guide open-source tooling roadmaps and coordinate online events. All processing accesses only publicly available content and crawls the minimum data required.

Now, you should be able to navigate to your default project which is auto-created for you. Navigate to its only existing app and rename it if you want.

<Figure src="/img/twitter/twitter_03.jpg" caption="Your first (default) app"  width="30%" />

## [2/4] Setup your API Key and Secrets
Next, you will see your **API Key, Secret**, and **Bearer Token**. Copy these and save them in a secure location. You will need them later.

Click back on your app (or navigate to 'settings'), scroll down, and you'll see a section called `User Authentication settings`. Click the `Set up` button:

<Figure src="/img/twitter/twitter5.jpg" caption="Setting up user authentication"  width="70%"/>

Set the app permissions and type of app as shown here. App permissions should be set to `Read and Write and Direct Message`. Type of app should be `Web App, Automated App, or Bot`:

<Figure src="/img/twitter/twitter6.jpg" caption="Setting app permissions"  width="70%"/>

Set Callback URI / Redirect URI to `http://localhost:8000` and set Website URL to `https://eden.art`. Click Save, then click 'Yes' in the next popup.

<Figure src="/img/twitter/twitter7.jpg" caption="Setting app info"  width="70%"/>

You will be shown a Client ID and Client Secret. **Ignore these for now, you do not need them**. Click 'Done', then click 'Yes, I saved it'.

Click the `Keys and Tokens` tab. In the section marked `Access Token and Secret`, click `Generate`.
<Figure src="/img/twitter/twitter8.jpg" caption="Generating a token" width="70%"/>

Copy your access token and access token secret and save them in a secure location. You will need them later.

<Figure src="/img/twitter/twitter9.jpg" caption="Copying your token" width="70%"/>

## [3/4] Get your User ID

If you go back to your app settings on the developer website and look at your `developer.x.com` URL, you should see something like this:

```
https://developer.x.com/en/portal/projects/1925176436425485860/apps/32908218/settings
```

The large number after `/projects/` (in the URL above) is your **User ID**. Copy it and save it in a file.


## [4/4] Deploy Your Agent

Navigate to your agent's page in Eden. You should see a button called `Deployments`. Click that button to open the deployment sheet, and scroll to the Twitter section. You should see the following fields:

<Figure src="/img/twitter/twitter1.jpg" caption="Setting up your agent" width="70%"/>

Fill them in as follows:

*   **User ID**: This is the large number from the previous step.
*   **Username**: This is your Twitter @handle. Do not include the `@` sign, just your handle (e.g., `your_twitter_name`).
*   **Bearer Token**: This is the Bearer Token from the application you set up earlier.
*   **Consumer Key**: This is the API key from the application you set up earlier.
*   **Consumer Secret**: This is the API secret from the application you set up earlier.
*   **Access Token**: This is the access token from the application you set up earlier.
*   **Access Token Secret**: This is the access token secret from the application you set up earlier.

Paste the values into their respective fields and click `Deploy`!


## Finally, test your agent!

Start a chat with your agent using the web interface.
Ask your agent to create something and post it as a tweet. It should be posted to your Twitter account.

## Build the magic


<Figure src="/img/twitter/twitter__09.jpg" caption="Schedule Tasks" width="70%"/>

Once everything works you can start really making your agent into a powerful autonomous agents. Our most powerful feature is scheduled tasks driven by a single, powerful prompt that leverages all the tools in our stack! Be creative, go wild, be responsible, this is powerful stuff you're playing with!


<Figure src="/img/twitter/twitter__10.jpg" caption="Schedule Tasks" width="70%"/>
