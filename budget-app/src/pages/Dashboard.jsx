// RDR
import { useLoaderData } from "react-router-dom";

// helper functions
import { createBudget, fetchData, wait } from "../helpers";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// libraries
import { toast } from "react-toastify";

// loader
export function dashboardLoader() {
    console.log("dashboardLoader");
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets };
}

// action
// form submits to this page, this function, so form data is accessible via request param
export async function dashboardAction({ request }) {
    console.log("dashboardAction");
    await wait();
    const data = await request.formData();
    // const userName = data.get("userName");
    const { _action, ...values } = Object.fromEntries(data);

    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName));
            return toast.success(`Welcome ${values.userName}!`);
        } catch (e) {
            throw new Error("There was a problem creating your account!");
        }
    }

    if (_action === "createBudget") {
        try {
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            });
            return toast.success(`Budget created successfully`);
        } catch (e) {
            throw new Error("There was a problem creating your budget!");
        }
    }
}

const Dashboard = () => {
    const { userName, budgets } = useLoaderData();

    return (
        <div>
            <h4> {userName ? (
            <div className="dashboard">
                <h1>Welcome back,  
                    <span className="accent">
                        {userName}
                    </span>
                </h1>
                <div className="grid-sm">
                    {/* { budgets ? () : () } */}
                    <div className="grid-lg">
                        <div className="flex-lg">
                            <AddBudgetForm/>
                        </div>
                    </div>
                </div>
            </div>
            ) : <Intro/>} </h4>
        </div>
    )
}

export default Dashboard;