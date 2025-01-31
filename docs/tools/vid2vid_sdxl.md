---
aliases: Stylize a video, Video Style Transfer, vid2vid_sdxl
---

# Stylize a video
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/vid2vid_sdxl_opt.mp4" type="video/mp4" />
            </video>
</div>


Transform existing videos by applying new visual styles while preserving motion and structure. This tool uses advanced AI to reinterpret your video's content with the aesthetics of a provided style image, maintaining the original movement and composition.

## Overview

- Video style transfer using reference images
- Motion-preserving transformation
- Adjustable style strength and shape guidance
- Support for looping animations
- Resolution control up to 1280px

## Quick Start

1. Visit Eden Create: [Stylize a video](https://beta.eden.art/create/vid2vid_sdxl) tool
2. Upload your source video
3. Upload a style reference image
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Stylize a video".

## Basic Usage

Required inputs:
- Source video
- Style reference image
- Processing resolution (default: 896px)
- Number of frames (default: 24)

## Technical Guidelines

### Resolution Options
- Minimum: 640px
- Default: 896px
- Maximum: 1280px
- Higher resolutions produce better quality but increase processing time significantly

### Frame Settings
- Frame cap: 16-264 frames
- Default diffusion framerate: 8fps
- Maximum output duration: frames/8 seconds
- Example: 24 frames = 3 seconds output

## Input Optimization

### Video Input
- Keep source videos short (recommended 2-4 seconds)
- Ensure clear subject motion
- Avoid rapid camera movements
- Use stable, well-lit footage

### Style Image
- Choose clear, high-quality reference images
- Use images that represent desired texture and style
- Avoid overly complex or busy patterns for better results

## Advanced Features

### Motion Control
- Control strength: 0.0-1.2 (default: 0.5)
- Lower values (0.3-0.45): More creative interpretation
- Higher values (0.55-0.65): Closer to source motion

### Loop Generation
- Closed loop option for seamless animation
- Recommended for gif-like content
- Maintains consistency between first and last frames

## Technical Details

### Processing Parameters
- Base model: SDXL
- Default framerate: 8fps
- Output interpolation: RIFE to 24fps
- Resolution range: 640-1280px
- Frame capacity: 16-264 frames

### Limitations
- Maximum video length tied to frame cap
- Higher resolutions increase processing time
- Style transfer may vary with complex patterns

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "vid2vid_sdxl",
    "args": {
      "video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4",
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",
      "resolution": 896,
      "frame_cap": 24,
      "control_strength": 0.5,
      "diffusion_framerate": 8,
      "closed_loop": false,
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
    "tool": "vid2vid_sdxl",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4",
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",
      "resolution": 896,
      "frame_cap": 24,
      "control_strength": 0.5,
      "diffusion_framerate": 8,
      "closed_loop": false,
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