import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().email().required("required"),
        password: yup.string().required("required"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="m-5 flex flex-row justify-center">
        <form className="card w-96 bg-base-100 shadow-xl gap-5 p-5" onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control">
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="text" placeholder="info@site.com" 
                    className={`input input-bordered ${errors.email?.message && "input-error"}`}  required {...register("email")} />
                </label>
                <p className="">{errors.email?.message?.toString()}</p>
            </div>

            <div className="form-control">
                <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input type="password" placeholder="Password..." 
                    className={`input input-bordered ${errors.password?.message && "input-error"}`} required {...register("password")} />
                </label>
                <p className="">{errors.password?.message?.toString()}</p>
            </div>

            <div className="flex justify-end">
                <input className="btn" type="submit" />
            </div>
        </form>
        </div>
    )
}