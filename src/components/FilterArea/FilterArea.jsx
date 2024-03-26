/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as managerService from "../../services/ManagerService";
import {
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
  ButtonsFilter,
  ShowTags,
  Tags,
} from "./Styles";

export default function FilterArea({
  onFilterClick,
  filterReset,
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
  const [showFilters, setShowFilters] = useState([]);
  let selectedItems = [...features, ...prices, ...profession];

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
    setFilter([]);
    filterReset();
    setShowFilters([]);
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
    Finder();
  };
  useEffect(() => {
    handleFilterChange();
    Finder();
  }, [features, prices, profession]);

  const Finder = () => {
    const filteredNames = [];
    [categoriesFeature, categoriesPrices, categoriesProfession].forEach((categoryArray) => {
      categoryArray.forEach((category) => {
        if (selectedItems.includes(category._id)) {
          filteredNames.push(category.name);
        }
      });
    });
    setShowFilters(filteredNames);
  };

  const SelectedTags = ({ selectedItems }) => (
    <ShowTags>
      {selectedItems.map((item) => (
        <Tags key={item.value}>{item}</Tags>
      ))}
    </ShowTags>
  );
  SelectedTags.propTypes = {
    selectedItems: PropTypes.array.isRequired,
  };

  return (
    <ContainerFilter>
      <DivSelect>
        <MultipleSelect
          value={features}
          onChange={(e) => setFeatures(e.value)}
          options={transformArrayItems(categoriesFeature)}
          optionLabel='label'
          placeholder='Escolha as características'
          className='w-full md:w-20rem'
          filter
        />
        <MultipleSelect
          value={prices}
          onChange={(e) => setPrices(e.value)}
          options={transformArrayItems(categoriesPrices)}
          optionLabel='label'
          placeholder='Escolha os preços'
          className='w-full md:w-20rem'
          filter
        />
        <MultipleSelect
          value={profession}
          onChange={(e) => setProfession(e.value)}
          options={transformArrayItems(categoriesProfession)}
          optionLabel='label'
          placeholder='Escolha as profissões'
          className='w-full md:w-20rem'
          filter
        />

        <UniSelect
          value={filter}
          onChange={(e) => setFilter(e.value)}
          options={filters}
          optionLabel='label'
          showClear
          placeholder='Ordenar Por'
          className='w-full md:w-14rem'
        ></UniSelect>
      </DivSelect>
      <SelectedTags selectedItems={showFilters} />
      <ButtonsDiv>
        <ButtonsFilter onClick={() => onFilterClick()}>Filtrar</ButtonsFilter>
        <Buttons onClick={handleClearFilters}>Limpar Filtros</Buttons>
      </ButtonsDiv>
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
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.array.isRequired,
};
