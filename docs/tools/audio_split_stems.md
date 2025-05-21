---
aliases: Split Audio Stems, Audio Stem Separation, Vocal Isolation
---

# Split Audio Stems

Split mixed audio tracks into isolated stems for vocals, drums, bass, and other instruments. This tool uses advanced source separation technology to cleanly separate different elements of a song.

## Overview

- Isolates vocals from instrumentals
- Separates drums and bass tracks
- Extracts other musical elements
- Creates high-quality isolated stems

## Quick Start

1. Visit Eden Create: [Split Audio Stems](https://beta.eden.art/create/audio_split_stems) tool
2. Upload your audio file
3. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Split Audio Stems".

## Basic Usage

Required input:
- Audio file (MP3, WAV, or M4A format)

Output stems:
- Vocals
- Drums
- Bass
- Other instruments
- Instrumental (no vocals)

## Technical Guidelines

### Supported Formats
- Input: MP3, WAV, M4A
- Output: WAV format
- Maximum duration: 10 minutes
- Recommended sample rate: 44.1kHz
- Bit depth: 16-bit or 24-bit

## Best Practices for Inputs

- Use high-quality source audio
- Ensure clean, uncompressed audio when possible
- Avoid heavily distorted or low-quality recordings
- Keep audio length under 10 minutes

## Technical Details

### Base Technology
- Model: Librosa
- Processing: Source separation using deep learning
- Output format: WAV files

### Default Parameters
- Sample rate: 44.1kHz
- Bit depth: 16-bit
- Channels: Stereo

### Limitations
- Maximum file size: 100MB
- Maximum duration: 10 minutes
- Processing time varies with length

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Poor separation quality | Use higher quality input audio |
| Processing fails | Ensure file is under size/length limits |
| Artifacts in output | Check input audio for clipping/distortion |
| Long processing time | Reduce audio length or file size |

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
    "tool": "audio_split_stems",
    "args": {
      "audio": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/promp+it+up.mp3"
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
    "tool": "audio_split_stems",
    "parent_tool": null,
    "output_type": "audio",
    "args": {
      "audio": "https://edenartlab-lfs.s3.us-east-1.amazonaws.com/comfyui/models2/assets/promp+it+up.mp3"
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

### Error Handling
- 400: Invalid input format
- 413: File too large
- 415: Unsupported file type
- 429: Rate limit exceeded
- 500: Processing error