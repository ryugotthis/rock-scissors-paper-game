import React from 'react';

const Box = (props) => {
  console.log(props.item);
  console.log(props.item.img);

  let result;
  if (
    props.title === 'Computer' &&
    props.result !== 'Tie' &&
    props.result !== ''
  ) {
    result = props.result === 'Win' ? 'Lose' : 'Win';
  } else result = props.result;
  return (
    <div className={`box ${result}`}>
      <h1 className="title">{props.title}</h1>
      <img
        className="item-img"
        // src={props.item && props.item.img}
        src={
          props.item
            ? props.item.img
            : 'https://w1.pngwing.com/pngs/1014/982/png-transparent-adhesive-tape-postit-note-paper-borders-and-frames-paper-clip-sticker-yellow-material-thumbnail.png'
        }
        alt="사진"
      />
      {/* <img
        className="item-img"
        src={loading ? '로딩중' : props.item.img}
        alt="사진"
      /> */}
      <h2 className="result">{result}</h2>
    </div>
  );
};

export default Box;
