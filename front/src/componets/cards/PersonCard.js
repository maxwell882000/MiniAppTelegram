import {Link} from "react-router-dom";

export default function PersonCard({imageUrl, title, altImage, userId}) {
    return (
        <Link data-testid="flowbite-card" to={"/staff/" + userId}
              className="h-full flex rounded-lg border-gray-200 bg-white shadow-md dark:bg-white bg-gray-800 flex-col hover:bg-gray-100 dark:hover:bg-gray-700">
            <img data-testid="flowbite-card-image" alt={altImage}
                 src={imageUrl} className="rounded-t-lg"/>
            <div className="h-full flex h-full flex-col justify-center gap-4 p-6">
                <h5 className="text-center text-sm text-md font-bold tracking-tight   dark:hover:text-gray-800 text-white dark:text-gray-900">
                    {title}
                </h5>
            </div>
        </Link>
    )
}


