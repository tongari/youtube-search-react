import React from 'react';
import Style from '../../css/resultArea.css';
import ResultItem from './ResultItem';
import {VelocityTransitionGroup} from 'velocity-react';

const ResultArea = props => {
  const {
    items
  } = props;


  return (
    <div className={ Style.box }>

      <ul className={Style.list}>
        <VelocityTransitionGroup
          runOnMount={true}
          enter={
           {
            animation: 'fadeIn',
            duration: 300,
            stagger: 100,
           }
          }
          leave={
            {
            animation: 'fadeOut',
            duration: 100,
            }
          }
        >
          {
            (()=>{
              return items.map( (item,idx)=>{

                  if( item.id.videoId ){
                    return(
                      <li className={Style.item} key={idx}>
                        <ResultItem id={item.id} idx={idx} thumbnails={item.snippet.thumbnails} />
                      </li>
                    )
                  }
                })
            })()
          }
          </VelocityTransitionGroup>
      </ul>
    </div>
  );
};

ResultArea.defaultProps = {
  items: []
};

ResultArea.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default ResultArea;
