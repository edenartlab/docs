---
aliases: Create sound effects, Stable Audio Generator, Audio Creation Tool
---

# Create Sound Effects
<div align="center">
<video width="50%" controls>
            <source src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/audio_craft_opt.mp4" type="video/mp4" />
            </video>
</div>


Generate realistic sound effects, music samples, and audio loops using Stable Audio Open model. This tool excels at creating short audio clips, drum beats, instrument riffs, ambient sounds, and foley recordings.

## Overview

- Text-to-audio generation
- Variable duration control (1-120 seconds)
- Multiple sample generation
- Seed control for reproducibility
- Configurable generation parameters

## Quick Start

1. Visit Eden Create: [Create sound effects](https://beta.eden.art/create/stable_audio) tool
2. Enter your audio description
3. Set desired duration
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "Create sound effects".

## Basic Usage

Required inputs:
- Text prompt describing the desired sound
- Duration (1-120 seconds)

Optional settings:
- Number of samples (1-4)
- Negative prompt
- Steps (16-200)
- Seed value

## Technical Guidelines

The model is optimized for short audio samples up to 47 seconds, though it supports generation up to 120 seconds. Best results typically come from:
- Duration: 5-30 seconds
- Steps: 50 (default) for balanced quality
- CFG: 5.0 (default) for prompt adherence

## Input Best Practices

Structure prompts using the following format:
```
Genre: [type] | Styles: [description] | Instruments: [list] | Moods: [descriptors] | BPM: [tempo]
```

Example:
```
Genre: Trap | Styles: well arranged | Instruments: tap delay marimba arp, Shaker, Rim shot, 808 Kick | Moods: Ethereal, Transcendent | BPM: 130
```

## Technical Details

- Base Model: Stable Audio Open
- Training Data: Freesound and Free Music Archive
- Maximum Duration: 120 seconds
- Optimal Duration: Up to 47 seconds
- Sample Rate: 44.1kHz

## API Reference

### Endpoint

```bash
curl -X POST "https://api.eden.art/v2/tasks/create" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -d '{
    "tool": "stable_audio",
    "args": {
      "prompt": "303 acid bass line 128bpm arpeggiated Gmin7",
      "duration": 30,
      "n_samples": 1,
      "steps": 50,
      "cfg": 5.0
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
    "tool": "stable_audio",
    "parent_tool": null,
    "output_type": "audio",
    "args": {
      "prompt": "303 acid bass line 128bpm arpeggiated Gmin7",
      "duration": 30,
      "n_samples": 1,
      "steps": 50,
      "cfg": 5.0,
      "seed": -1
    },
    "mock": false,
    "cost": 4,
    "handler_id": "fc-xxxxx",
    "status": "pending",
    "error": null,
    "result": null,
    "performance": null
  }
}
```

## Common Issues and Solutions

1. Poor Quality Output
   - Increase steps (50-100)
   - Adjust CFG value (3.5-7.0)
   - Use more specific prompt structure

2. Generation Too Long
   - Keep duration under 47 seconds for optimal results
   - Split longer sounds into multiple generations

3. Unclear Results
   - Use structured prompts with Genre/Style/Instruments
   - Include specific BPM if relevant
   - Add mood descriptors for better context