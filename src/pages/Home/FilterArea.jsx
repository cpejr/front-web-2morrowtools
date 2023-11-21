import { Checkbox } from "antd";
import {
  BlueCheckboxes,
  CheckboxItem,
  Checkboxes,
  ContainerFilter,
  FilterInputStyled,
  SearchBar,
  SelectStyled,
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
          <CheckboxItem key={checkbox}>
            <Checkbox>{checkbox}</Checkbox>
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
        <FilterInputStyled placeholder='Lorem Impsum'></FilterInputStyled>
      </SearchBar>
    </ContainerFilter>
  );
}
