import CoderCard from "./CoderCard";


const Content = ({coders}) => {
    return <main>
        <div className="coderList">
            {coders.map(coder => <CoderCard
                coder={coder}/>)}
        </div>
    </main>;
}
export default Content;