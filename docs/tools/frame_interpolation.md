---
aliases: Keyframe Interpolation, Frame Interpolation, Video Interpolation, Image Sequence Animation
---

# Keyframe Interpolation
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/frame_interpolation_opt.mp4" type="video/mp4" />
            </video>
</div>


Create smooth video animations by interpolating between a sequence of keyframe images. This tool generates fluid transitions between images using advanced frame interpolation technology, perfect for creating morphing effects, seamless loops, and dynamic visual sequences.

## Overview

- Generate smooth transitions between multiple images
- Support for up to 20 keyframe images
- Adjustable interpolation frames for transition control
- Multiple loop options (seamless loop and ping-pong)
- Visual path optimization for best frame ordering

## Quick Start

1. Visit Eden Create: [Keyframe Interpolation](https://beta.eden.art/create/frame_interpolation) tool
2. Upload 2-20 keyframe images
3. Set interpolation frames (2-60)
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Keyframe Interpolation".

## Basic Usage

Required inputs:
- 1-20 keyframe images
- Interpolation frames (2-60)

Optional settings:
- FPS (1-60, default: 24)
- Loop options
- Sort method
- Interpolation model

## Technical Guidelines

### Frame Settings
- FPS: 1-60 (default: 24)
- Interpolation frames: 2-60 frames per transition
- Maximum keyframes: 20 images
- Supported models: RIFE 4.7, RIFE 4.9, FILM

## Best Practices for Inputs

- Use consistent image resolutions across keyframes
- Ensure visual similarity between consecutive frames for smoother transitions
- Consider using visual_path sorting for optimal frame ordering
- Keep total frame count reasonable for better processing time

## Advanced Features

### Loop Options
- Standard loop: Interpolates back to first frame
- Ping-pong: Creates forward-reverse animation
- Configuration tips:
  - Use loop for seamless circular transitions
  - Use ping-pong for bouncing effects

### Sort Methods
- None: Maintains original order
- visual_path: Optimizes frame order for smoothest transitions
- random: Randomizes frame order

### Interpolation Models
- RIFE 4.9 (default): Fast, efficient for most cases
- RIFE 4.7: Alternative RIFE version
- FILM: Higher quality but slower processing

## Technical Details

Base technology:
- RIFE frame interpolation
- FILM frame interpolation

Supported formats:
- Input: Common image formats
- Output: Video file

Limitations:
- Maximum 20 keyframe images
- Maximum 60 interpolation frames
- Processing time increases with frame count

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "frame_interpolation",
    "args": {
      "images": [
        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander.png",
        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander_baby.png",
        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander_joker.png"
      ],
      "loop": true,
      "interpolation_frames": 23,
      "model": "rife49.pth"
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
    "tool": "frame_interpolation",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "images": [
        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander.png",
        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander_baby.png",
        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander_joker.png"
      ],
      "loop": true,
      "interpolation_frames": 23,
      "model": "rife49.pth"
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

## Common Issues and Solutions

- Long processing times
  - Reduce number of interpolation frames
  - Use RIFE model instead of FILM
- Choppy transitions
  - Increase interpolation frames
  - Ensure keyframes are visually similar
- Poor frame ordering
  - Try visual_path sorting method
  - Manually arrange keyframes if needed