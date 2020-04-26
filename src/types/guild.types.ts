export type GuildMember = {
    Name: string;
    G_Name: string;
    G_Level: number;
};

export type GuildData = {
    G_Name: string;
    G_Master: string;
    G_Mark: string;
    G_Score: number;
    G_Type: number;
    G_Rival: number;
    G_Union: number;
    G_Members: GuildMember[];
}
