import {Tabs} from 'flowbite-react';

export default function Grouping({allTabItems}) {

    function Items() {
        return allTabItems.map((e, index) => {
                const Component = e.type;
                return <Tabs.Item key={index} title={e.title}>
                    <Component  person={e.person}></Component>
                </Tabs.Item>
            }
        )
    }

    return (
        <Tabs.Group
            aria-label="Tabs with icons"
            className="justify-evenly groups"
        >
            {Items()}
        </Tabs.Group>
    )
}


