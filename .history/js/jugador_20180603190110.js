/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 8,
  perdervidas : function(){
      this.vidas - 1; 
  },
  mover : function(posX,posY){
          this.x = this.x + posX;
          this.y = this.y + posY;
  },
  perderVidas : function(cantidad){
      if(this.vidas > 0){  
      this.vidas = this.vidas - cantidad;
      }else{
        alert("Perdiste");
      }
  }


}

  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
   

