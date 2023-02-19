import numpy as np
import uvicorn
from fastapi import FastAPI, File, UploadFile
from io import BytesIO
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# load our model
MODEL = tf.keras.models.load_model("models/model.h5")
class_names = [
    'GRAFFITI',
    'FADED_SIGNAGE',
    'POTHOLES',
    'GARBAGE',
    'CONSTRUCTION_ROAD',
    'BROKEN_SIGNAGE',
    'BAD_STREETLIGHT',
    'BAD_BILLBOARD',
    'SAND_ON_ROAD',
    'CLUTTER_SIDEWALK',
    'UNKEPT_FACADE'
]


@app.get('/ping')
async def ping():
    return "hello world"


def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    image = tf.image.resize(image, (224, 224))
    image = image / 255.0
    image = np.expand_dims(image, axis=0)
    return image


@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    print(file)
    image = read_file_as_image(await file.read())
    pred = MODEL.predict(image)
    class_name = class_names[np.argmax(pred[0])]
    bbox = pred[1]
    confidence = round(100 * (np.max(pred[0])), 2)
    (xmin, xmax, ymin, ymax) = bbox[0][0] * 1920, bbox[0][1] * \
        1920, bbox[0][2] * 1080, bbox[0][3] * 1080
    bboxes = [xmin, xmax, ymin, ymax]
    return {
        'class': class_name,
        'bbox': bboxes,
        'confidence': float(confidence)
    }
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8888)
