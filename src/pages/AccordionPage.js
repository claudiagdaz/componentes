import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id:'lads34',
            label: "FAQ1",
            content: "Response 1 | Response 1 | Response 1 | Response 1 | Response 1"
        },
        {   
            id:'523lda',
            label: "FAQ2",
            content: "Response 2 | Response 2 | Response 2 | Response 2 | Response 2 |"
        },
        {
            id: 'alkds3',
            label: "FAQ3",
            content: " Response 3 | Response 3 | Response 3 | Response 3 | Response 3 |"
        },
    ]

    return <Accordion items={items} />
}

export default AccordionPage;