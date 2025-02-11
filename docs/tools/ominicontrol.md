---
aliases: Instant LoRA, Single Image LoRA, Custom Subject Generation
---

# Instant LoRA
<div align="center">
<img src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/instant_lora.jpg" width="50%" alt="thumbnail" />
</div>


A specialized tool for reimagining subjects in new contexts using a single reference image. Perfect for placing logos, characters, or objects into different scenes while maintaining their core characteristics. Built on the FLUX model, this tool excels at transferring visual elements from a source image into new creative scenarios.

## Overview

- Single-image subject transfer
- Logo and object reimagining
- Environment recreation
- Context-aware generation

## Quick Start

1. Visit Eden Create: [Instant LoRA](https://beta.eden.art/create/image/ominicontrol) tool
2. Upload your subject image
3. Enter your descriptive prompt
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Instant LoRA".

## Basic Usage

Required inputs:
- Subject image (logo, character, object)
- Text prompt describing the new context

Optional settings:
- Number of samples (1-4)
- Seed for reproducibility

## Technical Guidelines

- Output resolution: Fixed at 1024x1024 square format
- Subject image should be clear and well-defined
- Multiple attempts with different seeds may be needed for optimal results
- Chain with outpainting tools for different aspect ratios

## Best Practices for Inputs

### Subject Image
- Use high-quality, clear images
- Ensure subject is prominently featured
- Avoid busy backgrounds
- Good lighting and contrast

### Prompts
- Reference subject as "this item"
- Be detailed and descriptive
- Specify desired context clearly
- Include style and composition details

## Tips for Best Results

### Technical Considerations
- Try multiple seeds for variation
- Use clean, isolated subject images
- Consider background complexity

### Input Optimization
- Crop subject images appropriately
- Ensure good lighting and contrast
- Remove unnecessary background elements

## Technical Details

### Base Information
- Model: FLUX-dev
- Output Resolution: 1024x1024
- Cost Estimate: 2 * n_samples

### Limitations
- Square output format only
- Single subject focus
- May require multiple attempts

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "ominicontrol",
    "args": {
      "prompt": "a candid photo of this item on the side of a beautiful, porcelain coffee mug",
      "subject_image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/EDEN-ICON-COLOUR.png",
      "n_samples": 1,
      "seed": 0
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
    "tool": "ominicontrol",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "prompt": "a candid photo of this item on the side of a beautiful, porcelain coffee mug",
      "subject_image": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/EDEN-ICON-COLOUR.png",
      "n_samples": 1,
      "seed": 0
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
