import React from 'react';
// import Style from '../../css/resultItem.css';

const ResultItem = props => {
  const {
    id,
    thumbnails,
    idx
  } = props;

  return (
    <div>
      {
        (()=> {
          const url = `https://www.youtube.com/watch?v=${id.videoId}`;

          return (
            <a href={url} target="_blank" key={idx}>
              <img src={ thumbnails.medium.url } width={thumbnails.medium.width} height={thumbnails.medium.height}/>
            </a>
          )
        })()
      }
    </div>
  )
};

export default ResultItem;
