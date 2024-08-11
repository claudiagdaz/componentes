import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

function TablePage() { 
    const data = [
        {name: 'Orange', color:'bg-orange-500', score: 1},
        {name: 'Apple', color:'bg-red-500', score: 2},
        {name: 'Banana', color:'bg-yellow-500', score: 5},
        {name: 'Limon', color:'bg-green-500', score: 3},
    ];

    const config = [
        { 
            label: 'Fruit', 
            render: (data) => data.name,
            sortValue: (data) => data.name
        },
        { 
            label: 'Color', 
            render: (data) => <div className={`p-2 m-3 ${data.color}`}></div>  
        },
        { 
            label: 'Score', 
            render: (data) => data.score,
            sortValue: (data) => data.score,
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
    <div>
        <Table data={data} config={config} keyFn={keyFn}/>
        <SortableTable data={data} config={config} keyFn={keyFn}/>
    </div>
    )
}

export default TablePage;