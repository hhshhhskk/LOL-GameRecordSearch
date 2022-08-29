import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getRecentRecord } from '../api';
import { summonerNameAtom } from "../atoms"
import { useQuery } from "react-query";

const RecentRecordDiv = styled.div`
    flex-direction: row;
    font-size: 30px;
    color: black;
`;

export function RecentRecord() {
    const summonerName = useRecoilValue(summonerNameAtom);
    const { data: summonerRecentData } = useQuery(["lol", "search"], () => getRecentRecord(summonerName),
        {
            enabled: !!summonerName,
        }
    );
    return (
        <RecentRecordDiv>
            {summonerRecentData?.[0].champion}
        </RecentRecordDiv>
    )
}