import {useNavigate} from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <div className="absolute z-10 mt-2">
            <button style={{all: null}} onClick={() => navigate(-1)}>
                <svg className="dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                     viewBox="0 0 24 24">
                    <path d="M14.3 18.3l-1.4 1.4L6.6 12l6.3-6.3 1.4 1.4L9.4 12z"/>
                </svg>
            </button>
        </div>
    );
}