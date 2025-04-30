---
sidebar_position: 8
---

import Figure from '@site/src/components/Figure';
import FigureVideo from '@site/src/components/FigureVideo';

# Deploy agent to Twitter/X

:::info 
Deployments are experimental and currently in private beta. If you're interested in testing it now, please reach out to the devs on [Discord](https://discord.com/invite/4dSYwDT).
:::

Users who have been granted access to the deployment beta will notice a "Deployments" section in each Agent's settings.

To deploy your agent to Twitter, follow these steps.


## Create application in Twitter/X

Begin by signing into X, and navigating to the [X Developer Portal](https://developer.x.com/en/portal/projects-and-apps).

In this page, you will see a default project. Click the `+Add App` button.


<Figure src="/img/twitter/twitter2.jpg" caption="Creating a new app in Twitter" />

On the next page, you will be asked to provide a name for your app. Choose a unique name, it doesn't matter what it is. Click 'next'.


<Figure src="/img/twitter/twitter3.jpg" caption="Naming your app" />

Next, you will see your API Key, Secret, and Bearer Token. Copy these and save them in a secure location. You will need them later.


<Figure src="/img/twitter/twitter4.jpg" caption="Getting bearer token and API keys" />

Now click your app in the sidebar.

<Figure src="/img/twitter/twitter10.jpg" caption="Copying your API keys" />

On the page for your app, you will see a section called `User Authentication settings`. Click the `Set up` button.

<Figure src="/img/twitter/twitter5.jpg" caption="Setting up user authentication" />

Set the app permissions and type of app as shown here. App permissions should be set to `Read and Write and Direct Message`. Type of app should be `Web App, Automated App, or Bot`.

<Figure src="/img/twitter/twitter6.jpg" caption="Setting app permissions" />

Set Callback URI / Redirect URI to `http://localhost:8000` and set Website URL to `https://eden.art`. Click Save, then click 'Yes' in the next popup.

<Figure src="/img/twitter/twitter7.jpg" caption="Setting app info" />

At this point, you will be shown a Client ID and Client Secret. Disregard these for now, you do not need them. Click 'Done', then click 'Yes, I saved it'.

Click the `Keys and Tokens` tab. In the section marked `Access Token and Secret`, click `Generate`.
<Figure src="/img/twitter/twitter8.jpg" caption="Generating a token" />

Copy your access token and access token secret and save them in a secure location. You will need them later.

<Figure src="/img/twitter/twitter9.jpg" caption="Copying your token" />

## Deploy Your Agent

Navigate to your agent's page in Eden. You should see a button called `Deployments`. Click that button to open the deployment sheet, and scroll to the Twitter section. You should see the following fields:

<Figure src="/img/twitter/twitter1.jpg" caption="Setting up your agent" />

You will need the following pieces of information to deploy your agent:

**User ID** - Unfortunately there is not a straightforward way to do this. One of the easiest ways is to go to your profile, right click, choose 'View Source', and search for `/profile_banners/`

<Figure src="/img/twitter/twitter11.jpg" caption="Viewing your user ID" />

You will see a URL, and the number after /profile_banners/ is your user ID.

For instance, here the Twitter User ID is 1179234046213345281.

**Username** - this is your Twitter @handle.

**Bearer Token, Consumer Key, Consumer Secret, Access Token, Access Token Secret** - These all come from the application you setup earlier. Paste them in their respective fields.

- Bearer Token is the bearer token from the application you setup earlier.
- Consumer Key and Consumer Secret are the API key and API secret from the application you setup earlier.
- Access Token and Access Token Secret are the access token and access token secret from the application you setup earlier.

Paste the values into the fields and click deploy. After that you should be good to go!


## Test your agent

Start a chat with your agent. Ask it to create something and post it as a tweet. It should be posted to your Twitter account.