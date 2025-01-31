---
aliases: Create a stylized selfie, Face Styler, Selfie Styler
---

# Create a stylized selfie
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/face_styler.mp4" type="video/mp4" />
            </video>
</div>


Transform photos of people by applying artistic styles while preserving their identity. This tool combines identity preservation with style transfer to create unique stylized portraits that maintain recognizable facial features.

## Overview

- Identity-preserving portrait stylization
- Customizable style strength
- Optional prompt-based scene generation
- High-resolution output support
- Multiple sample generation

## Quick Start

1. Visit Eden Create: [Create a stylized selfie](https://beta.eden.art/create/face_styler) tool
2. Upload a photo of the person
3. Upload a style reference image
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Create a stylized selfie".

## Basic Usage

Required inputs:
- Person image with clear facial features
- Style reference image

Optional inputs:
- Text prompt for scene context
- Identity strength (0.0-1.2)
- Style strength (0.0-1.0)

## Technical Guidelines

### Resolution Support
- Width: 512-1536 pixels
- Height: 512-1536 pixels
- Default: 1024x1024 pixels

### Parameter Ranges
- Identity Strength: 0.0-1.2 (default: 0.9)
- Style Strength: 0.0-1.0 (default: 0.8)
- Number of Samples: 1-4 (default: 1)

## Best Practices for Inputs

### Person Image
- Clear, well-lit facial features
- Front-facing or slight angle
- Minimal occlusion of face
- Good resolution (minimum 512px)

### Style Image
- Clear artistic style representation
- Similar composition to desired output
- High-quality reference material

## Advanced Features

### Identity Control
- Higher values (>0.9) maintain stronger likeness
- Lower values (<0.6) allow more creative interpretation
- Fine-tune for balance between accuracy and stylization

### Style Transfer
- Adjust style_strength for intensity
- Higher values (>0.8) create stronger stylistic effects
- Lower values (<0.6) produce subtle artistic influences

## Technical Details

- Base Model: SDXL
- Output Type: Image
- Default Resolution: 1024x1024
- Cost Estimate: 1 * n_samples

## Common Issues and Solutions

1. Loss of Identity
   - Increase identity_strength
   - Use clearer person image
   - Reduce style_strength

2. Weak Style Transfer
   - Increase style_strength
   - Use more distinctive style image
   - Reduce identity_strength slightly

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "face_styler",
    "args": {
      "person_image": "https://storage.googleapis.com/public-assets-xander/A_workbox/lora_training_sets/xander.jpg",
      "style_image": "https://storage.googleapis.com/public-assets-xander/A_workbox/lora_training_sets/style.jpg",
      "identity_strength": 0.9,
      "style_strength": 0.8,
      "width": 1024,
      "height": 1024,
      "n_samples": 1,
      "prompt": "",
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
    "tool": "face_styler",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "person_image": "https://storage.googleapis.com/public-assets-xander/A_workbox/lora_training_sets/xander.jpg",
      "style_image": "https://storage.googleapis.com/public-assets-xander/A_workbox/lora_training_sets/style.jpg",
      "identity_strength": 0.9,
      "style_strength": 0.8,
      "width": 1024,
      "height": 1024,
      "n_samples": 1,
      "prompt": "",
      "seed": 1234567890
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