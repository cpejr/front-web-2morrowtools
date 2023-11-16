import { Card } from "../../components";
import { Button, Input } from "antd";

export default function Home() {
  return (
    <div>
      <Card />
      <Button type='primary'>Aperte-me</Button>
      <Input placeholder='Teste'></Input>
    </div>
  );
}
