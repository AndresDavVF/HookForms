import { useForm} from "react-hook-form"

function Registro() {

    const { register,handleSubmit,formState: { errors },watch} = useForm();
    const ValSubmit = (data) => console.log(data)
    const password = watch("password", "");
    return ( 
        <form onSubmit={handleSubmit(ValSubmit)}>



            <label> Nombre </label>
            <input type="text"{...register(`nombre`,{
                required: true,
                minLength:6,
                maxLength:20
            })}/>
            {errors.nombre?.type=="required" && <span className="text-danger">El campo es requerido</span>}
            {errors.nombre?.type=="minLength" && <span className="text-danger">el nombre debe ser mayor a 6 digitos</span>}
            {errors.nombre?.type=="maxLength" && <span className="text-danger">el nombre debe ser menor a 20 digitos</span>}
            <br></br>



            <label> Correo </label>
            <input type="text"{...register(`correo`,{
                required:{
                  value:true,
                  message:"El campo es requerido"
                },
            })}/>
            {errors.nombre?.type=="required" && <span className="text-danger">{errors.correo.message}</span>}
            <br></br>




            <label> Password </label>
            <input { ...register("password",{required:{value:true,message:"Error"},pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[!¡¿?])(?=.*[^\w\d\s]).{8,}$/,message:"la contraseña no tiene un formato Valido"}})} />
            {errors.password && (<span className="text-danger">{errors.password.message}</span>)}
            <br></br>



            <label> Confirmar Password </label>
            <input type="text"{...register(`confirmarpassword`,{
              required:true,
              pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[!¡¿?])(?=.*[^\w\d\s]).{8,}$/,
              validate: value => value === password 
              
            })}/>
            {errors.confirmarpassword?.type=="required" && <span className="text-danger">El campo es requerido</span>}
            {errors.confirmarpassword?.type=="validate" && <span className="text-danger">Las contraseñas no coinciden</span>}
            <br></br>
            
            <label> Fecha de Nacimiento</label>
            <input type="date"
            { ...register("fecha",{
                required:{
                  value:true,
                  message:"el Campo es requerido"
                }
            })} />
            {errors.fecha && (<span className="text-danger">{errors.fecha.message}</span>)}

          <button className="btn btn-primary" type="submit"> Registrarse </button>
        </form>
    );
  }
  export default Registro;