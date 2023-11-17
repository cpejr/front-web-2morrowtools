import { Checkbox } from "antd";
import {
  BlueCheckboxes,
  Checkboxes,
  ContainerFilter,
  SearchBar,
  InputStyled,
  SelectStyled,
  CheckboxItem,
} from "./Styles";

const checkboxes = [
  "categoria1",
  "categoria2",
  "categoria3",
  "categoria4",
  "categoria5",
  "categoria6",
  "categoria7",
  "categoria8",
  "categoria9",
  "categoria10",
  "categoria11",
  "categoria12",
  "categoria13",
  "categoria14",
  "categoria15",
  "categoria16",
];

export default function FilterArea() {
  return (
    <ContainerFilter>
      <Checkboxes>
        {checkboxes.map((checkbox) => (
          <CheckboxItem>
            <Checkbox key={checkbox}>{checkbox}</Checkbox>
          </CheckboxItem>
        ))}
      </Checkboxes>
      <BlueCheckboxes>
        <Checkbox>Lorem Ipsum</Checkbox>
        <Checkbox>Minhas Ferramentas</Checkbox>
        <Checkbox>Lorem Ipsum</Checkbox>
      </BlueCheckboxes>
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
        <InputStyled placeholder='Lorem Impsum'></InputStyled>
      </SearchBar>
    </ContainerFilter>
  );
}
