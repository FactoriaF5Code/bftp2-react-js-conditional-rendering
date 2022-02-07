import {Link} from "react-router-dom";


const CoderCard = ({coder}) => {
    return <div className="coderCard">
        <p>{coder.name}</p>
        <p className="techTag">{coder.tech}</p>
        <button>delete</button>
    </div>
}

export default CoderCard;