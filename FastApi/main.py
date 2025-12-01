from fastapi import FastAPI
from database import Base, engine
from routers import personas
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Api de Personas SQLITE y FastApi Duoc")
origins = [
    "http://localhost:8100",
    "http://127.0.0.1:8100",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(personas.router)