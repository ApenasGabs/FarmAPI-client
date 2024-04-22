import { useCallback, useEffect, useState } from "react";
import { deleteData, fetchData, update } from "../../services/Services";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { message } from "antd";
export interface CategoriesProps {
  id: number;
  nome: string;
}

const Category = () => {
  const [categories, setCategories] = useState<CategoriesProps[]>(
    [] as CategoriesProps[]
  );

  const fetchThemes = useCallback(async () => {
    try {
      await fetchData({
        url: "/category/all",
        setData: setCategories,
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        message.error("Acesso nao autorizado");
      }
    }
  }, []);

  const saveCategory = useCallback(async () => {
    try {
      await update({
        url: "/category",
        setData: setCategories,
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        message.error("Acesso nao autorizado");
      }
    }
  }, []);

  const handleDeleteCategory = async (categoryId: number) => {
    try {
      await deleteData({
        url: `/category/${categoryId}`,
        setData: setCategories,
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        message.error("Acesso nao autorizado");
      }
    }
  };
  useEffect(() => {
    fetchThemes();
  }, [fetchThemes, categories.length]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {categories.length === 0 && (
        <span className="loading loading-ball loading-xs"></span>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                content={category.nome}
                title={"Theme"}
                onClickPrimaryButton={() => handleDeleteCategory(category.id)}
                onClickSecondaryButton={saveCategory}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
