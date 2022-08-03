import { useLocation } from "react-router";
import { useQuery } from "react-query";
import styled from "styled-components";

// 롤 API 키는 발급 시 24시간 사용가능
const API_KEY = "RGAPI-63b794ed-8beb-4929-98cd-a617cbd791c8";

const SummonerName = styled.div`
    font-size: 66px;
`;

function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const Sname = searchParams.get("keyword");
    const { data, isLoading } = useQuery(["movies", "nowPlaying"], getSummonerId);
    console.log(data, isLoading);

    function getSummonerId() {
        return fetch(
            `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${Sname}?api_key=${API_KEY}`
        )
            .then((response) => response.json())
    }
    return (
        <>
            <SummonerName>{data?.name}</SummonerName>
        </>
    )

}
export default Search;