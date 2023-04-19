import { useEffect } from "react";
import { useForm } from "react-hook-form";


const form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: ""
        }, mode: "onBlur"
    });
    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <input {...register("firstName", { required: "This field is mandatory", minLength: { value: 2, message: "Minimum 2 characters" } })} placeholder="First Name" />
            {errors.firstName && errors.firstName.type === "required" && <span>{errors.firstName.message}</span>}
            {errors.firstName && errors.firstName.type === "minLength" && (<span>{errors.firstName.message}</span>)}
            <input {...register("lastName", { required: "This field is mandatory", minLength: { value: 4, message: "Minimum 4 characters" } })} placeholder="Last Name" />
            <button type="submit">Send</button>
        </form>
    );
}

export default form