---
sidebar_position: 1
---

import Figure from '@site/src/components/Figure';

# Printify Integration Setup

:::tip What is Printify Integration?
Eden's Printify integration allows you to programmatically create and manage print-on-demand products through Printify's network of print providers. This enables automated product creation, design management, and fulfillment through Eden's AI-powered tools.
:::

:::warning Note
Printify is a drop-shipping service and will use its own connection to Shopify. This replaces the Eden Shopify integration. The Eden Shopify integration is best suited for physical goods where you have the inventory on-hand and wish to sell them via your Agent.
:::

## Prerequisites

Before setting up Printify integration, you'll need:

- A Printify account (free to create)
- Access to Printify's Merchant Dashboard
- Basic understanding of print-on-demand products & the Printify platform
- A connected sales channel (Shopify, WooCommerce, etc.) for selling products

## Getting Your Printify Credentials

### Step 1: Create a Printify Account

1. **Sign Up for Printify**

   - Go to [printify.com](https://printify.com)
   - Click **Sign Up** and create your account
   - Verify your email address

2. **Complete Setup**
   - Fill in your business information
   - Set up your payment method
   - Connect your sales channel. See warning above if this is Shopify.
   - Complete any required verification & information steps

### Step 2: Generate API Token

1. **Access API Settings**

   - Log into your Printify Merchant Dashboard
   - Click the burger menu in the top right
   - Scroll to **Account** dropdown, click
   - Select **Connections**

   <Figure src="/img/printify/connections.png" caption="Connections" width="50%" />

   - Go to **API tokens**
   - Click **Generate**
   - Select the following **Custom scopes**: `shops.read`, `catalog.read`, `products.read`, `products.write`, `uploads.write`, `print_providers.read`
   - Click **Generate token**
   - Click **Copy to clipboard** and add the API Key to your Eden deployment

   <Figure src="/img/printify/scopes.png" caption="API Key Scopes" width="50%" />

### Step 2: Connect To Shopify

1. **Connect**

   - Click the merchant icon next to the burger menu in the top right
   - Scroll to Shopify, click **Connect to Shopify**
   - Click **Continue**
   - If you need to create a Shopify, follow **1. Create your Shopify account** otherwise use **2. Connect it with Printify**
   - Enter your store URL in to the input and click **Connect** (See Shopify guide if you need help finding your store URL)
   - Click **Install** in the pop up window for the Printify: Print on Demand add on
   - Once connected, close the tab and click **3. Complete the setup** -> **I've completed my setup**

   <Figure src="/img/printify/shopify.png" caption="Shopify setup" width="50%" />

### Important Notes

- **One-way sync**: Products created in Printify will sync to Shopify
- **Inventory management**: Printify handles inventory for print-on-demand products
- **Fulfillment**: Orders placed on Shopify will be automatically sent to Printify for fulfillment
- **Pricing**: Set your profit margins in Printify, not Shopify

## Setting Up Product Templates

### Understanding Printify Products

Printify products consist of:

- **Base Product**: The physical item (t-shirt, mug, poster, etc.)
- **Print Provider**: The company that prints and fulfills your products
- **Design**: Your artwork or text that gets printed on the product
- **Variants**: Different sizes, colors, or styles of the same product

Your agent has access to Edens physical item & print provider template lists - and will be able to generate a product in accordance with these! Alternatively, you can browse the Printify catalog from your dashboard and ask for a specific item.

### Variable Descriptions

- **`PRINTIFY_API_TOKEN`**: Your Printify API token with the required permissions
- **`DEFAULT_PRODUCT_JSON_PATH`**: Default path for product configuration files (optional)
- **`DEBUG`**: Enable debug logging for troubleshooting (optional)
