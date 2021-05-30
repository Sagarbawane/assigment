
import axios from "../config/axios";
import Swal from "sweetalert2";

export const setUser = (user) => {
    return { type: "SET_USER", payload: user };
};
export const startRegisterUser = (formData, redirect) => {
    return (dispatch) => {
        axios
            .post("/user/register", formData)
            .then((response) => {
                if (response.data.hasOwnProperty("errors")) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: response.data.errors.message,
                    });
                } else {
                    Swal.fire({
                        title: "Are you sure?",

                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Register ",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(" Registration Done Successfully");
                            redirect();
                        } else {
                            Swal.fire("Cancelled");
                        }
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: { err },
                });
            });
    };
};
export const startLoginUser = (formData, redirect) => {
    return (dispatch) => {
        axios.post("/user/login", formData).then((response) => {
            if (response.data.hasOwnProperty("errors")) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.data.errors.message,
                });
            } else {
                Swal.fire({
                    title: "Are you sure?",

                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Login!",
                }).then(() => {


                    Swal.fire("You Successfully Login!");
                    redirect();
                }).catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: { error },
                    });
                })

            }
        });
    };
};


