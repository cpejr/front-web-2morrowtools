/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as managerService from "../../services/ManagerService";
import {
  ContainerFilter,
  SearchBar,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
} from "./Styles";
import { useGlobalColor } from "../../stores/GlobalColor";

export default function FilterArea({
  onFilterClick,
  filterReset,
  idsArray,
  setArray,
  features,
  setFeatures,
  prices,
  setPrices,
  profession,
  setProfession,
  setFilter,
  filter,
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
    setFeatures([]);
    setPrices([]);
    setProfession([]);
    setArray([]);
    filterReset();
  };

  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };

  const filters = [
    { label: "Data", value: "date" },
    { label: "Nome", value: "name" },
    { label: "Avaliação", value: "avaliation" },
  ];
  const handleFilterChange = () => {
    const newArray = [...features, ...prices, ...profession];
    setArray(newArray);
  };
  useEffect(() => {
    handleFilterChange();
  }, [features, prices, profession]);

  return (
    <ContainerFilter>
      <DivSelect>
        <MultipleSelect
          value={features}
          onChange={(e) => setFeatures(e.value)}
          options={transformArrayItems(categoriesFeature)}
          optionLabel='label'
          placeholder='Escolha as características'
          display='chip'
          className='w-full md:w-20rem'
          filter
        />
        <MultipleSelect
          value={prices}
          onChange={(e) => setPrices(e.value)}
          options={transformArrayItems(categoriesPrices)}
          optionLabel='label'
          placeholder='Escolha os preços'
          display='chip'
          className='w-full md:w-20rem'
          filter
        />
        <MultipleSelect
          value={profession}
          onChange={(e) => setProfession(e.value)}
          options={transformArrayItems(categoriesProfession)}
          optionLabel='label'
          placeholder='Escolha as profissões'
          display='chip'
          className='w-full md:w-20rem'
          filter
        />
      </DivSelect>
      <ButtonsDiv>
        <Buttons onClick={() => onFilterClick(idsArray)}>Filtrar</Buttons>
        <Buttons onClick={handleClearFilters}>Limpar Filtros</Buttons>
      </ButtonsDiv>
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
      </SearchBar>
    </ContainerFilter>
  );
}

FilterArea.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  filterReset: PropTypes.func.isRequired,
  idsArray: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
  features: PropTypes.array.isRequired,
  setFeatures: PropTypes.func.isRequired,
  prices: PropTypes.array.isRequired,
  setPrices: PropTypes.func.isRequired,
  profession: PropTypes.array.isRequired,
  setProfession: PropTypes.func.isRequired,
};
