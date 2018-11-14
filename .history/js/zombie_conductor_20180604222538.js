/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,dir) {
  /* Completar constructor a partir de Enemigo */

  Enemigo.call(this,sprite,x,y,ancho,alto,velocidad,rangoMov)
  this.dir = dir;
 


}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.atacar = function(Jugador){
            this.Jugador.morir();
}

/* Completar metodos para el movimiento y el ataque */
 ZombieConductor.prototype.mover =function(){
          if( this.dir =='h'){
              this.x += this.velocidad;
              if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
                this.velocidad *= -1;
              }

          }
          if( this.dir =='v'){
              this.y += 1;
              if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
                this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
               }
          }
        

 }