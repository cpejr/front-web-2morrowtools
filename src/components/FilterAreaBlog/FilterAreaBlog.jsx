import {
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
} from "./Styles";

export default function FilterAreaBlog() {
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
  const categorieTime = [
    {
      _id: 1,
      name: "5m-10m",
    },
    {
      _id: 2,
      name: "10m-30m",
    },
    {
      _id: 3,
      name: "30m-1h",
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
          options={transformArrayItems(categorieTime)}
          optionLabel='label'
          placeholder='Escolha o tempo de leitura'
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
          options={filters}
          optionLabel='label'
          editable
          showClear
          placeholder='Ordenar Por'
          className='w-full md:w-14rem'
        ></UniSelect>
      </DivSelect>
      <ButtonsDiv>
        <Buttons>Filtrar</Buttons>
        <Buttons>Limpar Filtros</Buttons>
      </ButtonsDiv>
    </ContainerFilter>
  );
}
