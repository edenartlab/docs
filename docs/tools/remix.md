---
aliases: Remix an image, Image Remixing, Image Variation Generator
---

# Remix an Image

Create unique variations of an input image while maintaining its core visual elements and style. This tool allows you to generate creative reinterpretations of existing images with controllable variation strength.

## Overview

- Image-guided variation generation
- Adjustable image strength control
- Multiple sample generation
- Custom resolution support

## Quick Start

1. Visit Eden Create: [Remix an image](https://beta.eden.art/create/remix) tool
2. Upload your source image
3. Adjust image strength if desired
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Remix an image".

## Basic Usage

Required inputs:
- Source image
- Image dimensions (width/height)

Optional settings:
- Number of samples (1-4)
- Image strength (0.0-1.2)
- Random seed

## Technical Guidelines

### Resolution Options
| Aspect Ratio | Dimensions | Use Case |
|--------------|------------|----------|
| 21:9 | 1536x640 | Cinematic |
| 16:9 | 1344x768 | Widescreen |
| 3:2 | 1216x832 | Standard |
| 4:3 | 1152x896 | Classic |
| 1:1 | 1024x1024 | Square |
| 9:16 | 768x1344 | Mobile |
| 9:21 | 640x1536 | Panoramic |

### Generation Settings
- Width: 256-2048px
- Height: 256-2048px
- Image Strength: 0.0-1.2 (default: 0.7)
- Samples: 1-4 (default: 1)

## Best Practices for Inputs

- Use high-quality source images
- Ensure images are well-lit and in focus
- Avoid heavily compressed or low-resolution inputs
- Consider aspect ratio compatibility with desired output

## Advanced Features

### Image Strength Control
- Controls how closely the output follows the input image
- Lower values (0.0-0.5) create more dramatic variations
- Higher values (0.8-1.2) maintain closer similarity
- Default value of 0.7 provides balanced variation

### Multiple Sample Generation
- Generate up to 4 variations simultaneously
- Uses the same settings across all samples
- Helpful for exploring different possibilities
- Each sample uses a different random seed

## Tips for Best Results

### Technical Considerations
- Match output resolution to input aspect ratio
- Use higher image strength for subtle variations
- Lower image strength for creative reinterpretations

### Input Optimization
- Clean, clear source images work best
- Avoid heavily filtered or edited inputs
- Consider image composition and focal points

## Technical Details

- Base Model: SDXL
- Default Resolution: 1024x1024
- Maximum Resolution: 2048x2048
- Minimum Resolution: 256x256
- Output Format: Image (PNG/JPEG)

## Common Issues and Solutions

1. Blurry Results
   - Use higher quality input images
   - Maintain appropriate resolution
   - Adjust image strength higher

2. Inconsistent Results
   - Use seed value for reproducibility
   - Keep image strength above 0.7
   - Ensure stable input image quality

## API Reference

### Endpoint
```
POST https://api.eden.art/v2/tasks/create
```

### Headers
```
Content-Type: application/json
X-Api-Key: YOUR_API_KEY
```

### Basic Request
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "remix",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg"
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
    "tool": "remix",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",
      "width": 1024,
      "height": 1024,
      "ip_adapter_strength": 0.7,
      "n_samples": 1,
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

### Error Handling
- 400: Invalid parameters
- 401: Authentication error
- 403: Insufficient credits
- 500: Server error