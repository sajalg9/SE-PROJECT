from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse, StreamingResponse
from ultralytics import YOLO
import cv2
import numpy as np
import io

app = FastAPI()

# Load your trained model
model = YOLO("best.pt")      # Your model path

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Read image
    image_bytes = await file.read()
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Run inference
    results = model(img)

    # GET JSON RESPONSE (bounding boxes + class names)
    json_output = []
    for r in results:
        for box in r.boxes:
            cls = int(box.cls[0])
            json_output.append({
                "class_id": cls,
                "class_name": model.names[cls],     # ← your label mapping here
                "confidence": float(box.conf[0]),
                "bbox": box.xyxy[0].tolist()       # [x1, y1, x2, y2]
            })

    # GET ANNOTATED IMAGE
    annotated = results[0].plot()   # numpy array BGR

    # Encode image to send back
    _, buffer = cv2.imencode(".jpg", annotated)
    annotated_bytes = io.BytesIO(buffer)

    return {
        "detections": json_output,
        "annotated_image": "/get-image" 
    }

@app.get("/get-image")
async def get_image():
    annotated = results[0].plot()
    _, buffer = cv2.imencode(".jpg", annotated)
    return StreamingResponse(io.BytesIO(buffer), media_type="image/jpeg")
