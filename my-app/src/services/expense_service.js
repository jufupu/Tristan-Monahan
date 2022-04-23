export function getExpenses(){
    return fetch('http://localhost:3000/expenses').then(data => data.json());
}

export function setExpense(item){
    return fetch('http://localhost:3000/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( item )
    }).then(data => data.json)
}

//update
export function updateExpense(id){
    return fetch('http://localhost:3000/expenses', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    }).then(data => data.json)
}

export function deleteExpense(id){
    return fetch('http://localhost:3000/expenses', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    }).then(data => data.json)
}