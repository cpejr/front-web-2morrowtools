import { Button, Rate } from "antd";
import { StyledCard } from "./Style";

export default function Card() {
  return (
    <StyledCard>
      <img src={""} />
      <Rate style={{ color: "white" }} disabled defaultValue={2} />
      <span>(2)</span>
      <p>
        Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est
        mauris.
      </p>
      <div>tag</div>
      <div>tag</div>
      <div>tag</div>
      <Button>Botão</Button>
    </StyledCard>
  );
}
