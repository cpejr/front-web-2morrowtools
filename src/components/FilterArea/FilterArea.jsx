/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Checkbox, Button } from "antd";
import * as managerService from "../../services/ManagerService";
import {
  BlueCheckboxes,
  ContainerFilter,
  SearchBar,
  InputStyled,
  SelectStyled,
  CheckboxItem,
} from "./Styles";
import { useGlobalColor } from "../../stores/GlobalColor";

export default function FilterArea({ onFilterClick, filterReset, idsArray, setArray }) {
  // Set variables
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const { globalColor } = useGlobalColor();

  useEffect(() => {
    const fetchData = async () => {
      const resultFeature = await managerService.usegetCategoriesFeature();
      setCategoriesFeature(resultFeature.categoriesFeature);

      const resultPrices = await managerService.usegetCategoriesPrices();
      setCategoriesPrices(resultPrices.categoriesPrices);

      const resultProfession = await managerService.usegetCategoriesProfession();
      setCategoriesProfession(resultProfession.categoriesprofession);
    };
    fetchData();
  }, []);

  const handleCategoryChange = (_id, stateUpdater) => {
    setArray((prevIdsArray) => {
      if (prevIdsArray.includes(_id)) {
        return prevIdsArray.filter((id) => id !== _id);
      } else {
        return [...prevIdsArray, _id];
      }
    });
    stateUpdater((prevState) =>
      prevState.map((category) =>
        category._id === _id ? { ...category, checked: !category.checked } : category
      )
    );
  };

  const handleClearFilters = () => {
    setCategoriesFeature((prevCategories) =>
      prevCategories.map((category) => ({ ...category, checked: false }))
    );
    setCategoriesPrices((prevCategories) =>
      prevCategories.map((category) => ({ ...category, checked: false }))
    );
    setCategoriesProfession((prevCategories) =>
      prevCategories.map((category) => ({ ...category, checked: false }))
    );
    setArray([]);
    filterReset();
  };

  return (
    <ContainerFilter>
      <BlueCheckboxes>
        Características:
        {categoriesFeature.map(({ _id, name, checked }) => (
          <CheckboxItem key={_id}>
            <Checkbox
              checked={checked}
              onChange={() => handleCategoryChange(_id, setCategoriesFeature)}
            >
              {name}
            </Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <BlueCheckboxes>
        Preços:
        {categoriesPrices.map(({ _id, name, checked }) => (
          <CheckboxItem key={_id}>
            <Checkbox
              checked={checked}
              onChange={() => handleCategoryChange(_id, setCategoriesPrices)}
            >
              {name}
            </Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <BlueCheckboxes>
        Profissões:
        {categoriesProfession.map(({ _id, name, checked }) => (
          <CheckboxItem key={_id}>
            <Checkbox
              checked={checked}
              onChange={() => handleCategoryChange(_id, setCategoriesProfession)}
            >
              {name}
            </Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <Button onClick={() => onFilterClick(idsArray)}>Filtrar</Button>
      <Button onClick={handleClearFilters}>Limpar Filtros</Button>
      <SearchBar>
        <SelectStyled
          showSearch
          dropdownStyle={{ backgroundColor: globalColor === "Dark" ? "#080B10" : "#F4EFF9" }}
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

FilterArea.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  filterReset: PropTypes.func.isRequired,
  idsArray: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
};
