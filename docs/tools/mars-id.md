---
aliases: ID Generator, Mars College ID Creator, Student ID Generator
---

# ID Generator
<div align="center">
<img src="https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/mars-id_opt.jpg" width="50%" alt="thumbnail" />
</div>


Create customized student ID cards for Mars College with generated backgrounds and supplied portrait photos. This tool combines user-provided portrait images with procedurally generated artistic backgrounds to produce official-looking institutional identification cards.

## Overview

- Custom student/faculty ID card generation
- Procedurally generated artistic backgrounds
- Support for user-provided portrait photos
- Institutional customization options
- Automatic ID number generation

## Quick Start

1. Visit Eden Create: [ID Generator](https://beta.eden.art/create/mars-id) tool
2. Upload your portrait photo
3. Enter name and institutional details
4. Click "Create"

See [API Reference](#api-reference) section below for API usage examples.

Ask an Eden agent to "ID Generator".

## Basic Usage

Required inputs:
- Portrait photo (user-provided image)
- Name
- Institution name
- Department
- Camp affiliation

## Technical Guidelines

### Input Image Requirements
- Portrait-oriented photo
- Clear facial visibility
- Neutral background preferred
- Good lighting and focus

### Background Generation
The tool generates artistic backgrounds based on the provided prompt, typically featuring:
- Martian landscapes
- Desert vistas
- Institutional scenery
- Gradient color schemes

## Best Practices for Inputs

### Portrait Photos
- Use professional-style headshots
- Ensure good lighting
- Maintain neutral expression
- Center face in frame

### Institution Details
- Use consistent capitalization
- Keep department names official
- Follow standard naming conventions

## Technical Details

### Base Model
- Model: flux-schnell
- Output type: Image
- Cost estimate: 1.0 * n_samples

### Default Parameters
- Institution: MARS COLLEGE
- Department: MARS RESEARCH
- Camp: FREESIDE
- ID Number: 14-digit auto-generated

### Limitations
- Single portrait photo input
- Fixed ID card template
- Maximum 4 samples per generation

## API Reference

### Endpoint
POST `https://api.eden.art/v2/tasks/create`

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
    "tool": "mars-id",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/d39a732c49c718d272e1035762e1087059611e7005f.jpg",
      "name": "CHATSUBO",
      "camp": "FREESIDE",
      "department": "PUBLIC WORKS"
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
    "tool": "mars-id",
    "parent_tool": null,
    "output_type": "image",
    "args": {
      "image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/d39a732c49c718d272e1035762e1087059611e7005f.jpg",
      "name": "CHATSUBO",
      "camp": "FREESIDE",
      "department": "PUBLIC WORKS",
      "institution_name": "MARS COLLEGE",
      "prompt": "a painterly concept art charcoal sketch of an otherworldly landscape",
      "id_number": 12345678901234,
      "n_samples": 1,
      "seed": 1234567890
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

## Common Issues and Solutions

1. Portrait Photo Issues
   - Solution: Use well-lit, front-facing photos with neutral backgrounds

2. ID Number Format
   - Solution: Let system auto-generate if unsure of format

3. Background Generation
   - Solution: Use detailed prompts including color preferences and landscape elements