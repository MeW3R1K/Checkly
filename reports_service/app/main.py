from fastapi import FastAPI

app = FastAPI(title="Checkly Reports Service")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "reports"}
