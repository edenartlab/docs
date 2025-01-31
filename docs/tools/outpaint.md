---
aliases: Extend an image (Outpaint), Image Outpainting, Outpaint
---

# Extend an image (Outpaint)
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/outpaint_edit_opt.mp4" type="video/mp4" />
            </video>
</div>


Expand images beyond their original boundaries using AI-powered outpainting. This tool allows you to extend images in any direction while maintaining visual consistency with the original content. Perfect for adjusting aspect ratios, creating panoramic views, or expanding the canvas of existing images.

## Overview

- Extend images in any direction
- Multiple aspect ratio presets
- Custom expansion controls
- Seamless blending with original image

## Quick Start

1. Visit Eden Create: [Extend an image (Outpaint)](https://beta.eden.art/create/outpaint) tool
2. Upload your starting image
3. Choose an aspect ratio or set custom expansion
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Extend an image (Outpaint)".

## Basic Usage

Required inputs:
- Starting image
- Aspect ratio selection or custom expansion dimensions

Optional settings:
- Prompt to guide generation
- Number of samples
- Custom seed for reproducibility

## Technical Guidelines

### Aspect Ratio Presets
- Square (1:1) - 1024x1024
- Landscape (4:3) - 1152x896
- Landscape (3:2) - 1216x832
- Widescreen (16:9) - 1344x768
- Cinematic (21:9) - 1536x640
- Portrait (3:4) - 896x1152
- Portrait (5:8) - 832x1216
- Portrait (9:16) - 768x1344
- Portrait (9:21) - 640x1536

## Best Practices

### Input Images
- Use clean, high-quality source images
- Avoid images with text or complex patterns at the edges
- Ensure main subjects aren't too close to image boundaries

### Custom Expansion
- Keep expansion sizes reasonable (recommended max 256px per side)
- Use even values divisible by 8
- Balance expansion across sides for best results

## Technical Details

- Base Model: Stable Diffusion 1.5
- Default Steps: 20
- Maximum Steps: 50
- Maximum Samples: 4
- Maximum Expansion: 1024px per direction

## Common Issues and Solutions

1. Visible Seams
   - Reduce expansion size
   - Increase steps
   - Use matching prompt with original image content

2. Inconsistent Style
   - Provide more detailed prompts
   - Adjust negative prompt
   - Use smaller expansion increments

## API Reference

### Endpoint

```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "outpaint",
    "args": {
      "init_image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/e10eee7823957429d022e84374b1169c40a5d1459398a40c1d928b0057106cf6.webp",
      "prompt": "",
      "aspect_ratio": "16-9_landscape_1344x768",
      "justification": "center",
      "steps": 20,
      "n_samples": 1,
      "seed": -1,
      "negative": "embedding:easynegative, text, watermark, caption, sentance, words, nude, naked, nsfw"
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
    "tool": "outpaint",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "init_image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/e10eee7823957429d022e84374b1169c40a5d1459398a40c1d928b0057106cf6.webp",
      "prompt": "",
      "aspect_ratio": "16-9_landscape_1344x768",
      "justification": "center",
      "steps": 20,
      "n_samples": 1,
      "seed": -1,
      "negative": "embedding:easynegative, text, watermark, caption, sentance, words, nude, naked, nsfw"
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