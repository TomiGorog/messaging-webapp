import { useForm } from "react-hook-form";


const form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)
    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <input {...register("firstName", { required: "This field is mandatory", minLength: { value: 2, message: "Minimum 2 characters" } })} placeholder="First Name" />
            {errors.firstName && <span>This field is required</span>}
            <input {...register("lastName", { required: "This field is mandatory", minLength: { value: 4, message: "Minimum 4 characters" } })} placeholder="Last Name" />
            <button type="submit">Send</button>
        </form>
    );
}

export default form