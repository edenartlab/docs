---
aliases: Remix an Image, Image Remixing, Image Variation Generation
---

# Remix an Image
<div align="center">
<img src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/remix-flux-schnell_opt.png" width="50%" alt="thumbnail" />
</div>


Create variations of existing images using the FLUX-schnell model. This tool generates creative remixes while maintaining key elements of the original image through AI-powered image captioning and transformation.

## Overview

- AI-powered image remixing
- Automatic image captioning
- Customizable generation strength
- Optional detail injection through prompts

## Quick Start

1. Visit Eden Create: [Remix an Image](https://beta.eden.art/create/remix_flux_schnell) tool
2. Upload your source image
3. Adjust the AI creativity strength
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Remix an Image".

## Basic Usage

Required inputs:
- Source image
- AI creativity strength (denoise value)
- Image dimensions

Optional settings:
- Number of samples (1-4)
- Additional prompt details
- Caption settings
- Random seed

## Technical Guidelines

### Resolution Options

Supported dimensions range from 256x256 to 2048x2048 pixels with default size of 1024x1024.

Recommended presets:
- 1536x640 (21:9 Cinematic)
- 1344x768 (16:9 Widescreen)
- 1024x1024 (1:1 Square)
- 640x1536 (9:21 Vertical)

## Input Best Practices

- Use clear, high-quality source images
- Ensure images are within supported resolution range
- Consider using advanced caption settings for more control
- Keep additional prompts detailed and descriptive

## Advanced Features

### Caption Settings
- none: No captioning of input image
- caption: Basic image description
- detailed_caption (default): Comprehensive image description
- more_detailed_caption: Maximum detail preservation

### Denoise Strength Control
The denoise parameter (0.0-1.0) controls the balance between preserving the original image and introducing new elements:
- 0.0-0.3: Minimal changes
- 0.3-0.6: Balanced remix
- 0.6-0.75: Significant transformation
- >0.76: Almost complete regeneration

## Tips for Best Results

### Technical Considerations
- Default denoise value of 0.6 provides good balance
- Values above 0.76 will mostly ignore the input image
- Keep resolution at 1024x1024 for optimal performance

### Input Optimization
- Use high-quality source images
- Ensure good lighting and composition
- Avoid heavily edited or artificial images

## Technical Details

- Base Model: FLUX-schnell
- Image Captioning: Florence2
- Default Parameters:
  - Caption Setting: detailed_caption
  - Denoise: 0.6
  - Resolution: 1024x1024
  - Samples: 1

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "remix_flux_schnell",
    "args": {
      "image": "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/ultrawide_plant_lady.jpg",
      "denoise": 0.6,
      "width": 1024,
      "height": 1024,
      "n_samples": 1
    }
  }'
```

### Response Format
```json
{
  "task": {
    "_id": "task_12345",
    "createdAt": "2024-01-29T21:52:07.171578+00:00",
    "updatedAt": "2024-01-29T21:52:07.171608+00:00",
    "user": "user_id",
    "requester": "requester_id",
    "tool": "remix_flux_schnell",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "image": "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/ultrawide_plant_lady.jpg",
      "denoise": 0.6,
      "width": 1024,
      "height": 1024,
      "n_samples": 1,
      "caption_settings": "detailed_caption",
      "prompt": null,
      "seed": null
    },
    "mock": false,
    "cost": 1,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```

### Common Issues and Solutions

1. Insufficient Variation
   - Increase denoise value
   - Add more detailed prompts
   - Try different caption settings

2. Too Much Variation
   - Decrease denoise value
   - Use more_detailed_caption setting
   - Remove additional prompts

3. Poor Quality Results
   - Check input image quality
   - Use recommended resolutions
   - Ensure denoise value is appropriate for desired outcome