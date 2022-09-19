// get volume of cylinder, sphere & cone with 4 decimal places using objects & classes

class Cylinder {
  constructor(radius, height){
    this.radius = radius;
    this.height = height;
  };

  getVolume(){
    return console.log((Math.PI*((this.radius)**2)*this.height).toFixed(4));
  }
}


class Sphere {
  constructor(radius){
    this.radius = radius;
  };

  getVolume(){
    return console.log(((4/3)*Math.PI*(this.radius)**3).toFixed(4));
  }
}

class Cone{
  constructor(radius, height){
    this.radius = radius;
    this.height = height;
  };

  getVolume(){
    return console.log((Math.PI*((this.radius)**2)*this.height/3).toFixed(4));
  }
}

let objCy = new Cylinder(4,5);
objCy.getVolume();

let objS = new Sphere(2);
objS.getVolume();

let objCo = new Cone(6,8);
objCo.getVolume();
