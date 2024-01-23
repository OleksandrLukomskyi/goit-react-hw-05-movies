
const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

const CastOne = ({ cast }) => {
  
  return (
    cast && (
      <li>
        <img
          src={cast.profile_path ? basePath + cast.profile_path : DEFAULT_IMG}
          alt="poster"
          style={{ width: '20%' }}
        />
        <p>{cast.name}</p>
        <h3>Character:{cast.character}</h3>
      </li>
    )
  );
};

export default CastOne;
