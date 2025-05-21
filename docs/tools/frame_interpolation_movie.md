---
aliases: Slow Motion Video, Video Frame Interpolation, Video Slowdown
---

# Slow Motion Video

Create smooth slow-motion videos by intelligently interpolating additional frames between existing ones. This tool uses advanced frame interpolation models to generate natural-looking slow motion effects from regular videos.

## Overview

- Frame interpolation for smooth slow motion
- Multiple interpolation models (RIFE and FILM)
- Adjustable slowdown factor (2x-8x)
- Optional ping-pong looping
- FPS control and preservation

## Quick Start

1. Visit Eden Create: [Slow Motion Video](https://beta.eden.art/create/frame_interpolation_movie) tool
2. Upload your video
3. Choose interpolation factor (2-8x slower)
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Slow Motion Video".

## Basic Usage

Required inputs:
- Input video
- Interpolation factor (2-8x)

Optional settings:
- Output FPS
- Interpolation model
- Ping-pong looping

## Technical Guidelines

### Frame Interpolation Settings
- Interpolation Factor: 2-8x (default: 2)
- Output FPS: 1-60 (default: 24)
- Supported Models:
  - RIFE 4.7
  - RIFE 4.9 (default)
  - FILM

## Best Practices for Inputs

- Use high-quality source videos
- Avoid videos with rapid scene changes
- Keep input videos under 30 seconds
- Ensure steady camera movement
- Use progressive scan footage when possible

## Advanced Features

### Interpolation Models
- RIFE: Fast and efficient, best for most uses
- FILM: Higher quality but slower, better for extreme slow motion

### FPS Control
- Default: 24fps
- Range: 1-60fps
- Option to preserve input video FPS

### Ping-pong Looping
- Creates seamless forward-reverse loops
- Doubles final output duration
- Useful for creative effects

## Tips for Best Results

### Technical Considerations
- Higher interpolation factors require more processing time
- Consider frame rate compatibility with target platform
- Monitor output file size with longer videos

### Input Optimization
- Clean, stable footage works best
- Avoid heavy motion blur
- Well-lit scenes produce better results

## Technical Details

### Base Technology
- Primary models: RIFE 4.7/4.9 and FILM
- Default parameters:
  - Interpolation Factor: 2
  - FPS: 24
  - Model: RIFE 4.9

### Limitations
- Maximum input resolution: 1920x1080
- Maximum output duration: 60 seconds
- Processing time increases with interpolation factor

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Artifacts in output | Reduce interpolation factor |
| Slow processing | Use RIFE instead of FILM model |
| Choppy results | Ensure stable input footage |
| Output too fast/slow | Adjust output FPS setting |

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "frame_interpolation_movie",
    "args": {
      "video": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/Count.mov",
      "interpolation_frames": 4,
      "FPS": 24,
      "model": "rife49.pth",
      "pingpong": false,
      "use_input_video_fps": false
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
    "tool": "frame_interpolation_movie",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "video": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/Count.mov",
      "interpolation_frames": 4,
      "FPS": 24,
      "model": "rife49.pth",
      "pingpong": false,
      "use_input_video_fps": false,
      "use_advanced": false,
      "image_load_cap": 0
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