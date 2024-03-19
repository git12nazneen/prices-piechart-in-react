import { LineChart as LChart, Line ,XAxis , YAxis} from 'recharts';
const Linechart = () => {


    const  mathStudents= [
        {id: 1, name: 'Alice', math_mark: 85, physics_mark: 78, chemistry_mark: 90},
        {id: 2, name: 'Bob', math_mark: 78, physics_mark: 85, chemistry_mark: 82},
        {id: 3, name: 'Charlie', math_mark: 92, physics_mark: 88, chemistry_mark: 94},
        {id: 4, name: 'David', math_mark: 64, physics_mark: 70, chemistry_mark: 68},
        {id: 5, name: 'Emma', math_mark: 79, physics_mark: 72, chemistry_mark: 85},
        {id: 6, name: 'Frank', math_mark: 88, physics_mark: 90, chemistry_mark: 87},
        {id: 7, name: 'Grace', math_mark: 91, physics_mark: 95, chemistry_mark: 92},
        {id: 8, name: 'Hannah', math_mark: 73, physics_mark: 65, chemistry_mark: 78},
        {id: 9, name: 'Ian', math_mark: 82, physics_mark: 79, chemistry_mark: 84},
        {id: 10, name: 'Jasmine', math_mark: 95, physics_mark: 92, chemistry_mark: 96}
      ];


    return (
        <div className='my-10'>
            <LChart width={600} height={400} data={mathStudents}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math_mark" stroke='red'></Line>
            <Line dataKey={'physics_mark'}></Line>
            </LChart>
            
        </div>
    );
};

export default Linechart;