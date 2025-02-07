export const ShowTask =({ tasklist, changeStatus, removeTask})=>{

    return<>
    <table>
        <thead>
            <tr>
                <th> Tarea</th>
                <th>Estado </th>
                <th>*</th>
            </tr>
        </thead>
        <tbody>
            {tasklist.map((element,index)=>{
                 return <tr key={index}>
                    <td>{element.task}</td>
                    <td>{element.status ? "Completado" : "No completado"}</td>
                    <td>
                        <button onClick={() =>{changeStatus(index)}}>Completar</button>
                        <button onClick={()=>{removeTask(index)}}>Eliminar</button>
                    </td>
                </tr>
 
               
            })}
        </tbody>
    </table>
    </>
}
    