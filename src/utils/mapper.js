export const mapper = data => {
  console.log(data);
  return data.map(({ poster_path, id, original_titel, vote_average }) => ({
    poster_path,
    id,
    original_titel,
    vote_average,
  }));
};
