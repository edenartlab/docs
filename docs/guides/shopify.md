---
sidebar_position: 1
---

import Figure from '@site/src/components/Figure';

# Shopify Integration Setup

:::tip What is Shopify Integration?
Eden's Shopify integration allows you to programmatically create and manage products in your Shopify store. This enables automated product creation, inventory management, and store operations through Eden's AI-powered tools.
:::

## Prerequisites

Before setting up Shopify integration, you'll need:

- A Shopify store (either a paid plan or Shopify Plus)
- Admin access to your Shopify store
- Basic understanding of Shopify's admin interface

## Getting Your Shopify Credentials

### Step 1: Create a Private App

1. **Log into your Shopify Admin**

   - Go to your Shopify store's admin panel. If you need to create a new shopify go to [https://accounts.shopify.com/](https://accounts.shopify.com/) and sign up as appropriate, then create a store
   - Navigate to **Settings** → **Apps and sales channels**

2. **Create a Private App**

   - Click on **Develop apps** (or **Manage private apps** for older stores)
   - Click 'Allow custom app development' if not already selected

   <Figure src="/img/shopify/app-dev.jpg" caption="Allow custom app development" width="50%" />

   - Click **Create an app**
   - Give your app a name (e.g., "Eden Integration")
   - Select your email address as the developer email
   - Click **Create app**

3. **Configure App Permissions**

   - Click on **Configure Admin API scopes**
   - Enable the following permissions:
     - **Products**: `read_products`, `write_products`
     - **Inventory**: `read_inventory`, `write_inventory`
     - **Locations**: `read_locations`, `write_locations`
     - **Publications**: `read_publications`, `write_publications`
   - Click **Save**

4. **Install the App**
   - Click **Install app** to install it on your store. You may need to close the settings and reopen them for the button to enable.
   - Confirm the installation

### Step 2: Get Your Access Token

After installing the app:

1. **Copy the Access Token**

   - In your app's overview page, you'll see an **Admin API access token**
   - Click **Reveal token once** to see it
   - **Copy this token immediately** - you won't be able to see it again. It should start with `shpat`

2. **Note Your Store Name**

   - Your store name is the subdomain of your Shopify store
   - For example, if your store URL is `mystore.myshopify.com`, your store name is `mystore`

   <Figure src="/img/shopify/store-name.png" caption="Store name is pvw15i-8p" width="50%" />

3. **Get Your Location ID**

   - Go to **Settings** → **Locations**
   - You'll see a list of your store's locations (warehouses, retail stores, etc.). For new stores this may just be 'Shop location' and then a country.
   - Select a location
   - Note the **Location ID** for your primary location. This is located at the end of the URL in your URL bar
   - The Location ID is a numeric value (e.g., `123456789`)

   <Figure src="/img/shopify/store-location.png" caption="Store location is 79431860420" width="50%" />

## Agent Deployment Configuration

Once you have your credentials, configure the corresponding variables for your Eden agent deployment.

   <Figure src="/img/shopify/agent-deployment.png" caption="Configure name / API token / location ID for your store" width="75%" />

## Use

Once you have deployed your Shopify configuration, prompt your Agent to create a Shopify product!

   <Figure src="/img/shopify/product.png" caption="Creating a product on Shopify" width="50%" />

### Variable Descriptions

- **`SHOPIFY_STORE_NAME`**: Your store's subdomain (e.g., `mystore` for `mystore.myshopify.com`)
- **`SHOPIFY_API_VERSION`**: The Shopify API version to use (recommended: `2025-07`)
- **`SHOPIFY_ACCESS_TOKEN`**: The admin API access token from your private app
- **`SHOPIFY_LOCATION_ID`**: The numeric ID of your primary location for inventory management
- **`DEBUG`**: Enable debug logging for troubleshooting (optional)

## Security Best Practices

- **Regularly rotate tokens** - regenerate your access token periodically
- **Monitor API usage** - keep track of API calls to avoid rate limits
- **Use minimal permissions** - only grant the permissions your integration needs
