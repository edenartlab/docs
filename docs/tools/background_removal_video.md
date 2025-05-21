---
aliases: Remove background (Video), Video Background Removal, Video Alpha Channel Generator
---

# Remove background (Video)

Remove backgrounds from videos to create transparent alpha channel output. This tool isolates foreground subjects from video content, producing a sequence with transparent background suitable for compositing and further editing.

## Overview

- Automated video background removal
- Alpha channel generation
- Foreground subject isolation
- Transparent background output

## Quick Start

1. Visit Eden Create: [Remove background (Video)](https://beta.eden.art/create/background_removal_video) tool
2. Upload your video file
3. Adjust removal settings if needed
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Remove background (Video)".

## Basic Usage

Required input:
- Video file (.mp4, .mov, or other standard video formats)

## Technical Guidelines

### Video Requirements
- Recommended length: 1-30 seconds
- Supported formats: MP4, MOV
- Maximum resolution: 1920x1080
- Optimal framerate: 24-30 fps

### Processing Considerations
- Clear subject-background separation yields best results
- Well-lit scenes improve detection accuracy
- Stable footage produces more consistent results

## Best Practices for Inputs

- Use videos with good contrast between subject and background
- Ensure adequate lighting
- Avoid rapid camera movements
- Keep subject well-defined and in focus

## Advanced Features

### Subject Detection
- Automatic foreground/background separation
- Edge refinement for clean masks
- Temporal consistency preservation

## Tips for Best Results

### Technical Considerations
- Maintain consistent lighting throughout the video
- Avoid complex patterns that blend with the subject
- Use stable camera movements

### Input Optimization
- Clean, well-lit source footage
- Clear subject separation
- Minimal motion blur

## Technical Details

### Base Technology
- Model: InspyreNet-RemBG
- Processing: Frame-by-frame analysis with temporal consistency
- Output: PNG sequence with alpha channel

### Limitations
- May struggle with fine details like hair
- Complex backgrounds can affect accuracy
- Processing time increases with video length

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Inconsistent masking | Use more stable footage |
| Edge artifacts | Ensure good lighting and contrast |
| Slow processing | Reduce video length or resolution |

## API Reference

### Endpoint
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "background_removal_video",
    "args": {
      "video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4"
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
    "tool": "background_removal_video",
    "parent_tool": null,
    "output_type": "video",
    "args": {
      "video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4"
    },
    "mock": false,
    "cost": 5,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```

### Error Handling
- 400: Invalid video format or corrupted file
- 413: Video file too large
- 422: Invalid parameters
- 500: Processing error