from sqlalchemy import Column, Integer, String
from database import Base

class Persona(Base):
        __tablename__ = "personas"

        id = Column(Integer, primary_key=True, index=True)
        rut = Column(String, unique=True, index=True, nullable=False)
        nombre = Column(String,  nullable=False)
        apellido_paterno = Column(String, nullable=False)
        apellido_materno = Column(String, nullable=False)
        correo = Column(String, nullable=False)
        region = Column(String, nullable=False)




