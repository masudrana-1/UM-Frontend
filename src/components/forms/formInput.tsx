"use client"

interface IInput {
    name: string;
    type?: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
}

const FormInput = () => {
    return (
        <div>
            
        </div>
    );
};

export default FormInput;