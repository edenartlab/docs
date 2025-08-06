---
sidebar_position: 1
---

import Figure from '@site/src/components/Figure';

# Captions.ai Integration Setup

:::tip What is Captions.ai Integration?
Eden's Captions.ai integration allows you to programmatically create AI-generated videos with custom avatars, voices, and scripts. This enables automated video content creation, personalized messaging, and scalable video production through Eden's AI-powered tools.
:::

## Prerequisites

Before setting up Captions.ai integration, you'll need:

- A Captions.ai account (free to create)
- Access to Captions.ai dashboard
- High-quality photos or videos for AI clone creation
- Scripts ready for video generation
- Basic understanding of video content creation

## Getting Your Captions.ai Credentials

### Step 1: Create a Captions.ai Account

1. **Sign Up for Captions.ai**

   - Go to [captions.ai](https://captions.ai)
   - Click **Sign Up** and create your account
   - Verify your email address

2. **Complete Your Profile**
   - Fill in your account information
   - Set up your payment method if needed
   - Complete any required verification steps

### Step 2: Generate API Key

1. **Access API Settings**

   - Log into your Captions.ai dashboard
   - Go to **Settings** → **API Keys**
   - Click **Generate API Key**

2. **Configure API Permissions**

   - Select the following permissions for your API key:
     - **Video Generation**: Create and manage videos
     - **AI Clones**: Access and manage your AI clones
     - **Scripts**: Upload and manage scripts
     - **Media**: Upload and manage media files

3. **Generate and Copy Key**
   - Click **Generate Key**
   - **Copy the API key immediately** - you won't be able to see it again
   - Store it securely for use in your environment variables

## Creating Your AI Clone

### Step 1: Prepare Your Media

1. **Photo Requirements**

   - Use high-quality, well-lit photos
   - Include multiple angles of your face
   - Ensure good contrast and clear features
   - Avoid sunglasses, hats, or heavy makeup
   - Use photos with neutral expressions

2. **Video Requirements (Optional)**
   - Record 30-60 seconds of clear speech
   - Use good lighting and audio quality
   - Speak naturally and clearly
   - Avoid background noise
   - Include various facial expressions

### Step 2: Upload Media for AI Clone

1. **Access Clone Creation**

   - In your Captions.ai dashboard, go to **AI Clones**
   - Click **Create New Clone**
   - Choose between photo-based or video-based cloning

2. **Upload Your Media**

   - Upload 10-20 high-quality photos
   - Or upload a video file (MP4, MOV format)
   - Ensure files meet size and format requirements
   - Wait for processing to complete

3. **Configure Clone Settings**
   - Set your clone's name and description
   - Choose voice settings if applicable
   - Configure personality traits
   - Set privacy and usage permissions

### Step 3: Train Your AI Clone

1. **Start Training Process**

   - Click **Start Training** to begin AI clone creation
   - Training typically takes 15-30 minutes
   - You'll receive a notification when complete

2. **Test Your Clone**

   - Generate a test video with your clone
   - Verify facial features and expressions
   - Check voice quality and synchronization
   - Make adjustments if needed

3. **Save Clone ID**
   - Note your clone's unique ID
   - This will be used in API calls for video generation

## Best Practices for Scripts and Media

### Script Best Practices

1. **Script Structure**

   - Keep scripts concise and engaging
   - Use natural, conversational language
   - Include clear pauses and emphasis points
   - Avoid complex technical jargon
   - Structure with clear beginning, middle, and end

2. **Content Guidelines**

   - Write for your target audience
   - Include calls-to-action when appropriate
   - Use active voice and present tense
   - Keep sentences short and punchy
   - Include emotional hooks and storytelling elements

3. **Technical Considerations**
   - Aim for 15-60 second videos for best results
   - Include timing markers for complex scripts
   - Specify emphasis and tone changes
   - Use phonetic spellings for difficult words
   - Include breathing pauses for natural flow

### Media Best Practices

1. **Background Media**

   - Use high-resolution images or videos
   - Ensure media is relevant to your content
   - Avoid copyrighted material
   - Use consistent aspect ratios (16:9 recommended)
   - Include variety for visual interest

2. **Audio Considerations**

   - Use royalty-free music when adding background audio
   - Ensure audio levels are appropriate
   - Consider adding sound effects for engagement
   - Test audio quality before final generation

3. **Brand Consistency**
   - Use consistent colors and fonts
   - Include your logo or branding elements
   - Maintain visual style across videos
   - Consider creating templates for recurring content

## Environment Variables Configuration

Once you have your credentials, configure the following environment variables:

```bash
# Captions API Configuration
# Get your API key from: https://help.captions.ai/api-reference/api
CAPTIONS_API_KEY=your-api-key-here # Deployment specific

# Optional: Default settings
DEFAULT_VIDEO_DURATION=30
DEFAULT_VIDEO_STYLE=professional
DEFAULT_OUTPUT_DIR=./generated_videos
```

### Variable Descriptions

- **`CAPTIONS_API_KEY`**: Your Captions.ai API key for authentication
- **`DEFAULT_VIDEO_DURATION`**: Default video length in seconds (optional)
- **`DEFAULT_VIDEO_STYLE`**: Default video style/theme (optional)
- **`DEFAULT_OUTPUT_DIR`**: Default directory for generated videos (optional)

## Testing Your Integration

After setting up your credentials:

1. **Verify API Access**

   - Test a simple API call to ensure your credentials work
   - Try fetching your AI clones list

2. **Create a Test Video**

   - Use Eden's tools to create a simple test video
   - Verify the video generates correctly
   - Check quality and synchronization

3. **Test Different Scripts**
   - Try various script lengths and styles
   - Test with different AI clones
   - Verify media integration works

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**

   - Verify your API key is correct
   - Ensure the key hasn't been revoked or expired

2. **"Clone not found" error**

   - Check your clone ID spelling
   - Ensure the clone exists and is trained
   - Verify clone permissions

3. **"Script processing failed" error**

   - Check script format and length
   - Ensure script content meets guidelines
   - Verify no special characters causing issues

4. **"Media upload failed" error**

   - Check file format and size requirements
   - Ensure media meets quality standards
   - Verify file permissions

5. **"Video generation failed" error**

   - Check script and media compatibility
   - Ensure clone is fully trained
   - Verify all required parameters are provided

6. **Rate limiting**
   - Captions.ai has API rate limits
   - Implement retry logic with exponential backoff
