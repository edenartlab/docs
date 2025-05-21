---
aliases: Face Expression Image Transfer, Expression Transfer, Face Expression Swap
---

# Face Expression Image Transfer

Transfer facial expressions and emotions from one image to another using advanced AI technology. This tool allows you to apply the expression, pose, and emotional qualities from a source face to a target face while maintaining identity.

## Overview

- Face expression transfer between images
- Identity preservation of target face
- 512x512 square output format
- Text prompt enhancement options

## Quick Start

1. Visit Eden Create: [Face Expression Image Transfer](https://beta.eden.art/create/HelloMeme_image) tool
2. Upload your target image (where expression will be applied)
3. Upload your source expression image
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Face Expression Image Transfer".

## Basic Usage

Required inputs:
- Init image (target face)
- Expression image (source face)

Optional settings:
- Text prompt for enhancement
- Negative prompt
- Random seed

## Technical Guidelines

### Image Requirements
- Clear face visibility in both images
- Face should occupy at least 30% of the image
- Good lighting and focus
- Square aspect ratio preferred
- Minimum resolution: 512x512

## Best Practices for Inputs

### Target Image
- Front-facing or 3/4 view
- Neutral expression recommended
- Good lighting
- Clear facial features

### Expression Image
- Clear emotional expression
- Similar angle to target (when possible)
- Well-lit face
- Minimal occlusion

## Advanced Features

### Text Prompting
- Enhance output quality with descriptive prompts
- Use quality modifiers sparingly
- Focus on facial feature descriptions

### Negative Prompting
- Control unwanted artifacts
- Maintain default settings unless specific issues arise
- Use carefully to avoid degrading results

## Tips for Best Results

### Technical Considerations
- Use high-quality input images
- Ensure faces are clearly visible
- Maintain consistent lighting conditions
- Consider similar head poses between images

### Input Optimization
- Crop images to focus on faces
- Adjust brightness if needed
- Remove busy backgrounds
- Ensure sharp, clear facial features

## Technical Details

### Base Technology
- Model: HelloMeme
- Output Resolution: 512x512
- Format: Square images only

### Limitations
- Requires valid face detection in both images
- Square output format only
- May struggle with extreme angles
- Limited to single face transfer

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Face not detected | Ensure face occupies >30% of image |
| Poor transfer quality | Use clearer input images |
| Inconsistent results | Set specific seed for reproducibility |
| Artifacts | Adjust negative prompt |

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "HelloMeme_image",
    "args": {
      "init_image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/eve-poison-ivy.png",
      "expression_image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/eve-looking-back.png",
      "prompt": "",
      "negative_prompt": "",
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
    "tool": "HelloMeme_image",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "init_image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/eve-poison-ivy.png",
      "expression_image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/eve-looking-back.png",
      "prompt": "",
      "negative_prompt": "",
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