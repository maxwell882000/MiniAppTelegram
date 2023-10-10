import PersonCard from "../../componets/cards/PersonCard";
import {useEffect, useState} from "react";
import getPeople from "./data/getPeople";

export default function AllStaffs() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        getPeople().then(setPeople);
    }, [])

    function getPersonCards() {
        return people.map(e =>
            <div key={e.id} className="w-[48%] h-[18rem] my-2">
                <PersonCard imageUrl={e.imageUrl} altImage={e.alt} userId={e.id} title={e.header}/>
            </div>)
    }

    return (
        <div className="all_cards">
            <h1 className="dark:text-white text-center">MediStaff Book</h1>
            <div className="flex flex-wrap justify-evenly">
                {getPersonCards()}
            </div>
        </div>

    )
}