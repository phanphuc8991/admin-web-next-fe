"use client";
import React from "react";
import { Button, Col, Divider, Form, Input, message, notification, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { sendRequest } from "@/utils/api";
import { useRouter } from "next/navigation";
const Verify = (props: any) => {
  const { id } = props;
  const router = useRouter();
  const onFinish = async (values: any) => {
    const { id, code } = values;
    const res: any = await sendRequest<IBackendRes<ILogin>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/check-code`,
      method: "POST",
      body: {
        _id: id,
        code,
      },
    });
    if (res?.data) {
      message.success("Active account successfull");
      router.push(`/auth/login`);
    } else {
      notification.error({
        message: <span>Verify Error</span>,
        description: <span>{res.message}</span>,
      });
    }
  };

  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend>Active Account</legend>
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Id"
              name="id"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              initialValue={id}
              hidden
            >
              <Input disabled />
            </Form.Item>

            <Form.Item
              label="Code"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div>Code sent to your email, please check your email</div>
            <Divider />
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Link href={"/"}>
            <ArrowLeftOutlined /> Quay lại trang chủ
          </Link>
          <Divider />
          <div style={{ textAlign: "center" }}>
            Đã có tài khoản? <Link href={"/auth/login"}>Đăng nhập</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};
export default Verify;
