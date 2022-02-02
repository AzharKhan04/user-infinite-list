let users : any[] = [];

const names = ["Azhar Khan","Sameer Khan","Rahul Dravid","Vijay Malhotra","Rajesh Khanna","Shahrukh Khan","Leena Lee","John Doe","Rupali Sinha","Samreen Khan","Dimo Erb","Eric Rest","Sachin Tendulkar","Maria Deny","Kyle King","Akshay Gupta"]


const generateName = () =>{

    return names[Math.floor(Math.random() * 10)];
}


for( let i = 0 ; i<200; i++ ) {

    users.push({
        id:i,
        email:'azharkhan.itech@gmail.com',
        name:generateName(),
        address:'Aurangabad'
    })
}

export default users