import { Button, Form, Input } from "antd";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormValue {
  identifier: string;
  password: string;
}

export function Component() {
  const navigate = useNavigate();

  const [pending, setPending] = useState(false);

  const handleSubmit = useCallback(
    async (values: LoginFormValue) => {
      try {
        setPending(true);
        // const response = await AuthService.login(values.identifier, values.password);
        // window.localStorage.setItem("access_token", response.accessToken);
        // window.localStorage.setItem("refresh_token", response.refreshToken);
        navigate("/");
      } finally {
        setPending(false);
      }
    },
    [navigate],
  );

  return (
    <div style={{ width: "320px" }}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="identifier" label="identifier" rules={[{ required: true }]}>
          <Input autoComplete="username" />
        </Form.Item>
        <Form.Item name="password" label="password" rules={[{ required: true }]}>
          <Input.Password autoComplete="current-password" />
        </Form.Item>
        <Form.Item>
          <Button block={true} type="primary" loading={pending} htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
