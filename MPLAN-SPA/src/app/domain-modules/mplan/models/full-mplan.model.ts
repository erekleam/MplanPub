import { Dictionary } from "src/app/shared/models/dictionary.model";

export interface MplanFull{
    Header: MplanHeader,
    Details: MplanMestranDetails[],
    
}

export interface MplanHeader{
    StatementType: number;
    FileType: string;
    DateFrom: Date;
    LoadType: string;


    SenderCountry: string;
    SenderCountryText: string;
    SenderStation:string;
    SenderStationText: string;
    ReceiverCountry: string;
    ReceiverCountryText: string;
    ReceiverStation: string;
    ReceiverStationText: string;

    GzavnilisSaxeoba: string;
    TvirtiGNG: string;
    TvirtiGNGText: string;
    TvirtiWona: number;
    Nishani: string;
    VagonisSaxeoba: string;
    VagonisRaodenoba: string;
    KonteinerisZoma: string;
    KonteinerisRaodenoba: number;
    LoadSender: string;
    LoadSenderText: string;
    LoadReciever: string;
    LoadRecieverText: string;
    // PortLoadReciever: string;
    // PortLoadRecieverText: string;
    // Port: string;
    // PortText: string;
    FeedbackNote: string;
}

export interface MplanGetList{
    statementType: string;
    FileType: string;
    LoadType: string;
    SenderCountry: string;
    SenderStation: string;
    ReceiverCountry: string;
    ReceiverStation: string;
    TvirtiGNG: string;
    TvirtiWona: number;
    GzavnilisSaxeoba: string;
    DateFrom: Date;
}



export interface MplanMestranDetails{
    TransportingAdministrationCode: string;
    TransportingAdministration: string;
    ReceiverDockingCode: string;
    ReceiverDockingSpot: string;
    Code: string;
    Forwarder: string;
}




export class fileTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}


export class Data {
    pair: string;
    code: string;
    name: string;
    
}

export class transportingTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}

export class shipmentTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class signTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class vagonTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class containerSizesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}

export interface IMplanRouteStation{
    modify: boolean;
    id: number;
    headerid: number;
    ReceiverCountry: number;
    ReceiverStation: number;
    station: number;
    routeStation: number;
}