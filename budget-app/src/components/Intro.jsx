import { Form } from "react-router-dom";

// libraries
import { UserPlusIcon } from "@heroicons/react/24/solid";


const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className="accent">Your Money</span> 
                </h1>
                <p> Personal Budgeting </p>
                <Form method="post">
                    {/* when no action is defined, it will submit to the current page */}
                    <input 
                        type="text" 
                        name="userName" 
                        required 
                        placeholder="What is your name?"
                        aria-label="Your Name"
                        autoComplete="given-name"
                    />
                    <input type="hidden" name="_action" value="newUser"/>
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default Intro;