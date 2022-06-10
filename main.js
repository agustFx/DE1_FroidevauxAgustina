class Turnos{
    constructor(nombre, dni, especialidad, horarios){
        this.nombre = nombre;
        this.dni = dni;
        this.especialidad = especialidad;
        this.horarios = horarios;
    }

    saludar(nombre){
        alert("Nos alegramos de verte, " + nombre + "!");
    }

    seguirOperacion(){
        let entrada = prompt("Desea seguir con la operación? \n SI | NO ").toUpperCase();
    }

    elegirEspecialidad(){
        while((turno.nombre != "") && (turno.dni != "") && (turno.especialidad != "")){
            switch(turno.especialidad){
                case "1":
                    alert("Tenemos turnos martes y jueves!");
                    break;

                case "2": 
                    alert("Actualmente no nos quedan turnos disponibles para el resto del mes.");
                    break;

                case "3":
                    alert("Tenemos turnos lunes y miércoles!");
                    break;
                
                case "4":
                    alert("Tenemos turnos los viernes!");
                    break;
                    
                default:
                    alert("Algo ha salido mal, intenta más tarde."); 
                    break;
            }
        }
    }

    elegirHorarios(){
        if((turno.horarios >= 4) && (turno.horarios <= 6)){
            alert("El turno está disponible!"); 
        } else{
            alert("El turno ya fue tomado por alguien más!");
        }
    }

    confirmarTurno(nombre){
        alert("Tu turno fue asignado con éxito, " + nombre + ".");
    }
}

let turno = new Turnos({nombre: "", dni: "", especialidad: "", horarios: ""});
turno.nombre = prompt("Ingresa tu nombre:");
turno.dni = prompt("Ingresa tu DNI:");
saludar(turno.nombre);

turno.especialidad = prompt("Ingresa la especialidad con la que deseas atenderte: \n 1) Odontología \n 2) Oftalmología \n 3) Cardiología \n 4) Neumología");
elegirEspecialidad();

while(elegirEspecialidad() != ""){
    seguirOperacion();
    if(seguirOperacion() == "SI"){
        turno.horarios = prompt("Ingresa el horario en el que desees atenderte: \n \n 1) 09:45hs \n 2) 10:15hs \n 3) 12hs \n 4) 14.30hs \n 5) 16hs \n 6) 16.20hs");
        elegirHorarios();
        if(elegirHorarios() <= 6){
            confirmarTurno(turno.nombre);
        }
    } else{
        alert("Nos alegró verte!");
    }
}


