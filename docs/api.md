# API reference

The FastAPI service runs locally on `http://localhost:8000` during Milestone 1.

## `GET /health`

Returns a lightweight health response for checking that the API is running.

```json
{
  "status": "healthy",
  "service": "code-archaeologist-api",
  "version": "0.1.0"
}
```

## `GET /info`

Returns service metadata that identifies the current application version and delivery stage.

```json
{
  "service": "code-archaeologist-api",
  "version": "0.1.0",
  "stage": "milestone-1-foundation"
}
```

Repository analysis endpoints will be added in a later milestone.
