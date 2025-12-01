from pydantic import BaseModel, EmailStr

class PersonaBase(BaseModel):
    rut: str
    nombre: str
    apellido_paterno: str
    apellido_materno: str
    correo: EmailStr
    region: str


class PersonaCreate(PersonaBase):
    pass

class PersonaOut(PersonaBase):
    id: int

    class Config:
        orm_mode = True