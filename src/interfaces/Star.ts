
export interface IHandleHover {
    type: number, 
    index: number
}

export interface IHandleClick {
    e: React.MouseEvent<HTMLDivElement, MouseEvent>, 
    index: number
}

export interface IStar {
    index: number,
    disabled?: boolean,
    isActive: boolean,
    handleHover: ({ type, index }: IHandleHover) => void,
    handleClick: ({ e, index }: IHandleClick) => void
}

export interface IStars {
    disabled?: boolean,
    movieId: number
}