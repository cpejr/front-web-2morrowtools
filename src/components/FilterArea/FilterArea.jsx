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

export default function FilterArea({
  onFilterClick,
  setSelectedCategoryFeature,
  setSelectedCategoryPrice,
  setSelectedCategoryProfession,
}) {
  // Set variables
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [allAis, setAllAis] = useState([]);
  const [idsArray, setIdsArray] = useState([]);
  //  const [selectedCategories, setSelectedCategories] = useState({
  //     feature: [],
  //     prices: [],
  //     profession: [],
  //   });

  // Get functions
  useEffect(() => {
    const fetchData = async () => {
      const resultFeature = await managerService.usegetCategoriesFeature();
      setCategoriesFeature(resultFeature.categoriesFeature);

      const resultPrices = await managerService.usegetCategoriesPrices();
      setCategoriesPrices(resultPrices.categoriesPrices);

      const resultProfession = await managerService.usegetCategoriesProfession();
      setCategoriesProfession(resultProfession.categoriesprofession);
      console.log(resultFeature);
      console.log(resultPrices);
      console.log(resultProfession);
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
    GettingAIToolsDataByCategories();
  };

  const handleCategoryPriceChange = (_id) => {
    setIdsArray((prevIdsArray) => {
      if (prevIdsArray.includes(_id)) {
        return prevIdsArray.filter((id) => id !== _id);
      } else {
        return [...prevIdsArray, _id];
      }
    });
    GettingAIToolsDataByCategories();
  };

  const handleCategoryProfessionChange = (_id) => {
    setIdsArray((prevIdsArray) => {
      if (prevIdsArray.includes(_id)) {
        return prevIdsArray.filter((id) => id !== _id);
      } else {
        return [...prevIdsArray, _id];
      }
    });
    GettingAIToolsDataByCategories();
  };

  async function GettingAIToolsDataByCategories() {
    const idsString = idsArray.join(",");
    const aiTools = await managerService.useGetAIToolsByCategoryId(idsString);
    setAllAis(aiTools);
  }

  useEffect(() => {
    GettingAIToolsDataByCategories();
  }, [idsArray]);
  // const handleCategoryChange = (categoryType, categoryId) => {
  //   setSelectedCategories((prev) => ({
  //     ...prev,
  //     [categoryType]: prev[categoryType].includes(categoryId)
  //       ? prev[categoryType].filter((_id) => _id !== categoryId)
  //       : [...prev[categoryType], categoryId],
  //   }));
  // };

  // try {
  //   const filters = {
  //     feature: selectedCategories.feature.map((category) => category._id),
  //     prices: selectedCategories.prices.map((category) => category._id),
  //     profession: selectedCategories.profession.map((category) => category._id),
  //   };

  //   const { filteredTools } = await managerService.useFilterTools(filters);
  //   console.log(filteredTools);
  // } catch (error) {
  //   console.error("Error filtering tools:", error);
  // }
  // const handleFilterClick = async () => {
  //   console.log("ID feature:", selectedCategoryFeature);
  //   console.log("ID price:", selectedCategoryPrice);
  //   console.log("ID profession:", selectedCategoryProfession);
  //   try {
  //     const filteredCategoryFeature = await managerService.useReadByIdCategoriesFeature(
  //       selectedCategoryFeature
  //     );
  //     console.log(filteredCategoryFeature);
  //   } catch (error) {
  //     console.error("Error filtering tools:", error);
  //   }
  // };

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
      <Button onClick={onFilterClick}>Filtrar</Button>
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
  setSelectedCategoryFeature: PropTypes.func.isRequired,
  setSelectedCategoryPrice: PropTypes.func.isRequired,
  setSelectedCategoryProfession: PropTypes.func.isRequired,
};
