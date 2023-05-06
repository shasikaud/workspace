// RRD
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helpers";

// libraries
import { toast } from "react-toastify";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "userName"
    });

    // can handle awaits/promises
    toast.success("Logout success!");

    //return redirect
    return redirect("/");
}