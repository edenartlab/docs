---
aliases: Remove background, Background Removal, Image Background Removal
---

# Remove Background
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/background_removal_opt.mp4" type="video/mp4" />
            </video>
</div>


Remove the background from images, creating transparent PNGs that isolate the main subject. This tool uses advanced AI segmentation to automatically detect and remove backgrounds while preserving fine details like hair and complex edges.

## Overview

- Automatic background removal
- Transparent PNG output
- Fine detail preservation
- Clean edge detection

## Quick Start

1. Visit Eden Create: [Remove background](https://beta.eden.art/create/background_removal) tool
2. Upload your image
3. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Remove background".

## Basic Usage

Required input:
- Source image containing a clear subject to isolate

The tool will process the image and return a PNG with transparency where the background was removed.

## Technical Guidelines

- Input formats: JPG, PNG
- Output format: PNG with alpha channel
- Recommended input resolution: 512-2048px
- Best results with clear subject-background separation
- Maintains original image dimensions

## Best Practices for Inputs

- Ensure good contrast between subject and background
- Avoid images where subject and background blend together
- Use well-lit images with clear edges
- Keep main subject in focus
- Avoid complex overlapping elements

## Technical Details

### Base Model
- InspyreNet-RembG

### Supported Formats
Input:
- JPEG/JPG
- PNG

Output:
- PNG with transparency

### Limitations
- May struggle with very complex hair or fur
- Can have difficulty with transparent or reflective objects
- Performance may vary with extremely busy backgrounds

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Rough edges | Use higher resolution input |
| Missing fine details | Ensure good lighting and contrast |
| Incomplete removal | Check for clear subject separation |
| Artifacts around edges | Use clean, well-defined source images |

## API Reference

### Endpoint
`POST https://api.eden.art/v2/tasks/create`

### Headers
```
Content-Type: application/json
X-Api-Key: YOUR_API_KEY
```

### Basic Request
```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "background_removal",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg"
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
    "tool": "background_removal",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg"
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