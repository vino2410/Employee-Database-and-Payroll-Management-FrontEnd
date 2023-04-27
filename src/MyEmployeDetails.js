let details=[
    {
        "empId":1,
        "empName":"Vinod",
        "empUsername":"vino2410",
        "empPassword":"vino@1234",
        "empDesignation":"Java Developer",
        "empExp":"2",
        "empSalary":600000
    },
    {
        "empId":2,
        "empName":"Hari",
        "empUsername":"Hari4321",
        "empPassword":"Hari@1234",
        "empDesignation":"Java Developer",
        "empExp":"2",
        "empSalary":600000
    },{
        "empId":3,
        "empName":"Muhil",
        "empUsername":"Muhil4321",
        "empPassword":"Muhil@1234",
        "empDesignation":"Data Analyst",
        "empExp":"2",
        "empSalary":1000000
    }
]

export const create=(data)=>
{
    details.push(data)
}

export const list=()=>
{
  return  details;
}
export const read=(index)=>
{
    return details[index];
}
export const FetchExact=(Name)=>
{
    const temp=details.filter((element)=>
    {
        return element.empName===Name;
    })
    return temp[0];
}
export const alter=(data,place)=>
{
    details[place]=data;
}
export const remove=(index)=>
{
    details=details.filter((da,i)=>
    {
        return i!==index;
    })
    return details
}

