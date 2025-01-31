---
aliases: Create an image (Advanced), Advanced Image Generation, Flux Image Creation
---

# Create an image (Advanced)
<div align="center">
<img src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/flux.png" width="50%" alt="thumbnail" />
</div>


Generate high-quality images using the advanced Flux model. This tool offers enhanced prompt coherence, superior aesthetics, and excellent text rendering capabilities with support for style transfer, shape guidance, and custom models.

## Overview

- Advanced text-to-image generation
- ControlNet shape guidance 
- Style image transfer
- Custom model (LoRA) support
- Text rendering optimization

## Quick Start

1. Visit Eden Create: [Create an image (Advanced)](https://beta.eden.art/create/flux_dev) tool
2. Enter your descriptive prompt
3. Adjust width and height settings
4. Click "Create"

See [API Reference](#api-reference) section for API usage examples.

Ask an Eden agent to "Create an image (Advanced)".

## Basic Usage

Required parameters:
- Prompt
- Width (256-2048px)
- Height (256-2048px)

Optional features:
- Style image transfer
- Shape guidance via ControlNet
- Custom LoRA models
- Starting image

## Technical Guidelines

### Resolution Options
Best practice resolutions:
- 1536x640 (21:9)
- 1344x768 (16:9)
- 1216x832 (3:2)
- 1152x896 (4:3)
- 1024x1024 (1:1)
- 768x1344 (9:16)
- 640x1536 (9:21)

Higher resolutions possible in 64-pixel increments (e.g., 1920x1088, 1408x1408)

## Advanced Features

### Style Transfer
- Enable with `use_style_image`
- Control influence with `style_strength` (0.5-0.9)
- Optimal default: 0.75

### Shape Guidance
- Uses ControlNet preprocessors
- Options: edges, depth, lines, soft lines, human pose, scribble
- Strength adjustable via `controlnet_strength`

### Custom Models
- Support for up to 2 LoRA models
- Independent strength controls
- Best for specific styles or subjects

## Technical Details

Base Model: Flux-dev (Black Forest Labs)

Default Parameters:
- Steps: 25
- Prompt Conditioning: 2.5
- Style Strength: 0.75
- ControlNet Strength: 0.6

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "flux_dev",
    "args": {
      "prompt": "a man on the moon, planting an american flag on the surface, rocketship in the background",
      "width": 1024,
      "height": 1024,
      "n_samples": 1,
      "seed": 111
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
    "tool": "flux_dev",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "prompt": "a man on the moon, planting an american flag on the surface, rocketship in the background",
      "width": 1024,
      "height": 1024,
      "n_samples": 1,
      "seed": 111
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

- **Low Prompt Adherence**: Increase prompt conditioning value (2.5-3.0)
- **Style Transfer Too Strong**: Reduce style_strength below 0.75
- **LoRA Dominance**: Lower lora_strength for better prompt balance
- **Poor Shape Guidance**: Try different preprocessor or increase controlnet_strength