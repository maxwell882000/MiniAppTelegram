import {Button, Carousel} from 'flowbite-react';
import './style/calendar.css';
import {useEffect, useState} from "react";
import "./style/alert_animation.css";
import OpenCalendar from "../../componets/pop_ups/OpenCalendar";
import ResponseAction from "./components/ResponseAction";
import BackButton from "../../componets/buttons/BackButton";
import Grouping from "../../componets/tabs/Grouping";
import Description from "./components/Description";
import Comments from "./components/Comments";
import {useParams} from "react-router-dom";
import getPerson from "./data/getPerson";


export default function Staff() {
    const [date, setDate] = useState(null);
    const [showSuccess, setShowSuccess] = useState(1);
    let {userId} = useParams();
    const [person, setPerson] = useState({});

    useEffect(() => {
        getPerson(userId).then(setPerson);
    }, [userId]);

    function carousels() {
        if (person.banners)
            return person.banners.map(e => <img key={e.id} className="h-56" alt={e.alt} src={e.imageUrl}/>)
    }

    return (
        <div className="space-y-2 min-h-screen">

            <div className="relative">
                <ResponseAction showSuccess={showSuccess} date={date}></ResponseAction>
                <BackButton></BackButton>
                <div className="h-56">
                    <Carousel leftControl=" "
                              indicators={false}
                              rightControl=" ">
                        {carousels()}
                    </Carousel>
                </div>
            </div>

            <Grouping allTabItems={[
                {title: "Description", type: Description, person: person},
                {title: "Comments", type: Comments, person: person}

            ]}>
            </Grouping>

            <div className="flex flex-row justify-between p-3">
                <OpenCalendar setDate={setDate}></OpenCalendar>
                <Button color="gray" onClick={() => {
                    setShowSuccess(2);
                    setTimeout(() => setShowSuccess(3), 1);
                    setTimeout(() => {
                            setShowSuccess(2);
                            setTimeout(() => setShowSuccess(1), 1000);
                        }
                        , 3000);
                }}>Submit</Button>
            </div>

        </div>

    )
}

