---
aliases: Create an image (SDXL), Text to Image Generation, txt2img
---

# Create an image (SDXL)
<div align="center">
<img src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/txt2img.png" width="50%" alt="thumbnail" />
</div>


Generate high-quality images from text descriptions using the powerful SDXL model. This tool allows you to create detailed images from text prompts with support for custom models (LoRAs), style transfer, and shape guidance features.

## Overview

- Text-to-image generation using SDXL
- Custom model (LoRA) support
- Style image transfer using ipAdapter
- Shape guidance with ControlNet
- Multiple aspect ratio options
- Starting image modifications

## Quick Start

1. Visit Eden Create: [Create an image (SDXL)](https://beta.eden.art/create/txt2img) tool
2. Enter your descriptive prompt
3. Choose desired resolution
4. Click "Create"

See the [API Reference](#api-reference) section for programmatic usage.

Ask an Eden agent to "Create an image (SDXL)".

## Basic Usage

Required parameters:
- `prompt`: Text description of desired image
- `width`: Image width in pixels (256-2048)
- `height`: Image height in pixels (256-2048)

Optional parameters:
- `n_samples`: Number of images to generate (1-4)
- `steps`: Number of diffusion steps (10-50)
- `seed`: Random seed for reproducibility

## Technical Guidelines

### Supported Resolutions
| Aspect Ratio | Dimensions | Use Case |
|--------------|------------|----------|
| 21:9 | 1536x640 | Cinematic |
| 16:9 | 1344x768 | Widescreen |
| 3:2 | 1216x832 | Standard |
| 4:3 | 1152x896 | Classic |
| 1:1 | 1024x1024 | Square |
| 9:16 | 768x1344 | Mobile |
| 9:21 | 640x1536 | Panoramic |

## Best Practices

### Prompting Tips
- Start with the main subject
- Include specific details about style and composition
- Add artistic medium and quality descriptors
- Use clear, concise language

### Resolution Guidelines
- Stay close to 1 megapixel for optimal quality
- Use dimensions divisible by 8
- Match aspect ratio to content type

## Advanced Features

### Custom Models (LoRA)
Enable custom model support with:
- `use_lora`: Set to true
- `lora`: Specify LoRA model name
- `lora_strength`: Control influence (0.0-1.0)

### Style Transfer
Apply style from reference images:
- `use_ipadapter`: Set to true
- `style_image`: Provide reference image
- `ipadapter_strength`: Adjust influence (0.0-1.5)

### Shape Guidance
Guide generation with input image shapes:
- `use_controlnet`: Set to true
- `init_image`: Provide starting image
- `controlnet_strength`: Adjust influence (0.0-1.2)
- `preprocessor`: Choose method (canny, depth, scribble, etc.)

## Technical Details

### Base Configuration
- Model: SDXL
- Default steps: 35
- Default resolution: 1024x1024
- Cost estimate: 1 * n_samples

### Limitations
- Maximum resolution: 2048x2048
- Maximum samples: 4
- May struggle with text rendering
- Complex prompts can be challenging

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "txt2img",
    "args": {
      "prompt": "A captivating and vibrant illustration of an abstract face, predominantly focusing on the mesmerizing eyes and bold red lips. The face appears fragmented, with shards of glass or paper overlapping it, creating a sense of chaos. The eyes are intricately detailed, with the iris and pupil clearly visible, adding depth to the face. The striking red lips contrast with the predominantly dark and monotone background, which consists of grays, whites, and splashes of red. This cinematic piece exudes a dark fantasy vibe, drawing viewers in with its chaotic beauty, dark fantasy, illustration, cinematic, vibrant",
      "use_init_image": false,
      "use_lora": false,
      "seed": 1
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
    "tool": "txt2img",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "prompt": "A captivating and vibrant illustration...",
      "use_init_image": false,
      "use_lora": false,
      "seed": 1
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

## Common Issues

### Generation Quality
- Issue: Blurry or low-quality outputs
- Solution: Use recommended resolutions, increase steps

### Style Transfer
- Issue: Weak style application
- Solution: Increase ipadapter_strength

### Shape Guidance
- Issue: Poor shape adherence
- Solution: Try different preprocessor types, adjust controlnet_strength