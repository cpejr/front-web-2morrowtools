import {
  BlueCheckboxDiv,
  CheckboxDiv,
  Container,
  FilterArea,
  InputStyled,
  SearchBar,
  SearchBarInput,
  SelectStyled,
} from "./Styles";
import homeImage from "../../assets/home-image.png";
import { SearchOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { Card } from "../../components";

export default function Home() {
  const checkboxes = Array.from({ length: 16 }, (_, index) => <Checkbox>Categoria</Checkbox>);

  return (
    <Container>
      <img src={homeImage} />
      <h1>2MORROW TOOLS</h1>
      <h2>O maior acervo de ferramentas e Inteligências Artificiais do Brasil </h2>
      <InputStyled type='primary' prefix={<SearchOutlined />}></InputStyled>
      <FilterArea>
        <CheckboxDiv>{checkboxes}</CheckboxDiv>
        <BlueCheckboxDiv>
          <Checkbox>Lorem Ipsum</Checkbox>
          <Checkbox>Minhas Ferramentas</Checkbox>
          <Checkbox>Lorem Ipsum</Checkbox>
        </BlueCheckboxDiv>
        <SearchBar>
          <SelectStyled
            showSearch
            placeholder='Ordernar Por'
            optionFilterProp='children'
            options={[
              {
                value: "date",
                label: "Data",
              },
              {
                value: "nome",
                label: "Nome",
              },
              {
                value: "estrelas",
                label: "Estrelas",
              },
            ]}
          />
          <SearchBarInput placeholder='Lorem Impsum'></SearchBarInput>
        </SearchBar>
      </FilterArea>
    </Container>
  );
}
