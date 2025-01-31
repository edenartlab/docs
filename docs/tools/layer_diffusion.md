---
aliases: Create an image with transparency, Layer Diffusion, Transparent Image Generator
---

# Create an image with transparency
<div align="center">
<img src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/layer_diffusion.png" width="50%" alt="thumbnail" />
</div>


Generate images with true transparency using Layer Diffusion technology. This specialized tool creates PNG images with alpha channel support, enabling partial transparency effects like glass, smoke, or translucent materials that can be composited with other images.

## Overview

- Direct transparent image generation
- Gradient alpha channel support
- High-resolution output (up to 2048px)
- Partial transparency effects

## Quick Start

1. Visit Eden Create: [Create an image with transparency](https://beta.eden.art/create/layer_diffusion) tool
2. Enter your descriptive prompt
3. Adjust image dimensions
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Create an image with transparency".

## Basic Usage

Required inputs:
- Text prompt describing the transparent image
- Image dimensions (width/height)

Optional settings:
- Number of samples (1-4)
- CFG scale (2.0-11.0)
- Steps (4-50)
- Seed for reproducibility
- Negative prompt

## Technical Guidelines

### Resolution Options
- Maximum: 2048x2048 pixels
- Minimum: 256x256 pixels
- Default: 1024x1024 pixels

### Generation Settings
- Steps: 4-50 (default: 25)
- CFG Scale: 2.0-11.0 (default: 8.0)
- Number of samples: 1-4

## Best Practices for Inputs

- Use comma-separated descriptive prompts
- Be specific about transparent elements
- Include material properties (e.g., "glass", "translucent", "frosted")
- Specify lighting conditions that affect transparency

## Technical Details

### Base Technology
- Model: SDXL with Layer Diffusion
- Output Format: PNG with alpha channel
- Default Parameters:
  - Steps: 25
  - CFG: 8.0
  - Resolution: 1024x1024

### Limitations
- Maximum resolution: 2048x2048
- Maximum samples per request: 4
- Minimum steps: 4

## Common Issues and Solutions

1. Insufficient Transparency
   - Use more specific transparency-related terms in prompt
   - Adjust CFG scale for better prompt adherence

2. Poor Quality
   - Increase step count (25-35 recommended)
   - Adjust resolution to match subject

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "layer_diffusion",
    "args": {
      "prompt": "a wine glass half full of merlot",
      "width": 1024,
      "height": 1024,
      "steps": 25,
      "cfg": 8.0,
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
    "tool": "layer_diffusion",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "prompt": "a wine glass half full of merlot",
      "width": 1024,
      "height": 1024,
      "steps": 25,
      "cfg": 8.0,
      "n_samples": 1
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