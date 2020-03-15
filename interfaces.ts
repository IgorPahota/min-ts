interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number,
        height: number
    }
}

const rect: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
};

rect.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect> {};

//Interface extends

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 40
    },
    getArea(): number {
    return this.size.width * this.size.height
    }
};

interface IClock {
    time: Date,
    setTime (date: Date): void
}

class Clock implements IClock{
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date
    }
}


//Key
interface ICss {
[key: string]: string
}

const css: ICss = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};