import { useState } from "react";
import {
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
} from "./Styles";

export default function FilterAreaBlog({ setSort }) {
  const [selectedSort, setSelectedSort] = useState();
  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };

  const sortTypes = [
    { name: "Data", label: "date" },
    { name: "Nome", label: "name" },
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
          options={sortTypes}
          optionLabel='label'
          editable
          showClear
          placeholder='Ordenar Por'
          className='w-full md:w-14rem'
          onSelect={(e) => console.log(e.target)}
          filter
        ></UniSelect>

        <UniSelect
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.value)}
          options={sortTypes}
          optionLabel='name'
          placeholder='Ordenar por'
          className='w-full md:w-14rem'
        />
      </DivSelect>
      <ButtonsDiv>
        <Buttons>Filtrar</Buttons>
        <Buttons>Limpar Filtros</Buttons>
      </ButtonsDiv>
    </ContainerFilter>
  );
}
