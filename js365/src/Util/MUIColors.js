export const DARK_COLORS=[
    {primary:"#e91e63",secondary:"#ffffff"},
    // {primary:"#311b92",secondary:"#ffffff"},
    {primary:"#303f9f",secondary:"#ffffff"},
    {primary:"#00796b",secondary:"#ffffff"},
    {primary:"#689f38",secondary:"#ffffff"},
    {primary:"#1a746b",secondary:"#ffffff"},
    {primary:"#7b1fa2",secondary:"#ffffff"},
    {primary:"#c2185b",secondary:"#ffffff"},
]

export const getRandomColor=()=>{
    return DARK_COLORS[Math.floor(Math.random() * DARK_COLORS.length)];
}