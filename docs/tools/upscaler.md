---
aliases: Upscale an image, Image Upscaler, AI Image Enhancement
---

# Upscale an image
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/upscale_beta_opt.mp4" type="video/mp4" />
            </video>
</div>


A creative image upscaling tool that enhances image resolution while intelligently adding new details. This tool combines traditional upscaling with AI-powered detail enhancement, allowing for both faithful preservation and creative enhancement of the original image.

## Overview

- High-quality image upscaling up to 4096px
- AI-powered detail enhancement
- Controlled creativity strength
- Preservation of original image composition
- Multiple sample generation

## Quick Start

1. Visit Eden Create: [Upscale an image](https://beta.eden.art/create/upscaler) tool
2. Upload your starting image
3. Set desired output resolution
4. Adjust creativity strength
5. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Upscale an image".

## Basic Usage

Required inputs:
- Initial image
- Longest side resolution (512-4096px)

Optional settings:
- Creativity strength (denoise)
- Controlnet strength
- Custom prompt
- Negative prompt
- Number of samples

## Technical Guidelines

### Resolution Settings
- Minimum: 512px
- Maximum: 4096px
- Maintains original aspect ratio
- Automatically scales shorter side proportionally

### Creativity Controls
- Denoise (0.0-1.0):
  - Low (0.01-0.25): Better preserves original
  - Medium (0.25-0.5): Balanced enhancement
  - High (>0.5): More creative detail generation

## Best Practices

### Input Image Quality
- Use clear, sharp source images
- Ensure source image is properly exposed
- Avoid heavily compressed images

### Parameter Optimization
- Start with low denoise values (0.25)
- Use higher controlnet strength (0.5-1.0) to maintain composition
- Adjust prompt to guide detail enhancement

## Technical Details

### Base Configuration
- Default prompt: "masterpiece, best quality, highres, 4k, sharp details"
- Default negative prompt: "(worst quality, low quality, blurry, normal quality:1.25)"
- Default denoise: 0.25
- Default controlnet strength: 0.5

### Supported Formats
- Input: Standard image formats (JPG, PNG)
- Output: PNG

### Limitations
- Maximum resolution: 4096px
- Maximum samples: 4

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "upscaler",
    "args": {
      "init_image": "https://storage.googleapis.com/public-assets-xander/A_workbox/lora_training_sets/xander.jpg",
      "longest_side": 2048,
      "denoise": 0.25,
      "controlnet_strength": 0.5,
      "prompt": "masterpiece, best quality, highres, 4k, sharp details",
      "negative_prompt": "(worst quality, low quality, blurry, normal quality:1.25)",
      "n_samples": 1,
      "seed": 1234567890
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
    "tool": "upscaler",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "init_image": "https://storage.googleapis.com/public-assets-xander/A_workbox/lora_training_sets/xander.jpg",
      "longest_side": 2048,
      "denoise": 0.25,
      "controlnet_strength": 0.5,
      "prompt": "masterpiece, best quality, highres, 4k, sharp details",
      "negative_prompt": "(worst quality, low quality, blurry, normal quality:1.25)",
      "n_samples": 1,
      "seed": 1234567890
    },
    "mock": false,
    "cost": 2,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```

## Common Issues and Solutions

### Image Quality Issues
- Blurry output: Increase controlnet strength
- Over-detailed output: Reduce denoise value
- Loss of composition: Increase controlnet strength
- Unwanted artifacts: Adjust negative prompt
- Inconsistent details: Lower denoise value