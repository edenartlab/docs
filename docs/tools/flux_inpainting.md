---
aliases: Replace part of an image (Inpaint), Image Inpainting, Region Replacement
---

# Replace part of an image (Inpaint)
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/flux-inpaint-opt.mp4" type="video/mp4" />
            </video>
</div>


A powerful image editing tool that allows you to select and replace specific regions within an image. Using advanced AI inpainting technology, you can describe what object or region you want to replace and what you want to replace it with. The tool seamlessly blends the new content with the existing image.

## Overview

- Region-based image editing
- Text-guided region selection
- Custom mask support
- Automatic foreground/background detection
- Seamless blending with surrounding content

## Quick Start

1. Visit Eden Create: [Replace part of an image (Inpaint)](https://beta.eden.art/create/flux_inpainting) tool
2. Upload your image
3. Enter a region prompt to select what to replace
4. Provide an inpainting prompt describing the replacement
5. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Replace part of an image (Inpaint)".

## Basic Usage

Required inputs:
- Input image
- Inpainting prompt
- Region prompt (or mask image)

## Technical Guidelines

### Resolution Settings
- Default: 1024px
- Range: 512px - 1536px
- Adjusts to match input image resolution

### Mask Controls
- Blur: 0-160px (default: 24px)
- Expansion: 0-64px (default: 12px)
- Manual mask upload supported

## Input Best Practices

- Keep region prompts simple and specific (e.g., "face", "building", "hat")
- Inpainting prompts should focus on the replacement content only
- Consider mask expansion for larger replacement objects
- Reduce mask blur for detailed edges

## Advanced Features

### Creativity Control
- Range: 0.0 - 1.1 (default: 0.85)
- Lower values: Better prompt adherence but may look out of context
- Higher values: Better scene integration but less prompt accuracy

### Background Detection
- Automatic foreground/background separation
- Optional manual mask override
- Can target either foreground or background for replacement

## Tips for Best Results

### Technical Considerations
- Match resolution to input image quality
- Adjust mask expansion based on replacement object size
- Use lower creativity for specific replacements
- Higher creativity for natural scene integration

### Input Optimization
- Clear, concise region prompts
- Detailed replacement descriptions
- Consider providing custom masks for precise control

## Technical Details

### Default Parameters
- Resolution: 1024px
- Mask blur: 24px
- Mask expansion: 12px
- Creativity: 0.85
- Samples: 1-4

### Limitations
- Maximum resolution: 1536px
- Minimum resolution: 512px
- Maximum samples: 4

## Common Issues and Solutions

1. Blurry edges
   - Reduce mask blur
   - Adjust mask expansion
   
2. Poor integration
   - Increase creativity value
   - Expand mask region

3. Incorrect region selection
   - Simplify region prompt
   - Use custom mask

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "flux_inpainting",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/d39a732c49c718d272e1035762e08df24aac8173972603e31287059611e7005f.jpg",
      "masking_prompt": "region above head, hair",
      "inpainting_prompt": "a person wearing a mexican sombrero",
      "resolution": 1024,
      "creativity": 0.85,
      "mask_blur": 24,
      "mask_expand": 12,
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
    "tool": "flux_inpainting",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/d39a732c49c718d272e1035762e08df24aac8173972603e31287059611e7005f.jpg",
      "masking_prompt": "region above head, hair",
      "inpainting_prompt": "a person wearing a mexican sombrero",
      "resolution": 1024,
      "creativity": 0.85,
      "mask_blur": 24,
      "mask_expand": 12,
      "n_samples": 1
    },
    "mock": false,
    "cost": 3,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```