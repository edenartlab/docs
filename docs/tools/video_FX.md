---
aliases: AI video effects, Video Effects Generator, Video Style Transfer
---

# AI Video Effects
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/video_FX_thumbnail.mp4" type="video/mp4" />
            </video>
</div>


Apply creative AI effects to specific regions of videos using style transfer. This tool enables targeted application of AI-generated effects based on depth, edges, and brightness, allowing you to enhance backgrounds, add animated textures, or stylize specific areas while preserving key details.

## Overview

- Region-specific video effects using depth, edge, and luminance masks
- Style transfer from reference images
- Customizable effect strength per region
- Frame-by-frame processing with temporal consistency

## Quick Start

1. Visit Eden Create: [AI video effects](https://beta.eden.art/create/video_FX) tool
2. Upload your source video
3. Upload a style reference image
4. Adjust effect strengths and regions
5. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "AI video effects".

## Basic Usage

Required inputs:
- Source video
- Style reference image
- Number of frames (default: 24)
- Processing resolution (default: 1024)

## Technical Guidelines

### Resolution Options
- Minimum: 768px
- Default: 1024px
- Maximum: 1280px
- Higher resolutions improve quality but increase processing time

### Frame Settings
- Minimum frames: 16
- Maximum frames: 512
- Output duration = frames/8 seconds
- Default: 24 frames (3 seconds)

## Best Practices for Inputs

- Use high-quality source videos
- Choose style images that complement your video content
- Start with default settings before fine-tuning
- Test with lower resolutions first

## Advanced Features

### Region Targeting

#### Depth-Based Effects
- `close_strength`: -1.0 to 1.0 (default: -0.1)
- Targets regions based on camera distance
- Negative values affect far objects, positive values affect close objects

#### Edge Detection
- `edge_strength`: -1.0 to 1.0 (default: -0.2)
- Controls effect strength on textured areas
- Negative values target flat regions

#### Luminance Control
- `luminance_strength`: -1.0 to 1.0 (default: 0.0)
- Applies effects based on brightness
- Negative values target dark areas, positive values target bright areas

### Effect Strength Control
- `max_denoise`: 0.0 to 1.0 (default: 0.55)
- `min_denoise`: 0.0 to 0.4 (default: 0.0)

## Technical Details

### Processing Specifications
- Base resolution: 1024px
- Frame processing: Sequential
- Temporal consistency maintained
- Cost estimate: 0.75 * n_frames * resolution/1024

### Limitations
- Cannot replace objects
- Processing time increases with resolution
- Maximum 512 frames per video

## Common Issues and Solutions

1. Artifacts in output
   - Reduce max_denoise value
   - Lower resolution for testing
   
2. Inconsistent effects
   - Adjust region targeting parameters
   - Ensure style image matches intended effect

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "video_FX",
    "args": {
      "video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4",
      "style_image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",
      "n_frames": 24,
      "resolution": 1024,
      "close_strength": -0.1,
      "edge_strength": -0.2,
      "luminance_strength": 0.0,
      "max_denoise": 0.55,
      "min_denoise": 0.0
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
    "tool": "video_FX",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4",
      "style_image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",
      "n_frames": 24,
      "resolution": 1024,
      "close_strength": -0.1,
      "edge_strength": -0.2,
      "luminance_strength": 0.0,
      "max_denoise": 0.55,
      "min_denoise": 0.0
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