"use client"

import { Button, Col, Row } from "antd";
import Image from "next/image";
import loginImage from "../../assets/Login-amico.svg";
import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import { SubmitHandler } from "react-hook-form";


type FormValues = {
    id: string;
    password: string;
};


const LoginPage = () => {

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        try {
        console.log(data);
        } catch (err) {}
    };

    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh",
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={loginImage} width={500} alt="login image" />
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1
                    style={{
                        margin: "15px 0px",
                    }}
                >
                    First login your account
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="id" type="text" size="large" label="User Id"/>
                        </div>
                        <div
                            style={{
                                margin: "15px 0px",
                            }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="User Password"
                            />
                        </div>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;