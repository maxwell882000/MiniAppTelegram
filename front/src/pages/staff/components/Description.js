export default function Description({person}) {
    return (
        <div>
            <h1 className="dark:text-white text-center text-bold ">{person.header} </h1>
            <p className="dark:text-white text-left text-wrap m-2 ">
                {person.body}
            </p>
        </div>
    );
}