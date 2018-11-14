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
  vidas: 9,
  
  mover : function(posX,posY){
          
          this.x = this.x + posX;
          this.y = this.y + posY;

  },
  perderVidas : function(cantVidas){
      this.vidas -= cantVidas;
      if(this.vidas <= 0){
          alert("perdiste ");
      }   
      else{
          console.log("tus vidas restantes son " + this.vidas);
      }
  
  }


  


}

  

