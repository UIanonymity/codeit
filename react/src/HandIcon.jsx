import rockIcon from './assets/rock.svg';
import paperIcon from './assets/paper.svg';
import scissorIcon from './assets/scissor.svg';

const IMAGES = {
  rock: rockIcon,
  scissor: scissorIcon,
  paper: paperIcon,
};


function HandIcon ({ value }) {
    const src = IMAGES[value];
    console.log(rockIcon, paperIcon, scissorIcon);
    return (
        <img src={src} alt={value} />
    );
}

export default HandIcon;
