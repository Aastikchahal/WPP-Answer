const todaydate = new Date();

const christmasDate = new Date(todaydate.getFullYear(), 11, 25);

if(todaydate.getMonth() == 11 && todaydate.getDate() > 25) {
    christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}

const oneDay = 1000 * 60 * 60 * 24;

const difference = Math.ceil((christmasDate.getTime() - todaydate.getTime()) / (oneDay));

console.log(`${difference} days left before next christmas`);