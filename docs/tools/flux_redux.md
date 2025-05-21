---
aliases: Remix Style Blend, Image Style Blending, Style Remix
---

# Remix Style Blend

A powerful image remixing and style blending tool that allows you to create variations of images or blend multiple styles together. Supports optional text prompts to guide the generation process.

## Overview

- Image-based style remixing
- Two-image style blending
- Optional text prompt guidance
- High-resolution output support

## Quick Start

1. Visit Eden Create: [Remix Style Blend](https://beta.eden.art/create/flux_redux) tool
2. Upload your style image(s)
3. Adjust blend settings if using two images
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Remix Style Blend".

## Basic Usage

Required inputs:
- Primary style image (Image A)
- Width and height dimensions

Optional inputs:
- Secondary style image (Image B)
- Text prompt
- Style blend ratio
- Prompt strength

## Technical Guidelines

### Resolution Options
- Minimum: 256x256 pixels
- Maximum: 2048x2048 pixels
- Default: 1024x1024 pixels

### Generation Settings
- Prompt strength: 0.0-1.0 (default: 0.92)
- Style blend: 0.0-1.0 (default: 0.5)
- Flux guidance: 1.0-4.0 (default: 2.5)

## Best Practices for Inputs

### Image Selection
- Use clear, high-quality source images
- Ensure images have similar visual elements for better blending
- Consider complementary styles when using two images

### Prompt Guidelines
- Use detailed, descriptive text for best results
- Keep prompts focused on desired style elements
- Balance prompt influence with style strength

## Advanced Features

### Style Blending
- Controls: `style_image_blend` parameter (0.0-1.0)
- Usage: Balance influence between two style images
- Recommended range: 0.4-0.6 for balanced blending

### Prompt Conditioning
- Controls: `flux_guidance` parameter (1.0-4.0)
- Lower values (2.0-2.5): More stylized results
- Higher values (~3.0): More realistic outputs

## Tips for Best Results

### Technical Considerations
- Lock seed values for consistent results when fine-tuning
- Use square dimensions (1024x1024) for most balanced outputs
- Start with default guidance values before adjusting

### Input Optimization
- Clean, high-contrast style images work best
- Match source image resolutions when possible
- Consider image composition and color palette

## Technical Details

### Base Technology
- Model: FLUX-redux
- Output Type: Image
- Cost Estimate: 2.0 * n_samples

### Limitations
- Maximum resolution: 2048x2048
- Maximum samples per request: 4
- Style blending requires compatible image styles

## Common Issues and Solutions

1. Weak style transfer
   - Increase prompt strength
   - Use more distinctive style images
   - Adjust flux guidance

2. Inconsistent blending
   - Adjust style_image_blend closer to 0.5
   - Use more visually compatible images
   - Reduce prompt influence

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "flux_redux",
    "args": {
      "image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/style-purple-fuzz.png",
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
    "tool": "flux_redux",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/style-purple-fuzz.png",
      "width": 1024,
      "height": 1024,
      "n_samples": 1,
      "prompt_strength": 0.92,
      "flux_guidance": 2.5,
      "style_image_blend": 0.5,
      "seed": 1234567890
    },
    "mock": false,
    "cost": 48,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```