function sum(a: number, b: number ): number {
    return a + b
}

function toUpperCase (str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition{
    default: string
}


function pos(): MyPosition
function pos(a: number): MyPositionWithDefault
function pos(a: number, b:number): MyPosition

function pos(a?: number, b?:number) {
    if(!a && !b) {
        return {x:undefined, y:undefined}
    }
    if (a && !b) {
        return  {x: a, y: undefined, default: a.toString()}
    }
    return {x:a, y:b}
}

console.log('Empty', pos());
console.log('One', pos(42));
console.log('Two', pos(55,32));