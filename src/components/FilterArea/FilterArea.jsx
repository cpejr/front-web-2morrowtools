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

export default function FilterArea({ onFilterClick, filterReset }) {
  // Set variables
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [allAis, setAllAis] = useState([]);
  const [idsArray, setIdsArray] = useState([]);
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

  const handleCategoryFeatureChange = (_id) => {
    setIdsArray((prevIdsArray) => {
      if (prevIdsArray.includes(_id)) {
        return prevIdsArray.filter((id) => id !== _id);
      } else {
        return [...prevIdsArray, _id];
      }
    });
  };

  const handleCategoryPriceChange = (_id) => {
    setIdsArray((prevIdsArray) => {
      if (prevIdsArray.includes(_id)) {
        return prevIdsArray.filter((id) => id !== _id);
      } else {
        return [...prevIdsArray, _id];
      }
    });
  };

  const handleCategoryProfessionChange = (_id) => {
    setIdsArray((prevIdsArray) => {
      if (prevIdsArray.includes(_id)) {
        return prevIdsArray.filter((id) => id !== _id);
      } else {
        return [...prevIdsArray, _id];
      }
    });
  };

  async function GettingAIToolsDataByCategories() {
    const idsString = idsArray.join(",");
    const allAis = await managerService.useGetAIToolsByCategoryId(idsString);
    setAllAis(allAis);
  }
  useEffect(() => {
    GettingAIToolsDataByCategories();
  }, [idsArray]);
  return (
    <ContainerFilter>
      <BlueCheckboxes>
        Características:
        {categoriesFeature.map(({ _id, name }) => (
          <CheckboxItem key={_id}>
            <Checkbox onChange={() => handleCategoryFeatureChange(_id)}>{name}</Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <BlueCheckboxes>
        Preços:
        {categoriesPrices.map(({ _id, name }) => (
          <CheckboxItem key={_id}>
            <Checkbox onChange={() => handleCategoryPriceChange(_id)}>{name}</Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <BlueCheckboxes>
        Profissões:
        {categoriesProfession.map(({ _id, name }) => (
          <CheckboxItem key={_id}>
            <Checkbox onChange={() => handleCategoryProfessionChange(_id)}>{name}</Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <Button onClick={() => onFilterClick(idsArray)}>Filtrar</Button>
      <Button onClick={() => filterReset()}>Limpar Filtros</Button>
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

FilterArea.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  filterReset: PropTypes.func.isRequired,
};
