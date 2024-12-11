import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

export const useFetch = () => {
  const accessKey = "orxVzY6K9OJJ7JcSEap0FrfhpSBo0mSjOgH_-MGbwq8";
  const url = "https://api.unsplash.com/search/photos";
  const { searchQuery, isClicked, setIsClicked } = useGlobalContext();

  const { data, isLoading, error } = useQuery(
    ["searchImages", searchQuery],
    async () => {
      try {
        const response = await axios.get(url, {
          params: {
            query: searchQuery,
            per_page: 16,
          },
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        });
        return response.data;
      } catch (err) {
        throw new Error("Failed to fetch images");
      }
    },
    {
      enabled: searchQuery.length > 0 && isClicked,
      onSuccess: () => {
        setIsClicked(false);
      },
    }
  );

  return { data, isLoading, error };
};
