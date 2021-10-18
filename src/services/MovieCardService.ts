import { EActionType } from "../enums/ActionType";
import http from "../http-common";

const getAll = () => {
  return http.get(`/movie-card.json`);
};

const rejectOrAcceptById = (
  id: string | undefined,
  actionType: EActionType
) => {
  return http.put(`/recommendations/${id}/${actionType}`);
};

const MovieCardDataService = {
  getAll,
  rejectOrAcceptById,
};

export default MovieCardDataService;
