//without async await 
console.log('person1: shows ticket')
console.log('person2: shows ticket')
//we have to use then before calling async function because async function always return a promise
const preMovie = async()=> {      
    const wifeBringsTickets = new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
    })
    const getPopcorn = new Promise((resolve,reject)=>{resolve('popcorn')})
    const getButter = new Promise((resolve,reject)=>{resolve('butter')})
    const getColddrink = new Promise((resolve,reject)=>{resolve('colddrink')})
    let ticket = await wifeBringsTickets;
    //these console,log wont execute untill wifebrings ticket executes
    console.log(`wife: i have ${ticket}`)
    console.log('Husband: Lets Go In')
    console.log('Wife: I am Hungry I need Popcorn')
    
    let popcorn = await getPopcorn;
        //these console.log awaits for getpopcorn and wont execute untill getpopcorn exexutes
        console.log(`Husband: igot ${popcorn}`)
        console.log('Husband: Lets Go In')
        console.log('Wife: I need Butter On my PopCorn')

    let butter =await getButter;
    console.log(`Husband: igot ${butter}`)
    console.log(`Husband: anything else`)
    console.log('Wife: I need colddrink')

    let colddrink = await getColddrink;
    console.log(`husband : i got ${colddrink}`)
    console.log('husband: ab chupchap andr chal')

    return ticket;
}    
preMovie().then((m)=>{console.log(`person 3: shows ${m}`)})
console.log('person4: shows ticket')
console.log('person5: shows ticket')


