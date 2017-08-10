export interface Card{
    id:string;
    name:string;
    imageUrl:string
};

export interface PlayerCard{
    playerId:string;
    cards:Card;
}

