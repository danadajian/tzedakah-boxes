export interface StateProps {
    state: State;
    setState: (state: State) => void;
}

export interface State {
    selectedBoxNumbers: number[];
    boxesTaken: Box[];
    name?: string;
    paymentComplete: boolean;
}

export interface BoxesData {
    boxes: Box[];
    latestContributor: string;
    latestContribution: number;
}

export interface Box {
    name: string;
    number: number;
}
