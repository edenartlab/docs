---
aliases: Upscale a video, Video Upscaler, Video Enhancement
---

# Upscale a video

A powerful video upscaling tool that enhances video quality by increasing resolution and framerate while improving detail and clarity. The tool uses AI to intelligently add details while maintaining visual consistency.

## Overview

- Increase video resolution up to 2048px
- Enhance frame rate up to 30 FPS
- AI-powered detail enhancement
- Speed control options

## Quick Start

1. Visit Eden Create: [Upscale a video](https://beta.eden.art/create/video_upscaler) tool
2. Upload your video file
3. Adjust resolution and quality settings
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Upscale a video".

## Basic Usage

Required inputs:
- Input video file
- Target dimensions (width/height)

Optional settings:
- Output FPS (12-30)
- AI creativity level (denoise)
- Speed multiplier
- Source sampling rate

## Technical Guidelines

### Resolution Options
- Width: 1024-2048px (64px steps)
- Height: 1024-2048px (64px steps)
- Default: 1536x1536px

### Frame Rate Settings
- Output FPS: 12-30 frames/second
- Default: 24 FPS
- Source sampling: 8-24 FPS

## Best Practices for Inputs

- Use high-quality source videos
- Keep input videos under 30 seconds
- Maintain aspect ratios when resizing
- Consider source sampling rate for complex scenes

## Advanced Features

### AI Creativity Control
- Denoise parameter: 0.2-0.7
- Lower values (0.3): Subtle enhancement
- Higher values (0.5+): More dramatic detail addition
- Recommended range: 0.35-0.45

### Speed Control
- Speedup factor: 0.25-2.0
- Slow motion: < 1.0
- Normal speed: 1.0
- Fast motion: > 1.0

## Tips for Best Results

### Technical Considerations
- Balance denoise level with desired detail
- Match output FPS to content type
- Consider source sampling for complex scenes

### Input Optimization
- Clean, stable source footage
- Good lighting and contrast
- Minimal compression artifacts

## Technical Details

### Default Parameters
- Width/Height: 1536px
- Output FPS: 24
- Source sampling FPS: 12
- Denoise: 0.35
- Speed factor: 1.0

### Supported Formats
- Input: MP4, MOV
- Output: MP4
- Maximum resolution: 2048px

### Limitations
- Processing time increases with resolution
- Memory intensive for longer videos
- Quality dependent on source material

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Artifacts | Lower denoise value |
| Slow processing | Reduce resolution or length |
| Jerky motion | Increase source sampling FPS |
| Quality loss | Check input video quality |

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "video_upscaler",
    "args": {
      "input_video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4",
      "width": 1536,
      "height": 1536,
      "denoise": 0.35,
      "output_fps": 24,
      "max_source_sampling_fps": 12,
      "speedup_factor": 1.0,
      "negative_prompt": "ugly, signature, watermark, text, signature, blurry, out of focus, ugly, nude, naked, nsfw, embedding:NEG_EMBED_STABLE_YOGI_V3"
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
    "tool": "video_upscaler",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "input_video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4",
      "width": 1536,
      "height": 1536,
      "denoise": 0.35,
      "output_fps": 24,
      "max_source_sampling_fps": 12,
      "speedup_factor": 1.0,
      "negative_prompt": "ugly, signature, watermark, text, signature, blurry, out of focus, ugly, nude, naked, nsfw, embedding:NEG_EMBED_STABLE_YOGI_V3"
    },
    "mock": false,
    "cost": 50,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```