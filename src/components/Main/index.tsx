import React, { FC, useCallback, useEffect, useState } from "react";
import { MainCards, MainContainer } from "./style";
import { Card } from "../Card";
import axios from "axios";
import { TMain } from "./type";
import { Button } from "UiKit/buttons/button";
import { errorHandler } from "utils/errorHandler/errorHandler";

export const Main: FC<TMain> = () => {
  const [images, setImages] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const [favorites, setFavorites] = useState<string[]>([]);
  console.log(page);

  const getImages = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos?page=${page}&per_page=6`,
        {
          headers: {
            Authorization:
              "Client-ID zrf440CRxe254phsJyWtgc920fytap4Jb5xNGmpTDBs",
          },
        }
      );
      if (data) {
        setImages(images.concat(data));
        setPage(page + 1);
      }
    } catch (error) {
      errorHandler(error);
    }
  }, [images, page]);

  const onAdd = (id: string) => () => {
    setFavorites((prevFavorits) => {
      if (prevFavorits.some((favoriteId) => favoriteId === id)) {
        return prevFavorits.filter((favoriteId) => favoriteId !== id);
      }
      return prevFavorits.concat([id]);
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <MainContainer>
      <MainCards>
        {images.map((image: any) => (
          <Card
            isLiked={favorites.some((favoriteId) => favoriteId === image.id)}
            onClick={onAdd(image.id)}
            key={image.id}
            image={image}
          />
        ))}
      </MainCards>
      <div>
        <Button
          onClick={() => {
            getImages();
          }}
        >
          Загрузить ещё
        </Button>
      </div>
    </MainContainer>
  );
};
