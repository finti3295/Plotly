export class  Serie{
    constructor(public  x?: any[],public  y?: any[], public type?: string, public  mode?: string,public  marker?:Marker,
        public name?:string, public  line?:any, public base?:any){
      
    };
 
}

export class Marker{
    constructor(size:number){}
}
export class Graph {
    constructor(
   public data?: Serie[],
    public layout?: Layout){}
}

export class Layout{
    constructor(
   public  title?: string,
   public  xaxis?: Xaxis,
   public    yaxis?: Xaxis,
   public    legend?: Legend,
   public barmode?: string,
   public height?: number,
   public  width?: number,
   public grid?: Grid){}
}

export class Grid{
    constructor(rows: number, columns: number){}
}
export class Xaxis{
    constructor(
        public  range?: any [],
        public  title?: string,
        public zeroline?: boolean,
        public  showgrid?: boolean,
        public tickangle?: number,
        public showline?: boolean){};
}


export class Legend{
    constructor(
        public  x?: number,
        public  y?: number,
        public yref?: string,
        public  font?: any,
        public bgcolor?: string, 
        public bordercolor?: string){}
}
