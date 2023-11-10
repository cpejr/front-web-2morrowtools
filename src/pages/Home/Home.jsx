import { Card } from "../../components";
import { Container } from "./Styles";
import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <Card />
      <Button type='primary'>Aperte-me</Button>
    </div>
  );
}
