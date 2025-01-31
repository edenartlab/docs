---
aliases: Animate an image with depth, 3D Image Animation, Image Depth Animation
---

# Animate an image with depth
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/animate_3D_opt.mp4" type="video/mp4" />
            </video>
</div>


Transform static images into subtle animated videos with a 3D zoom effect. This tool creates engaging motion by analyzing depth information in the image, separately animating foreground and background elements while maintaining the original image's integrity.

## Overview

- Depth-aware 3D animation generation
- Separate foreground/background motion control
- Optional style image influence
- Adjustable animation length and intensity
- Seamless loop creation option

## Quick Start

1. Visit Eden Create: [Animate an image with depth](https://beta.eden.art/create/animate_3D) tool
2. Upload your input image
3. Adjust animation settings if desired
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Animate an image with depth".

## Basic Usage

Required inputs:
- Input image
- Animation length (2.5-10 seconds)

Optional settings:
- Background animation strength
- Foreground animation strength
- 3D effect intensity
- Loop option
- Style image influence

## Technical Guidelines

### Resolution Settings
- Default: 1152px
- Range: 768px - 1536px
- Maintains aspect ratio of input image

### Animation Parameters
- Length: 2.5-10 seconds
- Diffusion steps: 4-12 (default: 6)
- Background denoise: 0-1.0 (default: 0.75)
- Foreground denoise: 0-1.0 (default: 0.4)
- Depth effect: 0-1.0 (default: 0.2)

## Best Practices for Inputs

- Use high-quality images with clear foreground subjects
- Ensure good depth separation between foreground and background
- Optimal for images with distinct focal points
- Avoid overly busy or cluttered scenes

## Advanced Features

### Style Transfer
- Enable `use_style_image` option
- Upload reference style image
- Adjust style strength (0.0-1.25)
- Most effective in heavily denoised regions

### Loop Creation
- Enable `loop` option for seamless animations
- Best for longer animations (>4 seconds)
- May appear less natural in very short clips

## Tips for Best Results

### Technical Considerations
- Lower foreground denoise (0.2-0.4) for preserving facial details
- Higher background denoise (0.6-0.8) for dynamic backgrounds
- Moderate depth effect (0.2-0.4) for natural motion

### Input Optimization
- Use images with clear subject separation
- Ensure adequate resolution (1024px minimum recommended)
- Avoid extreme aspect ratios

## Technical Details

Base Technology: ComfyUI with AnimateDiff
Default Parameters:
- Resolution: 1152px
- Animation length: 4.0 seconds
- Diffusion steps: 6
- Background denoise: 0.75
- Foreground denoise: 0.4
- Depth effect: 0.2

Limitations:
- Maximum resolution: 1536px
- Maximum animation length: 10 seconds
- Not suitable for specific motion choreography

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "animate_3D",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",
      "n_seconds": 6.0,
      "n_steps": 8,
      "resolution": 1024,
      "background_denoise": 0.6,
      "foreground_denoise": 0.3,
      "depth_effect": 0.4,
      "loop": false,
      "use_style_image": true,
      "style_image": "https://example.com/style.jpg",
      "style_strength": 0.8,
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
    "tool": "animate_3D",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",
      "n_seconds": 6.0,
      "n_steps": 8,
      "resolution": 1024,
      "background_denoise": 0.6,
      "foreground_denoise": 0.3,
      "depth_effect": 0.4,
      "loop": false,
      "use_style_image": true,
      "style_image": "https://example.com/style.jpg",
      "style_strength": 0.8,
      "seed": 1234567890
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

### Common Issues and Solutions

1. Distorted Facial Features
   - Reduce foreground denoise strength
   - Keep depth effect below 0.3
   
2. Unstable Background
   - Lower background denoise strength
   - Increase number of diffusion steps

3. Jerky Animation
   - Increase animation length
   - Enable loop option for smoother transitions
   - Increase number of steps