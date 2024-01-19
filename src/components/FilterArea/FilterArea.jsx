/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import * as managerService from "../../services/ManagerService";
import {
  ContainerFilter,
  SearchBar,
  InputStyled,
  SelectStyled,
  MultipleSelect,
  DivSelect,
  UniSelect,
} from "./Styles";
import { useGlobalColor } from "../../stores/GlobalColor";

export default function FilterArea({
  onFilterClick,
  filterReset,
  idsArray,
  setArray,
  filter,
  setFilter,
}) {
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

  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray.map((item) => ({
      value: item._id,
      label: item.name,
    }));
    return newArray;
  };

  const filters = [
    { label: "Data", value: "date" },
    { label: "Nome", value: "name" },
    { label: "Avaliação", value: "avaliation" },
  ];

  return (
    <ContainerFilter>
      <Button onClick={() => onFilterClick(idsArray)}>Filtrar</Button>
      <Button onClick={handleClearFilters}>Limpar Filtros</Button>

      <SearchBar>
        <UniSelect
          value={filter}
          onChange={(e) => setFilter(e.value)}
          options={filters}
          optionLabel='label'
          editable
          showClear
          placeholder='Ordenar Por'
          className='w-full md:w-14rem'
        ></UniSelect>
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
