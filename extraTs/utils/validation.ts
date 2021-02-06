import {validateEmail} from './helpers';

export default function validateUsers(userData):void {
    let valid:number = 0;
    let invalid:number= 0;
    userData.forEach(userData => {
        const { traineeEmail, reviewerEmail } = userData;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
           valid+=1;
        } else {
            invalid+=1;
        }
    });
    console.log("Number of valid user",valid);
    console.log("Number of Invalid user", invalid);
}
