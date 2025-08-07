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
- Basic understanding of print-on-demand products
- A connected sales channel (Shopify, WooCommerce, etc.) for selling products

## Getting Your Printify Credentials

### Step 1: Create a Printify Account

1. **Sign Up for Printify**

   - Go to [printify.com](https://printify.com)
   - Click **Sign Up** and create your account
   - Verify your email address

2. **Complete Your Profile**
   - Fill in your business information
   - Set up your payment method
   - Complete any required verification steps

### Step 2: Generate API Token

1. **Access API Settings**

   - Log into your Printify Merchant Dashboard
   - Go to **Settings** → **API Keys**
   - Click **Generate API Key**

2. **Configure API Permissions**

   - Select the following permissions for your API key:
     - **Shops**: Read and Write access
     - **Catalog**: Read access
     - **Orders**: Read and Write access
     - **Products**: Read and Write access
     - **Webhooks**: Read and Write access
     - **Uploads**: Read and Write access
     - **Print Providers**: Read access
     - **User Info**: Read access

3. **Generate and Copy Token**
   - Click **Generate Key**
   - **Copy the API token immediately** - you won't be able to see it again
   - Store it securely for use in your environment variables

### Step 3: Get Your Shop ID

1. **Find Your Shop ID**

   - In your Printify dashboard, go to **Shops**
   - Click on your shop name
   - The Shop ID will be displayed in the URL or shop settings
   - It's a numeric value (e.g., `23694293`)

2. **Note Your Shop Details**
   - Keep track of your shop name and ID
   - Ensure your shop is properly configured with a sales channel

## Linking Printify to Shopify

To enable seamless product creation and order fulfillment, you need to connect your Printify store to your Shopify store:

### Step 1: Connect Sales Channel

1. **Add Shopify as Sales Channel**

   - In your Printify dashboard, go to **Shops**
   - Click **Add sales channel**
   - Select **Shopify** from the list of available platforms

2. **Connect Your Shopify Store**

   - Click **Connect** next to Shopify
   - You'll be redirected to Shopify to authorize the connection
   - Log into your Shopify admin if prompted
   - Click **Install app** to allow Printify access to your store

3. **Configure Connection Settings**
   - Set your preferred sync settings for products and orders
   - Choose whether to sync inventory automatically
   - Configure shipping and tax settings

### Step 2: Verify Connection

1. **Check Connection Status**

   - Return to your Printify dashboard
   - Go to **Shops** → **Sales channels**
   - Verify Shopify shows as "Connected"

2. **Test Product Sync**
   - Create a test product in Printify
   - Verify it appears in your Shopify store
   - Check that product details sync correctly

### Step 3: Configure Sync Settings

1. **Product Sync Settings**

   - Choose which products to sync (all or selected)
   - Set up automatic inventory updates
   - Configure pricing and variant mapping

2. **Order Sync Settings**
   - Enable automatic order import from Shopify
   - Set up fulfillment notifications
   - Configure order status updates

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

### Step 1: Explore Available Products

1. **Browse the Catalog**

   - Go to **Catalog** in your Printify dashboard
   - Browse available products by category
   - Note product IDs and available variants

2. **Check Print Providers**
   - Each product has specific print providers
   - Different providers offer different quality, pricing, and shipping times
   - Note which providers you prefer for different product types

### Step 2: Create Product Templates

1. **Design Your Template**

   - Use Printify's design tool or upload your own artwork
   - Set up print areas and positioning
   - Configure text overlays if needed

2. **Save as Template**
   - Save your design as a template for reuse
   - Note the template ID for programmatic access
   - Organize templates by product type or theme

### Step 3: Configure Product Settings

1. **Set Up Product Details**

   - Configure product titles and descriptions
   - Set pricing and profit margins
   - Configure shipping options

2. **Set Up Variants**
   - Configure available sizes, colors, and styles
   - Set individual pricing for variants if needed
   - Configure inventory tracking

## Environment Variables Configuration

Once you have your credentials, configure the following environment variables:

```bash
# Printify API Configuration
PRINTIFY_API_TOKEN=your-api-token-here # Deployment specific

PRINTIFY_SHOP_ID=your-shop-id-here # Deployment specific

# Optional: Default path for product.json file
DEFAULT_PRODUCT_JSON_PATH=./product.json

# Optional: Debug mode (set to 'true' to enable verbose logging)
DEBUG=false
```

### Variable Descriptions

- **`PRINTIFY_API_TOKEN`**: Your Printify API token with the required permissions
- **`PRINTIFY_SHOP_ID`**: The numeric ID of your Printify shop
- **`DEFAULT_PRODUCT_JSON_PATH`**: Default path for product configuration files (optional)
- **`DEBUG`**: Enable debug logging for troubleshooting (optional)
