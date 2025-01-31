---
aliases: Create a video from text, Text to Video Generation, txt2vid
---

# Create a video from text
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/txt2vid_lora_opt.mp4" type="video/mp4" />
            </video>
</div>


Generate creative, abstract animations from text descriptions. This tool transforms text prompts into fluid video sequences with customizable motion, length, and looping options.

## Overview

- Text-to-video generation
- Adjustable motion strength and frame count
- Seamless loop creation option
- Customizable resolution up to 2048px

## Quick Start

1. Visit Eden Create: [Create a video from text](https://beta.eden.art/create/txt2vid) tool
2. Enter your descriptive prompt
3. Adjust frame count and motion settings if desired
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Create a video from text".

## Basic Usage

Required inputs:
- Text prompt describing the desired video

Optional settings:
- Number of frames (24-128)
- Motion strength (0.7-1.3)
- Resolution (512-2048px)
- Closed loop option
- Seed for reproducibility

## Technical Guidelines

### Resolution Options
- Default: 1024x1024
- Minimum: 512x512
- Maximum: 2048x2048
- Common Aspect Ratios:
  - 16:9 (2048x1152)
  - 3:2 (1782x1024)
  - 1:1 (1024x1024)
  - 2:3 (1024x1782)
  - 9:16 (1152x2048)

### Video Settings
- Frame count: 24-128 frames
- Video length = frames/12 seconds
- Motion strength: 0.7-1.3 (default: 1.1)

## Best Practices for Inputs

- Use clear, descriptive prompts
- Start with default motion strength (1.1)
- For looping animations, enable closed loop option
- Choose frame count based on desired video length
- Consider aspect ratio for intended use case

## Advanced Features

### Motion Control
- Motion strength parameter controls animation intensity
- Lower values (0.7-1.0) create subtle movements
- Higher values (1.1-1.3) generate more dramatic motion

### Seamless Looping
- Enable closed loop option for perfectly looping animations
- Ideal for GIF creation and endless playback
- Works best with cyclical or repeating motions

## Tips for Best Results

### Technical Considerations
- Higher frame counts produce smoother animations
- Balance resolution with generation time
- Use seed values for reproducible results

### Input Optimization
- Include motion-related descriptors in prompts
- Specify desired movement types
- Consider scene complexity vs. motion strength

## Technical Details

- Base technology: Custom ComfyUI workflow
- Frame rate: 12 FPS
- Cost estimate: 0.5 * number of frames
- Output format: Video file

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "txt2vid",
    "args": {
      "prompt": "A train passing by a bridge",
      "n_frames": 128,
      "seed": 99
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
    "tool": "txt2vid",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "prompt": "A train passing by a bridge",
      "n_frames": 128,
      "motion_strength": 1.1,
      "width": 1024,
      "height": 1024,
      "closed_loop": true,
      "seed": 99
    },
    "mock": false,
    "cost": 64,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```

## Common Issues and Solutions

- Long generation times: Reduce frame count or resolution
- Jerky motion: Increase frame count or reduce motion strength
- Poor looping: Enable closed loop option for seamless playback
- Inconsistent results: Use seed value for reproducibility