import {Alert} from "flowbite-react";

export default function ResponseAction({showSuccess, date}) {
    return (
        <Alert

            className={showSuccess === 4 ? "opacity-0" : showSuccess === 3 ? 'alert-entering alert-entered' :
                showSuccess === 2 ? 'alert-exiting alert-exited' : 'hidden'}
            color="green">
                  <span>
                    <p>
                      <span className="font-medium">
                        Info alert!
                      </span>
                      Successfully, book meeting with doctor {date}
                    </p>
                  </span>
        </Alert>
    );
}