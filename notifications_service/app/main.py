from fastapi import FastAPI

app = FastAPI(title="Checkly Notifications Service")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "notifications"}
