---
aliases: Face Expression Video Transfer, Expression Transfer, Face Animation Transfer
---

# Face Expression Video Transfer

Transfer facial expressions and emotions from a video to a target image, creating an animated result that maintains the identity of the target while adopting the expressions from the source video.

## Overview

- Face expression transfer from video to image
- Identity preservation of target image
- Animated output generation
- Square format output (512x512)

## Quick Start

1. Visit Eden Create: [Face Expression Video Transfer](https://beta.eden.art/create/HelloMeme_video) tool
2. Upload your target image
3. Upload your source expression video
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Face Expression Video Transfer".

## Basic Usage

Required inputs:
- Target image (init_image) - The face to animate
- Source video - Video containing the expressions to transfer

Optional settings:
- Prompt - Additional style guidance
- Seed - For reproducible results

## Technical Guidelines

### Resolution Specifications
- Output resolution: 512x512 (fixed square format)
- Input image: Recommended minimum 512x512
- Video resolution: Minimum 512x512 recommended

### Input Requirements
- Clear, front-facing faces in both inputs
- Good lighting conditions
- Minimal occlusion of facial features

## Best Practices for Inputs

### Target Image
- Clear, well-lit facial photo
- Neutral expression preferred
- Front-facing orientation
- Minimal background complexity

### Source Video
- Clear facial expressions
- Steady head position
- Good lighting
- 3-10 seconds duration recommended

## Technical Details

### Base Technology
- Model: HelloMeme
- Output Format: MP4 video
- Resolution: 512x512 fixed
- Frame Rate: Standard video fps

### Limitations
- Requires detectable faces in both inputs
- Square output format only
- May struggle with extreme angles
- Limited to single face transfer

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Face not detected | Ensure clear, front-facing faces in inputs |
| Poor animation | Use higher quality source video |
| Failed transfer | Check for proper face alignment |
| Blurry output | Ensure input resolution meets minimums |

## API Reference

### Endpoint
```bash
POST https://api.eden.art/v2/tasks/create
```

### Headers
```bash
Content-Type: application/json
X-Api-Key: YOUR_API_KEY
```

### Basic Request
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "HelloMeme_video",
    "args": {
      "init_image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/eve-poison-ivy.png",
      "video": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/d6_1_short.mp4"
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
    "tool": "HelloMeme_video",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "init_image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/eve-poison-ivy.png",
      "video": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/d6_1_short.mp4",
      "prompt": "",
      "seed": 1234567890
    },
    "mock": false,
    "cost": 100,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```

### Error Handling
Common error responses:
- 400: Invalid input parameters
- 401: Authentication error
- 404: Resource not found
- 500: Processing error