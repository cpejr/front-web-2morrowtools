import { useEffect, useState } from "react";
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

export default function FilterArea() {
  // Set variables
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    feature: [],
    prices: [],
    profession: [],
  });

  // Get functions
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

  const handleCategoryChange = (categoryType, categoryId) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [categoryType]: prev[categoryType].includes(categoryId)
        ? prev[categoryType].filter((id) => id !== categoryId)
        : [...prev[categoryType], categoryId],
    }));
  };

  const handleFilterClick = async () => {
    // Call your backend filter function with selected categories
    const filteredTools = await managerService.useFilterTools(selectedCategories);
    // Handle the filtered tools as needed
    console.log(filteredTools);
  };

  return (
    <ContainerFilter>
      <BlueCheckboxes>
        Características:
        {categoriesFeature.map(({ _id, name }) => (
          <CheckboxItem key={_id}>
            <Checkbox onChange={() => handleCategoryChange("feature", _id)}>{name}</Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <BlueCheckboxes>
        Preços:
        {categoriesPrices.map(({ _id, name }) => (
          <CheckboxItem key={_id}>
            <Checkbox onChange={() => handleCategoryChange("prices", _id)}>{name}</Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <BlueCheckboxes>
        Profissões:
        {categoriesProfession.map(({ _id, name }) => (
          <CheckboxItem key={_id}>
            <Checkbox onChange={() => handleCategoryChange("profession", _id)}>{name}</Checkbox>
          </CheckboxItem>
        ))}
      </BlueCheckboxes>
      <Button onClick={handleFilterClick}>Filtrar</Button>
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
