"use client"

import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, useFormContext, SubmitHandler } from "react-hook-form"

// default type 
type FormConfig = {
    defaultValues?: Record<string, any>;
};

// properties type 
type FormProps = {
    children?: ReactElement | ReactNode;
    submitHandler: SubmitHandler<any>;
} & FormConfig;


const Form = ({ children, submitHandler, defaultValues }: FormProps) => {

    const formConfig: FormConfig = {};

    // check defaultValues , if defaultValues is truthy then its work
    if (!!defaultValues) formConfig["defaultValues"] = defaultValues;


    const methods = useForm<FormProps>(formConfig);

    const { handleSubmit, reset } = methods;

    const onSubmit = (data: any) => {
        submitHandler(data);
        reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
};

export default Form;