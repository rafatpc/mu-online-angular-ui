export type User = {
    memb_guid: number;
    memb___id: string;
    mail_addr: string;
    memb_name: string;
    sno__numb: string;
    bloc_code: string;
    ctl1_code: string;
    IsVip: number;
    VipExpirationTime: number;
};

export type LoginResponse = {
    user: User;
    token: JwtToken
}

export type JwtToken = string;
