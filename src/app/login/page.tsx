import { Col, Row } from "antd";
import Image from "next/image";
import loginImage from "../../assets/Login-amico.svg";

const LoginPage = () => {
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
                
            </Col>
        </Row>
    );
};

export default LoginPage;