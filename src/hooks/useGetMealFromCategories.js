import axios from "axios";
import { useQuery } from "react-query";

const fetchData = (category) => () => axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`);

export const useGetMealFromCategories = (category) => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["get-details-from-category", category],
    fetchData(category)
  );

  return { data, isLoading, isError, error, isFetching, refetch };
};

export default useGetMealFromCategories;
