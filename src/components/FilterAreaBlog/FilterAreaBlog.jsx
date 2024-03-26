/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
  ShowTags,
  Tags,
} from "./Styles";
import PropTypes from "prop-types";
import { usegetCategoriesFeature, usegetCategoriesProfession } from "../../services/ManagerService";

export default function FilterAreaBlog({
  onFilterClick,
  onFilterReset,
  filterChanger,
  features,
  setFeatures,
  profession,
  setProfession,
  setArray,
}) {
  const [selectedSort, setSelectedSort] = useState({ name: "data", label: "date" });
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [showFilters, setShowFilters] = useState([]);
  let selectedItems = [...features, ...profession];

  useEffect(() => {
    const fetchData = async () => {
      const resultFeature = await usegetCategoriesFeature();
      setCategoriesFeature(resultFeature.categoriesFeature);

      const resultProfession = await usegetCategoriesProfession();
      setCategoriesProfession(resultProfession.categoriesprofession);
    };
    fetchData();
  }, []);

  const Finder = () => {
    const filteredNames = [];
    [categoriesFeature, categoriesProfession].forEach((categoryArray) => {
      categoryArray.forEach((category) => {
        if (selectedItems.includes(category._id)) {
          filteredNames.push(category.name);
        }
      });
    });
    setShowFilters(filteredNames);
  };
  const handleFilterChange = () => {
    setArray(selectedItems);
    Finder();
  };
  useEffect(() => {
    handleFilterChange();
    Finder();
  }, [features, profession]);

  useEffect(() => {
    filterChanger((prev) => {
      return { ...prev, sort: selectedSort.label };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSort]);

  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };

  const sortTypes = [
    { name: "data", label: "date" },
    { name: "nome", label: "name" },
  ];

  const SelectedTags = ({ selectedItems }) => (
    <ShowTags>
      {selectedItems.map((item, index) => (
        <Tags key={index}>{item}</Tags>
      ))}
    </ShowTags>
  );
  SelectedTags.propTypes = {
    selectedItems: PropTypes.array.isRequired,
  };

  function handleClearFilters() {
    setFeatures([]);
    setProfession([]);
    setArray([]);
    onFilterReset();
    setShowFilters([]);
  }

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
          value={profession}
          onChange={(e) => setProfession(e.value)}
          options={transformArrayItems(categoriesProfession)}
          optionLabel='label'
          placeholder='Escolha as profissões'
          className='w-full md:w-20rem'
          filter
        />

        <UniSelect
          onChange={(e) => setSelectedSort(e.value)}
          options={sortTypes}
          optionLabel='name'
          placeholder={`Ordenar por ${selectedSort.name}`}
          className='w-full md:w-14rem'
          filter
        />
      </DivSelect>
      <SelectedTags selectedItems={showFilters} />
      <ButtonsDiv>
        <Buttons onClick={onFilterClick}>Filtrar</Buttons>
        <Buttons onClick={handleClearFilters}>Limpar Filtros</Buttons>
      </ButtonsDiv>
    </ContainerFilter>
  );
}

FilterAreaBlog.propTypes = {
  filterChanger: PropTypes.func.isRequired,
  features: PropTypes.array.isRequired,
  setFeatures: PropTypes.func.isRequired,
  profession: PropTypes.array.isRequired,
  setProfession: PropTypes.func.isRequired,
  setArray: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onFilterReset: PropTypes.func.isRequired,
};
