from fastapi import APIRouter #sistema de rutas
from app.data import nombres #importa la base de datos simulada 

router = APIRouter() #crea un objeto para poder definir las rutas 
@router.get("/nombres") #ruta para obtener los nombres
def get_nombres(): #esta funcion se ejecuta cuando alguien usa el endpoint /nombres
    return nombres #devuelve la lista de nombres 
#sirve como buena práctica para separar las rutas de la lógica de negocio
#y permite que el código sea más limpio y fácil de mantener.