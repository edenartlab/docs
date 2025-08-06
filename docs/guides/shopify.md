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

   - Go to your Shopify store's admin panel
   - Navigate to **Settings** → **Apps and sales channels**

2. **Create a Private App**

   - Click on **Develop apps** (or **Manage private apps** for older stores)
   - Click **Create an app**
   - Give your app a name (e.g., "Eden Integration")
   - Enter your email address as the developer email

3. **Configure App Permissions**

   - Click on **Configure Admin API scopes**
   - Enable the following permissions:
     - **Products**: `read_products`, `write_products`
     - **Inventory**: `read_inventory`, `write_inventory`
     - **Product images**: `read_product_images`, `write_product_images`
     - **Variants**: `read_product_variants`, `write_product_variants`
   - Click **Save**

4. **Install the App**
   - Click **Install app** to install it on your store
   - Confirm the installation

### Step 2: Get Your Access Token

After installing the app:

1. **Copy the Access Token**

   - In your app's overview page, you'll see an **Admin API access token**
   - Click **Reveal token once** to see it
   - **Copy this token immediately** - you won't be able to see it again

2. **Note Your Store Name**

   - Your store name is the subdomain of your Shopify store
   - For example, if your store URL is `mystore.myshopify.com`, your store name is `mystore`

3. **Get Your Location ID**
   - Go to **Settings** → **Locations**
   - You'll see a list of your store's locations (warehouses, retail stores, etc.)
   - Note the **Location ID** for your primary location
   - If you only have one location, this is typically your main warehouse or fulfillment center
   - The Location ID is a numeric value (e.g., `123456789`)

## Store Configuration

### Required Store Settings

Before using the integration, ensure your store is properly configured:

1. **Enable API Access**

   - Go to **Settings** → **Apps and sales channels**
   - Ensure your private app is listed and active

2. **Configure Product Settings**

   - Go to **Settings** → **Products**
   - Ensure **Inventory tracking** is enabled if you plan to manage inventory
   - Set up your **Default product type** and **Default vendor** if desired

3. **Set Up Payment Methods**

   - Go to **Settings** → **Payments**
   - Ensure you have at least one payment method configured

4. **Configure Shipping**
   - Go to **Settings** → **Shipping and delivery**
   - Set up shipping zones and rates

## Environment Variables Configuration

Once you have your credentials, configure the following environment variables:

```bash
# Shopify Configuration
# Replace these values with your actual Shopify store credentials

# Your Shopify store name (without .myshopify.com)
SHOPIFY_STORE_NAME=your-store-name # Deployment specific

# Shopify API version (e.g., 2023-10, 2024-01)
SHOPIFY_API_VERSION=2025-07 # Does not need to change

# Your Shopify access token with product creation permissions
SHOPIFY_ACCESS_TOKEN=your-access-token-here # Deployment specific

# Your Shopify location ID for inventory management
SHOPIFY_LOCATION_ID=your-location-id-here # Deployment specific

# Optional: Set to 'true' to enable debug logging
DEBUG=false # Does not need to change
```

### Variable Descriptions

- **`SHOPIFY_STORE_NAME`**: Your store's subdomain (e.g., `mystore` for `mystore.myshopify.com`)
- **`SHOPIFY_API_VERSION`**: The Shopify API version to use (recommended: `2025-07`)
- **`SHOPIFY_ACCESS_TOKEN`**: The admin API access token from your private app
- **`SHOPIFY_LOCATION_ID`**: The numeric ID of your primary location for inventory management
- **`DEBUG`**: Enable debug logging for troubleshooting (optional)

## Testing Your Integration

After setting up your credentials:

1. **Verify API Access**

   - Test a simple API call to ensure your credentials work
   - Try fetching your store's product list

2. **Create a Test Product**

   - Use Eden's tools to create a simple test product
   - Verify it appears in your Shopify admin

3. **Check Permissions**
   - Ensure you can create, update, and delete products
   - Verify inventory management works if needed

## Security Best Practices

- **Keep your access token secure** - never commit it to version control
- **Use environment variables** - store credentials in secure environment variables
- **Regularly rotate tokens** - regenerate your access token periodically
- **Monitor API usage** - keep track of API calls to avoid rate limits
- **Use minimal permissions** - only grant the permissions your integration needs

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**

   - Verify your access token is correct
   - Ensure the token hasn't been revoked

2. **"Store not found" error**

   - Check your store name spelling
   - Ensure you're using the correct subdomain

3. **"Insufficient permissions" error**

   - Verify your private app has the required scopes
   - Reinstall the app if needed

4. **Rate limiting**
   - Shopify has API rate limits (2 requests per second for most endpoints)
   - Implement retry logic with exponential backoff

### Getting Help

If you encounter issues:

1. Check Shopify's [API documentation](https://shopify.dev/docs/api)
2. Review your app's permissions in Shopify admin
3. Enable debug logging to see detailed error messages
4. Contact Eden support with specific error details

## Next Steps

Once your Shopify integration is configured:

- Explore Eden's product creation tools
- Set up automated workflows
- Configure inventory management
- Integrate with other Eden features

For more advanced usage, see our [Shopify API documentation](https://shopify.dev/docs/api) and [Eden tools documentation](/docs/tools/).
