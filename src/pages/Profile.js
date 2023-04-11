import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Profile() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        reset();
    };

    return (
        <div className="container main">
            <div>
                <Link to="/react_movie_app" className="text hover"><i className="material-icons hover tiny">arrow_back</i>Home page</Link>
            </div>
            <h3 className="text">Your Profile</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="text">
                First Name:
                <input className="validate" placeholder="Enter your first name..." type="text" {...register("firstName", {
                    required: "You need enter your first name",
                    minLength: {
                        value: 3,
                        message: "Too short first name",
                    }
                })} />
                </label>
                <div>
                    {errors?.firstName && <p className="error-text text">{errors?.firstName?.message || "Error!"}</p>}
                </div>
                <label className="text">
                Last Name:
                <input className="validate" placeholder="Enter your last name..." type="text" {...register("lastName", {
                    required: "You need enter your last name",
                    minLength: {
                        value: 5,
                        message: "Too short last name",
                    }
                })} />
                </label>
                <div>
                    {errors?.lastName && <p className="error-text text">{errors?.lastName?.message || "Error!"}</p>}
                </div>
                <label className="text">
                E-mail:
                <input className="validate" placeholder="Enter your e-mail..." type="email" {...register("email", {
                    required: "You need enter your e-mail",
                })} />
                </label>
                <div>
                    {errors?.email && <p className="error-text text">{errors?.email?.message || "Error!"}</p>}
                </div>
                <button className="submit-btn text" type="submit">Login</button>
            </form>
        </div>
    );
}

export { Profile };