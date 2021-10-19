import axios from "axios";
import { EActionType } from "../enums/ActionType";
import IMoveCardData from "../types/MovieCard";

const getAll = () => {
  return axios.get<IMoveCardData[]>(`/recommendations/movie-card.json`);
};

const rejectOrAcceptById = (
  id: string | undefined,
  actionType: EActionType
) => {
  return axios.put<EActionType[]>(`/recommendations/${id}/${actionType}`);
};

const MovieCardDataService = {
  getAll,
  rejectOrAcceptById,
};

export default MovieCardDataService;
