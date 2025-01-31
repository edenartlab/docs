---
aliases: TextureFlow, Texture Flow Animation, Style Mixing Animation
---

# TextureFlow
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/style_mixing_opt.mp4" type="video/mp4" />
            </video>
</div>


Create dynamic video animations by mixing multiple style images with fluid motion patterns. TextureFlow transforms static images into mesmerizing animations with optional shape guidance and controllable motion patterns.

## Overview

- Mix 1-6 style images into smooth video animations
- Multiple motion mapping modes (circles, rectangles, stripes)
- Optional shape/depth guidance via ControlNet
- Upscaling to HD resolution
- Adjustable motion strength and transition effects

## Quick Start

1. Visit Eden Create: [TextureFlow](https://beta.eden.art/create/texture_flow) tool
2. Upload 1-6 style images
3. Set video duration and dimensions
4. Select motion mapping mode
5. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "TextureFlow".

## Basic Usage

Required inputs:
- 1-6 style images
- Video dimensions (384-1024px)
- Duration (2-24 seconds)

Optional settings:
- Motion mapping mode
- Shape guidance input
- Motion strength
- Boundary softness

## Technical Guidelines

### Resolution Options
- Width: 384-1024px
- Height: 384-1024px
- Common aspects: 16:9, 3:2, 1:1, 9:16

### Generation Settings
- Video length: 2-24 seconds
- Steps: 4-14 (default: 8)
- Motion scale: 0.7-1.4 (default: 1.1)
- Boundary softness: 0.0-0.25 (default: 0.1)

## Best Practices for Inputs

### Style Images
- Use 3 seconds of animation per style image
- Choose visually compatible images for smooth transitions
- Consider color harmony between images
- Avoid extremely busy or detailed images

### Shape Guidance
- Use simple, clear shapes for control inputs
- Keep edges and contours well-defined
- Match control input aspect ratio to output dimensions
- Test with lower controlnet strength first (0.4-0.6)

## Advanced Features

### Motion Mapping Modes
- Concentric patterns (circles/rectangles inward/outward)
- Rotating segments (clockwise/counter-clockwise)
- Pushing segments (clockwise/counter-clockwise)
- Directional stripes (vertical/horizontal)

### Shape Guidance Options
- Edges (Canny)
- Depth mapping
- Line art
- Human pose
- Scribble lines
- Luminance (QR-code regions)

## Technical Details

Base technology:
- LCM denoising
- ControlNet v1.1
- IP-Adapter for style transfer

Supported formats:
- Input: JPG, PNG
- Output: MP4 video
- Optional control input: Image, GIF, video

## API Reference

### Endpoint

```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "texture_flow",
    "args": {
      "images": [
        "https://storage.googleapis.com/public-assets-xander/A_workbox/init_imgs/img_00019.jpg",
        "https://storage.googleapis.com/public-assets-xander/A_workbox/init_imgs/img_00021.jpg",
        "https://storage.googleapis.com/public-assets-xander/A_workbox/init_imgs/img_00024.jpg",
        "https://storage.googleapis.com/public-assets-xander/A_workbox/init_imgs/img_00025.jpg"
      ],
      "n_seconds": 4,
      "n_steps": 6,
      "width": 640,
      "height": 640,
      "use_controlnet1": true,
      "control_input": "https://storage.googleapis.com/public-assets-xander/A_workbox/lora_training_sets/xander.jpg",
      "preprocessor1": "DepthAnythingV2Preprocessor",
      "controlnet_strength1": 0.5
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
    "tool": "texture_flow",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "images": ["https://example.com/image1.jpg"],
      "n_seconds": 4.0,
      "n_steps": 6,
      "width": 640,
      "height": 640,
      "use_controlnet1": true,
      "control_input": "https://example.com/control.jpg",
      "preprocessor1": "DepthAnythingV2Preprocessor",
      "controlnet_strength1": 0.5
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

## Common Issues and Solutions

1. Duplication artifacts
   - Reduce output dimensions
   - Lower motion scale
   - Simplify input images

2. Poor style mixing
   - Adjust boundary softness
   - Use more compatible style images
   - Increase steps for smoother blending

3. Weak shape guidance
   - Increase controlnet strength
   - Try different preprocessor types
   - Ensure clear control input

4. Motion artifacts
   - Reduce motion scale
   - Increase steps
   - Lower video duration