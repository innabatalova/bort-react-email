import * as React from "react"; 
import { Button, Html, Img } from "@react-email/components";

export default function Email() {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me test
      </Button>
      <Img src="/static/bort-logo.png" alt="Cat" width="300" height="300" />
    </Html>
  );
}
