export const dateFormat = (date: string) =>{
    return new Date(date).toLocaleDateString()
}

export const dateFormatToResetInput = (date: string) =>{
     const dateToResetInput =  new Date(date)
     return dateToResetInput.toLocaleDateString('en-CA');
}