import { useEffect, useState } from "react";
import {
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
} from "./Styles";
import PropTypes from "prop-types";

export default function FilterAreaBlog({ filterChanger }) {
  const [selectedSort, setSelectedSort] = useState({ name: "data", label: "date" });

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
  const categorieFeature = [
    {
      _id: 1,
      name: "meio ambiente",
    },
    {
      _id: 2,
      name: "codigo",
    },
  ];

  const categorieProfession = [
    {
      _id: 1,
      name: "engenheiro",
    },
    {
      _id: 2,
      name: "arquiteto",
    },
    {
      _id: 3,
      name: "medico",
    },
  ];

  return (
    <ContainerFilter>
      <DivSelect>
        <MultipleSelect
          options={transformArrayItems(categorieFeature)}
          optionLabel='label'
          placeholder='Escolha as características'
          className='w-full md:w-20rem'
          filter
        />

        <MultipleSelect
          options={transformArrayItems(categorieProfession)}
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
      <ButtonsDiv>
        <Buttons>Limpar Filtros</Buttons>
      </ButtonsDiv>
    </ContainerFilter>
  );
}

FilterAreaBlog.propTypes = {
  filterChanger: PropTypes.func.isRequired,
};
