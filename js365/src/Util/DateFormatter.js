export const LongMonths=["January","February","March","April","May","June","July","August","September","October","November","December"]
export const smallMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
export const getMonthDateYear=(date)=>{
    let dateObj=new Date(date);
    return `${LongMonths[dateObj.getMonth()]}, ${dateObj.getDate()} ${dateObj.getFullYear()}`
}